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
            <a href="<?= Url::base('http') . '/dang-nhap.html' ?>" tppabs="" target="_blank" class="Pay NapThe" title="Đăng nhập" rel="nofowllow"> Đăng nhập</a>
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
        <!-- CONTENT -->
        <div id="content">
            <div class="content" style="margin-top: 10px;">
                <div>
                    <p style="font-size: 18px; color: white; font-weight: bold"><?= $new->title ?></p>
                </div>
                <div>
                    <p style="font-weight: bold"><?= $new->description ?></p>
                </div>
                <div>
                    <p><?= $new->content ?></p>
                </div>
            </div>
        </div>

    </div>
    <div style="clear: both"></div>
</div>


