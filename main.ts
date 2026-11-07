input.onButtonPressed(Button.A, function () {
    if (valor == 15) {
        basic.showIcon(IconNames.Skull)
        basic.pause(800)
        valor = 0
    } else {
        valor += 1
        mostrarBinario()
    }
})
function mostrarBinario () {
    basic.clearScreen()
    resto = valor
    peso = 8
    for (let índice = 0; índice <= 3; índice++) {
        if (resto >= peso) {
            led.plot(índice, 4)
            resto = resto - peso
        }
        peso = peso / 2
    }
}
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(valor)
    mostrarBinario()
})
input.onButtonPressed(Button.B, function () {
    if (valor > 0) {
        valor += -1
    }
    mostrarBinario()
})
let peso = 0
let resto = 0
let valor = 0
valor = 0
mostrarBinario()
