<?php

namespace backend\controllers;

use common\components\output\Response;
use common\components\utils\FileUtils;
use common\models\database\Administrator;
use common\models\database\AuthAssignment;
use common\models\database\AuthGroup;
use common\models\database\AuthItem;
use Yii;
use yii\data\ActiveDataProvider;
use yii\helpers\Url;
use yii\rbac\DbManager;

class AdministratorController extends BaseController {

    public function actionHandle($id = null) {
        if (empty($id)) {
            $model = new AuthGroup();
            $model->created_at = time();
        } else {
            $model = AuthGroup::findOne($id);
        }

        if ($model->load(Yii::$app->request->post())) {
            $model->updated_at = time();
            $result = $model->save();
            if (!empty($id)) {
                if ($result) {
//                    Yii::$app->session->setFlash('success', 'Cập nhật nhóm hệ thống thành công');
                    return $this->redirect('index');
                } else {
//                    Yii::$app->session->setFlash('error', 'Cập nhật nhóm hệ thống không thành công');
                }
            } else {
                if ($result) {
//                    Yii::$app->session->setFlash('success', 'Thêm mới nhóm hệ thống thành công');
                    return $this->redirect('index');
                } else {
//                    Yii::$app->session->setFlash('error', 'Thêm mới nhóm hệ thống không thành công');
                }
            }
        }

        return $this->render('add-group', [
                    'model' => $model
        ]);
    }

    public function actionIndex() {
        $function = FileUtils::getServices();
        if (!empty($function)) {
            $provider = new ActiveDataProvider([
                'query' => AuthGroup::find(),
                'pagination' => [
                    'pageSize' => 100,
                ],
                'sort' => [
                    'defaultOrder' => [
                    ]
                ],
            ]);

            $group = AuthGroup::findAll(['status' => 1]);
            $this->staticClient = "administrator.init();";
            $this->var['breadcumb'] = [
                Url::to(["administrator/define"]) => "Quản lý định nghĩa quyền"
            ];
            $this->var['table_name'] = 'Quản lý định nghĩa quyền';

            return $this->render('grid', [
                        'data' => $function,
                        'group' => $group,
                        'provider' => $provider
            ]);
        }
    }

    /**
     * Định nghĩa quyền sản phẩm
     */
    public function actionDefineAuth() {
        $params = Yii::$app->request->post();
        if (!empty($params)) {
            $item = AuthItem::authItemSave($params);
            if (!empty($item)) {
                return $this->response(new Response(true, 'Cấp quyền cho ' . $params['name'] . ' thành công', $item));
            } else {
                return $this->response(new Response(false, 'Cấp quyền không thành công', []));
            }
        }
    }

    /**
     *  Lấy toàn bộ quyền item đã định nghĩa
     */
    public function actionItem() {
        $auth_item = AuthItem::find()->all();
        return $this->response(new Response(true, "Lấy dữ liệu thành công", $auth_item));
    }

    /**
     * Lấy thông tin quyền và thông tin nhóm quyền
     * @return type
     */
    public function actionGetigroup() {
        $params = Yii::$app->request->post();
        if (!empty($params)) {
            $item = AuthItem::findAll(['type' => 2]);
            $assign = AuthAssignment::findAll(['user_id' => $params['id']]);
            $group = AuthGroup::getGroups();
            if (!empty($item) && !empty($group)) {
                $data = ['items' => $item, 'group' => $group];
                $data['assign'] = !empty($assign) ? $assign : [];
                return $this->response(new Response(true, 'Lấy dữ liệu thành công', $data));
            } else {
                return $this->response(new Response(false, 'Lấy dữ liệu không thành công', []));
            }
        }
    }

    /**
     * Phân quyền quản trị
     */
    public function actionAssignData() {
        $params = \Yii::$app->request->post();
        if (!empty($params)) {
            self::removeAssignmentByUserId($params['id']);
            $dbManager = new DbManager();
            $dbManager->init();
            foreach ($params['data'] as $role) {
                $assignment = $dbManager->getAssignment($role, $params['id']);
                if ($assignment == null) {
                    $dbManager->assign($dbManager->getPermission($role), $params['id']);
                }
            }
            return $this->response(new Response(true, "Cấp quyền cho tài khoản thành công", []));
        }
    }

    /**
     * Xóa toàn bộ quyền hiện tại
     * @param type $userId
     * @return type
     */
    public static function removeAssignmentByUserId($userId) {
        return AuthAssignment::deleteAll(["user_id" => $userId]);
    }

}
