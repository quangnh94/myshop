<?php

namespace common\components\extend;

use common\components\utils\TextUtils;
use yii\web\Controller;

class RootController extends Controller {

    public $staticClient;
    public $baseUrl;
    public $var;
    public $timeZone;

    public function init() {
        parent::init();
        $this->baseUrl = TextUtils::getBaseUrl();
        $this->timeZone = '';
    }

    public function beforeAction($action) {
        return parent::beforeAction($action);
    }

}
