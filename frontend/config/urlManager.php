<?php

return array(
    'class' => 'yii\web\UrlManager',
    'enablePrettyUrl' => true,
    'showScriptName' => false,
//    'enableStrictParsing' => 'true',
//    'suffix' => '.html',
    'rules' => [
        'dang-ky.html' => 'auth/register',
        'dang-nhap.html' => 'auth/login',
        'trang-chu.html' => 'index',
        'GET <alias:[0-9a-z\-]+>-<id:\d+>.html' => 'news/detail',
        'tai-khoan.html' => 'user/index',
        'thay-doi-mat-khau.html' => 'user/changepass',
        'thong-tin-tai-khoan.html' => 'user/index',
        'dang-xuat.html' => 'auth/logout',
        'nap-the.html' => 'user/addcard',
    ]
);
?>