<?php

namespace backend\widgets;

use common\models\database\AuthAssignment;
use common\models\database\AuthGroup;
use common\models\database\AuthItem;
use Yii;
use yii\base\Widget;

class Navigation extends Widget {

    public function run() {
        $var = [];
        $items = AuthItem::getAuthItems();

        $service = [];
        foreach ($items as $item) {
            if ($item->type == 2)
                continue;
            $child = [];
            foreach ($items as $c) {
                if ($c->type == 1)
                    continue;
                if (preg_match('/^' . $item->name . '/', $c->name)) {
                    $child[] = $c;
                }
            }
            $item->setAttribute("child", $child);
            $service[] = $item;
        }

        $userId = Yii::$app->user->getId();
        $assign = AuthAssignment::getAssignById($userId);
        foreach ($assign as $assignment) {
            $var["assignments"][] = $assignment->getAttributes();
        }
        $var['services'] = $service;
        $var['group'] = AuthGroup::getGroups();

        return $this->render('navigation', [
                    'var' => $var
        ]);
    }

}
