<?php

namespace common\components\extend;

use common\components\utils\TextUtils;
use common\models\database\AuthAssignment;
use Yii;
use yii\web\Controller;

class RootController extends Controller {

    public $staticClient;
    public $baseUrl;
    public $var;
    public $timeZone;

    public function init() {
        parent::init();
        $this->baseUrl = TextUtils::getBaseUrl();
        $this->timeZone = 'Asia/Ho_Chi_Minh';
        Yii::$app->language = 'vi-VN';

        $assignments = Yii::$app->session->get("assignments");
        if (empty($assignments)) {
            $assignments = AuthAssignment::findAll(['user_id' => Yii::$app->user->getId()]);
            Yii::$app->session->set('assignments', $assignments);
        }
        $this->var['assignments'] = $assignments;
    }

    public function beforeAction($action) {
        return parent::beforeAction($action);
    }

}
