<?php

namespace backend\controllers;

class AuthController extends BaseController {

    public function actionLogin() {
        $this->layout = 'auth';
        
        return $this->render('auth');
    }

}
