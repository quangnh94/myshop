<?php

namespace backend\controllers;

use common\components\utils\TextUtils;
use common\models\database\News;
use common\models\database\NewsCategories;
use Yii;
use yii\data\ActiveDataProvider;

class NewscategoryController extends BaseController {

    public function actionIndex() {
        $provider = new ActiveDataProvider([
            'query' => NewsCategories::find(),
            'pagination' => [
                'pageSize' => 100,
            ],
            'sort' => [
                'defaultOrder' => [
                ]
            ],
        ]);
        return $this->render('grid', [
                    'provider' => $provider
        ]);
    }

    public function actionHandle($id = null) {
        if (empty($id)) {
            $model = new NewsCategories();
            $model->created_at = time();
            $model->parent_id = 0;
        } else {
            $model = NewsCategories::findOne($id);
        }

        if ($model->load(Yii::$app->request->post())) {
            $model->updated_at = time();
            $model->alias = TextUtils::removeMarks($model->category_name);
            $result = $model->save();
            if ($result) {
                return $this->redirect('index');
            } else {
                \Yii::$app->session->setFlash('error', "Thêm mới không thành công");
            }
        }
        return $this->render('handle', [
                    'model' => $model
        ]);
    }

    public function actionRemove($id) {
        if (!empty($id)) {
            $cate = NewsCategories::findOne($id);
            $news = News::findAll(['category_id' => $cate->id]);
            if (!empty($news)) {
                \Yii::$app->session->setFlash('error', "Vui lòng xóa tin tức trước khi xóa nhóm.");
            } else {
                if (!empty($cate)) {
                    $result = $cate->delete();
                    if ($result) {
                        return $this->redirect('index');
                    } else {
                        \Yii::$app->session->setFlash('error', "Xóa không thành công");
                    }
                }
            }
        }
    }

}
