export function formatarNumberEmReal(valor = 0.00) {

    if (typeof valor != 'number') {
        valor = 0.00
    }

    return valor.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })
}