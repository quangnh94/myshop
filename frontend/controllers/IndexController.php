<?php

namespace frontend\controllers;

use common\models\database\News;
use common\models\database\TUser;
use yii\data\Pagination;

class IndexController extends BaseController {

    public function actionIndex() {
        $news = News::find()->andWhere(['status' => 1]);
        $pages = new Pagination(['totalCount' => $news->count(), 'defaultPageSize' => 5]);
        $models = $news->offset($pages->offset)
                ->limit($pages->limit)
                ->all();
        $user_exp = TUser::find()->select('name,level')->orderBy('totalexp DESC')->limit(9)->all();
        return $this->render('index', [
                    'models' => $models,
                    'pages' => $pages,
                    'users' => $user_exp
        ]);
    }

}
