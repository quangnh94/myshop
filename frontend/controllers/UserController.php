<?php

namespace frontend\controllers;

use common\models\database\TAccount;
use frontend\models\ChangeForm;
use Yii;

class UserController extends BaseController {

    public function actions() {
        return [
            'captcha' => [
                'class' => 'yii\captcha\CaptchaAction',
                'fixedVerifyCode' => null,
            ],
        ];
    }

    public function actionIndex() {
        return $this->render('index');
    }

    public function actionChangepass() {
        $model = new ChangeForm();
        if ($model->load(Yii::$app->request->post())) {
            $user = TAccount::findOne(\Yii::$app->user->getId());
            $user->pwd = md5($model->password);
            $save = $user->save(false);
            if ($save) {
                \Yii::$app->session->setFlash('success', 'Thay đổi mật khẩu thành công');
            }
            return $this->refresh();
        }
        return $this->render('changepass', [
                    'model' => $model
        ]);
    }

    public function actionAddcard() {
        
    }

}
