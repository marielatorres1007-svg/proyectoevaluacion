# Bitácora de decisiones — Mononoke Character Database

## 1. ¿Por qué usar un ID único en lugar de identificar al personaje por su nombre? ¿Qué pasaría si dos personajes se llaman igual?

Decidí utilizar un identificador único (`id`) para cada personaje porque el nombre no es una forma segura de identificar un registro. En una colección pueden existir dos personajes con nombres iguales, variantes del mismo personaje o versiones diferentes de un personaje.

Si utilizara el nombre como identificador, una operación de edición o eliminación podría afectar al registro equivocado. En cambio, el ID permite distinguir cada personaje independientemente de su nombre.

Una alternativa sería utilizar el nombre como identificador, pero esto dificultaría la gestión de nombres duplicados y los cambios de nombre. 

## 2. ¿Conviene guardar todo el arreglo en una sola clave de localStorage o un personaje por clave? 

En mi proyecto decidí guardar la colección completa en una sola clave de `localStorage`, llamada `mononokePersonajes`. El contenido se almacena en formato JSON, lo que permite recuperar los personajes y reconstruir el arreglo al cargar la aplicación.

La principal ventaja de esta alternativa es que simplifica la lectura, la escritura y la administración de la colección. Cuando agrego, edito o elimino un personaje, puedo actualizar el arreglo y guardar su estado completo.

La desventaja es que cada modificación requiere volver a serializar y guardar el arreglo. Si la colección creciera considerablemente, esta estrategia podría resultar menos eficiente.

Otra alternativa sería guardar cada personaje en una clave independiente. 