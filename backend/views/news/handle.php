<?php

use yii\widgets\ActiveForm;
?>
<div style="width: 965px; margin: auto; margin-top: 20px;">
    <div class="box box-success">
        <div class="box-header with-border">
            <h3 class="box-title">Biểu mẫu tin tức</h3>
        </div>
        <div class="box-body">
            <?php $form = ActiveForm::begin() ?>
            <?= $form->field($model, 'title')->textInput(['class' => 'form-control', 'placeholder' => 'Tiêu đề tin'])->label(false) ?>
            <?= $form->field($model, 'description')->textInput(['class' => 'form-control', 'placeholder' => 'Mô tả chi tiết'])->label(false) ?>
            <?= $form->field($model, 'content')->textarea(['style' => 'height:250px;']) ?>
            <?= $form->field($model, 'images')->fileInput() ?>
            <?= $form->field($model, 'category_id')->dropDownList(['a', 'b', 'c']) ?>
            <?= $form->field($model, 'status')->checkbox() ?>
        </div><!-- /.box-body -->
        <div class="box-footer">
            <button type="submit" class="btn btn-success"><i class="fa fa-pencil-square-o"></i> Cập nhật</button>
            <button type="reset" class="btn btn-primary"><i class="fa fa-refresh"></i> Làm mới</button>
        </div>
        <?php ActiveForm::end() ?>
    </div><!-- /.box -->
</div>
<div class="checkbox margin-top-10">

</div>
