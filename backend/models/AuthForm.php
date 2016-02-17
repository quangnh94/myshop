<?php

namespace backend\models;

use yii\base\Model;

class AuthForm extends Model {

    public $email;
    public $password;

    public function rules() {
        return [
            [['email', 'password'], 'required', 'message' => '{attribute} không được để trống'],
            ['email', 'string'],
            [['password'], 'string']
        ];
    }

    public function attributeLabels() {
        return [
            'email' => 'Tài khoản',
            'password' => 'Mật khẩu',
        ];
    }

}
