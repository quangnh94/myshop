<?php

use yii\helpers\Url;
use yii\widgets\LinkPager;
?>
<div class="content-data">
    <div class="left_data" style="width: 280px; float: left;">
        <div class="">
            <ul class="nav nav-pills nav-stacked">
                <li role="presentation" class="active"><a href="<?= Url::base('http') . '/thong-tin-tai-khoan.html' ?>">Thông tin tài khoản</a></li>
                <li role="presentation"><a href="<?= Url::base('http') . '/thay-doi-mat-khau.html' ?>">Đổi mật khẩu</a></li>
                <li role="presentation"><a href="#">Nạp thẻ</a></li>
                <li role="presentation"><a href="<?= Url::base('http') . '/dang-xuat.html' ?>">Đăng xuất</a></li>
            </ul>
        </div>
    </div>
    <div class="right_data" style="float: right; width: 660px; margin-top: 20px;">

    </div>
    <div style="clear: both"></div>
</div>



