<?php

namespace backend\controllers;

use backend\models\AuthForm;
use common\models\database\Administrator;
use Yii;

class AuthController extends BaseController {

    public function actionLogin() {
        if (!Yii::$app->user->isGuest) {
            return $this->redirect($this->baseUrl . 'home', 302);
        }
        $this->layout = 'auth';
        $model = new AuthForm();
        if ($model->load(Yii::$app->request->post())) {
            $identity = Administrator::findOne(['id' => $model->email, 'password' => md5($model->password)]);
            if (!empty($identity)) {
                Yii::$app->user->login($identity);
                return $this->redirect($this->baseUrl . 'home', 302);
            }
        }
        return $this->render('auth', [
                    'model' => $model
        ]);
    }

}
