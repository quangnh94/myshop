<?php

use yii\grid\GridView;
use yii\helpers\Url;

function drawStatus($data) {
    if ($data->status == 1)
        return "<span class='label label-success'>Hoạt động</span>";
    else
        return "<span class='label label-danger'>Tạm khóa</span>";
}
?>
<section class="content-header">
    <h1>
        Data Tables
        <small>advanced tables</small>
    </h1>
    <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li><a href="#">Tables</a></li>
        <li class="active">Data tables</li>
    </ol>
</section>
<section class="content">
    <div class="row">
        <div class="col-xs-12">
            <div class="box">
                <div class="box-body">
                    <?=
                    GridView::widget([
                        'dataProvider' => $data,
                        'emptyText' => '<span style="color:red">Không tồn tại dữ liệu tương ứng, vui lòng thử lại</span>',
                        'options' => [
                            'class' => 'text-center'
                        ],
                        'summary' => '',
                        'columns' => [
                            [
                                'class' => 'yii\grid\DataColumn',
                                'attribute' => 'group_name',
                                'header' => 'Tên nhóm',
                                'headerOptions' => ['class' => 'text-center'],
                                'format' => 'text',
                                'contentOptions' => ['class' => 'vertical-middle'],
                                'value' => function ($data) {
                            return $data->group_name;
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
                                'header' => 'Chức năng <a href="' . Url::base('http') . '/administrator/group-handle' . '"><i style="cursor:pointer; margin-left:5px; color:green" class="fa fa-plus"></i></a>',
                                'value' => function($data) {
                            return '<div class="btn-group" role="group">'
                                    . '<a href="' . Url::base('http') . '/administrator/group-handle?id=' . $data->id . '" class="btn btn-primary"><i class="fa fa-cog"></i> Cập nhật</a>'
                                    . '<a href="" class="btn btn-danger"><i class="fa fa-trash"></i> Xóa</a>'
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