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

7. Complete la referencia según la imagen ( el campo Descripción contiene: "Seguimiento con los contactos de los proveedores que recibieron Ordenes de Compra") y seleccione el botón **Agregar Acción**

![simulate initial action registrar reference](https://user-images.githubusercontent.com/44214222/118589428-fd0d0180-b765-11eb-8960-a76f2b9c482b.png)

Hemos simulato el evento inicial **Registrar**. Ahora exploraremos el estado del contexto. 

8. Oprima el ícono de flecha en el estado de contexto

![simulate state](https://user-images.githubusercontent.com/44214222/118589587-478e7e00-b766-11eb-97d3-0904633ccf6b.png)

El campo oportunidad es un objeto con dos propiedades, title

8. Seleccione el ícono con forma de flecha hacia abajo. Esto expandirá el evento seleccionado permitiendo ver el **Payload** (los datos enviados con la acción).

![simulate initial action registrar expand](https://user-images.githubusercontent.com/44214222/118587285-f54b5e00-b761-11eb-86b9-bb100bcc3c24.png)





