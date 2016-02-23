<?php

use yii\captcha\Captcha;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\widgets\ActiveForm;
?>
<div class="content-data">
    <div class="left_data" style="width: 280px; float: left;">
        <div class="">
            <ul class="nav nav-pills nav-stacked">
                <li role="presentation"><a href="<?= Url::base('http') . '/thong-tin-tai-khoan.html' ?>">Thông tin tài khoản</a></li>
                <li role="presentation" class="active"><a href="<?= Url::base('http') . '/thong-tin-tai-khoan.html' ?>">Đổi mật khẩu</a></li>
                <li role="presentation"><a href="#">Nạp thẻ</a></li>
                <li role="presentation"><a href="<?= Url::base('http') . '/dang-xuat.html' ?>">Đăng xuất</a></li>
            </ul>
        </div>
    </div>
    <div class="right_data" style="float: right; width: 660px; margin-top: 20px;">
        <?php
        $form = ActiveForm::begin(['options' => ['class' => 'login-form']])
        ?>
        <div class="header">
            <h1>Thay đổi mật khẩu</h1>
        </div>

        <div class="content" style="width: 450px;">
            <?php if (!empty(Yii::$app->session->has('success'))) { ?>
                <div class="alert alert-success" role="alert"><?= Yii::$app->session->getFlash('success') ?></div>
            <?php } ?>
            <?= $form->field($model, 'password')->passwordInput(['placeholder' => 'Mật khẩu', 'class' => 'form-control']) ?>
            <?= $form->field($model, 'repassword')->passwordInput(['placeholder' => 'Nhập lại mật khẩu', 'class' => 'form-control']) ?>
            <?=
            $form->field($model, 'captcha')->widget(Captcha::className(), [
                'captchaAction' => 'user/captcha',
            ]);
            ?>
        </div>

        <div class="footer">
            <?= Html::submitButton('Đồng ý', ['class' => 'btn btn-success']) ?>
            <input type="reset" name="reset" value="Làm mới" class="btn btn-primary" />
        </div>
        <!--</form>-->
        <?php ActiveForm::end(); ?>
    </div>
    <div style="clear: both"></div>
</div>