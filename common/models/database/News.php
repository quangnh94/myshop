<?php

namespace common\models\database;

use Yii;

/**
 * This is the model class for table "news".
 *
 * @property integer $id
 * @property string $title
 * @property string $description
 * @property string $content
 * @property integer $created_at
 * @property integer $updated_at
 * @property string $alias
 * @property integer $status
 * @property integer $category_id
 * @property string $images
 */
class News extends \yii\db\ActiveRecord {

    /**
     * @inheritdoc
     */
    public static function tableName() {
        return 'news';
    }

    /**
     * @inheritdoc
     */
    public function rules() {
        return [
            [['title', 'description', 'content', 'created_at', 'updated_at', 'alias', 'status', 'category_id'], 'required'],
            [['content'], 'string'],
            [['created_at', 'updated_at', 'status', 'category_id'], 'integer'],
            [['title', 'alias'], 'string', 'max' => 250],
            [['description'], 'string', 'max' => 500],
            [['images'], 'string'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels() {
        return [
            'id' => 'ID',
            'title' => 'Tiêu đề tin',
            'description' => 'Mô tả tin tức',
            'content' => 'Nội dung',
            'created_at' => 'Created At',
            'updated_at' => 'Updated At',
            'alias' => 'Alias',
            'status' => 'Trạng thái',
            'category_id' => 'Category ID',
            'images' => 'Ảnh đại diện'
        ];
    }

}
