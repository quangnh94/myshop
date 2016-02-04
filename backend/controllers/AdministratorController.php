<?php

namespace backend\controllers;

use backend\models\AuthForm;
use common\models\database\Administrator;
use Yii;

class AdministratorController extends BaseController {

    public function actionIndex() {
        return $this->render('grid');
    }

}
