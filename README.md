# Landing Page de Prueba (IA Models Class)

Este proyecto es una landing page de demostración creada como parte de un ejercicio práctico para la clase de Modelos de IA.

## Origen del Proyecto

La idea y estructura inicial de este proyecto se generaron a partir de un **Prompt** diseñado en clase. Este prompt fue introducido en la herramienta de IA **Perplexity** para obtener una base de código y arquitectura, que luego fue desarrollada y personalizada.

El objetivo era explorar las capacidades de los modelos de IA generativa para acelerar el desarrollo inicial de una aplicación web moderna.

Este es el prompt:

1. Contexto: Actúa como experto desarrollador frontend y diseñador web
2. Objetivo: Debes hacer una APP en React 19 que tenga una landing page en la ruta "/landing", usando tailwind, SCSS y con internacionalizacion i18. Que tenga un Hero y una CTA para apuntarse a una newsletter con una petición HTTP con axios hacia un backend que está en una variable en un ".env". Añade un gitignore para React, JS y Node.
3. Tono y estilo: Código
4. Respuesta: En ficheros separados y que cada componente tenga su fichero SCSS correspondiente.
5. Limitaciones o restricciones: Toda la parte de lógica que se pueda extraer en una función reutilizable, es necesario extraerlo.
6. Anticipación de posibles malentendidos: Ninguno
7. Ejemplos: Ninguno
8. Incluir preguntas de seguimiento: Sí
9. Fuentes: Ninguna

---

## Tecnologías Utilizadas

El proyecto está construido con un stack de tecnologías modernas de desarrollo web:

- **Framework**: [React](https://react.dev/) a través de [Vite](https://vitejs.dev/) para un desarrollo rápido y optimizado.
- **Estilos**:
  - [Tailwind CSS](https://tailwindcss.com/): Un framework de CSS "utility-first" para un diseño rápido y responsivo.
  - [SCSS](https://sass-lang.com/): Para estilos personalizados y una mejor organización del CSS.
- **Routing**: [React Router](https://reactrouter.com/) para la navegación entre páginas.
- **Internacionalización**: [i18next](https://www.i18next.com/) para la gestión de múltiples idiomas.
- **Cliente HTTP**: [Axios](https://axios-http.com/) para realizar peticiones a APIs.
- **Linting**: [ESLint](https://eslint.org/) para mantener la calidad y consistencia del código.

## Cómo Empezar

Sigue estos pasos para ejecutar el proyecto en tu entorno local.

### Prerrequisitos

Asegúrate de tener [Node.js](https://nodejs.org/) (versión 18 o superior) instalado en tu máquina.

### Instalación

1. Clona el repositorio en tu máquina local.
2. Abre una terminal en el directorio del proyecto e instala las dependencias:
   ```bash
   npm install
   ```

### Ejecutar en Desarrollo

Para iniciar el servidor de desarrollo con hot-reloading, ejecuta:

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) (o el puerto que indique la terminal) en tu navegador para ver la aplicación.

### Construir para Producción

Para crear una versión optimizada del proyecto para producción, ejecuta:

```bash
npm run build
```

Los archivos compilados se encontrarán en el directorio `dist/`.
