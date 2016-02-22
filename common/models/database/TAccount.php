<?php

namespace common\models\database;

use yii\db\ActiveRecord;
use yii\web\IdentityInterface;

/**
 * This is the model class for table "t_account".
 *
 * @property string $accountid
 * @property string $name
 * @property string $pwd
 * @property string $pw2
 * @property string $sc
 * @property string $pp
 * @property string $city
 * @property integer $bd
 * @property integer $pv
 * @property integer $pt
 * @property integer $el
 * @property string $ac
 * @property string $ai
 * @property string $lr
 * @property integer $ld
 * @property integer $ls
 * @property integer $le
 * @property integer $ll
 * @property integer $ct
 * @property integer $cn
 * @property integer $ot
 * @property integer $vt
 * @property integer $vl
 * @property integer $p1
 * @property integer $p2
 * @property integer $lg
 * @property integer $lt
 * @property integer $ck
 * @property integer $gd
 * @property integer $st
 * @property integer $cc
 * @property integer $ut
 * @property integer $cr
 * @property integer $dc
 * @property integer $di
 * @property integer $ic
 * @property integer $do
 * @property integer $oc
 * @property integer $gn
 * @property integer $bc
 * @property integer $cy
 * @property integer $cs
 * @property integer $cm
 * @property integer $mc
 * @property integer $uc
 * @property integer $svc
 * @property integer $svcc
 * @property integer $svd
 * @property integer $svdc
 * @property integer $svb
 * @property integer $svbc
 * @property integer $pwt
 * @property integer $pwp1
 * @property integer $pwp2
 * @property integer $pwp3
 * @property string $email
 */
class TAccount extends ActiveRecord implements IdentityInterface {

    /**
     * @inheritdoc
     */
    public static function tableName() {
        return 't_account';
    }

    /**
     * @inheritdoc
     */
    public function rules() {
        return [
            [['bd', 'pv', 'pt', 'el', 'ld', 'ls', 'le', 'll', 'ct', 'cn', 'ot', 'vt', 'vl', 'p1', 'p2', 'lg', 'lt', 'ck', 'gd', 'st', 'cc', 'ut', 'cr', 'dc', 'di', 'ic', 'do', 'oc', 'gn', 'bc', 'cy', 'cs', 'cm', 'mc', 'uc', 'svc', 'svcc', 'svd', 'svdc', 'svb', 'svbc', 'pwt', 'pwp1', 'pwp2', 'pwp3'], 'integer'],
            [['email'], 'string'],
            [['name', 'pwd', 'pw2', 'sc'], 'string', 'max' => 32],
            [['pp', 'lr'], 'string', 'max' => 250],
            [['city', 'ac', 'ai'], 'string', 'max' => 128],
            [['name', 'email'], 'unique']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels() {
        return [
            'accountid' => 'Accountid',
            'name' => 'Tài khoản',
            'pwd' => 'Mật khẩu',
            'pw2' => 'Pw2',
            'sc' => 'Sc',
            'pp' => 'Pp',
            'city' => 'City',
            'bd' => 'Bd',
            'pv' => 'Pv',
            'pt' => 'Pt',
            'el' => 'El',
            'ac' => 'Ac',
            'ai' => 'Ai',
            'lr' => 'Lr',
            'ld' => 'Ld',
            'ls' => 'Ls',
            'le' => 'Le',
            'll' => 'Ll',
            'ct' => 'Ct',
            'cn' => 'Cn',
            'ot' => 'Ot',
            'vt' => 'Vt',
            'vl' => 'Vl',
            'p1' => 'P1',
            'p2' => 'P2',
            'lg' => 'Lg',
            'lt' => 'Lt',
            'ck' => 'Ck',
            'gd' => 'Gd',
            'st' => 'St',
            'cc' => 'Cc',
            'ut' => 'Ut',
            'cr' => 'Cr',
            'dc' => 'Dc',
            'di' => 'Di',
            'ic' => 'Ic',
            'do' => 'Do',
            'oc' => 'Oc',
            'gn' => 'Gn',
            'bc' => 'Bc',
            'cy' => 'Cy',
            'cs' => 'Cs',
            'cm' => 'Cm',
            'mc' => 'Mc',
            'uc' => 'Uc',
            'svc' => 'Svc',
            'svcc' => 'Svcc',
            'svd' => 'Svd',
            'svdc' => 'Svdc',
            'svb' => 'Svb',
            'svbc' => 'Svbc',
            'pwt' => 'Pwt',
            'pwp1' => 'Pwp1',
            'pwp2' => 'Pwp2',
            'pwp3' => 'Pwp3',
            'email' => 'Email',
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
        return $this->accountid;
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
