import test from "ava"

//Ejemplo 1: Verificar la igualdad
test("Dos más dos es igual a cuatro",(t)=> {t.is(2+2, 4) // Este test pasa porque 2 + 2 es 4

} )

//Ejemplo 2: Verificar verdadero o falso.

test("Verdadero es verdadero", (t)=> {t.true(true)// Este test pasa porque verdadero es verdadero
})