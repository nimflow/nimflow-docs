## Crear la acción Registrar
Una **Acción** se utiliza para notificar eventos en un **Contexto**. A continuación crearemos una **Acción** para *registrar una oportunidad*. 

1. Ingrese al contexto seleccionando el ícono de edición

![contex type edit](https://user-images.githubusercontent.com/44214222/118573110-7fd29400-b747-11eb-9430-4a8299e19b7b.png)

2. Una vez en el editor de **Tipos de Contexto** seleccione el ícono para crear **Acciones**

![context type create action](https://user-images.githubusercontent.com/44214222/118573457-39ca0000-b748-11eb-9891-ecb7adfec56c.png)

3. Complete el nombre de la acción según la siguiente imagen

![context type action name](https://user-images.githubusercontent.com/44214222/118573686-a7762c00-b748-11eb-95d8-fb8cef834afc.png)

4. Selecciona el botón **JSON Schema** para definir la estructura de los datos que se espera recibir con esta acción (**Payload**)

![context type action json schema](https://user-images.githubusercontent.com/44214222/118587570-7acf0e00-b762-11eb-9579-5710e2ef89c1.png)

5. Complete el [JSON Schema](https://json-schema.org/) con los datos de la imagen a continuación y al finalizar seleccione **Aceptar**

![image](https://user-images.githubusercontent.com/44214222/118589779-b2d85000-b766-11eb-86ca-02fe439ff23f.png)

6. Cree un campo donde se guardarán los datos recibidos en la acción (**Payload**)

![context type action setter](https://user-images.githubusercontent.com/44214222/118588602-52e0aa00-b764-11eb-9a6a-377b9b124348.png)

Para acceder a los datos del payload puede utilizar el objeto *payload*. En este caso asignaremos el *payload* a la clave *oportunidad* según muestra la imagen. 

La expressión para asignar la clave se resuelve con **Javascript**. Para construir expresiones más complejas se puede acceder a un editor con *intellisense* ([Monaco](https://microsoft.github.io/monaco-editor/index.html)) seleccionando el ícono ![image](https://user-images.githubusercontent.com/44214222/118588304-bae2c080-b763-11eb-95d8-6ce8d858dd03.png)

6. Guarde los cambios en la **Acción**

![context type action save](https://user-images.githubusercontent.com/44214222/118588664-799ee080-b764-11eb-8c9b-a91b7b21b6ad.png)

Esto creará la acción y la agregará como un nodo en el editor de **Tipo de Contexto**. 

7. Para crear un nuevo **Contexto** mediante una **Acción** es necesario indicar esta característica en el nodo seleccionando su ícono.

![image](https://user-images.githubusercontent.com/44214222/118574354-d8a32c00-b749-11eb-825f-72b5449784ec.png)

Cada **Tipo de Contexto** debe indicar al menos una **Acción** como inicial, para que los **Contextos** puedan ser creados. Los **Contextos** representan instancias de ejecución de un **Context Type**, en este caso iniciaremos **Contextos** para cada oportunidad que identificaremos con una referencia única.

Antes de continuar guarde los cambios en el **Tipo de Contexto**.

### Próximo paso
[Simular](./nimflow-simulate.md)

#### Paso anterior
[Crear un Tipo de Contexto](./nimflow-createContextType.md)
