<?php

use yii\widgets\ActiveForm;
?>
<div style="width: 650px; margin: auto; margin-top: 20px;">
    <div class="box box-success">
        <div class="box-header with-border">
            <h3 class="box-title">Sửa thông tin người dùng</h3>
        </div>
        <?php $form = ActiveForm::begin() ?>
        <div class="box-body">
            <?= $form->field($model, 'name')->textInput(['class' => 'form-control', 'placeholder' => 'Tiêu đề tin', 'disabled' => 'disabled']) ?>
            <?= $form->field($model, 'pwd')->passwordInput(['class' => 'form-control', 'placeholder' => 'Mật khẩu']) ?>
            <?= $form->field($model, 'sc')->textInput(['class' => 'form-control', 'placeholder' => 'Sc']) ?>
            <?= $form->field($model, 'gd')->textInput(['class' => 'form-control', 'placeholder' => 'Gd']) ?>
        </div><!-- /.box-body -->
        <div class="box-footer">
            <button type="submit" class="btn btn-success"><i class="fa fa-pencil-square-o"></i> Cập nhật</button>
            <button type="reset" class="btn btn-primary"><i class="fa fa-refresh"></i> Làm mới</button>
        </div>
        <?php ActiveForm::end() ?>
    </div><!-- /.box -->
</div>