# Journal App

**Journal App** es una aplicacion para llevar un diario personal, permitiendo a los usuarios hacer anotaciones diarias y subir fotos si lo desean. Los usuarios pueden registrarse con su propia cuenta o iniciar sesion utilizando su cuenta de Gmail.

Puedes ver la aplicacion en produccion aqui: **[Journal App](https://journal-by-ceci.netlify.app)**

## Tabla de Contenidos

- [Caracteristicas](#caracteristicas)
- [Tecnologias](#tecnologias)
- [Uso](#uso)

## Características

- Crear y gestionar tus anotaciones diarias.
- Subir fotos junto con tus anotaciones.
- Registro de usuarios y autenticacion con correo electronico.
- Integracion con autenticacion de Google (Gmail).
- Interfaz de usuario intuitiva y amigable.
- Proteccion de datos con Firebase.

## Tecnologias

El proyecto utiliza las siguientes tecnologias y dependencias:

- **Frontend**: 
  - React: ^18.3.1
  - React DOM: ^18.3.1
  - React Router DOM: ^6.26.2
  - MUI (Material-UI): ^6.1.0 (con `@emotion/react` y `@emotion/styled` para estilos)
  - Redux Toolkit: ^2.2.7
  - React Redux: ^9.1.2
  - SweetAlert2: ^11.14.0 (para alertas y notificaciones)

- **Backend y Base de Datos**: 
  - Firebase: ^10.13.1 (usado para autenticacion y almacenamiento)
  - Cloudinary (para el almacenamiento y gestion de imagenes subidas por los usuarios)

- **Herramientas de desarrollo**:
  - Vite: ^5.4.0 (para el entorno de desarrollo y build)
  - ESLint: ^9.8.0 (para asegurar la calidad del código)
  - @vitejs/plugin-react: ^4.3.1