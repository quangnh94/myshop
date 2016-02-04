<?php

namespace common\models\database;

use yii\db\ActiveRecord;
use yii\web\IdentityInterface;

/**
 * This is the model class for table "administrator".
 *
 * @property string $id
 * @property string $password
 * @property integer $created_at
 * @property integer $updated_at
 * @property string $authKey
 * @property integer $status
 */
class Administrator extends ActiveRecord implements IdentityInterface {

    /**
     * @inheritdoc
     */
    public static function tableName() {
        return 'administrator';
    }

    /**
     * @inheritdoc
     */
    public function rules() {
        return [
            [['id', 'password', 'created_at', 'updated_at', 'authKey'], 'required'],
            [['created_at', 'updated_at', 'status'], 'integer'],
            [['id'], 'string', 'max' => 200],
            [['password'], 'string', 'max' => 64],
            [['authKey'], 'string', 'max' => 250]
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels() {
        return [
            'id' => 'ID',
            'password' => 'Password',
            'created_at' => 'Created At',
            'updated_at' => 'Updated At',
            'authKey' => 'Auth Key',
            'status' => 'Status',
        ];
    }

    /**
     * Finds an identity by the given ID.
     *
     * @param string|integer $id the ID to be looked for
     * @return IdentityInterface|null the identity object that matches the given ID.
     */
    public static function findIdentity($id) {
        return static::findOne($id);
    }

    /**
     * Finds an identity by the given token.
     *
     * @param string $token the token to be looked for
     * @return IdentityInterface|null the identity object that matches the given token.
     */
    public static function findIdentityByAccessToken($token, $type = null) {
        return static::findOne(['access_token' => $token]);
    }

    /**
     * @return int|string current user ID
     */
    public function getId() {
        return $this->id;
    }

    /**
     * @return string current user auth key
     */
    public function getAuthKey() {
        return $this->auth_key;
    }

    /**
     * @param string $authKey
     * @return boolean if auth key is valid for current user
     */
    public function validateAuthKey($authKey) {
        return $this->getAuthKey() === $authKey;
    }

}
