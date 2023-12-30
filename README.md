# Proyecto institutos de apoyo universitarios para la carrera de medicina destinado a alumnos y profesores de la Univerisdad Nacional de La Rioja y Barcelo.

Mi nombre es Lucas Aspee .

El objetivo de este proyecto fue crear una api que permita gestionar información relacionada a los institutos de apoyo universitario de la carrera de medicina , así como agregar institutos, editarlos, borrarlos o simplemente consultar todos los que se encuentran disponibles en la zona de La Rioja

Se trata de una api creada en Node.js utilizando Express la cual  empleando mongoose se conecta a la base de datos (MongoDB).
Consta de 5 end points los cuales nos permite realizar las siguientes acciones 

-GET::/<places>- → Trae un array con todos los places desde la base de datos.
-GET::/<places>/:id--->Trae el place con la id especificada.
-POST::/<places>--->Crea un solo place a la base de datos.Recibe datos por body.
-DELETE::/<places>/:id--->Borra un elemento de la base de datos por su id.
-PATCH::/<resource>/:id--->Edita un resource con los datos enviados en body.

La api se realizó utilizando TypeScript  y para los middlewares de validación se utilizó la librería Joi.

## Requerimientos

Para el correcto funcionamiento es necesario instalar las dependencias figuradas en el package.json
```
- npm i
```

## Modo de ejecucion
En la consola escribir el siguiente comando :
```
- npm run dev
```
Si el script se ejecuto correctamente nos aparecera el siguiente mensaje en consola :
```
Server is running on port 3000
Database connected
```




## Demo

Para probar el funcionamiento de los diferentes end points utilizaremos la siguiente ruta base (para esto se puede emplear POSTMAN,ThunderClient):

```
localhost:3000/places

```


## Creado con :

* [Node.Js] 
* [Express] 
* [TypeScript] 
* [Joi] 
* [MongoDB] 
* [Mongoose] 


## Autor

- [LucasAspee]
