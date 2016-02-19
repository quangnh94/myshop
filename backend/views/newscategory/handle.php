<?php

use yii\widgets\ActiveForm;
?>
<div style="width: 600px; margin: auto; margin-top: 20px;">
    <?php if (Yii::$app->session->hasFlash('error')): ?>
        <div class="alert alert-danger" role="alert"><?= Yii::$app->session->getFlash('error') ?></div>
    <?php endif; ?>
</div>

<div style="width: 600px; margin: auto; margin-top: 20px;">
    <div class="box box-success">
        <div class="box-header with-border">
            <h3 class="box-title">Biểu mẫu nhóm tin tức</h3>
        </div>
        <div class="box-body">
            <?php $form = ActiveForm::begin() ?>
            <?= $form->field($model, 'category_name')->textInput(['class' => 'form-control', 'placeholder' => 'Tên nhóm quyền'])->label(false) ?>
            <?= $form->field($model, 'status')->checkbox() ?>
        </div><!-- /.box-body -->
        <div class="box-footer">
            <button type="submit" class="btn btn-success"><i class="fa fa-pencil-square-o"></i> Cập nhật</button>
            <button type="reset" class="btn btn-primary"><i class="fa fa-refresh"></i> Làm mới</button>
        </div>
        <?php ActiveForm::end() ?>
    </div><!-- /.box -->
</div>