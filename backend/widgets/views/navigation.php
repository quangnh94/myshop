<?php

use yii\helpers\Url;
?>
<ul class="sidebar-menu">
    <li class="header">MAIN NAVIGATION</li>
    <li>
        <a href="<?= Url::base('http') . '/home' ?>">
            <i class="fa fa-dashboard"></i> <span>Dashboard</span></i>
        </a>
    </li>
    <?php if (!empty($var['group'])): ?>
        <?php foreach ($var['group'] as $g) : ?>
            <li class="treeview" data-nav="<?= $g->group_name ?>">
                <a href="#">
                    </i> <span><?= $g->group_name ?></span>
                    <i class="fa fa-angle-left pull-right"></i>
                </a>
                <ul class="treeview-menu">
                    <?php if (!empty($var["services"])) : ?>
                        <?php foreach ($var["services"] as $sv): ?>
                            <?php if ($g->id == $sv->group_id): ?>
                                <li data-item="<?= $sv->name ?>_index" data-group="<?= $g->group_name ?>">
                                    <a href="<?= Url::base() . '/' . $sv->name ?>"><?= $sv->alias ?></a>
                                </li>
                            <?php endif; ?>
                        <?php endforeach; ?>
                    <?php endif; ?>
                </ul>
            </li>
        <?php endforeach; ?>
    <?php endif; ?>
</ul>