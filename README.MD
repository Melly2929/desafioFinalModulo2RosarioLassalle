Buscador de libros 

Con esta herramienta podras navegar por la informacion detallada de los libros que esten cargados en la base de datos. A continuacion te voy a detallar los comandos y la informacion necesaria para que puedas hacerlo.

Cada libro cuenta con la siguiente informacion :
id: numero identificador del registro
name: nombre del libro que estas buscando
author: es el nombre del autor del libro
tags: etiquetas que sirven para describir el contenido del libro (ej: drama, accion, etc)
sold: cantidad de unidades vendidas de ese libro

Comandos que podras utilizar para navegar por esta informacion: 

node index.js : me mostrara todos los libros en la base de datos.

node index.js --id [Numero de id]: me filtrara el libro y su informacion por su numero de id, el mismo debe ser escrito separado por un espacio luego de la palabra "id".

node index.js --name [Nombre del libro]: me filtrara el libro y su informacion por el nombre, el mismo debe ser escrito separado por un espacio luego de la palabra "name" teniendo en cuenta que los espacios los debe reemplazar por el guion bajo(_)

node index.js --author [Nombre del Autor]: me filtrara el/los libros y su informacion por el nombre del autor, el mismo debe ser escrito separado por un espacio luego de la palabra "author" teniendo en cuenta que los espacios los debe reemplazar por el guion bajo(_).

node index.js --tag [Nombre de la etiqueta]: me filtrara el/los libros y su informacion que coincidan con la etiqueta mencionada, la misma debe ser escrita separada por un espacio luego de la palabra "tag".

node index.js --sold [Nombre del Autor]: me sumara la cantidad total de libros vendidios por el autor especificado, el mismo debe ser escrito separado por un espacio luego de la palabra "author" teniendo en cuenta que los espacios los debe reemplazar por el guion bajo(_).


