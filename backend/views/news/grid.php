<?php

use yii\grid\GridView;
use yii\helpers\Url;

function drawStatus($data) {
    if ($data->status == 1)
        return "<span class='label label-success'>Hoạt động</span>";
    else
        return "<span class='label label-danger'>Tạm khóa</span>";
}

function drawImages($data) {
    return '<img src="' . Url::base('http') . '/uploads/' . $data->images . '" alt="Ảnh đại diện" width="80" />';
}
?>
<?php if (Yii::$app->session->hasFlash('error')): ?>
    <div class="alert alert-danger" role="alert"><?= Yii::$app->session->getFlash('error') ?></div>
<?php endif; ?>

<section class="content">
    <div class="row">
        <div class="col-xs-12">
            <div class="box">
                <div class="box-body">
                    <?=
                    GridView::widget([
                        'dataProvider' => $provider,
                        'emptyText' => '<span style="color:red">Không tồn tại dữ liệu tương ứng, vui lòng thử lại</span>',
                        'options' => [
                            'class' => 'text-center'
                        ],
                        'summary' => '',
                        'columns' => [
                            [
                                'class' => 'yii\grid\DataColumn',
                                'attribute' => 'images',
                                'header' => 'Ảnh đại diện',
                                'headerOptions' => ['class' => 'text-center'],
                                'format' => 'html',
                                'contentOptions' => ['class' => 'vertical-middle'],
                                'value' => function ($data) {
                            return drawImages($data);
                        },
                            ],
                            [
                                'class' => 'yii\grid\DataColumn',
                                'attribute' => 'title',
                                'header' => 'Tên nhóm',
                                'headerOptions' => ['class' => 'text-center'],
                                'format' => 'text',
                                'contentOptions' => ['class' => 'vertical-middle'],
                                'value' => function ($data) {
                            return $data->title;
                        },
                            ],
                            [
                                'class' => 'yii\grid\DataColumn',
                                'attribute' => 'status',
                                'headerOptions' => ['class' => 'text-center'],
                                'header' => 'Trạng thái',
                                'contentOptions' => ['class' => 'vertical-middle'],
                                'format' => 'html',
                                'value' => function ($data) {
                            return drawStatus($data);
                        },
                            ],
                            [
                                'class' => 'yii\grid\DataColumn',
                                'attribute' => 'created_at',
                                'headerOptions' => ['class' => 'text-center'],
                                'contentOptions' => ['class' => 'vertical-middle'],
                                'header' => 'Ngày tạo',
                                'format' => 'text',
                                'value' => function ($data) {
                            return Yii::$app->formatter->asDatetime($data->created_at, 'php:H:i:s d-m-Y');
                        },
                            ],
                            [
                                'class' => 'yii\grid\DataColumn',
                                'attribute' => 'created_at',
                                'headerOptions' => ['class' => 'text-center'],
                                'format' => 'html',
                                'contentOptions' => ['class' => 'vertical-middle'],
                                'header' => 'Chức năng <a onclick="" href="' . Url::base('http') . '/news/handle' . '"><i style="cursor:pointer;
                            margin-left:5px;
                            color:green" class="fa fa-plus"></i></a>',
                                'value' => function($data) {
                            return '<div class="btn-group">'
                                    . '<a href="' . Url::base('http') . '/news/handle?id=' . $data->id . '" class="btn btn-primary"><i class="fa fa-cog"></i> Cập nhật</a>'
                                    . '<a href="' . Url::base('http') . '/news/remove?id=' . $data->id . '" class="btn btn-danger"><i class = "fa fa-trash"></i> Xóa</a>'
                                    . '</div>';
                        },
                            ],
                        ],
                    ])
                    ?>
                </div>
            </div>
        </div>
    </div>
</section>