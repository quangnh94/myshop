<?php

use yii\bootstrap\Html;
use yii\captcha\Captcha;
use yii\widgets\ActiveForm;
?>
<div id="wrapper">
    <!--<form name="login-form" class="login-form" action="" method="post">-->
    <?php
    $form = ActiveForm::begin(['options' => ['class' => 'login-form']])
    ?>
    <div class="header">
        <h1>Đăng ký tài khoản</h1>
    </div>

    <div class="content" style="width: 450px;">
        <?php if (!empty(Yii::$app->session->has('error'))) { ?>
            <div class="alert alert-danger" role="alert"><?= Yii::$app->session->getFlash('error') ?></div>
        <?php } ?>

        <div></div>
        <?= $form->field($model, 'account')->textInput(['placeholder' => 'Tài khoản', 'class' => 'form-control']) ?>
        <?= $form->field($model, 'password')->passwordInput(['placeholder' => 'Mật khẩu', 'class' => 'form-control']) ?>
        <?= $form->field($model, 'repassword')->passwordInput(['placeholder' => 'Nhập lại mật khẩu', 'class' => 'form-control']) ?>
        <?= $form->field($model, 'email')->textInput(['placeholder' => 'Email', 'class' => 'form-control']) ?>
        <?= $form->field($model, 'pwd2')->passwordInput(['placeholder' => 'Mật khẩu cấp 2', 'class' => 'form-control']) ?>
        <?= $form->field($model, 'repwd2')->passwordInput(['placeholder' => 'Nhập lại mật khẩu cấp 2', 'class' => 'form-control']) ?>
        <?= $form->field($model, 'sc')->passwordInput(['placeholder' => 'Mã vòng bảo mật', 'class' => 'form-control']) ?>
        <?=
        $form->field($model, 'captcha')->widget(Captcha::className(), [
            'captchaAction' => 'auth/captcha',
        ]);
        ?>
    </div>
    <div class="footer">
<!--        <input type="submit" name="submit" value="Đăng ký" class="btn btn-success" />-->
        <?= Html::submitButton('Đăng ký', ['class' => 'btn btn-success']) ?>
        <input type="reset" name="reset" value="Làm mới" class="btn btn-primary" />
    </div>
    <!--</form> -->
    <?php ActiveForm::end();
    ?>
</div>