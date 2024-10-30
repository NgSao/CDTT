-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 10, 2024 at 05:46 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `laravel_cdttapi`
--

-- --------------------------------------------------------

--
-- Table structure for table `cdtt_banner`
--

CREATE TABLE `cdtt_banner` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(1000) NOT NULL,
  `link` varchar(1000) DEFAULT NULL,
  `image` varchar(1000) NOT NULL,
  `description` mediumtext DEFAULT NULL,
  `position` enum('slideshow','ads') NOT NULL DEFAULT 'slideshow',
  `sort_order` int(10) UNSIGNED NOT NULL,
  `created_by` int(10) UNSIGNED NOT NULL,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cdtt_banner`
--

INSERT INTO `cdtt_banner` (`id`, `name`, `link`, `image`, `description`, `position`, `sort_order`, `created_by`, `updated_by`, `created_at`, `updated_at`, `status`) VALUES
(1, 'sdasd', 'sads', 'ads', 'ads', 'slideshow', 1, 1, 1, '2024-07-30 13:31:11', '2024-07-30 13:29:27', 1),
(2, 'sdasd', 'sads', 'ads', 'ads', 'slideshow', 1, 1, 1, '2024-07-30 13:31:11', '2024-07-30 13:29:27', 1),
(3, 'sdasd', 'sads', 'ads', 'ads', 'slideshow', 1, 1, 1, '2024-07-30 13:31:11', '2024-07-30 13:29:27', 1),
(4, 'sdasd', 'sads', 'ads', 'ads', 'slideshow', 1, 1, 1, '2024-07-30 13:31:11', '2024-07-30 13:29:27', 1),
(5, 'sdasd', 'sads', 'ads', 'ads', 'slideshow', 1, 1, 1, '2024-07-30 13:31:11', '2024-07-30 13:29:27', 1),
(6, 'sdasd', 'sads', 'ads', 'ads', 'slideshow', 1, 1, 1, '2024-07-30 13:31:11', '2024-07-30 13:29:27', 1),
(7, 'sdasd', 'sads', 'ads', 'ads', 'slideshow', 1, 1, 1, '2024-07-30 13:31:11', '2024-07-30 13:29:27', 1),
(8, 'sdasd', 'sads', 'ads', 'ads', 'slideshow', 1, 1, 1, '2024-07-30 13:31:11', '2024-07-30 13:29:27', 1),
(9, 'sdasd', 'sads', 'ads', 'ads', 'slideshow', 1, 1, 1, '2024-07-30 13:31:11', '2024-07-30 13:29:27', 1),
(10, 'sdasd', 'sads', 'ads', 'ads', 'slideshow', 1, 1, 1, '2024-07-30 13:31:11', '2024-07-30 13:29:27', 1),
(11, 'sdasd', 'sads', 'ads', 'ads', 'slideshow', 1, 1, 1, '2024-07-30 13:31:11', '2024-07-30 13:29:27', 1),
(12, 'sdasd', 'sads', 'ads', 'ads', 'slideshow', 1, 1, 1, '2024-07-30 13:31:11', '2024-07-30 13:29:27', 1),
(13, 'sdasd', 'sads', 'ads', 'ads', 'slideshow', 1, 1, 1, '2024-07-30 13:31:11', '2024-07-30 13:29:27', 1),
(14, 'sdasd', 'sads', 'ads', 'ads', 'slideshow', 1, 1, 1, '2024-07-30 13:31:11', '2024-07-30 13:29:27', 1),
(15, 'sdasd', 'sads', 'ads', 'ads', 'slideshow', 1, 1, 1, '2024-07-30 13:31:11', '2024-07-30 13:29:27', 1),
(16, 'sdasd', 'sads', 'ads', 'ads', 'slideshow', 1, 1, 1, '2024-07-30 13:31:11', '2024-07-30 13:29:27', 1);

-- --------------------------------------------------------

--
-- Table structure for table `cdtt_brand`
--

CREATE TABLE `cdtt_brand` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(1000) NOT NULL,
  `slug` varchar(1000) NOT NULL,
  `image` varchar(1000) DEFAULT NULL,
  `description` mediumtext DEFAULT NULL,
  `sort_order` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `created_by` int(10) UNSIGNED NOT NULL,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cdtt_category`
--

CREATE TABLE `cdtt_category` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(1000) NOT NULL,
  `slug` varchar(1000) NOT NULL,
  `parent_id` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `sort_order` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `image` varchar(1000) DEFAULT NULL,
  `description` mediumtext DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cdtt_category`
--

INSERT INTO `cdtt_category` (`id`, `name`, `slug`, `parent_id`, `sort_order`, `image`, `description`, `created_by`, `updated_by`, `created_at`, `updated_at`, `status`) VALUES
(1, 'dsad', 'sadsd', 3, 1, NULL, NULL, 1, NULL, '2023-09-22 07:00:08', '2023-09-22 07:25:33', 1),
(2, 'AO thun nam', 'ao-thun-nam', 0, 1, NULL, NULL, 1, NULL, '2023-09-22 07:02:19', '2023-09-22 07:02:19', 1),
(3, 'sdsad', 'sadsad', 2, 1, NULL, NULL, 1, NULL, '2023-09-22 07:07:38', '2023-09-22 07:07:38', 2),
(4, 'dsdsfdsfd', 'dsfd safddsfdsfds fds fds fds fdsf', 3, 1, NULL, NULL, 1, NULL, '2023-09-22 07:08:09', '2023-09-22 07:08:09', 1);

-- --------------------------------------------------------

--
-- Table structure for table `cdtt_config`
--

CREATE TABLE `cdtt_config` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `site_name` varchar(1000) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phones` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `hotline` varchar(255) NOT NULL,
  `zalo` varchar(255) NOT NULL,
  `facebook` varchar(255) NOT NULL,
  `status` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cdtt_contact`
--

CREATE TABLE `cdtt_contact` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(100) NOT NULL,
  `title` varchar(1000) NOT NULL,
  `content` text NOT NULL,
  `replay_id` int(10) UNSIGNED NOT NULL DEFAULT 0,
  `created_by` int(10) UNSIGNED NOT NULL,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cdtt_menu`
