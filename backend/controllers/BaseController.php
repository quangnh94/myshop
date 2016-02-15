<?php

namespace backend\controllers;

use common\components\extend\RootController;
use common\components\output\Response;
use Yii;

class BaseController extends RootController {

    public function beforeAction($action) {
        return parent::beforeAction($action);
    }

    public function response(Response $response, $define = 'json') {
        Yii::$app->response->format = $define;
        return $response;
    }

}
