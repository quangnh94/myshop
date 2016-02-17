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
                                'header' => 'Chức năng <a href="' . Url::base('http') . '/administrator/handle' . '"><i style="cursor:pointer; margin-left:5px; color:green" class="fa fa-plus"></i></a>',
                                'value' => function($data) {
                            return '<div class="btn-group" role="group">'
                                    . '<a href="' . Url::base('http') . '/administrator/handle?id=' . $data->id . '" class="btn btn-primary"><i class="fa fa-cog"></i> Cập nhật</a>'
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

<?php if (!empty($provider)): ?>
    <section class="content" style="margin-top: -100px !important;">
        <div class="row">
            <div class="col-xs-12">
                <div class="box">
                    <div class="box-body table-responsive no-padding">
                        <table class="table table-bordered table-hover">
                            <tr>
                                <th style="width: 25%;">Tên quyền</th>
                                <th class="text-center">Định nghĩa</th>
                                <th class="text-center">Nhóm quyền</th>
                                <th class="text-center">Chức năng</th>
                            </tr>
                            <?php foreach ($data as $key => $obj) : ?>
                                <tr auth-id="<?= $key ?>">
                                    <td class="vertical-middle bold-text"><i class="fa fa-users"></i> <span auth-name="<?= $key ?>"><?= $key ?></span></td>
                                    <td class="vertical-middle">
                                        <input name="alias" type="text" class="form-control" value="" placeholder="Định nghĩa quyền của bạn"/>
                                    </td>
                                    <td class="vertical-middle">
                                        <select name="group_id" class="form-control">
                                            <?php foreach ($group as $val) : ?>
                                                <option value="<?= $val->id ?>"><?= $val->group_name ?></option>
                                            <?php endforeach; ?>
                                        </select>
                                    </td>
                                    <td class="vertical-middle text-center">
                                        <button type="button" onclick="administrator.define('<?= $key ?>', 1);" class="btn btn-success"><i class="fa fa-cogs"></i> Cập nhật</button>
                                    </td>
                                </tr>
                                <?php foreach ($obj as $key => $value) : ?>
                                    <tr auth-id="<?= $value ?>">
                                        <td class="align-center-mg vertical-middle"><span auth-name="<?= $value ?>"><?= $value ?></span></td>
                                        <td><input name="alias" type="text" class="form-control" value="" placeholder="Định nghĩa quyền của bạn"/></td>
                                        <td></td>
                                        <td class="text-center"><button type="button" onclick="administrator.define('<?= $value ?>', 2);" class="btn btn-success"><i class="fa fa-cogs"></i> Cập nhật</button></td>
                                    </tr>
                                <?php endforeach; ?>
                            <?php endforeach; ?>
                        </table>
                    </div><!-- /.box-body -->
                </div><!-- /.box -->
            </div>
        </div>
    </section>
<?php endif; ?>

