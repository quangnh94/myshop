<?php

namespace common\models\database;

use Yii;

/**
 * This is the model class for table "news_categories".
 *
 * @property integer $id
 * @property string $category_name
 * @property string $alias
 * @property integer $parent_id
 * @property integer $created_at
 * @property integer $updated_at
 * @property integer $status
 */
class NewsCategories extends \yii\db\ActiveRecord {

    /**
     * @inheritdoc
     */
    public static function tableName() {
        return 'news_categories';
    }

    /**
     * @inheritdoc
     */
    public function rules() {
        return [
            [['category_name', 'alias', 'parent_id', 'created_at', 'status'], 'required'],
            [['parent_id', 'created_at', 'updated_at', 'status'], 'integer'],
            [['category_name', 'alias'], 'string', 'max' => 250]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels() {
        return [
            'id' => 'ID',
            'category_name' => 'Category Name',
            'alias' => 'Alias',
            'parent_id' => 'Parent ID',
            'created_at' => 'Created At',
            'updated_at' => 'Updated At',
            'status' => 'Trạng thái',
        ];
    }

}
