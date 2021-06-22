# FullStackCursoNivelador
# Este es un pequeño proyecto que usa express y cowsay para mostrar un mensaje.
# De manera adicional este proyecto realiza una petención get usando el puerto 3000
# Una vez que levantamos nuestro express con npm start
# podemos acceder en un navegador a http://localhost:3000/ y ahí veremos la petición GET

<details>
    <summary>La dockerizada.</summary>
    El nombre del docker es: node-fullstackweb. Esta corriendo en el puerto 3000.
    Para ejecutar la solución dockerizada vamos a usar el comando:
    docker run -it -p 3001:3000 node-fullstackweb

    Si todo va bien veremos un mensaje en la consola que dice:
    - Server is running

    Y para validar nuestro servidor corriendo, abrimos un navegador y nos vamos a la url http://localhost:3001/

    En la pagina web veremos el siguiente text:

    Hola Mundo con Express. Maestria Full Stack Web.

    Nuestra pequeña app ha funcionado.

</details>

# Saludos Fredy Zurita