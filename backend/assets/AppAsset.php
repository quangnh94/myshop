<?php

/**
 * @link http://www.yiiframework.com/
 * @copyright Copyright (c) 2008 Yii Software LLC
 * @license http://www.yiiframework.com/license/
 */

namespace backend\assets;

use yii\web\AssetBundle;

/**
 * @author Qiang Xue <qiang.xue@gmail.com>
 * @since 2.0
 */
class AppAsset extends AssetBundle {

    public $basePath = '@webroot';
    public $baseUrl = '@web';
    public $css = [
        'css/AdminLTE.min.css',
        'css/font-awesome.min.css',
        'css/skins/_all-skins.min.css',
        'css/bootstrap3-wysihtml5.min.css',
        'css/morris.css',
        'css/css.css',
    ];
    public $js = [
        'js/library/morris.min.js',
        'js/library/jquery.slimscroll.min.js',
        'js/library/popup/ejs.js',
        'js/library/popup/tmpl.js',
        'js/library/popup/popup.js',
        'js/library/popup/ajax.js',
        'js/library/fastclick.min.js',
        'js/library/bootstrap.min.js',
        'js/library/bootstrap3-wysihtml5.all.min.js',
        'js/layout/app.min.js',
        'js/layout/demo.js',
        'js/dev/administrator.js',
        'js/dev/main.js',
        'js/dev/news.js',
    ];
    public $depends = [
        'yii\web\YiiAsset',
        'yii\bootstrap\BootstrapAsset',
    ];

}
