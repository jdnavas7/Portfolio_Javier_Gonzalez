Portfolio Médico Profesional
Show Image
Descripción
Un portfolio profesional para médicos desarrollado con React y Tailwind CSS. Este proyecto presenta información profesional de manera elegante y moderna, con características como:

Diseño responsivo para todos los dispositivos
Modo oscuro/claro
Navegación intuitiva entre secciones
Visualización de experiencia laboral, formación y datos de contacto

Tecnologías utilizadas

React.js
Tailwind CSS
Lucide Icons
Google Fonts (Poppins, Montserrat)

Instalación
Sigue estos pasos para configurar el proyecto en tu entorno local:

Clona el repositorio:
bashCopygit clone https://github.com/tu-usuario/portfolio-medico.git
cd portfolio-medico

Instala las dependencias:
bashCopynpm install

Instala Tailwind CSS:
bashCopynpm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

Configura Tailwind CSS. Edita el archivo tailwind.config.js:
jsCopy/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      scale: {
        '99': '0.99',
      }
    },
  },
  plugins: [],
}

Añade las directivas de Tailwind a tu CSS en src/index.css:
cssCopy@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&family=Montserrat:wght@500;600;700&display=swap');

Inicia el servidor de desarrollo:
bashCopynpm start


Estructura del proyecto
Copyportfolio-medico/
├── public/
│   ├── profile-image.jpg     # Imagen de perfil
│   └── favicon.ico           # Favicon
├── src/
│   ├── components/
│   │   └── Portfolio.jsx     # Componente principal
│   ├── App.js                # Componente raíz
│   ├── index.js              # Punto de entrada
│   └── index.css             # Estilos globales
└── package.json              # Dependencias y scripts
Personalización
Cambiar la imagen de perfil

Coloca tu imagen en la carpeta public/ del proyecto.
Cambia la ruta de la imagen en el componente Portfolio:
jsxCopy<img 
  src="/tu-imagen.jpg" 
  alt="Nombre del profesional" 
  className="w-full h-full object-cover rounded-xl shadow-md" 
/>


Modificar la información personal
Para cambiar la información personal, edita las siguientes secciones en el componente Portfolio.jsx:

Información general: Encabezado, nombre, título profesional
Sobre mí: Descripción personal, habilidades
Experiencia laboral: Historial de trabajo, responsabilidades
Formación: Educación y certificaciones

Cambiar los colores
El diseño utiliza principalmente la paleta de colores de Tailwind. Para cambiar los colores principales:

Busca clases como bg-blue-600, text-blue-100, from-blue-700 to-indigo-800
Reemplázalas con los colores que prefieras según la paleta de colores de Tailwind

Características adicionales

Modo oscuro/claro: Botón en la esquina superior derecha para cambiar entre modos
Navegación con scroll: Las secciones se expanden y se desplazan automáticamente
Elementos interactivos: Efectos hover, transiciones suaves
Diseño de timeline: Para mostrar la experiencia y formación

Despliegue
Para construir una versión de producción optimizada:
bashCopynpm run build
Esto generará una carpeta build/ con los archivos estáticos que puedes desplegar en cualquier servicio de hosting:

GitHub Pages
Netlify
Vercel
Firebase Hosting
AWS S3
