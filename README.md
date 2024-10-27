# MIA

MIA es una plataforma que genera cursos personalizados sobre Inteligencia Artificial (IA), adaptados a cada estudiante. Ofrece soluciones rápidas y prácticas para ayudar a los usuarios a avanzar en su aprendizaje, optimizando su tiempo y centrando el contenido en sus necesidades específicas.

## Descripción

MIA permite a los usuarios iniciar su camino en la IA de una forma única y adaptativa. Utilizando esta aplicación, los estudiantes, desde principiantes hasta avanzados, pueden acceder a cursos y materiales que se ajustan a su nivel de conocimiento y objetivos de aprendizaje. Con una interfaz simple y un enfoque innovador, MIA agiliza el aprendizaje, proporcionando contenidos relevantes y evitando la saturación de información innecesaria.

## Características

- Generación de cursos personalizados de IA.
- Adaptación del contenido a los conocimientos previos del usuario.
- Acceso rápido a temas específicos para resolver dudas o profundizar en áreas de interés.
- Configuración y despliegue con Node.js y Express.
- Renderización de vistas con EJS y soporte de estilos con SCSS.

## Tecnologías

- **Node.js** y **Express** para el backend.
- **EJS** para renderizar vistas.
- **Node-sass** para el preprocesamiento de SCSS.
- **Dotenv** para la gestión de variables de entorno.
- **Nodemon** para la recarga en caliente durante el desarrollo.

## Instalación

Sigue estos pasos para clonar e instalar el proyecto en tu máquina local:

```bash
# Clonar el repositorio
git clone https://github.com/Jonny-Start/MIA.git

# Entrar al directorio del proyecto
cd MIA

# Instalar las dependencias
npm install
```

## Configuración de Variables de Entorno

Crea un archivo `.env` en el directorio raíz del proyecto y añade las siguientes variables:

```plaintext
PORT=3000
```

## Scripts Disponibles

- `start`: Inicia el servidor en modo de producción.
- `dev`: Inicia el servidor con recarga en caliente usando Nodemon.
- `scss`: Compila los archivos SCSS en CSS comprimido en tiempo real.

Para ejecutar cualquier script, usa el siguiente comando:

```bash
npm run <script>
```

## Uso

Inicia la aplicación en modo desarrollo con:

```bash
npm run dev
```

Luego, abre tu navegador y ve a `http://localhost:3000` para acceder a la aplicación.

## Endpoints

- **`GET /`**: Página principal que muestra el contenido inicial de MIA.
- **`POST /`**: Endpoint para procesar formularios (si aplica).

## Estructura del Proyecto

```plaintext
MIA/
├── node_modules/           # Dependencias del proyecto
├── public/                 # Archivos estáticos (CSS, JS, imágenes)
│   ├── css/
│   ├── img/
│   └── scss/
├── src/                    
│   ├── controllers/        # Controladores de la aplicación
│   ├── routes/             # Definición de rutas
│   ├── utils/              # Utilidades y funciones auxiliares
│   └── views/              # Plantillas EJS
│       ├── hooks/
│       └── files.ejs
├── .env                    # Variables de entorno
├── .env_example            # Ejemplo de configuración de variables de entorno
├── .gitignore              # Archivos ignorados por Git
├── LICENSE                 # Licencia del proyecto
├── package-lock.json       # Archivo de bloqueo de dependencias
├── package.json            # Información del proyecto y dependencias
└── README.md               # Documentación del proyecto
```

## Dependencias

- **dotenv**: `^16.4.5`
- **ejs**: `^3.1.10`
- **express**: `^4.21.1`
- **node-sass**: `^9.0.0`

### Dependencias de desarrollo

- **nodemon**: `^3.1.7`

## Contribución

Las contribuciones son bienvenidas. Por favor, abre un **issue** para discutir cualquier mejora o problema.

1. Haz un **fork** del proyecto.
2. Crea una nueva rama (`git checkout -b feature/nueva-feature`).
3. Haz tus cambios y realiza un **commit** (`git commit -m 'Añadir nueva feature'`).
4. Haz push a la rama (`git push origin feature/nueva-feature`).
5. Abre un **pull request**.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo `LICENSE` para más detalles.

## Contacto

Para reportar problemas o proponer mejoras, puedes abrir un issue en el repositorio o contactar a **X-Tutors** en el repositorio [GitHub](https://github.com/Jonny-Start/MIA).