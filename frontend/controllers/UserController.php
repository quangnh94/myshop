<?php

namespace frontend\controllers;

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
        $this->layout = 'user';
        return $this->render('index');
    }

    public function actionChangepass() {
        $this->layout = 'user';
    }

    public function actionAddcard() {
        $this->layout = 'user';
    }

}
