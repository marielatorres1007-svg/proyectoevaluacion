# Bitácora de decisiones — Mononoke Character Database

## 1. ¿Por qué usar un ID único en lugar de identificar al personaje por su nombre? ¿Qué pasaría si dos personajes se llaman igual?

Decidí utilizar un identificador único para cada personaje porque el nombre no es una forma segura de identificar un registro. En una colección pueden existir dos personajes con nombres iguales, variantes del mismo personaje o versiones diferentes de un personaje.

Si utilizara el nombre como identificador, una operación de edición o eliminación podría afectar al registro equivocado. En cambio, el ID permite distinguir cada personaje independientemente de su nombre.

Una alternativa sería utilizar el nombre como identificador, pero esto dificultaría la gestión de nombres duplicados y los cambios de nombre. 

## 2. ¿Conviene guardar todo el arreglo en una sola clave de localStorage o un personaje por clave? 

En mi proyecto decidí guardar la colección completa en una sola clave de localStorage, llamada `mononokePersonajes`. El contenido se almacena en formato JSON, lo que permite recuperar los personajes y reconstruir el arreglo al cargar la aplicación.

La principal ventaja de esta alternativa es que simplifica la lectura, la escritura y la administración de la colección. Cuando agrego, edito o elimino un personaje, puedo actualizar el arreglo y guardar su estado completo.

La desventaja es que cada modificación requiere volver a serializar y guardar el arreglo. Si la colección creciera considerablemente, esta estrategia podría resultar menos eficiente.

Otra alternativa sería guardar cada personaje en una clave independiente. 

## 3. ¿La búsqueda debe ejecutarse en cada tecla o al presionar Enter? ¿Cómo cambia la experiencia con 10 frente a 1,000 personajes?

La búsqueda mientras el usuario escribe permite encontrar personajes sin tener que presionar Enter. Esto hace que la interfaz sea más inmediata y facilita localizar registros por nombre o rol.

Una alternativa sería ejecutar la búsqueda únicamente al presionar Enter. Esto podría reducir la cantidad de operaciones de búsqueda, pero obligaría al usuario a realizar una acción adicional cada vez que quisiera consultar los resultados.

Con una colección de 10 personajes, la diferencia de rendimiento entre ambas estrategias sería prácticamente insignificante. Con 1,000 personajes, la búsqueda en cada tecla podría requerir más procesamiento, especialmente si se aplicaran filtros complejos. En ese caso, sería conveniente optimizar la búsqueda o esperar brevemente después de que el usuario termine de escribir.

## 6. ¿Se debe permitir guardar un personaje con nombre solo de espacios en blanco? ¿Y uno duplicado?

No porque no tendría un nombre útil para identificarlo. Para evitarlo, es necesario limpiar los espacios al principio y al final del texto y comprobar que el resultado no esté vacío.

Tampoco considero conveniente permitir nombres duplicados, porque pueden generar confusión al consultar o administrar los personajes. Por ello, mi aplicación valida los nombres antes de agregar o guardar cambios.

Una alternativa sería permitir nombres repetidos y distinguir los registros únicamente mediante sus IDs. 

## 8. ¿Es seguro guardar información sensible en localStorage? ¿Quién más puede leerla? ¿Qué datos nunca guardarías ahí?

No, pues este mecanismo permite conservar datos en el navegador, pero no está diseñado como un sistema de almacenamiento seguro para información sensible.

Los scripts que se ejecutan en el mismo origen pueden acceder a los datos almacenados. Por ejemplo, otras personas que utilicen el mismo perfil del navegador podrían acceder a la aplicación y a los datos guardados en él.
No almacenaría contraseñas, tokens de autenticación, datos bancarios ni información personal sensible.

## 9. Tu aplicación vive en GitHub Pages. Si un compañero abre tu URL, ¿verá tus personajes? Explica por qué y qué implica para el diseño de la aplicación.

Si mi aplicación está publicada en GitHub Pages y utiliza localStorage para guardar los personajes, un compañero que abra la URL desde su propio navegador no verá automáticamente los registros que guardé en el mío. Porque localStorage pertenece al origen y al almacenamiento del navegador de cada usuario. Aunque varias personas visiten la misma página, sus datos guardados localmente no se sincronizan entre sí.

Por lo tanto, cada persona tendrá su propia colección en su navegador. Esto es adecuado para una aplicación de colección personal, pero significa que los datos no se comparten entre usuarios ni se recuperan automáticamente en otro dispositivo.