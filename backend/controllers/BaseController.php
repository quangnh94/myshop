<?php

namespace backend\controllers;

use common\components\extend\RootController;
use common\components\output\Response;
use Yii;
use yii\helpers\Url;

class BaseController extends RootController {

//    public function beforeAction($event) {
//        /* Đăng nhập rồi nhưng quay lại trang đăng nhập */
//        if ($event->controller->id == 'auth' && $event->id == 'login' && Yii::$app->user->getId() != null) {
//            return $this->redirect(Url::base());
//        }
//        /* Chưa đăng nhập nhưng lại vào trang khác */
//        if (!($event->controller->id == 'auth' && $event->id == 'login') && Yii::$app->user->getId() == null) {
//            return $this->redirect(Url::to(['auth/login']));
//        }
//
//        /* Bắt quyền có được cấp hay không */
//        if (!in_array($event->controller->id, ["error", "auth"]) && !Yii::$app->user->can($event->controller->id . "_" . $event->id)) {
//            print_r('Chú làm éo có quyền mà vào đây');
//            die;
//        }
//
//        return parent::beforeAction($event);
//    }

    public function response(Response $response, $define = 'json') {
        Yii::$app->response->format = $define;
        return $response;
    }

}
