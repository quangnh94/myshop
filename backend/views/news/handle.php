<?php

use yii\helpers\Url;
use yii\widgets\ActiveForm;
?>
<div style="width: 965px; margin: auto; margin-top: 20px;">
    <div class="box box-success">
        <div class="box-header with-border">
            <h3 class="box-title">Biểu mẫu tin tức</h3>
        </div>
        <div class="box-body">
            <?php $form = ActiveForm::begin(['options' => ['enctype' => 'multipart/form-data']]) ?>
            <?= $form->field($model, 'title')->textInput(['class' => 'form-control', 'placeholder' => 'Tiêu đề tin']) ?>
            <?= $form->field($model, 'description')->textInput(['class' => 'form-control', 'placeholder' => 'Mô tả chi tiết']) ?>
            <?= $form->field($model, 'content')->textarea(['style' => 'height:300px;']) ?>
            <?= $form->field($model, 'images')->fileInput() ?>
            <?php if (!empty(Yii::$app->request->get('id'))): ?>
                <img src="<?= Url::base('http') . '/uploads/' . $model->images ?>" alt="Ảnh đại diện" width="150" height="150" />
            <?php endif; ?>
            <?= $form->field($model, 'category_id')->dropDownList($categories) ?>
            <?= $form->field($model, 'status')->checkbox() ?>
        </div><!-- /.box-body -->
        <div class="box-footer">
            <?php if (empty(Yii::$app->request->get('id'))) { ?>
                <button type="submit" class="btn btn-success"><i class="fa fa-pencil-square-o"></i> Thêm mới</button>
            <?php } else { ?>
                <button type="submit" class="btn btn-success"><i class="fa fa-pencil-square-o"></i> Cập nhật</button>
            <?php } ?>
            <button type="reset" class="btn btn-primary"><i class="fa fa-refresh"></i> Làm mới</button>
        </div>
        <?php ActiveForm::end() ?>
    </div><!-- /.box -->
</div>
