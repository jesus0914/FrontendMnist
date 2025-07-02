![image](https://github.com/user-attachments/assets/41eb0b31-5e3c-412a-83bd-f2241ad33716)

Proyecto de Reconocimiento de Dígitos
Descripción
Este proyecto web está desarrollado con Next.js y React, y permite a los usuarios dibujar un número en un lienzo (<canvas>) para recibir una predicción del número mediante un modelo de aprendizaje automático alojado en un servidor remoto.

El objetivo del proyecto es proporcionar una interfaz simple e intuitiva donde los usuarios puedan dibujar números y obtener una predicción del dígito dibujado, similar a aplicaciones de reconocimiento de dígitos manuscritos como MNIST.

Características principales
Dibujo en el lienzo: Los usuarios pueden dibujar un número utilizando el ratón sobre un lienzo interactivo.

Predicción de dígitos: Después de dibujar el número, el modelo de backend devuelve una predicción sobre cuál es el número.

Limpieza del lienzo: Permite borrar el lienzo para dibujar un nuevo número.

Interfaz fácil de usar: La aplicación incluye botones para limpiar el lienzo y obtener la predicción, con una visualización clara del resultado.

Tecnologías utilizadas
Next.js: Framework para la creación de aplicaciones web con React, permitiendo el renderizado del lado del servidor.

React: Librería de JavaScript para construir interfaces de usuario interactivas.

TypeScript: Lenguaje de programación que agrega tipado estático a JavaScript, mejorando la calidad y mantenimiento del código.

Canvas API: API del navegador que permite renderizar gráficos en un lienzo HTML para el dibujo interactivo.

Tailwind CSS: Framework de CSS para crear interfaces modernas y adaptativas de manera rápida y eficiente.

Fetch API: Para realizar solicitudes HTTP al servidor y obtener la predicción basada en el dibujo.

Cómo Funciona
Dibuja en el lienzo: Usa el ratón para dibujar un número en el lienzo proporcionado.

Enviar el dibujo: Haz clic en el botón "Predecir" para enviar el dibujo al servidor.

Predicción: El servidor procesa la imagen del dibujo y devuelve un número como predicción.

Limpiar: Si deseas empezar de nuevo, puedes hacer clic en el botón "Limpiar" para borrar el lienzo y dibujar otro número.

Estructura del Proyecto
pages/index.tsx: Componente principal que gestiona el lienzo y las interacciones con el usuario.

public/: Carpeta para archivos estáticos, como imágenes, fuentes, etc.

styles/: Carpeta para los estilos globales de la aplicación.

package.json: Contiene las dependencias y configuraciones necesarias para ejecutar el proyecto.

Instalación
1. Clonar el repositorio
bash
Copiar
Editar
git clone https://github.com/tu_usuario/tu_repositorio.git
cd tu_repositorio
2. Instalar las dependencias
bash
Copiar
Editar
npm install
3. Ejecutar el servidor de desarrollo
bash
Copiar
Editar
npm run dev
La aplicación estará disponible en http://localhost:3000.

Contribuciones
¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar la aplicación o encuentras algún error, no dudes en abrir un issue o enviar un pull request.

Autor
Jesús Villarreal

GitHub: jesusvillarreal
