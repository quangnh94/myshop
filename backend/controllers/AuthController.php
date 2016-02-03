<?php

namespace backend\controllers;

use backend\models\AuthForm;

class AuthController extends BaseController {

    public function actionLogin() {
        $this->layout = 'auth';
        $model = new AuthForm();
        if ($model->load(\Yii::$app->request->post())) {
            print_r('xxx');
            die;
        }
        return $this->render('auth', [
                    'model' => $model
        ]);
    }

}
