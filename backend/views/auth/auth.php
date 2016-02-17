<?php

use yii\widgets\ActiveForm;
?>
<div class="login-box">
    <div class="login-logo">
        <a href="../../index2.html"><b>Admin</b>LTE</a>
    </div>
    <div class="login-box-body">
        <p class="login-box-msg">Sign in to start your session</p>
        <?php
        $form = ActiveForm::begin()
        ?>
        <div class="has-feedback">
            <?= $form->field($model, 'email')->textInput(['placeholder' => 'Tài khoản'])->label(false) ?>
            <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
        </div>
        <div class="has-feedback">
            <?= $form->field($model, 'password')->passwordInput(['placeholder' => 'Mật khẩu'])->label(false) ?>
            <span class="glyphicon glyphicon-lock form-control-feedback"></span>
        </div>
        <div class="row">
            <div class="col-xs-8">
                <div class="checkbox icheck">
                    <!--                        <label>
                                                <input type="checkbox"> Remember Me
                                            </label>-->
                </div>
            </div>
            <div class="col-xs-4">
                <button type="submit" class="btn btn-primary btn-block btn-flat">Sign In</button>
            </div>
        </div>
        <?php ActiveForm::end(); ?>
        <div class="social-auth-links text-center">
            <p>- OR -</p>
            <a href="#" class="btn btn-block btn-social btn-facebook btn-flat"><i class="fa fa-facebook"></i> Sign in using Facebook</a>
            <a href="#" class="btn btn-block btn-social btn-google btn-flat"><i class="fa fa-google"></i> Sign in using Google+</a>
        </div>
        <a href="#">I forgot my password</a><br>
        <a href="register.html" class="text-center">Register a new membership</a>
    </div>
</div>