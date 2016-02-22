<?php

namespace frontend\controllers;

use common\models\database\News;
use common\models\database\TUser;

class NewsController extends BaseController {

    public function actionIndex() {
        return $this->render('index');
    }

    public function actionDetail($id) {
        if (!empty($id)) {
            $new = News::findOne($id);
            $user_exp = TUser::find()->select('name,level')->orderBy('totalexp DESC')->limit(9)->all();
            return $this->render('detail', [
                        'new' => $new,
                        'users' => $user_exp
            ]);
        }
    }

}
