const temIngresso = false
const censura = 16
const idade = 9

// ter ingresso e a idade for maior ou igual a censura

if (temIngresso === true) {
    if (idade >= censura) {
        console.log("Pode entrar")
    } else {
        console.log("barrada pela censura")
    }
}
else {
    console.log("barrada por falta de ingresso")
}