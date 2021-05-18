## Crear el hito Recibido
Vamos a registrar el momento en que se recibe la oportunidad para poder medir tiempos de ciclo de este proceso. 

1. Ingrese en el editor del **Tipo de Contexto** de los pasos anteriores

2. Seleccione el ícono para editar la acción *registrar*

![image](https://user-images.githubusercontent.com/44214222/118591037-1fece500-b769-11eb-836b-09b3a22c5167.png)

3. Agregue un nuevo campo con la clave *recibido*

![image](https://user-images.githubusercontent.com/44214222/118591135-4ca0fc80-b769-11eb-86f6-5a33a5441a06.png)

En este caso la expresión ```new Date()``` permite asignar a la clave *recibido* la fecha del momento en que se recibe la acción *registrar*. 

4. Indique que el campo *recibido* es un Hito en la lista de campos a la derecha. 

![image](https://user-images.githubusercontent.com/44214222/118591750-56772f80-b76a-11eb-83c6-26ea0618632a.png)

5. Seleccione el ícono para incluir el campo en el grafo

![image](https://user-images.githubusercontent.com/44214222/118591841-845c7400-b76a-11eb-84f6-3187ec4650a1.png)

Al incluir un campo en el gráfo, se puede explorar sus relaciones con otros elementos del Tipo de Contexto. En este caso se representa con una
linea azul la relación con la acción *registrar*

![image](https://user-images.githubusercontent.com/44214222/118591972-c7b6e280-b76a-11eb-8386-fe7bb3189bb4.png)

### Próximo paso
[Crear la tarea Asignar Analista](./nimflow-assignBusinessAnalyst.md)

#### Paso anterior
[Simular](./nimflow-simulate.md)
