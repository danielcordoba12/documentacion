import React from 'react';

const ManualTecnico = () => {
  return (
    <div className="container mx-auto p-4 text-justify">
      <h1 className="text-3xl font-bold mb-4">Tabla de Contenido</h1>
      <ul className="ml-4">
        <li><a href="#manual-tecnico">Manual Técnico the coffee data</a></li>
        <li><a href="#frameworks">Frameworks y estándares con los que se construyó el sistema</a></li>
        <li><a href="#modelo-entidad-relacion">Modelo Entidad Relación</a></li>
        <li><a href="#diccionario-de-datos">Diccionario de Datos</a></li>
        <li><a href="#scripts-de-instalacion">Scripts de Instalación</a></li>
        <li><a href="#diagrama-de-componentes">Diagrama de Componentes</a></li>
      </ul>

      {/* Manual Técnico */}
      <div id="manual-tecnico" className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Prerequisitos</h2>
        <p>Memoria RAM: Se sugieren al menos 1 GB para sistemas más ligeros y 2 GB o más para sistemas más completos.
Espacio en disco: Asegúrate de tener al menos 10-20 GB de espacio libre en disco para la instalación del sistema operativo y los programas adicionales.
Tarjeta de red: Necesaria para la conectividad de red.
Sistema de archivos:Utiliza un sistema de archivos compatible con Linux, como ext4, ext3 o XFS.
Boot Loader:La mayoría de las distribuciones utilizan GRUB como cargador de arranque. Debes asegurarte de que esté instalado correctamente en el sector de arranque del disco.
Conexión a Internet (opcional):Puede ser útil tener acceso a Internet durante la instalación para descargar actualizaciones y paquetes adicionales, pero no es obligatorio.
Configuración de red: Configura la dirección IP, la máscara de red, la puerta de enlace y, opcionalmente, la configuración DNS.
Configuración de particiones:Decide cómo deseas organizar el disco duro. Las particiones comunes incluyen la raíz ("/"), la partición de intercambio ("swap") y, a veces, particiones adicionales como /home o /boot.
Usuario y Contraseña:Debes configurar al menos un usuario y establecer una contraseña para ese usuario. También puedes configurar la contraseña de administrador (root).
Configuración de zona horaria:Selecciona la zona horaria correcta para tu ubicación geográfica.
Configuración de idioma y teclado:
Configura el idioma del sistema y el diseño del teclado según tus preferencias.
</p>
      </div>


      {/* Frameworks y estándares */}
      <div id="frameworks" className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Frameworks y estándares con los que se construyó el sistema</h2>
        <p>Frameworks:
          React v-18.1: Estándares <br />
          HTTP/HTTPS: Protocolo de transferencia de hipertexto utilizado para la comunicación en la Word Wide Web.<br />
          REST: Un estilo arquitectónico comúnmente utilizado en el desarrollo de servicios web.<br />
          JSON: Un formato ligero de intercambio de datos.<br />
        </p>

      </div>



      {/* ... Repite la estructura para otras secciones ... */}


      <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Diagramas</h2>
      <div className="w-8/12" >
      <img
        src="../public/img/casos_de_uso.jpg"
        alt="Descripción de la imagen"
        className="rounded-lg shadow-lg max-w-full"
      />
       <img
        src="../public/img/entidad_relacion.jpg"
        alt="Descripción de la imagen"
        className="rounded-lg shadow-lg max-w-full"
      />
      </div>
    </div>

      {/*  Diccionario de datos    */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Diccionario de datos</h2>
          <p>
            <h2 className="font-bold">Arábica</h2>Una de las dos especies principales de plantas de café, conocida por sus granos de alta calidad y sabor más suave.<br />
            <h2 className="font-bold">Robust:</h2> Otra especie principal de planta de café, conocida por tener granos con mayor contenido de cafeína y sabor más fuerte.<br />
            <h2 className="font-bold">Tueste</h2>Procesó de calentamiento de los granos de café para desarrollar sabores y aromas específicos.<br />
            <h2 className="font-bold">Barista</h2>Profesional especializado en la preparación de café, capaz de realizar varias técnicas de elaboración.<br />
            <h2 className="font-bold">Molienda</h2> Proceso de trituración o molido de granos de café antes de la preparación para determinar el tamaño de partícula adecuado.<br />
            <h2 className="font-bold">Cata de café</h2> valuación sensorial de diferentes características de café, como aroma, sabor, acidez y cuerpo.<br />
            <h2 className="font-bold">Cafetera de émbolo</h2> Dispositivo de preparación de café que utiliza un émbolo para empujar el agua a través de los granos de café.<br />
          </p>
      </div>

      {/*scrop de instalacion */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Scrips de instalacion</h2>
          <p>
                      Express es una biblioteca popular para compilar API web RESTful con Node.js. A continuación, se muestra un ejemplo de cómo crear una API con Node.js y Express:  <br />

            Primero, asegúrate de tener Node.js instalado en tu sistema. Puedes descargarlo desde el sitio web oficial de Node.js 1. <br />

            Crea un nuevo directorio para tu proyecto y navega a él en la línea de comandos. <br />

            Ejecuta el siguiente comando para inicializar tu proyecto: <br />

            npm init -y
            Instala Express y guarda la dependencia en tu archivo package.json: <br />

            npm install express –save

          </p>
      </div>

      {/*scrop de instalacion */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Componentes</h2>
          <p>
                      Express es una biblioteca popular para compilar API web RESTful con Node.js. A continuación, se muestra un ejemplo de cómo crear una API con Node.js y Express:  <br />

            Primero, asegúrate de tener Node.js instalado en tu sistema. Puedes descargarlo desde el sitio web oficial de Node.js 1. <br />

            Crea un nuevo directorio para tu proyecto y navega a él en la línea de comandos. <br />

            Ejecuta el siguiente comando para inicializar tu proyecto: <br />

            npm init -y
            Instala Express y guarda la dependencia en tu archivo package.json: <br />

            npm install express –save

          </p>
      </div>


      {/*Componenetes */}
      <div className="mt-8">
      <h2 className="font-bold text-2xl mb-4">Módulo de Frontend (Cliente):</h2>
      <div className="ml-4">
        <p className="font-bold">Componentes:</p>
        <ul className="list-disc ml-4">
          <li>Interfaz de Usuario (UI)</li>
          <li>Páginas de Información del Café</li>
          <li>Formularios de Registro y Acceso</li>
        </ul>
        <p className="font-bold mt-4">Artefactos:</p>
        <ul className="list-disc ml-4">
          <li>Archivos HTML, CSS y JavaScript</li>
        </ul>
      </div>

      <h2 className="font-bold text-2xl mt-8 mb-4">Módulo de Backend (Servidor/API):</h2>
      <div className="ml-4">
        <p className="font-bold">Componentes:</p>
        <ul className="list-disc ml-4">
          <li>API RESTful</li>
          <li>Gestión de Usuarios</li>
          <li>Gestión de Contenido (Información sobre Café)</li>
        </ul>
        <p className="font-bold mt-4">Artefactos:</p>
        <ul className="list-disc ml-4">
          <li>Archivos JavaScript (Node.js)</li>
          <li>Express (Framework para Node.js)</li>
          <li>MongoDB (Base de datos para almacenar información)</li>
        </ul>
      </div>

      <h2 className="font-bold text-2xl mt-8 mb-4">Base de Datos:</h2>
      <div className="ml-4">
        <p className="font-bold">Componentes:</p>
        <ul className="list-disc ml-4">
          <li>MongoDB Server</li>
        </ul>
        <p className="font-bold mt-4">Artefactos:</p>
        <ul className="list-disc ml-4">
          <li>Colecciones de datos (usuarios, información del café)</li>
        </ul>
      </div>

      <h2 className="font-bold text-2xl mt-8 mb-4">Servicios Externos:</h2>
      <div className="ml-4">
        <p className="font-bold">Componentes:</p>
        <ul className="list-disc ml-4">
          <li>API de Pronóstico del Tiempo (por ejemplo, para información climática relevante)</li>
        </ul>
        <p className="font-bold mt-4">Artefactos:</p>
        <ul className="list-disc ml-4">
          <li>Consumo de la API de Pronóstico del Tiempo</li>
        </ul>
      </div>

      <h2 className="font-bold text-2xl mt-8 mb-4">Módulo de Autenticación:</h2>
      <div className="ml-4">
        <p className="font-bold">Componentes:</p>
        <ul className="list-disc ml-4">
          <li>Servicio de Autenticación</li>
        </ul>
        <p className="font-bold mt-4">Artefactos:</p>
        <ul className="list-disc ml-4">
          <li>Gestión de Sesiones y Tokens de Acceso</li>
        </ul>
      </div>

      <h2 className="font-bold text-2xl mt-8 mb-4">Módulo de Evaluación y Comentarios:</h2>
      <div className="ml-4">
        <p className="font-bold">Componentes:</p>
        <ul className="list-disc ml-4">
          <li>Sistema de Evaluación (por ejemplo, estrellas)</li>
          <li>Sección de Comentarios</li>
        </ul>
        <p className="font-bold mt-4">Artefactos:</p>
        <ul className="list-disc ml-4">
          <li>Lógica para recopilar y mostrar evaluaciones y comentarios</li>
        </ul>
      </div>

      </div>


    </div>
  );
};

export default ManualTecnico;
