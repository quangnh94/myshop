<section class="content">
    <div class="row">
        <div class="col-xs-12">
            <div class="box">
                <div class="box-body table-responsive no-padding">
                    <table class="table table-bordered table-hover">
                        <tr>
                            <th class="text-center" style="width: 35%;">Tài khoản</th>
                            <th class="text-center">Emai</th>
                            <th class="text-center">Mã bảo mật</th>
                            <th class="text-center">Chức năng</th>
                        </tr>
                        <?php foreach ($data as $key => $val) : ?>
                            <tr>
                                <td class="text-center vertical-middle bold-text"><?= $val->name ?></td>
                                <td class="text-center vertical-middle"><?= $val->email ?></td>
                                <td class="text-center vertical-middle"><?= $val->sc ?></td>
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


