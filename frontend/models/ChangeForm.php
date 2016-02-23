<?php

namespace frontend\models;

use yii\base\Model;

class ChangeForm extends Model {

    public $password;
    public $repassword;
    public $captcha;

    public function rules() {
        return [
            [['password', 'repassword', 'captcha'], 'required', 'message' => '{attribute} không được để trống'],
            [['password', 'repassword'], 'string', 'length' => [6, 12]],
            [['repassword'], 'compare', 'compareAttribute' => 'password', 'message' => 'Nhập lại mật khẩu không chính xác'],
//            [['pwd2'], 'compare', 'compareAttribute' => 'password', 'operator' => '!==', 'message' => 'Mật khẩu cấp 2 và mật khẩu cấp 1 không được trùng'],
//            [['repwd2'], 'compare', 'compareAttribute' => 'pwd2', 'message' => 'Nhập lại mật khẩu cấp 2 không chính xác'],
            [['captcha'], 'captcha', 'captchaAction' => 'user/captcha']
        ];
    }

    public function attributeLabels() {
        return [
            'password' => 'Mật khẩu mới',
            'repassword' => 'Nhập lại mật khẩu mới',
        ];
    }

    public function is8NumbersOnly($attribute) {
        if (!preg_match('/^[0-9]{6,12}$/', $this->$attribute)) {
            $this->addError($attribute, 'số mã vòng của bạn phải từ 6 - 12 ký tự');
        }
    }

}
