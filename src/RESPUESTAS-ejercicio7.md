# Ejercicio 7 — `type` vs `interface`

> Este archivo no se corrige con tests automáticos: lo lee el docente.
> Respondé con tus palabras, en base a lo que probaste en `ej07-tipos-interfaces.ts`.

## ¿Qué permite hacer `interface` que `type` no (o no tan bien)?

_Sinceramente por el ejercicio mismo no me di cuenta de mucha diferencia. Pero por lo que busqué de interface y type, interface permite hacer Declaration Merging. Esto básicamente hace que al definir mas de una interface con el mismo nombre en distintas partes del código o en distintos archivos, sean combinadas por Typescript en una sola interface que tiene todas las propiedades juntas. Con type daría un error de identificador duplicado._

## ¿Qué permite hacer `type` que `interface` no?

_Permite definir cualquier tipo de dato, no solo la estructura de un objeto o funcion. Se pueden definir Union Types, Alias de primitivos, Tuplas o Tipos mapeados y condicionales._

## ¿Ambas se pueden extender? ¿Cómo se hace en cada caso?

_Sí, ambas se pueden extender. En un interface se usa la palabra reservada "extends" (interface Persona {...}, interface Alumno extends Persona {...}. En un type se usa el operador "&" (type Persona = {...}; type Alumno = Persona & {...})_

## ¿Cuál elegirían para representar una entidad del dominio (por ejemplo, `Alumno`)? ¿Por qué?

_Yo eligiría un interface para este caso porque considero que al estar trabajando sobre un objeto, es mucho mas legible utilizar la forma de las interfaces para extender claramente estas estructuras de datos mas complejas._
