<?php

namespace backend\controllers;

use common\components\utils\TextUtils;
use yii\web\Controller;

class BaseController extends Controller {

    public $staticClient;
    public $baseUrl;
    public $var;

    public function init() {
        parent::init();
        $this->baseUrl = TextUtils::getBaseUrl();
    }

    public function beforeAction($action) {
        return parent::beforeAction($action);
    }

}
