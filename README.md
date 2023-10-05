#Cypress versión 13.2.0

#Pasos para la ejecución de las pruebas con Cypress

1. - Instalar cypress = https://docs.cypress.io/guides/getting-started/installing-cypress
    --> npm install cypress --save-dev
2. - Instalar NPX = https://www.npmjs.com/package/npx
    --> npm install -g npx
3. - Iniciar la App
    --> npx cypress open
4. - (Opcional) Instalar CORS
    --> npm install cors
6. - Crear el archivo server.js para configurar los CORS
7. - Instalar plugin de Tab
    --> npm install -D cypress-plugin-tab
    En el archivo que vayamos a usar el TAB, debemos ponemos
    --> require("cypress-plugin-tab")
8. - Instalar pulgin cypress-xpath para el uso del selector
    --> npm install -D cypress-xpath
9. - Para usar el cypress-xpath debemos usar el require dentro del archivo de gestión
    --> require('cypress-xpath');
10. - Para poder utulizar (fake data) en Cypress debemos instalar la bibliote de Faker.js
    --> npm install faker --save-dev
    - Además debemos crear un archivo nombrado fakeData.js dentro de la carpeta 'support'
        **El cual contendrá toda la información fake que queremos traer de la biblioteca.
11. - Instalar y el preprocesador de archivos
    --> npm install --save-dev @cypress/webpack-preprocessor
    - Y configurar y modificar el archivo cypress.config.js para importar y utilizar módulos 
        de Faker.js en los archivos de prueba de Cypress, así:
            --> import faker from 'faker';
12. - Instalar el complemento para cargar archivos
    --> npm install --save-dev cypress-file-upload
13. - Importar y registrar el complemento en el archivo commands.js
    --> import 'cypress-file-upload';
