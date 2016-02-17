<?php

namespace common\components\utils;

use ReflectionClass;

class FileUtils {

    private static $root = "../../backend/controllers";

    public static function read_all_files($root = '.') {
        $files = array('files' => array(), 'dirs' => array());
        $directories = array();
        $last_letter = $root[strlen($root) - 1];
        $root = ($last_letter == '\\' || $last_letter == '/') ? $root : $root . DIRECTORY_SEPARATOR;

        $directories[] = $root;

        while (sizeof($directories)) {
            $dir = array_pop($directories);
            if ($handle = opendir($dir)) {
                while (false !== ($file = readdir($handle))) {
                    if ($file == '.' || $file == '..') {
                        continue;
                    }
                    $file = $dir . $file;
                    if (is_dir($file)) {
                        $directory_path = $file . DIRECTORY_SEPARATOR;
                        array_push($directories, $directory_path);
                        $files['dirs'][] = $directory_path;
                    } elseif (is_file($file)) {
                        $files['files'][] = $file;
                    }
                }
                closedir($handle);
            }
        }

        return $files;
    }

    /**
     * get all quyền 
     * @return string
     */
    public static function getServices() {
        $func = [];
        $func = self::readFunction(self::$root, $func);
        return $func;
    }

    private static function readFunction($path, $func = []) {
        $files = self::read_all_files($path);
        $namespace = [];
        $rewriteRule = [];
        foreach ($files['files'] as $file) {
            require_once $file;
            $phpFile = self::readClass($file);
            foreach ($phpFile as $nspace => $className) {
                $cl = @$namespace[$nspace];
                if ($cl == null) {
                    $cl = [];
                }
                $namespace[$nspace] = array_merge($cl, $className);
            }
        }
        $func = [];
        foreach ($namespace as $nspace => $classNames) {
            $file = explode("\\", $nspace);
            $file = end($file);
            foreach ($classNames as $className) {
                $class = new ReflectionClass($nspace . "\\" . $className);
                $controllerName = explode("\\", $class->getName());
                $controllerName = strtolower(explode("Controller", end($controllerName))[0]);
                if ($controllerName == 'service' || $controllerName == 'base' || $controllerName == 'auth') {
                    continue;
                }
                if (!isset($func[$controllerName])) {
                    $func[$controllerName] = [];
                }
                foreach ($class->getMethods() as $method) {
                    $method = strtolower($method->getName());
                    if (preg_match('/^action/', $method) && $method != 'actions') {
                        $func[$controllerName][] = $controllerName . "_" . explode("action", $method)[1];
                    }
                }
            }
        }
        return $func;
    }

    private static function readClass($file) {
        $class = [];
        if (file_exists($file)) {
            $php_code = file_get_contents($file);
            $class = self::get_php_classes($php_code);
        }
        return $class;
    }

    private static function get_php_classes($phpcode) {
        $classes = array();

        $namespace = 0;
        $tokens = token_get_all($phpcode);
        $count = count($tokens);
        $dlm = false;
        for ($i = 2; $i < $count; $i++) {
            if ((isset($tokens[$i - 2][1]) && ($tokens[$i - 2][1] == "phpnamespace" || $tokens[$i - 2][1] == "namespace")) ||
                    ($dlm && $tokens[$i - 1][0] == T_NS_SEPARATOR && $tokens[$i][0] == T_STRING)) {
                if (!$dlm)
                    $namespace = 0;
                if (isset($tokens[$i][1])) {
                    $namespace = $namespace ? $namespace . "\\" . $tokens[$i][1] : $tokens[$i][1];
                    $dlm = true;
                }
            } elseif ($dlm && ($tokens[$i][0] != T_NS_SEPARATOR) && ($tokens[$i][0] != T_STRING)) {
                $dlm = false;
            }
            if (($tokens[$i - 2][0] == T_CLASS || (isset($tokens[$i - 2][1]) && $tokens[$i - 2][1] == "phpclass")) && $tokens[$i - 1][0] == T_WHITESPACE && $tokens[$i][0] == T_STRING) {
                $class_name = $tokens[$i][1];
                if (!isset($classes[$namespace]))
                    $classes[$namespace] = array();
                $classes[$namespace][] = $class_name;
            }
        }
        return $classes;
    }

}
