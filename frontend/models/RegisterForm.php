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
    public $captcha;

    public function rules() {
        return [
            [['account', 'password', 'repassword', 'email', 'pwd2', 'repwd2', 'sc', 'captcha'], 'required', 'message' => '{attribute} không được để trống'],
            ['account', 'string', 'length' => [6, 12]],
            [['password', 'repassword', 'pwd2', 'repwd2'], 'string', 'length' => [6, 12]],
            [['sc'], 'number', 'integerOnly' => true, 'min' => 6],
            [['email'], 'email'],
            [['repassword'], 'compare', 'compareAttribute' => 'password', 'message' => 'Nhập lại mật khẩu không chính xác'],
            [['pwd2'], 'compare', 'compareAttribute' => 'password', 'operator' => '!==', 'message' => 'Mật khẩu cấp 2 và mật khẩu cấp 1 không được trùng'],
            [['repwd2'], 'compare', 'compareAttribute' => 'pwd2', 'message' => 'Nhập lại mật khẩu cấp 2 không chính xác'],
            [['captcha'], 'captcha', 'captchaAction' => 'auth/captcha']
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

    public function is8NumbersOnly($attribute) {
        if (!preg_match('/^[0-9]{6,12}$/', $this->$attribute)) {
            $this->addError($attribute, 'số mã vòng của bạn phải từ 6 - 12 ký tự');
        }
    }

}
