<?php

namespace backend\controllers;

use common\models\database\News;
use Yii;

class NewsController extends BaseController {

    public function actionIndex() {
        
    }

    public function actionHandle($id = null) {
        if (empty($id)) {
            $model = new News();
            $model->created_at = time();
        } else {
            $data = News::findOne($id);
        }

        if ($model->load(Yii::$app->request->post())) {
            
        }

        return $this->render('handle', [
                    'model' => $model
        ]);
    }

}
