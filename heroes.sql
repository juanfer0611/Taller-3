-- phpMyAdmin SQL Dump
-- version 4.0.9
-- http://www.phpmyadmin.net
--
-- Servidor: localhost
-- Tiempo de generación: 26-04-2014 a las 06:47:39
-- Versión del servidor: 5.6.14
-- Versión de PHP: 5.5.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `heroes`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `hero`
--

CREATE TABLE IF NOT EXISTS `hero` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `c1` decimal(10,0) NOT NULL,
  `c2` decimal(10,0) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=25 ;

--
-- Volcado de datos para la tabla `hero`
--

INSERT INTO `hero` (`id`, `nombre`, `c1`, `c2`) VALUES
(1, 'hulk', '-3', '-62'),
(2, 'ironman', '29', '-81'),
(3, 'ironman', '27', '82'),
(4, 'ironman', '56', '38'),
(5, 'ironman', '34', '-119'),
(6, 'ironman', '34', '-119'),
(7, 'ironman', '34', '-118'),
(8, 'hulk', '44', '-79'),
(9, 'hulk', '-4', '-56'),
(10, 'hulk', '-8', '-69'),
(11, 'hulk', '-8', '-73'),
(12, 'hulk', '34', '-117'),
(13, 'hulk', '44', '-75'),
(14, 'ironman', '44', '-75'),
(15, 'spiderman', '41', '-74'),
(16, 'spiderman', '44', '-71'),
(17, 'spiderman', '41', '-74'),
(18, 'spiderman', '44', '-75'),
(19, 'spiderman', '44', '-75'),
(20, 'thor', '44', '-75'),
(21, 'thor', '32', '-99'),
(22, 'thor', '32', '-105'),
(23, 'thor', '34', '-116'),
(24, 'thor', '69', '-38');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
