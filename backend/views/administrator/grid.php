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

