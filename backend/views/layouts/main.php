<?php
/* @var $this View */
/* @var $content string */

use backend\assets\AppAsset;
use backend\widgets\Navigation;
use yii\helpers\Html;
use yii\helpers\Json;
use yii\helpers\Url;
use yii\web\View;

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
    <body class="hold-transition skin-blue fixed sidebar-mini">
        <?php $this->beginBody() ?>
        <div class="wrapper">

            <header class="main-header">
                <a href="../../index2.html" class="logo">
                    <span class="logo-mini"><b>A</b>LT</span>
                    <span class="logo-lg"><b>Admin</b>LTE</span>
                </a>

                <nav class="navbar navbar-static-top" role="navigation">
                    <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </a>
                    <div class="navbar-custom-menu">
                        <ul class="nav navbar-nav">
                            <li class="dropdown user user-menu">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                                    <img src="<?= $this->context->baseUrl . 'images/user2-160x160.jpg' ?>" class="user-image" alt="User Image">
                                    <span class="hidden-xs">Alexander Pierce</span>
                                </a>
                                <ul class="dropdown-menu">
                                    <li class="user-header">
                                        <img src="<?= $this->context->baseUrl . 'images/user2-160x160.jpg' ?>" class="img-circle" alt="User Image">
                                        <p>
                                            Alexander Pierce - Web Developer
                                            <small>Member since Nov. 2012</small>
                                        </p>
                                    </li>
                                    <li class="user-footer">
                                        <div class="pull-left">
                                            <a href="#" class="btn btn-default btn-flat">Profile</a>
                                        </div>
                                        <div class="pull-right">
                                            <a href="#" class="btn btn-default btn-flat">Sign out</a>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" data-toggle="control-sidebar"><i class="fa fa-gears"></i></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <aside class="main-sidebar">
                <section class="sidebar">
                    <div class="user-panel">
                        <div class="pull-left image">
                            <img src="<?= $this->context->baseUrl . 'images/user2-160x160.jpg' ?>" class="img-circle" alt="User Image">
                        </div>
                        <div class="pull-left info">
                            <p>Alexander Pierce</p>
                            <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
                        </div>
                    </div>
                    <form action="#" method="get" class="sidebar-form">
                        <div class="input-group">
                            <input type="text" name="q" class="form-control" placeholder="Search...">
                            <span class="input-group-btn">
                                <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i></button>
                            </span>
                        </div>
                    </form>
                    <?= Navigation::widget() ?>
                    
                </section>
                <!-- /.sidebar -->
            </aside>
            <div class="content-wrapper">
                <?php if (isset($this->context->var['breadcumb']) && !empty($this->context->var['breadcumb'])): ?>
                    <section class="content-header">
                        <h1>
                            Bảng
                            <small><?= $this->context->var['table_name'] ?></small>
                        </h1>
                        <ol class="breadcrumb">
                            <li><a href="<?= Url::base() ?>"><i class="fa fa-dashboard"></i> Trang chủ</a></li>
                            <?php foreach ($this->context->var['breadcumb'] as $key => $val): ?>
                                <li><a href="<?= $key ?>"><?= $val ?></a></li>
                            <?php endforeach; ?>
                        </ol>
                    </section>
                <?php endif; ?>
                <?= $content ?>
            </div>
            <!--            <footer class="main-footer">
                            
                        </footer>-->
            <!-- Control Sidebar -->
            <aside class="control-sidebar control-sidebar-dark">
                <!-- Create the tabs -->
                <ul class="nav nav-tabs nav-justified control-sidebar-tabs">
                    <li><a href="#control-sidebar-home-tab" data-toggle="tab"><i class="fa fa-home"></i></a></li>
                    <li><a href="#control-sidebar-settings-tab" data-toggle="tab"><i class="fa fa-gears"></i></a></li>
                </ul>
                <!-- Tab panes -->
                <div class="tab-content">
                    <!-- Home tab content -->
                    <div class="tab-pane" id="control-sidebar-home-tab">
                        <h3 class="control-sidebar-heading">Recent Activity</h3>
                        <ul class="control-sidebar-menu">
                            <li>
                                <a href="javascript::;">
                                    <i class="menu-icon fa fa-birthday-cake bg-red"></i>
                                    <div class="menu-info">
                                        <h4 class="control-sidebar-subheading">Langdon's Birthday</h4>
                                        <p>Will be 23 on April 24th</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript::;">
                                    <i class="menu-icon fa fa-user bg-yellow"></i>
                                    <div class="menu-info">
                                        <h4 class="control-sidebar-subheading">Frodo Updated His Profile</h4>
                                        <p>New phone +1(800)555-1234</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript::;">
                                    <i class="menu-icon fa fa-envelope-o bg-light-blue"></i>
                                    <div class="menu-info">
                                        <h4 class="control-sidebar-subheading">Nora Joined Mailing List</h4>
                                        <p>nora@example.com</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript::;">
                                    <i class="menu-icon fa fa-file-code-o bg-green"></i>
                                    <div class="menu-info">
                                        <h4 class="control-sidebar-subheading">Cron Job 254 Executed</h4>
                                        <p>Execution time 5 seconds</p>
                                    </div>
                                </a>
                            </li>
                        </ul><!-- /.control-sidebar-menu -->

                        <h3 class="control-sidebar-heading">Tasks Progress</h3>
                        <ul class="control-sidebar-menu">
                            <li>
                                <a href="javascript::;">
                                    <h4 class="control-sidebar-subheading">
                                        Custom Template Design
                                        <span class="label label-danger pull-right">70%</span>
                                    </h4>
                                    <div class="progress progress-xxs">
                                        <div class="progress-bar progress-bar-danger" style="width: 70%"></div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript::;">
                                    <h4 class="control-sidebar-subheading">
                                        Update Resume
                                        <span class="label label-success pull-right">95%</span>
                                    </h4>
                                    <div class="progress progress-xxs">
                                        <div class="progress-bar progress-bar-success" style="width: 95%"></div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript::;">
                                    <h4 class="control-sidebar-subheading">
                                        Laravel Integration
                                        <span class="label label-warning pull-right">50%</span>
                                    </h4>
                                    <div class="progress progress-xxs">
                                        <div class="progress-bar progress-bar-warning" style="width: 50%"></div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="javascript::;">
                                    <h4 class="control-sidebar-subheading">
                                        Back End Framework
                                        <span class="label label-primary pull-right">68%</span>
                                    </h4>
                                    <div class="progress progress-xxs">
                                        <div class="progress-bar progress-bar-primary" style="width: 68%"></div>
                                    </div>
                                </a>
                            </li>
                        </ul><!-- /.control-sidebar-menu -->

                    </div><!-- /.tab-pane -->
                    <!-- Stats tab content -->
                    <div class="tab-pane" id="control-sidebar-stats-tab">Stats Tab Content</div><!-- /.tab-pane -->
                    <!-- Settings tab content -->
                    <div class="tab-pane" id="control-sidebar-settings-tab">
                        <form method="post">
                            <h3 class="control-sidebar-heading">General Settings</h3>
                            <div class="form-group">
                                <label class="control-sidebar-subheading">
                                    Report panel usage
                                    <input type="checkbox" class="pull-right" checked>
                                </label>
                                <p>
                                    Some information about this general settings option
                                </p>
                            </div><!-- /.form-group -->

                            <div class="form-group">
                                <label class="control-sidebar-subheading">
                                    Allow mail redirect
                                    <input type="checkbox" class="pull-right" checked>
                                </label>
                                <p>
                                    Other sets of options are available
                                </p>
                            </div><!-- /.form-group -->

                            <div class="form-group">
                                <label class="control-sidebar-subheading">
                                    Expose author name in posts
                                    <input type="checkbox" class="pull-right" checked>
                                </label>
                                <p>
                                    Allow the user to show his name in blog posts
                                </p>
                            </div><!-- /.form-group -->

                            <h3 class="control-sidebar-heading">Chat Settings</h3>

                            <div class="form-group">
                                <label class="control-sidebar-subheading">
                                    Show me as online
                                    <input type="checkbox" class="pull-right" checked>
                                </label>
                            </div><!-- /.form-group -->

                            <div class="form-group">
                                <label class="control-sidebar-subheading">
                                    Turn off notifications
                                    <input type="checkbox" class="pull-right">
                                </label>
                            </div><!-- /.form-group -->

                            <div class="form-group">
                                <label class="control-sidebar-subheading">
                                    Delete chat history
                                    <a href="javascript::;" class="text-red pull-right"><i class="fa fa-trash-o"></i></a>
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
            </aside>
            <div class="control-sidebar-bg"></div>
        </div><!-- ./wrapper -->
        <?php $this->endBody() ?>
        <script>
            var baseUrl = '<?= $this->context->baseUrl ?>';
            var assignments = <?= Json::encode($this->context->var['assignments']) ?>;
<?= $this->context->staticClient ?>
        </script>
    </body>
</html>
<?php $this->endPage() ?>
