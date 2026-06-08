CREATE DATABASE  IF NOT EXISTS `reposteria` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `reposteria`;
-- MySQL dump 10.13  Distrib 8.0.45, for Win64 (x86_64)
--
-- Host: localhost    Database: reposteria
-- ------------------------------------------------------
-- Server version	8.0.45

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoria` (
  `catId` int NOT NULL AUTO_INCREMENT,
  `catDescripcion` varchar(45) NOT NULL,
  PRIMARY KEY (`catId`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
INSERT INTO `categoria` VALUES (1,'Cupcakes'),(2,'Galletas'),(3,'Mini Sándwiches'),(4,'Postres Fríos'),(5,'Entremets'),(6,'Alfajores'),(7,'Trufas'),(8,'Tequeños'),(9,'Tortas'),(10,'Mini Empanadas');
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comentarios`
--

DROP TABLE IF EXISTS `comentarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comentarios` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `aprobado` bit(1) NOT NULL,
  `contenido` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentarios`
--

LOCK TABLES `comentarios` WRITE;
/*!40000 ALTER TABLE `comentarios` DISABLE KEYS */;
/*!40000 ALTER TABLE `comentarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detalles_orden`
--

DROP TABLE IF EXISTS `detalles_orden`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `detalles_orden` (
  `detoId` int NOT NULL AUTO_INCREMENT,
  `ordId_fk` int DEFAULT NULL,
  `proId_fk` int DEFAULT NULL,
  `varId_fk` int DEFAULT NULL,
  `detoCantidad` int DEFAULT NULL,
  `detoPrecio` double DEFAULT NULL,
  `detoSubTotal` double DEFAULT NULL,
  PRIMARY KEY (`detoId`),
  KEY `ordId_fk` (`ordId_fk`),
  KEY `proId_fk` (`proId_fk`),
  KEY `varId_fk` (`varId_fk`),
  CONSTRAINT `detalles_orden_ibfk_1` FOREIGN KEY (`ordId_fk`) REFERENCES `orden` (`ordId`) ON DELETE CASCADE,
  CONSTRAINT `detalles_orden_ibfk_2` FOREIGN KEY (`proId_fk`) REFERENCES `producto` (`proId`),
  CONSTRAINT `detalles_orden_ibfk_3` FOREIGN KEY (`varId_fk`) REFERENCES `producto_variantes` (`varId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detalles_orden`
--

LOCK TABLES `detalles_orden` WRITE;
/*!40000 ALTER TABLE `detalles_orden` DISABLE KEYS */;
/*!40000 ALTER TABLE `detalles_orden` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `tr_calculo_subtotal` BEFORE INSERT ON `detalles_orden` FOR EACH ROW BEGIN
    SET NEW.detoSubTotal = NEW.detoCantidad * NEW.detoPrecio;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `tr_descuento_stock_estandar` AFTER INSERT ON `detalles_orden` FOR EACH ROW BEGIN
    UPDATE materia_prima mp
    JOIN receta_fija rf ON mp.matId = rf.matId_fk
    SET mp.matStock = mp.matStock - (NEW.detoCantidad * rf.cantidad_usada)
    WHERE rf.varId_fk = NEW.varId_fk;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `tr_actualizar_total_orden` AFTER INSERT ON `detalles_orden` FOR EACH ROW BEGIN
    UPDATE orden 
    SET ordTotal = (SELECT SUM(detoSubTotal) FROM detalles_orden WHERE ordId_fk = NEW.ordId_fk)
    WHERE ordId = NEW.ordId_fk;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `tr_reponer_stock_borrado` AFTER DELETE ON `detalles_orden` FOR EACH ROW BEGIN
    UPDATE materia_prima mp
    JOIN receta_fija rf ON mp.matId = rf.matId_fk
    SET mp.matStock = mp.matStock + (OLD.detoCantidad * rf.cantidad_usada)
    WHERE rf.varId_fk = OLD.varId_fk;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `insumos_personalizados_orden`
--

DROP TABLE IF EXISTS `insumos_personalizados_orden`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `insumos_personalizados_orden` (
  `insId` int NOT NULL AUTO_INCREMENT,
  `detoId_fk` int DEFAULT NULL,
  `matId_fk` int DEFAULT NULL,
  `cantidad_usada` float DEFAULT NULL,
  PRIMARY KEY (`insId`),
  KEY `detoId_fk` (`detoId_fk`),
  KEY `matId_fk` (`matId_fk`),
  CONSTRAINT `insumos_personalizados_orden_ibfk_1` FOREIGN KEY (`detoId_fk`) REFERENCES `detalles_orden` (`detoId`) ON DELETE CASCADE,
  CONSTRAINT `insumos_personalizados_orden_ibfk_2` FOREIGN KEY (`matId_fk`) REFERENCES `materia_prima` (`matId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `insumos_personalizados_orden`
