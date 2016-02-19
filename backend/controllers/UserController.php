<?php

namespace backend\controllers;

use common\models\database\TAccount;
use yii\data\ActiveDataProvider;

class UserController extends BaseController {

    public function actionIndex() {
        $provider = new ActiveDataProvider([
            'query' => TAccount::find(),
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

    public function actionUpdate($id = null) {
        $model = TAccount::findOne($id);
        $oldPwd = $model->pwd;
        if ($model->load(\Yii::$app->request->post())) {
            if ($model->pwd != $oldPwd) {
                $model->pwd = md5($model->pwd);
            }
            $save = $model->save(false);
            if ($save) {
                return $this->redirect('index');
            }
        }

        return $this->render('update', [
                    'model' => $model
        ]);
    }

}
