################## levantamiento el proyecto ############################

### `npm i` para instalar todas las dependencias necesarias

### `npm start` para levantar el proyecto en el servidor local

## recuerde tener una version de node 16 para arriba para que no hay conflictos

#################### Tecnologias utilizadas ###########################

### `React, Redux, Sass, SwallAlert2, react-router`

##################### Estructura de carpetas #############################

### `Se utlizo redux para tener una arquitectura que me pueda tener un orden en mis archivos`

### `actions` hay encontraran todas las acciones que ejecutan los diferentes reducers

### `assets` se utilza para guardar imagenes e iconos

### `components` donde estan los componentes de la vista juego

### `hooks` donde encontraran el hook de useForm para el manejo de datos y errors en el formualrio

### `pages` carpeta que almacena las diferentes vistas del proyecto

### `reducers` carpeta donde se encuntran los diferentes reducers del proyecto

### `routers` carpeta donde se configura las rutas publicas como privadas

### `store` donde guardo la configuracion de mi store

### `style` donde guardo mi estructura de archivos sass que a la vez se encuentran separados por componentes para tener un orden en estos

### `types` carpeta que constine un archivo js que a la vez contiene un objeto que guarda todas las acciones que se implementan el diferentes reducers

################################ consideraciones ##############################################

### Dado que el ejercicio era algo ambiguo, hice algunas modificaciones que me parecieron necesarias

### 1. La de tener que estar logeado para poder inciar el juego, dado que el puntaje obtenido tendra que ser almacenado, se pide los datos del usuario y un alias(ese sera su identificador unico), ya que pueden existir varios usuarios con el mismo nombre, pero por el alias podre filtrar y almacenar sus puntajes obtenidos.

### 2. con respecto a los criterios del juego, considere que solo recibe puntaje quien haya ganado el juego, este a la vez sera obtenido con respecto a la cantidad de movimientos efectuados, de igual manera en la vista game se deja un aviso donde el usuario puede leer las reglas y criteros de puntuacion.

### 3. en la vista ranking me piden filtrar de manera ascendente, pero usualmente los ranking empiezan por la posicion 1 hasta l enesima, asi que lo orden de forma descendente, para asi mostrar en el top 1 al que tenga el mayor puntaje.