--

LOCK TABLES `insumos_personalizados_orden` WRITE;
/*!40000 ALTER TABLE `insumos_personalizados_orden` DISABLE KEYS */;
/*!40000 ALTER TABLE `insumos_personalizados_orden` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `tr_descuento_stock_personalizado` AFTER INSERT ON `insumos_personalizados_orden` FOR EACH ROW BEGIN
    UPDATE materia_prima 
    SET matStock = matStock - NEW.cantidad_usada
    WHERE matId = NEW.matId_fk;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `materia_prima`
--

DROP TABLE IF EXISTS `materia_prima`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `materia_prima` (
  `matId` int NOT NULL AUTO_INCREMENT,
  `matNombre` varchar(50) NOT NULL,
  `matStock` float DEFAULT '0',
  `matUnidadMedida` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`matId`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `materia_prima`
--

LOCK TABLES `materia_prima` WRITE;
/*!40000 ALTER TABLE `materia_prima` DISABLE KEYS */;
INSERT INTO `materia_prima` VALUES (1,'Harina Pastelera',50,'Kg'),(2,'Azúcar Blanca',30,'Kg'),(3,'Huevos',300,'Unidades'),(4,'Mantequilla',20,'Kg'),(5,'Leche',20,'Litros'),(6,'Cacao',5,'Kg'),(7,'Queso Edam',10,'Kg'),(8,'Masa Wantan',500,'Unidades'),(9,'Pollo',15,'Kg'),(10,'Fresas',10,'Kg'),(11,'Chocolate Blanco',5,'Kg'),(12,'Manjar Blanco',15,'Kg'),(13,'Oreo',50,'Paquetes'),(14,'Chantilly',10,'Litros');
/*!40000 ALTER TABLE `materia_prima` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orden`
--

DROP TABLE IF EXISTS `orden`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orden` (
  `ordId` int NOT NULL AUTO_INCREMENT,
  `usuId_fk` int DEFAULT NULL,
  `ordFecha` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `ordTotal` double DEFAULT '0',
  `ordDireccionEntrega` text,
  `ordMetodoPago` enum('Efectivo','Transferencia','Tarjeta') DEFAULT NULL,
  `ordEstado` enum('Pendiente','Preparando','Enviado','Entregado') DEFAULT 'Pendiente',
  PRIMARY KEY (`ordId`),
  KEY `usuId_fk` (`usuId_fk`),
  CONSTRAINT `orden_ibfk_1` FOREIGN KEY (`usuId_fk`) REFERENCES `usuario` (`usuId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orden`
--

LOCK TABLES `orden` WRITE;
/*!40000 ALTER TABLE `orden` DISABLE KEYS */;
/*!40000 ALTER TABLE `orden` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto`
--

DROP TABLE IF EXISTS `producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producto` (
  `proId` int NOT NULL AUTO_INCREMENT,
  `proNombre` varchar(50) NOT NULL,
  `catId_fk` int DEFAULT NULL,
  PRIMARY KEY (`proId`),
  KEY `catId_fk` (`catId_fk`),
  CONSTRAINT `producto_ibfk_1` FOREIGN KEY (`catId_fk`) REFERENCES `categoria` (`catId`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto`
--

LOCK TABLES `producto` WRITE;
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
INSERT INTO `producto` VALUES (1,'Cupcakes Especiales',1),(2,'Galletas de la Casa',2),(3,'Bocaditos Salados',3),(4,'Postres Fríos',4),(5,'Entremets Gourmet',5),(6,'Alfajores',6),(7,'Trufas',7),(8,'Tequeños',8),(9,'Tortas y Queques',9),(10,'Mini Empanadas',10);
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto_variantes`
--

DROP TABLE IF EXISTS `producto_variantes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producto_variantes` (
  `varId` int NOT NULL AUTO_INCREMENT,
  `proId_fk` int DEFAULT NULL,
  `varNombre` varchar(45) DEFAULT NULL,
  `varPrecioAdicional` double DEFAULT '0',
  PRIMARY KEY (`varId`),
  KEY `proId_fk` (`proId_fk`),
  CONSTRAINT `producto_variantes_ibfk_1` FOREIGN KEY (`proId_fk`) REFERENCES `producto` (`proId`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto_variantes`
--

LOCK TABLES `producto_variantes` WRITE;
/*!40000 ALTER TABLE `producto_variantes` DISABLE KEYS */;
INSERT INTO `producto_variantes` VALUES (1,1,'Chocolate',7.5),(2,1,'Vainilla',6.5),(3,1,'Zanahoria',7),(4,2,'Fresa',4.5),(5,2,'Piña',4.5),(6,2,'Manzana',4.5),(7,2,'Personalizadas',6),(8,3,'Gourmet',4),(9,3,'Croissants Rellenos',4.5),(10,3,'Triples',3.5),(11,4,'Tres Leches',12),(12,4,'Oreo Cake',11),(13,4,'Copa Fresa',12.5),(14,5,'Limón',16),(15,5,'Espejo',20),(16,5,'Mini Entremet',5.5),(17,5,'Personalizado',25),(18,6,'Clásico',3.5),(19,6,'Chocolate',4.5),(20,7,'Clásica',3),(21,7,'Fresa',4),(22,7,'Personalizada',4.5),(23,8,'Pollo',2.5),(24,8,'Queso',2),(25,8,'Mixto',3),(26,9,'Chocolate',45),(27,9,'Tres Leches',55),(28,9,'Personalizada',80),(29,10,'Pollo',2.5),(30,10,'Carne',2.8),(31,10,'Espinaca y Queso',2.5);
/*!40000 ALTER TABLE `producto_variantes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(255) DEFAULT NULL,
  `imagen` longblob,
  `nombre` varchar(255) DEFAULT NULL,
  `precio` double DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `receta_fija`
--

DROP TABLE IF EXISTS `receta_fija`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `receta_fija` (
  `recId` int NOT NULL AUTO_INCREMENT,
  `varId_fk` int DEFAULT NULL,
  `matId_fk` int DEFAULT NULL,
  `cantidad_usada` float DEFAULT NULL,
  PRIMARY KEY (`recId`),
  KEY `varId_fk` (`varId_fk`),
  KEY `matId_fk` (`matId_fk`),
  CONSTRAINT `receta_fija_ibfk_1` FOREIGN KEY (`varId_fk`) REFERENCES `producto_variantes` (`varId`),
  CONSTRAINT `receta_fija_ibfk_2` FOREIGN KEY (`matId_fk`) REFERENCES `materia_prima` (`matId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `receta_fija`
--

LOCK TABLES `receta_fija` WRITE;
/*!40000 ALTER TABLE `receta_fija` DISABLE KEYS */;
INSERT INTO `receta_fija` VALUES (1,26,8,1),(2,26,7,0.02);
/*!40000 ALTER TABLE `receta_fija` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rol`
--

DROP TABLE IF EXISTS `rol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rol` (
  `rolId` int NOT NULL AUTO_INCREMENT,
  `rolDescripcion` varchar(25) NOT NULL,
  PRIMARY KEY (`rolId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rol`
--

LOCK TABLES `rol` WRITE;
/*!40000 ALTER TABLE `rol` DISABLE KEYS */;
INSERT INTO `rol` VALUES (1,'Admin'),(2,'Cliente');
/*!40000 ALTER TABLE `rol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `usuId` int NOT NULL AUTO_INCREMENT,
  `usuNombre` varchar(255) DEFAULT NULL,
  `usuApellido` varchar(255) DEFAULT NULL,
  `usuCorreo` varchar(255) DEFAULT NULL,
  `usuContrasena` varchar(255) DEFAULT NULL,
  `usuTelefono` varchar(255) DEFAULT NULL,
  `usuDireccion` varchar(255) DEFAULT NULL,
  `rolId_fk` int DEFAULT NULL,
  PRIMARY KEY (`usuId`),
  UNIQUE KEY `usuCorreo` (`usuCorreo`),
  KEY `rolId_fk` (`rolId_fk`),
  CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`rolId_fk`) REFERENCES `rol` (`rolId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'Admin',NULL,'adminRosa@gmail.com','$2a$10$91ZzpQMhu8TQK/hH9YfGDe0ahqVyoScIOIEKh9zJNyDbtVVjelZi.',NULL,NULL,2),(2,'Sofia Acuña',NULL,'sofi@gmail.com','$2a$10$cbkEvJUnfYRed5Ar8QuzYeB3eIfjOvmwwbcMACaLN7BzNoPVJnZYO',NULL,NULL,2);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'reposteria'
--

--
-- Dumping routines for database 'reposteria'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-04-27 23:17:34
