<?php

namespace common\models\database;

use common\components\output\Response;
use yii\db\ActiveQuery;
use yii\db\ActiveRecord;

/**
 * This is the model class for table "auth_item".
 *
 * @property string $name
 * @property integer $type
 * @property string $description
 * @property string $rule_name
 * @property string $data
 * @property integer $created_at
 * @property integer $updated_at
 * @property integer $group_id
 * @property string $alias
 *
 * @property AuthAssignment[] $authAssignments
 * @property AuthRule $ruleName
 * @property AuthItemChild[] $authItemChildren
 * @property AuthItemChild[] $authItemChildren0
 */
class AuthItem extends ActiveRecord {

    /**
     * @inheritdoc
     */
    public static function tableName() {
        return 'auth_item';
    }

    /**
     * @inheritdoc
     */
    public function rules() {
        return [
            [['name', 'type', 'group_id', 'alias'], 'required'],
            [['type', 'created_at', 'updated_at', 'group_id'], 'integer'],
            [['description', 'data'], 'string'],
            [['name', 'rule_name'], 'string', 'max' => 64],
            [['alias'], 'string', 'max' => 250]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels() {
        return [
            'name' => 'Name',
            'type' => 'Type',
            'description' => 'Description',
            'rule_name' => 'Rule Name',
            'data' => 'Data',
            'created_at' => 'Created At',
            'updated_at' => 'Updated At',
            'group_id' => 'Group ID',
            'alias' => 'Alias',
        ];
    }

    public function attributes() {
        return array_merge(
                parent::attributes(), ['child']
        );
    }

    /**
     * @return ActiveQuery
     */
    public function getAuthAssignments() {
        return $this->hasMany(AuthAssignment::className(), ['item_name' => 'name']);
    }

    /**
     * @return ActiveQuery
     */
    public function getRuleName() {
        return $this->hasOne(AuthRule::className(), ['name' => 'rule_name']);
    }

    /**
     * @return ActiveQuery
     */
    public function getAuthItemChildren() {
        return $this->hasMany(AuthItemChild::className(), ['parent' => 'name']);
    }

    /**
     * @return ActiveQuery
     */
    public function getAuthItemChildren0() {
        return $this->hasMany(AuthItemChild::className(), ['child' => 'name']);
    }

    /**
     * Định nghĩa quyền vào bảng authItem
     * @param type $data
     */
    public static function authItemSave($data) {
        $item = self::findOne(['name' => $data['name']]);
        if (empty($item)) {
            $item = new AuthItem();
            $item->created_at = time();
            $item->description = 'Hệ thống cập nhật';
            $item->type = $data['type'];
            $item->name = $data['name'];
        }
        $item->updated_at = time();
        $item->alias = $data['alias'];
        $item->group_id = isset($data['group']) ? $data['group'] : 0;

        if (!$item->save()) {
            return new Response(false, "Định nghĩa quyền không thành công", $item->errors);
        }
        $par = explode("_", $data['name'])[0];
        if (strpos($data['name'], "_") && self::getAuthItemChildsByPrimarykey($par, $data['name']) == null) {
            $authItemChild = new AuthItemChild();
            $authItemChild->parent = $par;
            $authItemChild->child = $data['name'];
            $authItemChild->save();
        }
        return $item;
    }

    public static function getAuthItemChildsByPrimarykey($parent, $child) {
        return AuthItemChild::findOne(["parent" => $parent, "child" => $child]);
    }

    public static function getAuthItems() {
        return self::find()->orderBy('name asc')->all();
    }

}
