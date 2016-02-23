<?php

use yii\helpers\Url;
use yii\widgets\LinkPager;
?>
<div class="content-data">
    <div class="left_data" style="width: 280px; float: left;">
        <div id="sidebar"> 
            <a href="download.html" tppabs="" target="_blank" id="playNow1" title="Tải Game" class="PlayNow1"></a>
            <div class="DownloadContainer1">
                <a class="DownLoadMiniClient1" href="#" tppabs="" target="_blank" alt="Download mini client">Download mini client</a>
                <a class="DownLoadFullClient1" href="#" tppabs="" target="_blank" alt="Download full client">Download full client
                </a>
            </div>
        </div>
        <div class="DangkyNapthe">
            <a href="<?= Url::base('http') . '/dang-ky.html' ?>" target="_blank" id="zme-registerwg22" class="Register QuickRegister" title="Đăng ký nhanh" rel="nofowllow"> Đăng ký</a>
            <a href="<?= Url::base('http') . '/nap-the.html' ?>" tppabs="" target="_blank" class="Pay NapThe" title="Nạp thẻ" rel="nofowllow"> Nạp thẻ</a>
        </div>
        <div class="ServerList"><span class="loading"></span>
            <div class="bxh" style="position: relative">
                <table class="table table-bordered" style="list-style: none; margin-top: 68px; padding: 10px; margin-left: 5px; width: 96%; position: absolute">
                    <thead>
                        <tr style="color: white">
                            <th>Thứ hạng</th>
                            <th>Tên nhân vật</th>
                            <th>Cấp độ</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php if (!empty($users)): ?>
                            <?php $i = 1; ?>
                            <?php foreach ($users as $key => $value) : ?>
                                <tr style="color: white">
                                    <td class="text-center"><?= $i ?></td>
                                    <td class="text-center"><?= $value->name ?></td>
                                    <td class="text-center"><?= $value->level ?></td>
                                </tr>
                                <?php $i++; ?>
                            <?php endforeach; ?>
                        <?php endif; ?>
                    </tbody>
                </table>
            </div>   
        </div>
    </div>
    <div class="right_data" style="float: right; width: 660px; margin-top: 20px;">
        <div class="jcarousel-wrapper">
            <div class="jcarousel">
                <ul>
                    <li><img src="<?= Url::base('http') . '/images/ad3.jpg' ?>" style="width: 100%" alt=""></li>
                    <li><img src="<?= Url::base('http') . '/images/ad1.jpg' ?>" style="width: 100%" alt=""></li>
                    <li><img src="<?= Url::base('http') . '/images/ad2.jpg' ?>" style="width: 100%" alt=""></li>
                </ul>
            </div>
            <p class="photo-credits">
                Photos by <a href="http://www.mw-fotografie.de">Marc Wiegelmann</a>
            </p>
            <a href="#" class="jcarousel-control-prev">&lsaquo;</a>
            <a href="#" class="jcarousel-control-next">&rsaquo;</a>
            <p class="jcarousel-pagination"></p>
        </div>
        <!-- CONTENT -->
        <div id="content">
            <div class="content">
                <ul class="blog">
                    <?php if (!empty($models)): ?>
                        <?php foreach ($models as $key => $val) : ?>
                            <li>
                                <a href="<?= Url::base('http') . '/' . $val->alias . '-' . $val->id . '.html' ?>"><img src="<?= dirname(dirname(Url::base())) . '/backend/share/uploads/' . $val->images ?>" alt="Ảnh đại diện" width="150" height="150"></a>
                                <h2><a href="<?= Url::base('http') . '/' . $val->alias . '-' . $val->id . '.html' ?>"><?= $val->title ?></a></h2>
                                <p>
                                    <?= $val->description ?>
                                </p>
                            </li>
                        <?php endforeach; ?>
                    <?php endif; ?>
                </ul>
            </div>
            <div>
                <?=
                LinkPager::widget([
                    'pagination' => $pages,
                ]);
                ?>
            </div>
        </div>

    </div>
    <div style="clear: both"></div>
</div>


