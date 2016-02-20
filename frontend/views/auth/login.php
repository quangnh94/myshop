<?php

use yii\widgets\ActiveForm;
?>
<div id="wrapper">
    <!--<form name="login-form" class="login-form" action="" method="post">-->
    <?php
    $form = ActiveForm::begin(['options' => ['class' => 'login-form']])
    ?>
    <div class="header">
        <h1>Đăng nhập hệ thống</h1>
    </div>

    <div class="content" style="width: 450px;">
        <?= $form->field($model, 'account')->textInput(['placeholder' => 'Tài khoản', 'class' => 'form-control']) ?>
        <?= $form->field($model, 'password')->passwordInput(['placeholder' => 'Mật khẩu', 'class' => 'form-control']) ?>
    </div>

    <div class="footer">
        <input type="submit" name="submit" value="Đăng nhập" class="button" />
        <input type="submit" name="submit" value="Đăng ký" class="register" />
    </div>
    <!--</form>-->
    <?php ActiveForm::end(); ?>
</div>