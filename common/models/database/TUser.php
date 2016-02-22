<?php

namespace common\models\database;

use Yii;

/**
 * This is the model class for table "t_user".
 *
 * @property string $dbid
 * @property string $name
 * @property string $accountid
 * @property string $totalexp
 * @property string $totalgodexp
 * @property string $password
 * @property string $guild
 * @property integer $deleted
 * @property integer $locked
 * @property integer $changename
 * @property integer $freeze
 * @property integer $lockedtime
 * @property integer $deletetime
 * @property integer $createtime
 * @property integer $teacherpoint
 * @property integer $party
 * @property integer $level
 * @property integer $godlevel
 * @property integer $exp
 * @property integer $nimbus
 * @property integer $talent
 * @property integer $hp
 * @property integer $mp
 * @property integer $map
 * @property integer $x
 * @property integer $y
 * @property integer $pk
 * @property integer $money
 * @property integer $bankmoney
 * @property integer $appearance
 * @property integer $lastlevuptime
 * @property integer $onlinetime
 * @property integer $lastupdatetime
 * @property integer $pv
 * @property integer $ip
 * @property integer $ipsafe
 * @property integer $ipptime
 * @property resource $equipment
 * @property resource $data
 * @property integer $bindmoney
 * @property integer $pvpscore
 * @property integer $pvescore
 */
class TUser extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return 't_user';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['dbid'], 'required'],
            [['dbid', 'accountid', 'totalexp', 'totalgodexp', 'deleted', 'locked', 'changename', 'freeze', 'lockedtime', 'deletetime', 'createtime', 'teacherpoint', 'party', 'level', 'godlevel', 'exp', 'nimbus', 'talent', 'hp', 'mp', 'map', 'x', 'y', 'pk', 'money', 'bankmoney', 'appearance', 'lastlevuptime', 'onlinetime', 'lastupdatetime', 'pv', 'ip', 'ipsafe', 'ipptime', 'bindmoney', 'pvpscore', 'pvescore'], 'integer'],
            [['equipment', 'data'], 'string'],
            [['name', 'guild'], 'string', 'max' => 32],
            [['password'], 'string', 'max' => 64],
            [['name'], 'unique']
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'dbid' => 'Dbid',
            'name' => 'Name',
            'accountid' => 'Accountid',
            'totalexp' => 'Totalexp',
            'totalgodexp' => 'Totalgodexp',
            'password' => 'Password',
            'guild' => 'Guild',
            'deleted' => 'Deleted',
            'locked' => 'Locked',
            'changename' => 'Changename',
            'freeze' => 'Freeze',
            'lockedtime' => 'Lockedtime',
            'deletetime' => 'Deletetime',
            'createtime' => 'Createtime',
            'teacherpoint' => 'Teacherpoint',
            'party' => 'Party',
            'level' => 'Level',
            'godlevel' => 'Godlevel',
            'exp' => 'Exp',
            'nimbus' => 'Nimbus',
            'talent' => 'Talent',
            'hp' => 'Hp',
            'mp' => 'Mp',
            'map' => 'Map',
            'x' => 'X',
            'y' => 'Y',
            'pk' => 'Pk',
            'money' => 'Money',
            'bankmoney' => 'Bankmoney',
            'appearance' => 'Appearance',
            'lastlevuptime' => 'Lastlevuptime',
            'onlinetime' => 'Onlinetime',
            'lastupdatetime' => 'Lastupdatetime',
            'pv' => 'Pv',
            'ip' => 'Ip',
            'ipsafe' => 'Ipsafe',
            'ipptime' => 'Ipptime',
            'equipment' => 'Equipment',
            'data' => 'Data',
            'bindmoney' => 'Bindmoney',
            'pvpscore' => 'Pvpscore',
            'pvescore' => 'Pvescore',
        ];
    }
}
