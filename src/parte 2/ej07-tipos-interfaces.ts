/**
 * EJERCICIO 7 - `type` vs `interface`
 * ---------------------------------------------------------------------------
 * Definir un modelo de Alumno de dos formas distintas: una con `interface`
 * y otra con `type`. Completar las funciones `crearAlumnoInterface` y
 * `crearAlumnoType` para que construyan y devuelvan el objeto.
 *
 * Cuando termines el código, respondé las preguntas de comparación en
 * RESPUESTAS-ejercicio7.md (no se corrigen con tests automáticos, las lee
 * el docente).
 */

// -----------------------------------------------------------------------------
// Versión con `interface`
// -----------------------------------------------------------------------------
//TODO rever la interface no me gusta para esto. (Hecho?)
// Agregué dos campos para que coincidan con el modelo de la base de datos pero
// no sé si se refería a eso. (°-°)

export interface AlumnoInterface {
    legajo: number;
    nombre: string;
    apellido: string;
    edad: number;
    email: string;
    nota: number;
    ciudad: string;
}

export function crearAlumnoInterface(
    legajo: number,
    nombre: string,
    apellido: string,
    edad: number,
    email: string,
    nota: number,
    ciudad: string
): AlumnoInterface {
    // TODO
    return {
        legajo,
        nombre,
        apellido,
        edad,
        email,
        nota,
        ciudad
    };
}

// -----------------------------------------------------------------------------
// Versión con `type`
// -----------------------------------------------------------------------------
export type AlumnoType = {
    legajo: number;
    nombre: string;
    apellido: string;
    edad: number;
    email: string;
};

export function crearAlumnoType(
    legajo: number,
    nombre: string,
    apellido: string,
    edad: number,
    email: string
): AlumnoType {
    // TODO
    throw new Error("Implementar");
}
