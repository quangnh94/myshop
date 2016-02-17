<?php

use yii\helpers\Url;
?>
<ul class="sidebar-menu">
    <li class="header">MAIN NAVIGATION</li>
    <li>
        <a href="<?= Url::base() ?>">
            <i class="fa fa-dashboard"></i> <span>Dashboard</span></i>
        </a>
    </li>
    <?php if (!empty($var['group'])): ?>
        <?php foreach ($var['group'] as $g) : ?>
            <li class="treeview">
                <a href="#">
                    <i class="fa fa-edit"></i> <span><?= $g->group_name ?></span>
                    <i class="fa fa-angle-left pull-right"></i>
                </a>
                <ul class="treeview-menu">
                    <li><a href="../forms/general.html"><i class="fa fa-circle-o"></i> General Elements</a></li>
                    <li><a href="../forms/advanced.html"><i class="fa fa-circle-o"></i> Advanced Elements</a></li>
                    <li><a href="../forms/editors.html"><i class="fa fa-circle-o"></i> Editors</a></li>
                </ul>
            </li>
        <?php endforeach; ?>
    <?php endif; ?>
</ul>