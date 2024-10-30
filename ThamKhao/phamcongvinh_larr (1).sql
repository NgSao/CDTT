-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 12, 2024 at 01:54 PM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `phamcongvinh_larr`
--

-- --------------------------------------------------------

--
-- Table structure for table `db_banner`
--

CREATE TABLE `db_banner` (
  `id` int UNSIGNED NOT NULL,
  `name` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `link` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `image` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sort_order` int UNSIGNED DEFAULT '0',
  `position` enum('slideshow','ads') COLLATE utf8mb4_unicode_ci DEFAULT 'slideshow',
  `description` tinytext COLLATE utf8mb4_unicode_ci,
  `created_at` datetime NOT NULL,
  `created_by` int UNSIGNED NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `updated_by` int UNSIGNED DEFAULT NULL,
  `status` tinyint UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_banner`
--

INSERT INTO `db_banner` (`id`, `name`, `link`, `image`, `sort_order`, `position`, `description`, `created_at`, `created_by`, `updated_at`, `updated_by`, `status`) VALUES
(1, 'banner1', 'banner1/home', '20240924031007.png', NULL, 'slideshow', 'banner1', '2024-09-12 09:37:41', 1, '2024-10-07 08:12:48', 1, 1),
(2, 'Second Item', 'http://example.com/second', '20240912035647.jpg', 1, 'slideshow', 'Description for the second item', '2024-09-12 09:37:41', 1, '2024-09-24 14:13:56', 1, 1),
(3, 'tran chau pho mai', '/home', '20240912035647.jpg', 1, 'slideshow', 'sdadas', '2024-09-12 03:56:47', 1, '2024-09-12 03:56:47', NULL, 1),
(4, 'sdasdaa', '/home', '20240912042254.jpg', 1, 'slideshow', 'sdadas', '2024-09-12 04:22:54', 1, '2024-09-26 02:21:08', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `db_brand`
--

CREATE TABLE `db_brand` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` mediumtext COLLATE utf8mb4_unicode_ci,
  `sort_order` int UNSIGNED NOT NULL DEFAULT '1',
  `created_by` int UNSIGNED NOT NULL,
  `updated_by` int UNSIGNED DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `status` tinyint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_brand`
--

INSERT INTO `db_brand` (`id`, `name`, `slug`, `image`, `description`, `sort_order`, `created_by`, `updated_by`, `created_at`, `updated_at`, `status`) VALUES
(1, 'hades', 'hades', '20240915120632.jpg', 'áaaaa', 1, 1, NULL, '2024-09-15 12:06:32', '2024-09-15 12:06:32', 1),
(2, 'hadess', 'hades', '20240923074617.png', 'hhhh', 1, 1, 1, '2024-09-23 05:02:11', '2024-09-23 07:46:17', 1),
(3, 'saigonnow1', 'sai-gon-now', '20240923050439.png', 'ádasd', 1, 1, 1, '2024-09-23 05:04:39', '2024-09-23 07:10:29', 1),
(4, 'saigonnow2', 'sai-gon-now', '20240923050713.png', 'sadsdsd', 1, 1, 1, '2024-09-23 05:07:13', '2024-09-23 07:10:33', 1),
(5, 'saigonnoweeee', 'sai-gon-now', '20240923074524.png', 'sài gòn now', 1, 1, 1, '2024-09-23 05:16:46', '2024-09-26 09:55:13', 1),
(7, 'bbb', 'aaa', '20240923101451.png', 'sdssd', 1, 1, 1, '2024-09-23 10:14:51', '2024-09-26 09:56:24', 1);

-- --------------------------------------------------------

--
-- Table structure for table `db_cart`
--

CREATE TABLE `db_cart` (
  `id` int UNSIGNED NOT NULL,
  `user_id` int UNSIGNED NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `updated_by` int UNSIGNED DEFAULT NULL,
  `status` tinyint UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `db_cartdetail`
--

CREATE TABLE `db_cartdetail` (
  `id` int UNSIGNED NOT NULL,
  `cart_id` int UNSIGNED NOT NULL,
  `product_id` int UNSIGNED NOT NULL,
  `qty` int UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `db_category`
--

CREATE TABLE `db_category` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `parent_id` int UNSIGNED NOT NULL DEFAULT '0',
  `sort_order` int UNSIGNED NOT NULL DEFAULT '1',
  `image` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` mediumtext COLLATE utf8mb4_unicode_ci,
  `created_by` int UNSIGNED NOT NULL,
  `updated_by` int UNSIGNED DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `status` tinyint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_category`
--

INSERT INTO `db_category` (`id`, `name`, `slug`, `parent_id`, `sort_order`, `image`, `description`, `created_by`, `updated_by`, `created_at`, `updated_at`, `status`) VALUES
(1, 'a', 'a', 1, 1, '20240923080603.png', '1111', 1, 1, '2023-09-22 07:00:08', '2024-09-23 10:37:04', 1),
(2, 'AO thun nammmm', 'ao-thun-nam', 1, 1, '20240923100152.png', 'dssdsd', 1, 1, '2023-09-22 07:02:19', '2024-09-23 10:29:31', 1),
(3, 'bb', 'sadsad', 2, 1, '20240920183627.png', NULL, 1, 1, '2023-09-22 07:07:38', '2024-09-24 14:20:48', 1),
(4, 'cate4', 'dsfd safddsfdsfds fds fds fds fdsf', 3, 1, '20240923081826.png', NULL, 1, 1, '2023-09-22 07:08:09', '2024-09-25 17:28:43', 1);

-- --------------------------------------------------------

--
-- Table structure for table `db_config`
--

CREATE TABLE `db_config` (
  `id` bigint UNSIGNED NOT NULL,
  `site_name` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phones` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hotline` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `zalo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `facebook` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` tinyint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_config`
--

INSERT INTO `db_config` (`id`, `site_name`, `email`, `phones`, `address`, `hotline`, `zalo`, `facebook`, `status`) VALUES
(1, 'a', 'a@gmail.com', '0645789435', 'thành phố hồ chí minh', '0648975362', '0648975362', 'hades việt nam', 1);

-- --------------------------------------------------------

--
-- Table structure for table `db_contact`
--

CREATE TABLE `db_contact` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `replay_id` int UNSIGNED NOT NULL DEFAULT '0',
  `created_by` int UNSIGNED NOT NULL,
  `updated_by` int UNSIGNED DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `status` tinyint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `db_menu`
--

CREATE TABLE `db_menu` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `link` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `table_id` int UNSIGNED NOT NULL,
  `created_by` int UNSIGNED NOT NULL,
  `updated_by` int UNSIGNED DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `status` tinyint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_menu`
--

INSERT INTO `db_menu` (`id`, `name`, `link`, `type`, `table_id`, `created_by`, `updated_by`, `created_at`, `updated_at`, `status`) VALUES
(1, 'Home', '/home', 'home', 1, 1, NULL, '2024-09-15 23:30:51', '2024-09-15 23:30:51', 1);

-- --------------------------------------------------------

--
-- Table structure for table `db_order`
--

CREATE TABLE `db_order` (
  `id` int UNSIGNED NOT NULL,
  `user_id` int UNSIGNED NOT NULL,
  `name` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(13) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `note` tinytext COLLATE utf8mb4_unicode_ci,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `updated_by` int UNSIGNED DEFAULT NULL,
  `status` tinyint UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_order`
--

INSERT INTO `db_order` (`id`, `user_id`, `name`, `phone`, `email`, `address`, `note`, `created_at`, `updated_at`, `updated_by`, `status`) VALUES
(1, 13, 'vvv', '0965846324', 'v@gmail.com', 'hồ chí minh', 'ship sớm dùm em nha', NULL, NULL, NULL, 1),
(2, 13, 'Tên khách hàng mặc định', '0123456789', 'customer@example.com', 'Địa chỉ mặc định', NULL, '2024-09-25 05:31:23', '2024-09-25 05:31:23', NULL, 1),
(3, 13, 'Tên khách hàng mặc định', '0123456789', 'customer@example.com', 'Địa chỉ mặc định', NULL, '2024-09-25 05:33:25', '2024-09-25 05:33:25', NULL, 1),
(4, 13, 'Tên khách hàng mặc định', '0123456789', 'customer@example.com', 'Địa chỉ mặc định', NULL, '2024-09-25 05:37:58', '2024-09-25 05:37:58', NULL, 1),
(5, 13, 'Tên khách hàng mặc định', '0123456789', 'customer@example.com', 'Địa chỉ mặc định', NULL, '2024-09-25 05:39:10', '2024-09-25 05:39:10', NULL, 1),
(6, 13, 'Tên khách hàng mặc định', '0123456789', 'customer@example.com', 'Địa chỉ mặc định', NULL, '2024-09-25 06:04:49', '2024-09-25 06:04:49', NULL, 1),
(7, 14, 'Tên khách hàng mặc định', '0123456789', 'customer@example.com', 'Địa chỉ mặc định', NULL, '2024-09-26 01:55:33', '2024-09-26 01:55:33', NULL, 1),
(8, 14, 'Tên khách hàng mặc định', '0123456789', 'customer@example.com', 'Địa chỉ mặc định', NULL, '2024-09-26 02:11:43', '2024-09-26 02:11:43', NULL, 1),
(9, 15, 'Tên khách hàng mặc định', '0123456789', 'customer@example.com', 'Địa chỉ mặc định', NULL, '2024-09-26 02:15:01', '2024-09-26 02:15:01', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `db_orderdetail`
--

CREATE TABLE `db_orderdetail` (
  `id` int UNSIGNED NOT NULL,
  `order_id` int UNSIGNED NOT NULL,
  `product_id` int UNSIGNED NOT NULL,
  `qty` int UNSIGNED NOT NULL,
  `price` float NOT NULL,
  `amount` float NOT NULL,
  `discount` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_orderdetail`
--

INSERT INTO `db_orderdetail` (`id`, `order_id`, `product_id`, `qty`, `price`, `amount`, `discount`) VALUES
(1, 1, 18, 5, 50000, 250000, 0),
(2, 5, 19, 1, 50000, 50000, 0),
(3, 6, 19, 50, 50000, 2500000, 0),
(4, 7, 19, 5, 50000, 249505, 495),
(5, 8, 19, 5, 50000, 249505, 495),
(6, 9, 18, 5, 100000, 499700, 300);

-- --------------------------------------------------------

--
-- Table structure for table `db_post`
--

CREATE TABLE `db_post` (
  `id` bigint UNSIGNED NOT NULL,
  `title` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `topic_id` int UNSIGNED DEFAULT NULL,
  `content` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` mediumtext COLLATE utf8mb4_unicode_ci,
  `thumbnail` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` enum('post','page') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'post',
  `created_by` int UNSIGNED NOT NULL,
  `updated_by` int UNSIGNED DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `status` tinyint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `db_product`
--

CREATE TABLE `db_product` (
  `id` int UNSIGNED NOT NULL,
  `name` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `category_id` int UNSIGNED NOT NULL,
  `brand_id` int UNSIGNED NOT NULL,
  `content` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` tinytext COLLATE utf8mb4_unicode_ci,
  `pricebuy` float NOT NULL,
  `created_at` datetime NOT NULL,
  `created_by` int UNSIGNED NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `updated_by` int UNSIGNED DEFAULT NULL,
  `status` tinyint UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_product`
--

INSERT INTO `db_product` (`id`, `name`, `slug`, `category_id`, `brand_id`, `content`, `description`, `pricebuy`, `created_at`, `created_by`, `updated_at`, `updated_by`, `status`) VALUES
(18, 'cap nhat 22', 'cap-nhat', 2, 1, 'cap nhat', 'description cap nhat', 100000, '2024-09-22 14:37:57', 1, '2024-09-23 03:02:28', 1, 1),
(19, 'aaaaaa', 'ssss', 1, 1, 'Nội dsadasdaung mô ta sản phẩm', 'đây là sản phẩm ok lắm', 50000, '2024-09-22 14:38:49', 1, '2024-10-07 08:58:56', 1, 1),
(20, 'cap nhat20', 'cap-nhat', 2, 1, 'cap nhat', 'description cap nhatttt', 100000, '2024-10-05 20:07:24', 1, '2024-10-05 21:15:43', 1, 1),
(21, 'cap nhat', 'cap-nhat', 2, 1, 'cap nhat', 'description cap nhat', 100000, '2024-10-05 21:06:45', 1, '2024-10-07 08:32:01', 1, 1),
(22, 'new', 'new', 1, 1, 'new', 'new', 10000, '2024-10-06 07:03:10', 1, '2024-10-06 07:03:10', NULL, 1),
(23, 'san pham new', 'san-pham-new', 1, 1, 'mới bán', 'mới bán', 10, '2024-10-11 21:05:59', 1, '2024-10-11 21:05:59', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `db_productimage`
--

CREATE TABLE `db_productimage` (
  `id` int UNSIGNED NOT NULL,
  `product_id` int UNSIGNED NOT NULL,
  `thumbnail` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_productimage`
--

INSERT INTO `db_productimage` (`id`, `product_id`, `thumbnail`) VALUES
(1, 18, '20240922143757_66efc955f0856.jpg'),
(2, 19, '20241007085856_67034060da1cb.jpg'),
(3, 20, '20241005200724_67013a0ce971e.jpg'),
(4, 21, '20241007082832_670339404aaf8.jpg'),
(5, 22, '20241006070310_6701d3bedeb57.jpg'),
(6, 23, '20241011210559_670930c7b93e0.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `db_productsale`
--

CREATE TABLE `db_productsale` (
  `id` int UNSIGNED NOT NULL,
  `product_id` int UNSIGNED NOT NULL,
  `pricesale` float NOT NULL,
  `datebegin` datetime DEFAULT NULL,
  `dateend` datetime DEFAULT NULL,
  `created_at` datetime NOT NULL,
  `created_by` int UNSIGNED NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `updated_by` int UNSIGNED DEFAULT NULL,
  `status` tinyint UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_productsale`
--

INSERT INTO `db_productsale` (`id`, `product_id`, `pricesale`, `datebegin`, `dateend`, `created_at`, `created_by`, `updated_at`, `updated_by`, `status`) VALUES
(1, 18, 60, '2024-09-22 00:00:00', '2024-09-30 23:59:59', '2024-09-22 14:37:57', 1, '2024-09-26 02:13:42', 1, 1),
(2, 19, 99, '2024-09-22 16:59:00', '2024-09-29 00:59:00', '2024-09-22 14:38:50', 1, '2024-09-23 10:03:44', 1, 1),
(3, 20, 10, '2024-10-07 08:49:00', '2024-10-07 10:49:00', '2024-10-05 20:07:24', 1, '2024-10-07 08:49:36', 1, 1),
(4, 21, 0, NULL, NULL, '2024-10-05 21:06:45', 1, '2024-10-07 08:17:22', 1, 2),
(5, 22, 0, NULL, NULL, '2024-10-06 07:03:10', 1, '2024-10-07 08:17:24', NULL, 2),
(6, 23, 0, NULL, NULL, '2024-10-11 21:05:59', 1, '2024-10-11 21:05:59', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `db_productstore`
--

CREATE TABLE `db_productstore` (
  `id` int UNSIGNED NOT NULL,
  `product_id` int UNSIGNED NOT NULL,
  `priceroot` float NOT NULL,
  `qty` int UNSIGNED NOT NULL,
  `dateimport` datetime NOT NULL,
  `created_at` datetime NOT NULL,
  `created_by` int UNSIGNED NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `updated_by` int UNSIGNED DEFAULT NULL,
  `status` tinyint UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_productstore`
--

INSERT INTO `db_productstore` (`id`, `product_id`, `priceroot`, `qty`, `dateimport`, `created_at`, `created_by`, `updated_at`, `updated_by`, `status`) VALUES
(2, 18, 100, 94, '2024-09-22 14:37:57', '2024-09-22 14:37:57', 1, '2024-09-26 02:15:02', 1, 1),
(3, 19, 10000, 40, '2024-09-22 14:38:50', '2024-09-22 14:38:50', 1, '2024-10-06 06:46:41', 1, 1),
(4, 20, 40000, 100, '2024-10-05 20:07:24', '2024-10-05 20:07:24', 1, '2024-10-05 20:07:24', NULL, 1),
(5, 21, 10000, 2000, '2024-10-05 21:06:45', '2024-10-05 21:06:45', 1, '2024-10-06 06:51:16', NULL, 1),
(6, 22, 20000, 200, '2024-10-06 07:03:10', '2024-10-06 07:03:10', 1, '2024-10-06 07:06:17', NULL, 1),
(7, 23, 20, 200, '2024-10-11 21:05:59', '2024-10-11 21:05:59', 1, '2024-10-11 21:05:59', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `db_topic`
--

CREATE TABLE `db_topic` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `slug` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sort_order` int UNSIGNED NOT NULL DEFAULT '1',
  `description` mediumtext COLLATE utf8mb4_unicode_ci,
  `created_by` int UNSIGNED NOT NULL,
  `updated_by` int UNSIGNED DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `status` tinyint UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_topic`
--

INSERT INTO `db_topic` (`id`, `name`, `slug`, `sort_order`, `description`, `created_by`, `updated_by`, `created_at`, `updated_at`, `status`) VALUES
(1, 'a', 'aa', 1, 'aaaaa', 1, NULL, '2024-09-15 12:38:51', '2024-09-15 12:38:51', 1);

-- --------------------------------------------------------

--
-- Table structure for table `db_users`
--

CREATE TABLE `db_users` (
  `id` int UNSIGNED NOT NULL,
  `name` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(13) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(1000) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `gender` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `thumbnail` varchar(1000) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `roles` enum('admin','customer') COLLATE utf8mb4_unicode_ci DEFAULT 'admin',
  `username` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `created_by` int UNSIGNED DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `updated_by` int UNSIGNED DEFAULT NULL,
  `status` tinyint UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `db_users`
--

INSERT INTO `db_users` (`id`, `name`, `email`, `phone`, `address`, `gender`, `thumbnail`, `roles`, `username`, `password`, `created_at`, `created_by`, `updated_at`, `updated_by`, `status`) VALUES
(13, 'vvv', 'v@gmail.com', '0965846324', 'hồ chí minh', 'nam', '20240924232442.png', 'customer', 'vinhthuhai', '$2y$12$UaOyfIgz78ZBLqXMutW9.uLr0aQ1Ha3AiLxjOw.7xw0BaxW5djtvm', '2024-09-24 20:26:43', NULL, '2024-09-25 00:29:22', 1, 0),
(14, 'Phạm Công Vinh', 'vinhcph554@gmail.com', '0928697598', 'ho chi minh', 'nam', '20240924232304.png', 'customer', 'vinhb', '$2y$12$w.SGaGmVjqdUzQpJcWyIIuIY9LnViZ5KgyNFIv.jnBIbf7VrSTEO2', '2024-09-24 20:29:49', NULL, '2024-09-26 09:31:43', 1, 2),
(15, 'vinh bums', 'bumn@gmail.com', '0926759843', 'ho chi minh', 'nam', '20240925003337.png', 'customer', 'vinhbumn', '$2y$12$aldhkdFk5mmtuemqd2Y2euYDu8/97LVJGSdMQfzqAj6x17jQuCaT2', '2024-09-25 00:31:55', NULL, '2024-09-25 00:33:37', 1, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `db_banner`
--
ALTER TABLE `db_banner`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_brand`
--
ALTER TABLE `db_brand`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_category`
--
ALTER TABLE `db_category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_config`
--
ALTER TABLE `db_config`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_menu`
--
ALTER TABLE `db_menu`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_order`
--
ALTER TABLE `db_order`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_orderdetail`
--
ALTER TABLE `db_orderdetail`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_product`
--
ALTER TABLE `db_product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_productimage`
--
ALTER TABLE `db_productimage`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_id` (`product_id`);

--
-- Indexes for table `db_productsale`
--
ALTER TABLE `db_productsale`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_productstore`
--
ALTER TABLE `db_productstore`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_topic`
--
ALTER TABLE `db_topic`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `db_users`
--
ALTER TABLE `db_users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `db_banner`
--
ALTER TABLE `db_banner`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `db_brand`
--
ALTER TABLE `db_brand`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `db_category`
--
ALTER TABLE `db_category`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `db_config`
--
ALTER TABLE `db_config`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `db_menu`
--
ALTER TABLE `db_menu`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `db_order`
--
ALTER TABLE `db_order`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `db_orderdetail`
--
ALTER TABLE `db_orderdetail`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `db_product`
--
ALTER TABLE `db_product`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `db_productimage`
--
ALTER TABLE `db_productimage`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `db_productsale`
--
ALTER TABLE `db_productsale`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `db_productstore`
--
ALTER TABLE `db_productstore`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `db_topic`
--
ALTER TABLE `db_topic`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `db_users`
--
ALTER TABLE `db_users`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `db_productimage`
--
ALTER TABLE `db_productimage`
  ADD CONSTRAINT `db_productimage_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `db_product` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
