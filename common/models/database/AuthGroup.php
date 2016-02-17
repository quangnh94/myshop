<?php

namespace common\models\database;

use Yii;

/**
 * This is the model class for table "auth_group".
 *
 * @property integer $id
 * @property string $group_name
 * @property integer $created_at
 * @property integer $updated_at
 * @property integer $status
 * @property string $description
 * @property string $alias
 */
class AuthGroup extends \yii\db\ActiveRecord {

    /**
     * @inheritdoc
     */
    public static function tableName() {
        return 'auth_group';
    }

    /**
     * @inheritdoc
     */
    public function rules() {
        return [
            [['group_name', 'created_at', 'updated_at', 'description'], 'required'],
            [['created_at', 'updated_at', 'status'], 'integer'],
            [['group_name', 'description', 'alias'], 'string', 'max' => 250]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels() {
        return [
            'id' => 'ID',
            'group_name' => 'Group Name',
            'created_at' => 'Created At',
            'updated_at' => 'Updated At',
            'status' => 'Status',
            'description' => 'Description',
            'alias' => 'Alias',
        ];
    }

    public static function getGroups() {
        return self::find()->orderBy('group_name asc')->all();
    }

}
