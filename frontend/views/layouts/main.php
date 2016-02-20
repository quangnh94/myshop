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
            <div id="header">
                <a id="logo" href="index.html"><img src="<?= Url::base('http') ?>/images/logo.png" alt=""></a>
                <ul class="navigation">
                    <li class="first">
                        <a href="index.html">Trang chủ</a>
                    </li>
                    <li>
                        <a href="about.html">Tài khoản</a>
                    </li>
                    <li>
                        <a href="myths.html">Tin tức</a>
                    </li>
                    <li>
                        <a href="archives.html">Tải game</a>
                    </li>
                    <li>
                        <a href="archives.html">Diễn đàn</a>
                    </li>
                </ul>
            </div>
            <div id="body">
                <?= $content ?>
            </div>
            <div id="footer">

            </div>
        </div>
        <?php $this->endBody() ?>
    </body>
</html>
<?php $this->endPage() ?>
