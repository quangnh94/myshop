-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Feb 15, 2016 at 05:30 PM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `myweb`
--

-- --------------------------------------------------------

--
-- Table structure for table `administrator`
--

CREATE TABLE IF NOT EXISTS `administrator` (
  `id` varchar(200) NOT NULL,
  `password` varchar(64) NOT NULL,
  `created_at` int(11) NOT NULL,
  `updated_at` int(11) NOT NULL,
  `authKey` varchar(250) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `administrator`
--

INSERT INTO `administrator` (`id`, `password`, `created_at`, `updated_at`, `authKey`, `status`) VALUES
('quang.nh94@gmail.com', 'e10adc3949ba59abbe56e057f20f883e', 1454572217, 1454572217, 'e10adc3949ba59abbe56e057f20f883e', 1),
('quang.nh96@gmail.com', 'e10adc3949ba59abbe56e057f20f883e', 1454572217, 1454572217, 'e10adc3949ba59abbe56e057f20f883d', 1);

-- --------------------------------------------------------

--
-- Table structure for table `auth_assignment`
--

CREATE TABLE IF NOT EXISTS `auth_assignment` (
  `item_name` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  `user_id` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` int(11) DEFAULT NULL,
  PRIMARY KEY (`item_name`,`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `auth_assignment`
--

INSERT INTO `auth_assignment` (`item_name`, `user_id`, `created_at`) VALUES
('administrator_define', 'quang.nh94@gmail.com', 1455553784),
('administrator_define', 'quang.nh96@gmail.com', 1455553790),
('administrator_defineauth', 'quang.nh94@gmail.com', 1455553785),
('administrator_defineauth', 'quang.nh96@gmail.com', 1455553790),
('administrator_group', 'quang.nh94@gmail.com', 1455553785),
('administrator_group', 'quang.nh96@gmail.com', 1455553790),
('administrator_grouphandle', 'quang.nh94@gmail.com', 1455553785),
('administrator_grouphandle', 'quang.nh96@gmail.com', 1455553790),
('administrator_index', 'quang.nh94@gmail.com', 1455553785),
('administrator_index', 'quang.nh96@gmail.com', 1455553790),
('administrator_item', 'quang.nh94@gmail.com', 1455553785),
('administrator_item', 'quang.nh96@gmail.com', 1455553790),
('home_index', 'quang.nh94@gmail.com', 1455553784),
('home_index', 'quang.nh96@gmail.com', 1455553790);

-- --------------------------------------------------------

--
-- Table structure for table `auth_group`
--

CREATE TABLE IF NOT EXISTS `auth_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group_name` varchar(250) NOT NULL,
  `created_at` int(11) NOT NULL,
  `updated_at` int(11) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '0',
  `description` varchar(250) NOT NULL,
  `alias` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=15 ;

--
-- Dumping data for table `auth_group`
--

INSERT INTO `auth_group` (`id`, `group_name`, `created_at`, `updated_at`, `status`, `description`, `alias`) VALUES
(1, 'Hệ thống', 1454997894, 1455001682, 1, 'Nhóm quyền hệ thống', ''),
(13, 'Người dùng', 1455000668, 1455000668, 0, 'Nhóm quyền người dùng', ''),
(14, 'Sản phẩm', 1455002048, 1455002100, 1, 'Nhóm quyền sản phẩm', '');

-- --------------------------------------------------------

--
-- Table structure for table `auth_item`
--

CREATE TABLE IF NOT EXISTS `auth_item` (
  `name` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  `type` int(11) NOT NULL,
  `description` text COLLATE utf8_unicode_ci,
  `rule_name` varchar(64) COLLATE utf8_unicode_ci DEFAULT NULL,
  `data` text COLLATE utf8_unicode_ci,
  `created_at` int(11) DEFAULT NULL,
  `updated_at` int(11) DEFAULT NULL,
  `group_id` int(11) NOT NULL,
  `alias` varchar(250) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`name`),
  KEY `rule_name` (`rule_name`),
  KEY `idx-auth_item-type` (`type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `auth_item`
--

INSERT INTO `auth_item` (`name`, `type`, `description`, `rule_name`, `data`, `created_at`, `updated_at`, `group_id`, `alias`) VALUES
('administrator', 1, 'Hệ thống cập nhật', NULL, NULL, 1455119400, 1455458163, 14, 'Quản lý nhóm người dùng'),
('administrator_define', 2, 'Hệ thống cập nhật', NULL, NULL, 1455290372, 1455458167, 14, 'Quản lý định nghĩa quyền người dùng'),
('administrator_defineauth', 2, 'Hệ thống cập nhật', NULL, NULL, 1455351780, 1455458168, 14, 'Định nghĩa quyền'),
('administrator_group', 2, 'Hệ thống cập nhật', NULL, NULL, 1455204320, 1455458165, 14, 'Quản lý nhóm người dùng'),
('administrator_grouphandle', 2, 'Hệ thống cập nhật', NULL, NULL, 1455351747, 1455458166, 14, 'Thao tác xử lý thêm , sửa người dùng'),
('administrator_index', 2, 'Hệ thống cập nhật', NULL, NULL, 1455351730, 1455458165, 14, 'Quản lý trang chính người dùng'),
('administrator_item', 2, 'Hệ thống cập nhật', NULL, NULL, 1455351821, 1455458169, 14, 'Định nghĩa mức quyền'),
('home', 1, 'Hệ thống cập nhật', NULL, NULL, 1455455278, 1455458184, 1, 'Dashboad'),
('home_index', 2, 'Hệ thống cập nhật', NULL, NULL, 1455455289, 1455458183, 1, 'Trang chủ dashboad');

-- --------------------------------------------------------

--
-- Table structure for table `auth_item_child`
--

CREATE TABLE IF NOT EXISTS `auth_item_child` (
  `parent` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  `child` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`parent`,`child`),
  KEY `child` (`child`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `auth_item_child`
--

INSERT INTO `auth_item_child` (`parent`, `child`) VALUES
('administrator', 'administrator_define'),
('administrator', 'administrator_defineauth'),
('administrator', 'administrator_group'),
('administrator', 'administrator_grouphandle'),
('administrator', 'administrator_index'),
('administrator', 'administrator_item'),
('home', 'home_index');

-- --------------------------------------------------------

--
-- Table structure for table `auth_rule`
--

CREATE TABLE IF NOT EXISTS `auth_rule` (
  `name` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  `data` text COLLATE utf8_unicode_ci,
  `created_at` int(11) DEFAULT NULL,
  `updated_at` int(11) DEFAULT NULL,
  PRIMARY KEY (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `auth_assignment`
--
ALTER TABLE `auth_assignment`
  ADD CONSTRAINT `auth_assignment_ibfk_1` FOREIGN KEY (`item_name`) REFERENCES `auth_item` (`name`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `auth_item`
--
ALTER TABLE `auth_item`
  ADD CONSTRAINT `auth_item_ibfk_1` FOREIGN KEY (`rule_name`) REFERENCES `auth_rule` (`name`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `auth_item_child`
--
ALTER TABLE `auth_item_child`
  ADD CONSTRAINT `auth_item_child_ibfk_1` FOREIGN KEY (`parent`) REFERENCES `auth_item` (`name`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `auth_item_child_ibfk_2` FOREIGN KEY (`child`) REFERENCES `auth_item` (`name`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
