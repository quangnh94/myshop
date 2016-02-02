<?php

namespace common\components\output;

use yii\helpers\Json;

/**
 * @auth: thanhbc
 * Respon data
 */
class Response {

    public $success = false;
    public $message = null;
    public $data = null;

    public function __construct($success = false, $message = null, $data = null) {
        $this->success = $success;
        $this->message = $message;
        $this->data = $data;
    }

    public function __toString() {
        return Json::encode(["success" => $this->success, "message" => $this->message, "data" => $this->data]);
    }

}
