# <img width="48" height="48" src="https://img.icons8.com/color/48/spotted-patterns.png" alt="spotted-patterns"/> Patrones de Diseño en JavaScript y TypeScript (curso de Udemy de Héctor de Leon)

## Pre requisitos:

Tener ya instalados:

- Node.js

- npm (Nodejs Package Manager)

- TypeScript

- ts-node, ``npm i ts-node``, para ejecutar los archivos TypeScript, sin tener que transpilarlos a JavaScript, se usa con el comando: `ts-node nombre-del-archivo.ts` y se ven los console.log por terminal

---

## Extensiones recomendadas para VSC:

- Live Server

---

LOs **patrones de diseño** pueden ser: **creacionales**, **de estructura** o **de comportamiento**

---

## ¿Qué hay ?

- 01-INTRO: las carpeta de introducción con conceptos que hay que conocer de JavaScript y TypeScript, se ve el **paradigma funcional** de JavaScript: 

```
-función de primer orden(funciones guardadas en variables)
-función de segundo orden (reciben como parametro otra función de primer orden)
-arrow function
-forEach
-map
-reduce
-clases y objetos en JS y TS
-herencia en JS y TS
-Interfaces en TS
```

- 02-SINGLETON: creacional, da una técnica para crear objetos. Para cuand la persistencia del objeto nunca cambia, como en un calendario, los días de semana, por ejemplo. Se usa en inyección de dependecias.

- 03-STRATEGY: de comportamiento, ayuda a poder tener comportamientos distintos en un objeto y poder agregar nuevos comportamientos, sin necesidad de modificar el contexto inicial. El contexto es el objeto central que va a unificar las cosas, y desde el que vamos a hacer el objeto. Es de los patrones más utilizados. La clase contexto tiene una estrategia y una acción, pudiendo agregar nuevos comportamientos.

![image](https://github.com/eugenia1984/arquitectura-de-software-patrones/assets/72580574/5995f1a9-e702-431b-9b0f-532372b8ce7a)


- 04-OBSERVER

![image](https://github.com/eugenia1984/arquitectura-de-software-patrones/assets/72580574/efc81499-d4f0-4509-86d7-89e7978667a7)


- 05-DECORATOR: de estructura

![image](https://github.com/eugenia1984/arquitectura-de-software-patrones/assets/72580574/c879435b-f544-4ef4-835a-0feedb3154bb)

- 06-BUILDER: creacional

![image](https://github.com/eugenia1984/arquitectura-de-software-patrones/assets/72580574/f944038f-f363-4e34-8f8a-6ce0e43293fd)

- 07-STATE: de comportamiento

![image](https://github.com/eugenia1984/arquitectura-de-software-patrones/assets/72580574/af496ae1-306f-4cc2-80e4-6085a0a3df43)

- 08-BRIDGE: es un puente, separa una implementación de la clase que la implementará, hay dos interfaces.

![image](https://github.com/eugenia1984/arquitectura-de-software-patrones/assets/72580574/a1bd1ea3-97de-47c8-aac8-394610b1ab55)




---
