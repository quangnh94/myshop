<?php

namespace frontend\controllers;

use common\models\database\TAccount;
use frontend\models\AuthForm;
use frontend\models\RegisterForm;
use Yii;

class AuthController extends BaseController {

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
        
    }

    public function actionRegister() {
        $model = new RegisterForm();
        if ($model->load(\Yii::$app->request->post())) {
            
        }
        return $this->render('register', [
                    'model' => $model
        ]);
    }

}
