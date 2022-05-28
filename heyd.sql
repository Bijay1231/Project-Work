-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 06, 2021 at 07:14 PM
-- Server version: 5.7.32-log
-- PHP Version: 7.3.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `heyd`
--

-- --------------------------------------------------------

--
-- Table structure for table `address`
--

CREATE TABLE `address` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT '0',
  `address` text,
  `pincode` int(11) DEFAULT NULL,
  `state` varchar(150) DEFAULT NULL,
  `phoneNumber` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `address`
--

INSERT INTO `address` (`id`, `userId`, `address`, `pincode`, `state`, `phoneNumber`) VALUES
(20, 0, 'Line no - 23 , H.no -346 ,', 151507, 'near ice and bake', '06206100671'),
(23, 4, 'hn0 111,line n0 9, b,block,', 831001, 'Jharkhand', '7004937515'),
(24, 0, 'hn0 111,line n0 9, b,block,', 831001, 'Banglore', '7004937515'),
(25, 0, 'hn0 111,line n0 9, b,block,', 831001, 'Jharkhand', '7004937515');

-- --------------------------------------------------------

--
-- Table structure for table `banners`
--

CREATE TABLE `banners` (
  `id` int(11) DEFAULT NULL,
  `bannerName` varchar(150) DEFAULT NULL,
  `bannerImgUrl` varchar(300) DEFAULT NULL,
  `positionID` smallint(6) DEFAULT NULL,
  `hyperLink` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `blog`
--

CREATE TABLE `blog` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `title` varchar(180) DEFAULT NULL,
  `metaDesc` varchar(255) DEFAULT NULL,
  `seoKeywords` varchar(255) DEFAULT NULL,
  `description` text,
  `blogCategoryID` int(11) DEFAULT NULL,
  `thumbnail` varchar(255) DEFAULT NULL,
  `tags` varchar(300) DEFAULT NULL,
  `activeStatus` enum('0','1') DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `blogCategory`
--

CREATE TABLE `blogCategory` (
  `id` int(11) DEFAULT NULL,
  `categoryName` varchar(180) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `catName` varchar(255) DEFAULT NULL,
  `parentCategoryId` int(11) DEFAULT '0',
  `status` int(5) DEFAULT '0',
  `createdTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`id`, `catName`, `parentCategoryId`, `status`, `createdTime`) VALUES
(95, 'Today\'s Lunch', 0, 0, '2021-01-10 08:24:56'),
(96, 'Biryani', 95, 0, '2021-01-10 08:29:28'),
(97, 'Evening Snaks', 0, 0, '2021-01-10 13:54:44'),
(98, 'namkin', 97, 0, '2021-01-10 13:55:40'),
(99, 'Breakfast', 0, 0, '2021-01-10 14:04:29'),
(100, 'bread butter', 99, 0, '2021-01-10 14:04:55'),
(101, 'milk', 99, 0, '2021-01-10 14:15:01'),
(102, 'Butter', 99, 0, '2021-01-10 14:15:14'),
(103, 'rice', 95, 0, '2021-01-16 10:48:15'),
(104, 'Thali', 95, 0, '2021-01-16 10:48:41');

-- --------------------------------------------------------

--
-- Table structure for table `coupons`
--

CREATE TABLE `coupons` (
  `id` int(11) NOT NULL,
  `couponCode` varchar(255) NOT NULL,
  `expiryDate` datetime DEFAULT NULL,
  `numberOfTimesCanBeUsed` int(5) DEFAULT NULL,
  `allowOnlyNewUser` tinyint(1) DEFAULT '0',
  `title` varchar(250) NOT NULL,
  `desc` varchar(550) NOT NULL,
  `type` int(1) NOT NULL,
  `limit` int(12) NOT NULL,
  `amount` int(10) NOT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `update_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `coupons`
--

INSERT INTO `coupons` (`id`, `couponCode`, `expiryDate`, `numberOfTimesCanBeUsed`, `allowOnlyNewUser`, `title`, `desc`, `type`, `limit`, `amount`, `createdAt`, `update_on`) VALUES
(35, 'FLAT30', '2020-12-12 00:00:00', 0, 0, '30 percent', 'Flat #0 on rupess 100 purchase', 0, 30, 30, '2020-12-25 19:04:11', '2020-12-26 20:29:22');

-- --------------------------------------------------------

--
-- Table structure for table `dietitianSession`
--

CREATE TABLE `dietitianSession` (
  `id` int(11) NOT NULL,
  `transactionID` varchar(255) DEFAULT NULL,
  `numberOfTokenUsed` double(10,2) DEFAULT NULL,
  `tokenChargeFrom` int(11) DEFAULT NULL,
  `tokenReceivedTo` int(11) DEFAULT NULL,
  `textFrom` int(11) NOT NULL DEFAULT '0',
  `textTo` int(11) NOT NULL DEFAULT '0',
  `textMSG` text,
  `time` int(11) DEFAULT NULL,
  `seen` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `expenses`
--

CREATE TABLE `expenses` (
  `id` int(11) NOT NULL,
  `supplierName` text,
  `supplierAddress` text,
  `supplierGST` varchar(255) DEFAULT 'NA',
  `products` varchar(500) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `total` double(10,2) DEFAULT NULL,
  `tax` json DEFAULT NULL,
  `grandTotal` double(10,2) DEFAULT NULL,
  `paymentMode` varchar(255) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `update_on` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `expenses`
--

INSERT INTO `expenses` (`id`, `supplierName`, `supplierAddress`, `supplierGST`, `products`, `date`, `total`, `tax`, `grandTotal`, `paymentMode`, `createdAt`, `update_on`) VALUES
(16, 'Amisha', 'Adityapur', '22', '33333', '2020-12-06', 3333.00, '222', 22222.00, '6', '2020-12-17 11:01:57', '2020-12-17 11:01:57'),
(25, 'amul', 'Adityapur', '5', 'bbn', '2020-12-20', 2000.00, '70', 2070.00, 'upi', '2020-12-27 20:29:31', '2020-12-27 20:29:31');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `orderId` int(11) NOT NULL,
  `userid` int(25) DEFAULT NULL,
  `transactionNo` varchar(180) DEFAULT NULL,
  `transactionStatus` varchar(80) DEFAULT NULL,
  `orderDetails` varchar(180) DEFAULT NULL,
  `orderStatus` int(1) DEFAULT NULL,
  `couponsUsed` tinyint(1) DEFAULT NULL,
  `couponID` int(11) DEFAULT NULL,
  `useSavedAddress` tinyint(1) DEFAULT NULL,
  `savedaddressID` int(11) DEFAULT NULL,
  `customAddress` text,
  `customPinCode` int(11) DEFAULT NULL,
  `customCity` varchar(255) DEFAULT NULL,
  `customState` varchar(255) DEFAULT NULL,
  `customPhone` varchar(255) DEFAULT NULL,
  `refund` varchar(40) DEFAULT 'NO',
  `paymentTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`orderId`, `userid`, `transactionNo`, `transactionStatus`, `orderDetails`, `orderStatus`, `couponsUsed`, `couponID`, `useSavedAddress`, `savedaddressID`, `customAddress`, `customPinCode`, `customCity`, `customState`, `customPhone`, `refund`, `paymentTime`) VALUES
(1, 1, 'wedfghjcesae4rt', 'pending', 'full', 1, 0, 12, 0, 23, 'bistupur', 32, 'jsr', 'jkhnd', '098765432', '2000', '2020-12-12 06:04:23'),
(2, 1, 'wedfghjcesae4rt', 'pending', 'full', 1, 0, 12, 0, 23, 'bistupur', 32, 'jsr', 'jkhnd', '098765432', '2000', '2020-12-12 06:04:25'),
(3, 1, 'wedfghjcesae4rt', 'pending', 'full', 1, 0, 12, 0, 23, 'bistupur', 32, 'jsr', 'jkhnd', '098765432', '2000', '2020-12-12 06:04:26'),
(4, 1, 'wedfghjcesae4rt', 'pending', 'full', 1, 0, 12, 0, 23, 'bistupur', 32, 'jsr', 'jkhnd', '098765432', '2000', '2020-12-12 06:04:27'),
(5, 1, 'wedfghjcesae4rt', 'pending', 'full', 1, 0, 12, 0, 23, 'bistupur', 32, 'jsr', 'jkhnd', '098765432', '2000', '2020-12-12 06:04:36');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `catId` int(11) DEFAULT NULL,
  `menuName` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `quantity` int(12) NOT NULL,
  `foodType` varchar(20) NOT NULL,
  `calories` varchar(180) DEFAULT NULL,
  `protein` varchar(180) DEFAULT NULL,
  `fat` varchar(180) DEFAULT NULL,
  `carbohydrates` varchar(180) DEFAULT NULL,
  `fibre` varchar(180) DEFAULT NULL,
  `productImage` varchar(225) DEFAULT NULL,
  `costPrice` float(10,2) DEFAULT NULL,
  `regularPrice` float(10,2) DEFAULT NULL,
  `sellPrice` float(10,2) DEFAULT NULL,
  `tax_id` varchar(30) NOT NULL,
  `createdTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `catId`, `menuName`, `description`, `quantity`, `foodType`, `calories`, `protein`, `fat`, `carbohydrates`, `fibre`, `productImage`, `costPrice`, `regularPrice`, `sellPrice`, `tax_id`, `createdTime`) VALUES
(51, 21, 'chicken Biryani', 'Chicken hydrabadi biryani', 23, '0', '234', '456', '34', '9', '12', 'upload/product_img/productImage1609185531618dish7.jpg', 120.00, 180.00, 170.00, '49', '2020-12-28 19:58:51'),
(53, 21, 'Fried Rice', 'fried rice with raita ', 40, '0', '290', '391', '65', '34', '43', 'upload/product_img/productImage1609185341926dish5.jpg', 60.00, 100.00, 80.00, '49', '2020-12-28 19:55:42'),
(54, 21, 'bread toast', 'treanding meal of evening', 20, '1', '544', '23', '32', '45', '65', 'upload/product_img/productImage1609185669786dish2.jpg', 90.00, 120.00, 110.00, '54', '2020-12-28 20:01:09'),
(55, 21, 'noodles', 'noodle with mnachurian', 49, '1', '26', '32', '56', '78', '10', 'upload/product_img/productImage1609225697722dish7 (1).jpg', 60.00, 90.00, 80.00, '49,54,56', '2020-12-29 07:08:17'),
(56, 69, 'fruit Chat', 'mixed fruit chart', 20, '0', '430', '200', '2', '20', '30', 'upload/product_img/productImage1609224562257dish8.jpg', 60.00, 90.00, 80.00, '66,56', '2020-12-29 06:49:22'),
(71, 88, 'chicken biryani', 'best khicken biryani', 20, '1', '342', '234', '324', '432', '231', 'upload/product_img/productImage1609947454202dish4.jpg', 150.00, 200.00, 180.00, '54,51', '2021-01-06 15:37:34');

-- --------------------------------------------------------

--
-- Table structure for table `siteConfig`
--

CREATE TABLE `siteConfig` (
  `siteEmail` varchar(250) DEFAULT NULL,
  `siteMobile` bigint(255) DEFAULT NULL,
  `smtpHost` varchar(180) DEFAULT NULL,
  `smtpEmail` varchar(180) DEFAULT NULL,
  `smtpUsername` varchar(180) DEFAULT NULL,
  `smtpPassword` varchar(180) DEFAULT NULL,
  `smtpSecType` varchar(180) DEFAULT NULL,
  `smtpPort` smallint(255) DEFAULT NULL,
  `activePaymentMethod` varchar(180) DEFAULT NULL,
  `paytmMID` varchar(180) DEFAULT NULL,
  `paytmMkey` varchar(180) DEFAULT NULL,
  `paytmWebsite` varchar(180) DEFAULT NULL,
  `paytmIndustryType` varchar(180) DEFAULT NULL,
  `paytmChannelID` varchar(180) DEFAULT NULL,
  `paytmTransUrl` varchar(250) DEFAULT NULL,
  `paytmStatusUrl` varchar(250) DEFAULT NULL,
  `razorpayKeyId` varchar(250) DEFAULT NULL,
  `razorpayKeySecret` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `staff`
--

CREATE TABLE `staff` (
  `sid` int(11) NOT NULL,
  `staffName` varchar(255) DEFAULT NULL,
  `staffType` int(8) DEFAULT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) DEFAULT NULL,
  `profilePhotoUrl` varchar(255) DEFAULT 'https://i.stack.imgur.com/l60Hf.png',
  `activeStatus` tinyint(1) DEFAULT '1',
  `walletBalance` float(10,2) DEFAULT NULL,
  `kycStatus` tinyint(1) DEFAULT '0',
  `lastTransactions` varchar(255) DEFAULT NULL,
  `bankAccNumber` varchar(255) DEFAULT NULL,
  `bankIFSC` varchar(255) DEFAULT NULL,
  `bankAccName` varchar(255) DEFAULT NULL,
  `lastWithdrawals` varchar(255) DEFAULT NULL,
  `panNumber` varchar(255) DEFAULT NULL,
  `uidaiNumber` varchar(255) DEFAULT NULL,
  `KYCpdfURL` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `taxes`
--

CREATE TABLE `taxes` (
  `id` int(11) NOT NULL,
  `taxName` varchar(255) DEFAULT NULL,
  `taxPercent` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `taxes`
--

INSERT INTO `taxes` (`id`, `taxName`, `taxPercent`) VALUES
(49, 'SGST', 3),
(51, 'GST', 5),
(54, 'Export Tax', 6),
(55, 'SGST', 3),
(56, 'SGST', 5),
(57, 'SGST', 2),
(58, 'SGST', 5),
(64, 'SGST', 5),
(65, 'SGST', 5),
(66, 'gst', 3),
(70, 'IGST', 2);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` longtext,
  `userType` int(1) NOT NULL DEFAULT '0',
  `ipaddress` varchar(16) DEFAULT NULL,
  `incart` varchar(500) DEFAULT NULL,
  `mobile` varchar(80) DEFAULT NULL,
  `email` varchar(80) DEFAULT NULL,
  `profilePicUrl` varchar(255) DEFAULT 'https://i.stack.imgur.com/l60Hf.png',
  `regTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `lastlogin` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deviceType` varchar(250) DEFAULT NULL,
  `password` varchar(250) NOT NULL,
  `secretKey` varchar(250) DEFAULT NULL,
  `walletBalance` float(10,2) DEFAULT '0.00',
  `addressIDS` varchar(250) DEFAULT NULL,
  `lastTokenTransactions` varchar(350) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `userType`, `ipaddress`, `incart`, `mobile`, `email`, `profilePicUrl`, `regTime`, `lastlogin`, `deviceType`, `password`, `secretKey`, `walletBalance`, `addressIDS`, `lastTokenTransactions`) VALUES
(1, 'Amaan', 0, '192.168.123.4', 'milk,egg,banana', '908765432', 'mdamaan853@gmail.com', 'upload/users_img/profilePicUrl1606061446871newwall.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'mobile', '$2b$10$qY0O43GLw7zh576zOCPqT.eY629gYCNu6Oy/0bWyPAedA63ozINtS', '234567890-09876543', 800.00, '23113', 'hyjikpkxbko'),
(2, 'Amaan', 0, '192.168.123.4', 'milk,egg,banana', '908765431', 'mdamaan853@gmail.com', 'upload/users_img/profilePicUrl1606062140424newwall.png', '0000-00-00 00:00:00', '0000-00-00 00:00:00', 'mobile', '$2b$10$/pg8tusUrQ3IcvNJ2bFuu.2cm.QryKulaOxTrp9hoymx/QJz1ZaPi', '234567890-09876543', 800.00, '23113', 'hyjikpkxbko'),
(4, 'ujjwal', 0, '192.168.123.4', '', '6287888800', '', 'upload/users_img/profilePicUrl1609835064781dish7.jpg', NULL, NULL, 'mobile', '$2b$10$e3Tu0ibw/cIaaxN/Dl4dTuuffTmlk.EPsynzv7LunLesugOvT6fgu', '', 0.00, '', ''),
(5, NULL, 0, NULL, NULL, '9608122272', NULL, 'https://i.stack.imgur.com/l60Hf.png', '2021-01-30 16:39:42', '2021-01-30 16:39:42', NULL, '1234', NULL, 0.00, NULL, NULL),
(6, NULL, 0, NULL, NULL, '8235409009', NULL, 'https://i.stack.imgur.com/l60Hf.png', '2021-02-23 07:53:39', '2021-02-23 07:53:39', NULL, '$2b$10$HLGlLVgjJ2GHWL0KMjSlC.DdToEHgFgs71ArNS14XVTcPOkOXM7ri', NULL, 0.00, NULL, NULL),
(7, NULL, 0, NULL, NULL, '7004937515', NULL, 'https://i.stack.imgur.com/l60Hf.png', '2021-02-23 08:33:41', '2021-02-23 08:33:41', NULL, '$2b$10$rpmfcjZTqEZjLC.MRiF51.oN.k7b7CeyEx7DZVTJ0ggtKbLJZ.ufe', NULL, 0.00, NULL, NULL),
(8, NULL, 0, NULL, NULL, '9031955150', NULL, 'https://i.stack.imgur.com/l60Hf.png', '2021-02-27 08:47:18', '2021-02-27 08:47:18', NULL, '$2b$10$w4B1X5GGOu33w4ISH2aQQOWLs7ON3wXNozv0QqUkmB4lUk5QigkHe', NULL, 0.00, NULL, NULL),
(9, NULL, 0, NULL, NULL, '1122334455', NULL, 'https://i.stack.imgur.com/l60Hf.png', '2021-02-27 09:26:52', '2021-02-27 09:26:52', NULL, '$2b$10$NgKEl.l6MvhNiWXztNgcHep2agpg.9YAE4Upejm1IR5QtMf5Lri5S', NULL, 0.00, NULL, NULL),
(10, NULL, 0, NULL, NULL, '6206100671', NULL, 'https://i.stack.imgur.com/l60Hf.png', '2021-04-02 19:18:13', '2021-04-02 19:18:13', NULL, '$2b$10$26i9kmjHT6j8YQzCzirhbOxhDeQLTDEEuNyL7yUVdWW5vITWFOgua', NULL, 0.00, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `address`
--
ALTER TABLE `address`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `coupons`
--
ALTER TABLE `coupons`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `dietitianSession`
--
ALTER TABLE `dietitianSession`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `expenses`
--
ALTER TABLE `expenses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`orderId`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `staff`
--
ALTER TABLE `staff`
  ADD PRIMARY KEY (`sid`);

--
-- Indexes for table `taxes`
--
ALTER TABLE `taxes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `address`
--
ALTER TABLE `address`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `blog`
--
ALTER TABLE `blog`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=105;

--
-- AUTO_INCREMENT for table `coupons`
--
ALTER TABLE `coupons`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `dietitianSession`
--
ALTER TABLE `dietitianSession`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `expenses`
--
ALTER TABLE `expenses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `orderId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;

--
-- AUTO_INCREMENT for table `staff`
--
ALTER TABLE `staff`
  MODIFY `sid` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `taxes`
--
ALTER TABLE `taxes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
