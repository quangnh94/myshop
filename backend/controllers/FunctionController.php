<?php

namespace backend\controllers;

use common\models\database\Administrator;
use yii\helpers\Url;

class FunctionController extends BaseController {

    public function actionIndex() {
        $admin = Administrator::find()->all();
        $this->var['breadcumb'] = [
            Url::to(["administrator/manager"]) => "Quản lý cấp quyền quản trị"
        ];
        $this->var['table_name'] = 'Quản lý cấp quyền quản trị';

        return $this->render('auth', [
                    'data' => $admin
        ]);
    }

}
