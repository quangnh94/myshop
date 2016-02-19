<?php

use yii\grid\GridView;
use yii\helpers\Url;
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
                                'attribute' => 'name',
                                'header' => 'Tên tài khoản',
                                'headerOptions' => ['class' => 'text-center'],
                                'format' => 'html',
                                'contentOptions' => ['class' => 'vertical-middle'],
                                'value' => function ($data) {
                            return $data->name;
                        },
                            ],
                            [
                                'class' => 'yii\grid\DataColumn',
                                'attribute' => 'email',
                                'header' => 'Địa chỉ email',
                                'headerOptions' => ['class' => 'text-center'],
                                'format' => 'text',
                                'contentOptions' => ['class' => 'vertical-middle'],
                                'value' => function ($data) {
                            return $data->email;
                        },
                            ],
                            [
                                'class' => 'yii\grid\DataColumn',
                                'attribute' => 'Mã bảo mật',
                                'headerOptions' => ['class' => 'text-center'],
                                'header' => 'Sc',
                                'contentOptions' => ['class' => 'vertical-middle'],
                                'format' => 'html',
                                'value' => function ($data) {
                            return $data->sc;
                        },
                            ],
                            [
                                'class' => 'yii\grid\DataColumn',
                                'headerOptions' => ['class' => 'text-center'],
                                'format' => 'html',
                                'contentOptions' => ['class' => 'vertical-middle'],
                                'header' => 'Chức năng',
                                'value' => function($data) {
                            return '<div class="btn-group">'
                                    . '<a href="' . Url::base('http') . '/user/update?id=' . $data->id . '" class="btn btn-primary"><i class="fa fa-cog"></i> Cập nhật</a>'
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