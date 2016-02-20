<?php

namespace frontend\models;

use yii\base\Model;

class RegisterForm extends Model {

    public $account;
    public $password;
    public $sc;
    public $repassword;
    public $email;
    public $pwd2;
    public $repwd2;

    public function rules() {
        return [
            [['account', 'password', 'repassword', 'email', 'pwd2', 'repwd2', 'sc'], 'required', 'message' => '{attribute} không được để trống'],
            ['account', 'string'],
            [['password', 'repassword', 'pwd2', 'repwd2'], 'string'],
            [['sc'], 'integer', 'min' => 6, 'max' => 12],
//            [['password', 'compare', 'compareAttribute' => 'repassword', 'message' => 'Nhập lại mật khẩu không chính xác']],
//            [['pwd2', 'compare', 'compareAttribute' => 'repwd2', 'message' => 'Nhập lại mật khẩu cấp 2 không chính xác']],
        ];
    }

    public function attributeLabels() {
        return [
            'account' => 'Tài khoản',
            'password' => 'Mật khẩu',
            'sc' => 'Mã vòng',
            'repassword' => 'Nhập lại mật khẩu',
            'email' => 'Email',
            'pwd2' => 'Mật khẩu cấp 2',
            'repwd2' => 'Nhập lại mật khẩu cấp 2'
        ];
    }

}
