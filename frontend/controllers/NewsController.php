<?php

namespace frontend\controllers;

use common\models\database\TAccount;
use yii\data\ActiveDataProvider;

class NewsController extends BaseController {

    public function actionIndex() {
        return $this->render('index');
    }

}
