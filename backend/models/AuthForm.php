<?php

namespace backend\models;

use yii\base\Model;

class AuthForm extends Model {

    public $email;
    public $password;

    public function rules() {
        return [
            [['email', 'password'], 'required'],
            ['email', 'email'],
            [['password'], 'string']
        ];
    }

    public function attributeLabels() {
        return [
            'email' => 'Email',
            'password' => 'Mật khẩu',
        ];
    }

}
