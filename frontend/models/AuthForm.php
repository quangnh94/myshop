<?php

namespace frontend\models;

use yii\base\Model;

class AuthForm extends Model {

    public $account;
    public $password;

    public function rules() {
        return [
            [['account', 'password'], 'required', 'message' => '{attribute} không được để trống'],
            ['account', 'string'],
            [['password'], 'string']
        ];
    }

    public function attributeLabels() {
        return [
            'account' => 'Tài khoản',
            'password' => 'Mật khẩu',
        ];
    }

}
