# deep
deep learning php, node-js, discord (ia) , utilice un comparador de similitudes por patrones al escribir conforme 
las personas hablaban con el bot en discord este aprendía frases de la gente con la que hablaba para luego por la 
similitud de lo que otra persona hablara con el bot este decidia cual era la mejor respuesta usando el código de 
node-js y la api de discord , para informacion mas detalla sobre el funcionamiento.

Parte de uno el algoritmo en js este algoritmo se encarga de conectar al bot con un servidor en discord e inicia 
con una cuenta de discord como si se tratara de una persona , este usa un canal como cualquier otro bot , pero 
puede leer todos los canales de un servidor, en ese servidor comenzara en modo escucha activa , el bot comenzara
a aprender patrones de habla y guardara en la base de datos lo que la gente escribe y por probabilidad , ira
descartando los patrones menos utilizados por ejemplo : si alguien comienza con un "hola" , el bot buscara estos
patrone similares en la base de datos analizando palabra por palabra y donde encuentre similitud , el algoritmo
de base de datos devolvera esta informacion para luego pase por el segundo algoritmo el cual tomara en cuenta
cual es la moda de ese patron , pero sin descartar la posibilidad que puede tomar cualquier dato de manera 
aleatorea lo que convierte en decisiones unicas y las cuales entre mayor sea la cantidad de datos almacenados 
mayor sera la posibilidad de que esta responda de manera mas correcta o original, este algoritmo no esta terminado
pero es un tema que me apaciona y me gustaria poder desarrollarlo algun dia , para que este bot pueda aprender tareas
de ventas o multiples tareas de la forma en que aprendemos y no solo programar las respuestas a preguntas como hemos 
hecho hasta ahora con muchos bots de habla.

Por ahora no puedo publicar el algoritmo completo hasta terminar o hacerlo completamente funcional , pero puedo mostrar
el avance de mi investigacion.
