<?php

namespace frontend\controllers;

use common\components\extend\RootController;
use common\components\output\Response;
use Yii;
use yii\helpers\Url;

class BaseController extends RootController {

    public function beforeAction($event) {
        /* Đăng nhập rồi nhưng quay lại trang đăng nhập */
        if ($event->controller->id == 'auth' && $event->id == 'login' && Yii::$app->user->getId() != null) {
            return $this->redirect(Url::base('http') . '/index');
        }

        /* Đăng nhập rồi nhưng quay lại trang đăng ký */
        if ($event->controller->id == 'auth' && $event->id == 'register' && Yii::$app->user->getId() != null) {
            return $this->redirect(Url::base('http') . '/index');
        }

        /* Chưa đăng nhập nhưng lại vào trang khác */
        if (($event->controller->id != 'auth') && $event->controller->id != 'index' && Yii::$app->user->getId() == null) {
            return $this->redirect(Url::to(['auth/login']));
        }

        return parent::beforeAction($event);
    }

    public function response(Response $response, $define = 'json') {
        Yii::$app->response->format = $define;
        return $response;
    }

}
