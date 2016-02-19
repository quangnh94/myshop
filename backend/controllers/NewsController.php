<?php

namespace backend\controllers;

use common\components\utils\TextUtils;
use common\models\database\News;
use common\models\database\NewsCategories;
use Yii;
use yii\data\ActiveDataProvider;
use yii\helpers\ArrayHelper;
use yii\web\UploadedFile;

class NewsController extends BaseController {

    public function actionIndex() {
        $provider = new ActiveDataProvider([
            'query' => News::find(),
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
        $oldImages = null;
        if (empty($id)) {
            $model = new News();
            $model->created_at = time();
        } else {
            $model = News::findOne($id);
            $oldImages = $model->images;
        }

        $categories = NewsCategories::findAll(['status' => 1]);
        $categories = ArrayHelper::map($categories, 'id', 'category_name');

        if ($model->load(Yii::$app->request->post())) {
            $model->images = UploadedFile::getInstance($model, 'images');
            if (!empty($model->images)) {
                move_uploaded_file($model->images->tempName, './uploads/' . time() . $model->images->name);
                $model->images = time() . $model->images->name;
                if ($oldImages != null) {
                    if (strcmp($model->images, $oldImages) != 0) {
                        unlink('./uploads/' . $oldImages);
                    }
                }
            } else {
                $model->images = $oldImages;
            }
            $model->updated_at = time();
            $model->alias = TextUtils::removeMarks($model->title);

            $save = $model->save(false);
            if ($save) {
                return $this->redirect('index');
            }
        }
        $this->staticClient = 'news.init();';
        return $this->render('handle', [
                    'model' => $model,
                    'categories' => $categories
        ]);
    }

    public function actionRemove($id) {
        if (!empty($id)) {
            $news = News::findOne($id);
            if (!empty($news)) {
                $result = $news->delete();
                if ($result) {
                    return $this->redirect('index');
                } else {
                    \Yii::$app->session->setFlash('error', "Xóa không thành công");
                }
            }
        }
    }

}
