### Simular
**nimflow studio** incluye un simulador de **Contextos** que permite explorar el estado de un contexto y su reacción a diferentes eventos. 
El simulador es una herramienta útil durante la construcción de un **Tipo de Contexto** ya que permite validar las reacciones a eventos simulados.
 A continuación vamos a simular un **Contexto** basado en el **Tipo de Contexto** que creamos en los pasos anteriores.
 
 1. Seleccione **Simulación** del menú de navegación a la izquierda

![simulate](https://user-images.githubusercontent.com/44214222/118585765-2c6c4000-b75f-11eb-9d79-ced51e03f592.png)

2. Seleccione el ícono para crear una nueva simulación

![simulate create]!(https://user-images.githubusercontent.com/44214222/118586283-16ab4a80-b760-11eb-8814-03e471f3f4a2.png)

3. Seleccione el **Tipo de Contexto** a simular

![simulate select context type](https://user-images.githubusercontent.com/44214222/118586379-3b072700-b760-11eb-824c-faf9ce8b2460.png)

4. Se visualizará el editor de simulaciones. Complete el campo nombre según la imagen y luego grabe la simulación.

![simulate editor name](https://user-images.githubusercontent.com/44214222/118589054-3bee8780-b765-11eb-967f-a60e11d58d44.png)

Usaremos esta simulación durante la construcción de la solución. Ahora vamos a simular la **Acción** para registrar una oportunidad.

5. Seleccione el ícono para crear un nuevo evento.

![simulate initial action](https://user-images.githubusercontent.com/44214222/118586690-ce405c80-b760-11eb-864a-cb3e063c768c.png)

6. Seleccione el botón **Registrar** en el cuadro de diálogo

![simulate initial action registrar](https://user-images.githubusercontent.com/44214222/118586808-034caf00-b761-11eb-8544-16cbe498bf99.png)

Si no aparece el botón **Registrat**, verifique que haya seleccionado en el paso anterior que la **Acción Registrar** sea inicial.

7. Complete la referencia según la imagen y seleccione el botón **Agregar Acción**

![simulate initial action registrar reference](https://user-images.githubusercontent.com/44214222/118589984-267a5d00-b767-11eb-88db-3d5fae00b01e.png)

Hemos simulado el evento inicial **Registrar**. Ahora exploraremos el estado del contexto. 

8. Oprima el ícono de flecha en el campo *oportunidad* en el estado de contexto

![simulate state]![image](https://user-images.githubusercontent.com/44214222/118590043-401ba480-b767-11eb-9155-328fd62d4c0b.png)

El campo oportunidad es un objeto con dos propiedades, *titulo* y *descripcion* con los datos que hemos ingresado en el payload de la acción registrar. Esto se debe a que en el paso anterior definimos que el payload se asigne al campo *oportunidad*.

8. También puede explorar el payload del evento seleccionando el ícono con forma de flecha hacia abajo según la imagen.

![simulate initial action registrar expand](https://user-images.githubusercontent.com/44214222/118590325-d5b73400-b767-11eb-8664-8b07fed370b6.png)

Como se comprueba en la imagen, estos datos coinciden con los datos ingresados con la acción *registrar* y con los datos actualmente en el campo *oportunidad*.

Guarde la simulación antes de salir para continuar explorando sus datos en próximos pasos.





