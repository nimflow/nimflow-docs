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

![simulate editor name](https://user-images.githubusercontent.com/44214222/118586496-79044b00-b760-11eb-9f1c-2f270bbe05c7.png)

Usaremos esta simulación durante la construcción de la solución. Ahora vamos a simular la **Acción** para registrar una oportunidad.

5. Seleccione el ícono para crear un nuevo evento.

![simulate initial action](https://user-images.githubusercontent.com/44214222/118586690-ce405c80-b760-11eb-864a-cb3e063c768c.png)

6. Seleccione el botón **Registrar** en el cuadro de diálogo

![simulate initial action registrar](https://user-images.githubusercontent.com/44214222/118586808-034caf00-b761-11eb-8544-16cbe498bf99.png)

7. Complete la referencia según la imagen y seleccione el botón **Agregar Acción**

![simulate initial action registrar reference](https://user-images.githubusercontent.com/44214222/118586926-3e4ee280-b761-11eb-9d53-c0011900280c.png)

Hemos simulato el evento inicial **Registrar**. Ahora exploraremos el estado del contexto. Antes de visualizar las reacciones, note que la clave *oportunidad*
tiene asignado un valor null ya que no hemos pasado ningún dato durante el registro de la **Acción Registrar**

8. Seleccione el ícono con forma de flecha hacia abajo. Esto expandirá el evento seleccionado permitiendo ver el **Payload** (los datos enviados con la acción).

![simulate initial action registrar expand](https://user-images.githubusercontent.com/44214222/118587285-f54b5e00-b761-11eb-86b9-bb100bcc3c24.png)





