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
                <div class="box-body table-responsive no-padding">
                    <table class="table table-bordered table-hover">
                        <tr>
                            <th class="text-center" style="width: 35%;">Tài khoản</th>
                            <th class="text-center">Ngày tạo</th>
                            <th class="text-center">Trạng thái</th>
                            <th class="text-center">Chức năng</th>
                        </tr>
                        <?php foreach ($data as $key => $val) : ?>
                            <tr>
                                <td class="text-center vertical-middle bold-text"><?= $val->id ?></td>
                                <td class="text-center vertical-middle"><?= Yii::$app->formatter->asDatetime($val->created_at, 'php:H:i:s d-m-Y') ?></td>
                                <td class="text-center vertical-middle"><?= $val->status == 1 ? '<span class="label label-success">Hoạt động</span>' : '<span class="label label-danger">Tạm khóa</span>' ?></td>
                                <td class="text-center vertical-middle">
                                    <button type="button" onclick="administrator.assign('<?= $val->id ?>')" class="btn btn-success"><i class="fa fa-cogs"></i> Cấp quyền tài khoản</button>
                                </td>
                            </tr>
                        <?php endforeach; ?>
                    </table>
                </div><!-- /.box-body -->
            </div><!-- /.box -->
        </div>
    </div>
</section>


