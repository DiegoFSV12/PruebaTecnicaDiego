CREATE DATABASE IF NOT EXISTS prueba_tecnica;
USE prueba_tecnica;

CREATE TABLE Clientes (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Tipo_Documento VARCHAR(20) NOT NULL,
    Num_Documento VARCHAR(20) UNIQUE NOT NULL,
    Nombres VARCHAR(100) NOT NULL,
    Apellidos VARCHAR(100) NOT NULL,
    FechaNacimiento DATE NOT NULL,
    BonoBienvenida VARCHAR(100) NULL
);

CREATE TABLE Token (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Token CHAR(8) UNIQUE NOT NULL,
    Id_cliente INT,
    Estado BOOLEAN NOT NULL,
    FOREIGN KEY (Id_cliente) REFERENCES Clientes(Id)
);

CREATE TABLE ParametrosGlobales (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Parametro VARCHAR(100) UNIQUE NOT NULL,
    Estado BOOLEAN NOT NULL
);

INSERT INTO ParametrosGlobales(Parametro, Estado) VALUES('ENVIAR_CORREO',true);

CREATE TABLE CorreosEnviados (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    Id_cliente INT NOT NULL,
    Asunto VARCHAR(200) NOT NULL,
    Contenido TEXT NOT NULL,
    FechaEnvio TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (Id_cliente) REFERENCES Clientes(Id)
);