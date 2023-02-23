let altura_cm = 175;
console.log(`Mi altura en cm es: ${altura_cm} cm.`)

let altura_m = 1.75;
console.log(`Mi altura en cm es: ${altura_m} metros.`)
let peso_kg = 73.600;
console.log(`Mi peso es: ${peso_kg} kilogramos.`)

let altura_rdn = altura_m.toFixed()
console.log(`Mi altura rendondeada es: ${altura_rdn} metros.`)

let peso_rdn = Math.floor(peso_kg)
console.log(`Mi peso redondeado es: ${peso_rdn} kilogramos.`)

let max_valor = Number.MAX_VALUE + 1;
console.log(max_valor)