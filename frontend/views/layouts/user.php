<?php

use frontend\assets\AppAsset;
use yii\helpers\Html;
use yii\helpers\Url;
use yii\web\View;

/* @var $this View */
/* @var $content string */

AppAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
    <head>
        <meta charset="<?= Yii::$app->charset ?>">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <?= Html::csrfMetaTags() ?>
        <title><?= Html::encode($this->title) ?></title>
        <?php $this->head() ?>
    </head>
    <body>
        <?php $this->beginBody() ?>
        <div id="page">
            <div class="Navigation">
                <ul class="main-navigation">
                    <li id="" class="TrangChu"><a target="_self" rel="" href="<?= Url::base('http') ?>/trang-chu.html" tppabs="" class="TrangChu" data-target="TrangChu" title="Trang Chủ">Trang chủ</a></li>
                    <li id="" class="SuKien"><a target="_self" rel="" href="<?= Url::base('http') ?>/tai-khoan.html" tppabs="" class="SuKien" data-target="SuKien" title="Tài khoản">Tài khoản</a></li>
                    <li id="" class="ThuVien"><a target="_self" rel="" href="<?= Url::base('http') . '/dang-ky.html' ?>" tppabs="" class="ThuVien" data-target="ThuVien" title="Đăng ký">Đăng ký</a></li>
                    <li id="" class="CongDong"><a target="_blank" nofollow="" data-target="CongDong" href="https://www.facebook.com/hopnhat.thienlong" tppabs="" title="Facebook" class="CongDong">Facebook</a>
                    </li>
                    <li id="" class="HoTro"><a rel="nofollow" onclick="alert('Tính năng đang phát triển')" href="" class="HoTro" data-target="HoTro" title="Hỗ Trợ">Hỗ Trợ</a></li>
                </ul>
                <div style="clear:both"></div>
            </div>
            <div id="body" style="width: 960px;">
                <?= $content ?>
            </div>
        </div>
        <?php $this->endBody() ?>
    </body>
</html>
<?php $this->endPage() ?>
