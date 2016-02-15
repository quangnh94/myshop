<?php

use yii\widgets\ActiveForm;
?>
<div style="width: 500px; margin: auto; margin-top: 20px;">
    <div class="box box-success">
        <div class="box-header with-border">
            <h3 class="box-title">Biểu mẫu nhóm hệ thống</h3>
        </div>
        <div class="box-body">
            <?php $form = ActiveForm::begin() ?>
            <?= $form->field($model, 'group_name')->textInput(['class' => 'form-control', 'placeholder' => 'Tên nhóm của bạn'])->label(false) ?>
            <?= $form->field($model, 'description')->textInput(['class' => 'form-control', 'placeholder' => 'Mô tả chi tiết'])->label(false) ?>
            <label class="margin-top-10">
                <?= $form->field($model, 'status')->checkbox()->label(false) ?>
            </label>
        </div><!-- /.box-body -->
        <?php if (Yii::$app->session->hasFlash('success')) { ?>
            <p class="bg-primary padding-global"><?= Yii::$app->session->getFlash('success') ?></p>
        <?php } else if (Yii::$app->session->hasFlash('error')) { ?>
            <p class="bg-danger padding-global"><?= Yii::$app->session->getFlash('error') ?></p>
        <?php } ?>
        <div class="box-footer">
            <button type="submit" class="btn btn-success"><i class="fa fa-pencil-square-o"></i> Cập nhật</button>
            <button type="reset" class="btn btn-primary"><i class="fa fa-refresh"></i> Làm mới</button>
        </div>
        <?php ActiveForm::end() ?>
    </div><!-- /.box -->
</div>
<div class="checkbox margin-top-10">

</div>
