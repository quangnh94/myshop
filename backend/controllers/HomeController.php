<?php

namespace backend\controllers;

use backend\models\AuthForm;
use common\models\database\Administrator;
use Yii;

class HomeController extends BaseController {

    public function actionIndex() {
        return $this->render('index');
    }

}
