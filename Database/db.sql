CREATE DATABASE libreria;

USE libreria; 

CREATE TABLE Usuario (

    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    contraseña VARCHAR(60) NOT NULL,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Libros (

    id_libro INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    autor VARCHAR(60) NOT NULL,
    precio DECIMAL(10,2) NOT NULL,
    descripcion TEXT,
    tomo INT,
    stock INT DEFAULT 0
)

