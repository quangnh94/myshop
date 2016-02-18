<?php

namespace backend\models;

use yii\base\Model;

class NewsForm extends Model {

    public $id;
    public $title;
    public $description;
    public $content;
    public $created_at;
    public $updated_at;
    public $alias;
    public $status;
    public $category_id;
    public $images;

    public function rules() {
        return [
            [['title', 'description', 'content', 'created_at', 'updated_at', 'alias', 'status', 'category_id'], 'required'],
            [['content'], 'string'],
            [['created_at', 'updated_at', 'status', 'category_id'], 'integer'],
            [['title', 'alias'], 'string', 'max' => 250],
            [['description'], 'string', 'max' => 500],
            [['images'], 'file', 'skipOnEmpty' => false, 'extensions' => 'png, jpg'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels() {
        return [
            'id' => 'ID',
            'title' => 'Title',
            'description' => 'Description',
            'content' => 'Content',
            'created_at' => 'Created At',
            'updated_at' => 'Updated At',
            'alias' => 'Alias',
            'status' => 'Status',
            'category_id' => 'Category ID',
        ];
    }

}