--

CREATE TABLE `cdtt_menu` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(1000) NOT NULL,
  `link` varchar(1000) NOT NULL,
  `type` varchar(100) NOT NULL,
  `table_id` int(10) UNSIGNED NOT NULL,
  `created_by` int(10) UNSIGNED NOT NULL,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cdtt_order`
--

CREATE TABLE `cdtt_order` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(100) NOT NULL,
  `address` varchar(100) NOT NULL,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cdtt_orderdetail`
--

CREATE TABLE `cdtt_orderdetail` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL,
  `qty` int(10) UNSIGNED NOT NULL,
  `price` double(12,2) UNSIGNED NOT NULL,
  `created_by` int(10) UNSIGNED NOT NULL,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cdtt_post`
--

CREATE TABLE `cdtt_post` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(1000) NOT NULL,
  `topic_id` int(10) UNSIGNED DEFAULT NULL,
  `content` longtext NOT NULL,
  `description` mediumtext DEFAULT NULL,
  `thumbnail` varchar(1000) NOT NULL,
  `type` enum('post','page') NOT NULL DEFAULT 'post',
  `created_by` int(10) UNSIGNED NOT NULL,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cdtt_product`
--

CREATE TABLE `cdtt_product` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `category_id` int(10) UNSIGNED NOT NULL,
  `brand_id` int(10) UNSIGNED NOT NULL,
  `name` varchar(1000) NOT NULL,
  `slug` varchar(1000) NOT NULL,
  `detail` text NOT NULL,
  `price` double(12,2) UNSIGNED NOT NULL,
  `description` mediumtext DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cdtt_product_image`
--

CREATE TABLE `cdtt_product_image` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL,
  `thumbnail` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cdtt_product_sale`
--

CREATE TABLE `cdtt_product_sale` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL,
  `price_sale` double(12,2) UNSIGNED NOT NULL,
  `date_begin` datetime NOT NULL,
  `date_end` datetime NOT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cdtt_product_store`
--

CREATE TABLE `cdtt_product_store` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_id` int(10) UNSIGNED NOT NULL,
  `type` enum('import','export') NOT NULL,
  `price` double(12,2) UNSIGNED NOT NULL,
  `qty` int(10) UNSIGNED NOT NULL,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------


-- Table structure for table `cdtt_topic`
--

CREATE TABLE `cdtt_topic` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(1000) NOT NULL,
  `slug` varchar(1000) NOT NULL,
  `sort_order` int(10) UNSIGNED NOT NULL DEFAULT 1,
  `description` mediumtext DEFAULT NULL,
  `created_by` int(10) UNSIGNED NOT NULL,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cdtt_user`
--

CREATE TABLE `cdtt_user` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `fullname` varchar(100) NOT NULL,
  `gender` varchar(100) NOT NULL,
  `thumbnail` varchar(1000) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(100) NOT NULL,
  `address` varchar(255) NOT NULL,
  `roles` enum('admin','customer') NOT NULL DEFAULT 'customer',
  `created_by` int(10) UNSIGNED NOT NULL,
  `updated_by` int(10) UNSIGNED DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `status` tinyint(3) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cdtt_banner`
--
ALTER TABLE `cdtt_banner`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cdtt_brand`
--
ALTER TABLE `cdtt_brand`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cdtt_category`
--
ALTER TABLE `cdtt_category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cdtt_config`
--
ALTER TABLE `cdtt_config`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cdtt_contact`
--
ALTER TABLE `cdtt_contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cdtt_menu`
--
ALTER TABLE `cdtt_menu`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cdtt_order`
--
ALTER TABLE `cdtt_order`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cdtt_orderdetail`
--
ALTER TABLE `cdtt_orderdetail`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cdtt_post`
--
ALTER TABLE `cdtt_post`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cdtt_product`
--
ALTER TABLE `cdtt_product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cdtt_product_image`
--
ALTER TABLE `cdtt_product_image`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cdtt_product_sale`
--
ALTER TABLE `cdtt_product_sale`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cdtt_product_store`
--
ALTER TABLE `cdtt_product_store`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cdtt_topic`
--
ALTER TABLE `cdtt_topic`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cdtt_user`
--
ALTER TABLE `cdtt_user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cdtt_banner`
--
ALTER TABLE `cdtt_banner`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `cdtt_brand`
--
ALTER TABLE `cdtt_brand`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `cdtt_category`
--
ALTER TABLE `cdtt_category`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `cdtt_config`
--
ALTER TABLE `cdtt_config`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cdtt_contact`
--
ALTER TABLE `cdtt_contact`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cdtt_menu`
--
ALTER TABLE `cdtt_menu`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cdtt_order`
--
ALTER TABLE `cdtt_order`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cdtt_orderdetail`
--
ALTER TABLE `cdtt_orderdetail`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cdtt_post`
--
ALTER TABLE `cdtt_post`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cdtt_product`
--
ALTER TABLE `cdtt_product`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `cdtt_product_image`
--
ALTER TABLE `cdtt_product_image`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cdtt_product_sale`
--
ALTER TABLE `cdtt_product_sale`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cdtt_product_store`
--
ALTER TABLE `cdtt_product_store`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cdtt_topic`
--
ALTER TABLE `cdtt_topic`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `cdtt_user`
--
ALTER TABLE `cdtt_user`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
