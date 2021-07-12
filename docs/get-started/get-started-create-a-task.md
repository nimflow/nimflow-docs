---
sidebar_position: 5
id: get-started-create-a-task
title: Create a Task
---

## Crear la tarea Asignar Analista
En este paso vamos a crear una tarea para asignar un analista de negocios a la oportunidad recién creada.

1. Ingrese en el editor del Tipo de Contexto de los pasos anteriores

2. Seleccione el ícono para agregar una tarea

![image](https://user-images.githubusercontent.com/44214222/118592692-fc776980-b76b-11eb-94d0-7316180ccffa.png)

3. Complete los datos de la tarea según la imagen

![image](https://user-images.githubusercontent.com/44214222/118594505-31d18680-b76f-11eb-8363-fca7685aa25c.png)

El titulo se puede componer dinámicamente mediante el uso de [handlebars](https://handlebarsjs.com/). En estas expresiones no es necesario 
anteponer *state* al nombre de los campos, como se muestra en la imagen.

En la propiedad *Condition Script* se incluye una expresión de [javascript](https://developer.mozilla.org/en-US/docs/Web/javascript) para determinar en que casos la tarea se activa. Si el resultado de la expresión resuelve a [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy), entonces la tarea se activará. Caso contrario la tarea se desactivará. En este caso, la tarea se activara siempre que *recibo* sea distinto de *null* la oportunidad.

4. Seleccione el ícono para agregar una respuesta y complete el nombre de la respuesta según la imagen

![image](https://user-images.githubusercontent.com/44214222/118592934-74459400-b76c-11eb-9921-0a7fb8313d5b.png)

5. Seleccione el botón *JSON SCHEMA* y complete según la imagen

![image](https://user-images.githubusercontent.com/44214222/118593104-be2e7a00-b76c-11eb-8da9-9c8110d74716.png)

6. Complete los datos según la imagen

![image](https://user-images.githubusercontent.com/44214222/118593232-f6ce5380-b76c-11eb-9f40-8fa4d7597975.png)

Grabe el Tipo de Contexto y regrese a la simulación que guardamos en el paso anterior para explorar estos cambios.

1. Como realizamos cambios en la acción, precisamos volver a simular ese evento. Para esto es suficiente con editar el evento *registrar* y simplemente seleccionar ok para que el contexto reaccione.

![image](https://user-images.githubusercontent.com/44214222/118594092-71e43980-b76e-11eb-832e-41c48474129e.png)

Se puede visualizar en el Estado Actual el campo *recibido* con la fecha del momento en que se envió la acción *registrar*. También se puede ver la activación de la tarea *AsignarAnalista*.

![image](https://user-images.githubusercontent.com/44214222/118594562-4ca3fb00-b76f-11eb-883f-e0baee79efcb.png)

2. Para responder a la tarea, se debe seleccionar el botón *asignar* y completar los datos según la imagen.

![image](https://user-images.githubusercontent.com/44214222/118594731-84ab3e00-b76f-11eb-9fef-c99871db1907.png)

Antes de seleccionar el botón de enviar, intente ingresar un nombre que no coincida con una dirección de email. Como se informa en rojo, la definición del *JSON SCHEMA* permite validar los campos ingresados. Ahora complete los datos según la imagen y seleccione enviar.

3. Para que el sistema reaccione en la simulación, debe expandir el evento recién agregado. Luego podrá ver en el Estado Actual los siguientes datos:

![image](https://user-images.githubusercontent.com/44214222/118595069-069b6700-b770-11eb-918c-8ae15af6dc72.png)

Podemos ver también que la tarea *AsignarAnalista* continua activa, ya que no hemos definido en su condición que se desactive, por ejemplo, cuando un analista esté asignado. 

Por favor grabe la simulación antes de continuar.

### Ejercicio
Cambie la condición de la tarea para que sólo se active en caso de que el campo *asignado* sea igual a *null*. Para esto deberá agregar la siguiente expressión en la condición de la tarea ```state.recibido != null && state.asignado == null```. Vuelva a simular después del cambio causando una reacción mediante la edición de la respuesta *asignar* en la lista de eventos. La tarea *AsignarAnalista* ya no debería aparecer en la lista de tareas.

### Próximo paso
[Explorar el Portal](./nimflow-portal.md)
#### Paso anterior
[Crear el hito recibido](./nimflow-createReceivedMilestone.md)
