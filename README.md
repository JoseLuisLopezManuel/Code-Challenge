# Code-Challenge
El proyecto se trata de comenzar un repositorio desde su creación hasta el cumplimiendo de los requerimientos (ENDPOINT), el objetivo es poner aprueba los conocimientos vistos a lo largo de la semana, la cual ayudara a formar un conocimiento y aprendizaje. 

## 1. Las dependencias ocupadas son:
- npm init -y : El objetivo de la dependencia es el contenido de todos los metadatos acerca del proyecto tal como descripción, licencia, dependencias y scripts.
- npm install --save-dev jest : Como bien se nota, esta dependencia hace referencia a las pruebas unitarias que se realizan en el proyecto.
- npm install express --save : Esta dependencia hace posible crear un servidor desde express, el cual se ha ocupado para crear un servidor en el localhost 3000
- npm install eslint --save-dev: El objetivo de la dependencia es hacer un formato al proyecto, el formato es de utilidad. 

## 2. Diseño de los componentes 
- Se creo una carpeta "lib" la cual contiene otras carpetas: "controllers, services, utils" y un archivo que es ocupado para el servidor "server.js" 
- Se creo una carpeta "test" la cual contiene una carpeta "services" y dentro de esta "StudentService.test.js" ocupada para hacer las preubas unitarias. 
- Se creo los paquetes "package-lock.json" y "package.json"
- se creo el archivo .json "visualpartners" 
- Por último se creo el archivo .eslintrc.js para corregir los errores de ortografía

## 3. Consultar el API
 1. En la linea de comando correr el comando "npm run server" (Esto hara que el servidor se active en el localhost : 3000) 
 ![image](https://user-images.githubusercontent.com/99145978/166340324-0c2443e8-2bf6-4ea0-b76f-bc7fd4a8ffd9.png)

 3. Para consultar cada ENDPOINT en la  barra de busqueda de tu navegador, colocar:
   - Consultar todos los estudiantes. (localhost:3000/v1/students)
  ![image](https://user-images.githubusercontent.com/99145978/166340413-5abfff3b-114f-40a5-a913-332684f065f4.png)
   - Consultar los emails de los estudiantes si tienen certificación. (localhost:3000/v1/students/emails)
  ![image](https://user-images.githubusercontent.com/99145978/166340639-ffb49529-7c10-4889-b2bb-a318c53a5407.png)
   - Consultar los nombres de los estudiantes si los creditos que tienen son mayor a 500. (localhost:3000/v1/students/credits)
   ![image](https://user-images.githubusercontent.com/99145978/166340708-882b23af-9873-4d63-81d4-c4c02dd4befa.png)

