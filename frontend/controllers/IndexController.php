<?php

namespace frontend\controllers;

use common\models\database\TAccount;
use yii\data\ActiveDataProvider;

class IndexController extends BaseController {

    public function actionIndex() {
//        print_r(\Yii::$app->user->getIdentity()); die;
        return $this->render('index');
    }

}
