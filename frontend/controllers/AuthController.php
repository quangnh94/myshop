<?php

namespace frontend\controllers;

use common\models\database\TAccount;
use frontend\models\AuthForm;
use frontend\models\RegisterForm;
use Yii;

class AuthController extends BaseController {

    public function actions() {
        return [
            'captcha' => [
                'class' => 'yii\captcha\CaptchaAction',
                'fixedVerifyCode' => null,
            ],
        ];
    }

    public function actionLogin() {
        if (!Yii::$app->user->isGuest) {
            return $this->redirect($this->baseUrl . 'index', 302);
        }
        $model = new AuthForm();
        if ($model->load(\Yii::$app->request->post())) {
            $identity = TAccount::findOne(['name' => $model->account, 'pwd' => md5($model->password)]);
            if (!empty($identity)) {
                Yii::$app->user->login($identity);
                return $this->redirect($this->baseUrl . 'index', 302);
            }
        }
        return $this->render('login', [
                    'model' => $model
        ]);
    }

    public function actionLogout() {
        Yii::$app->user->logout();
        return $this->redirect('trang-chu.html');
    }

    public function actionRegister() {
        $model = new RegisterForm();
        if ($model->load(\Yii::$app->request->post())) {
            $data = new TAccount();
            $data->name = $model->account;
            $data->email = $model->email;
            $data->sc = md5($model->sc);
            $data->pwd = md5($model->password);
            $data->pw2 = md5($model->pwd2);

            if ($data->save()) {
                Yii::$app->session->setFlash('success', 'Tạo tài khoản thành công');
                return $this->redirect('dang-nhap.html');
            } else {
                $error = '';
                foreach ($data->errors as $val) {
                    foreach ($val as $value) {
                        $error .= $value . '<br/>';
                    }
                }

                Yii::$app->session->setFlash('error', $error);
            }
        }
        return $this->render('register', [
                    'model' => $model
        ]);
    }

}
