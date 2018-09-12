var op = ''
var num1
var num2
var cadena = ''
var renglon = ''

function operacion(operador){
    op = operador
}

function leercadena(){
    var suma, resta, division, multiplicacion
    if(renglon != '')
    {
        suma = renglon.indexOf('+')
        resta = renglon.indexOf('-')
        division = renglon.indexOf('/')
        multiplicacion = renglon.indexOf('*')
        if(suma =! -1){
            cadena = renglon.split('+')
            num1 = Number(cadena[0])
            operacion('+')
            num2 = Number(cadena[1])
        }
        else if (resta =! -1){
            cadena = renglon.split('-')
            num1 = Number(cadena[0])
            operacion('-')
            num2 = Number(cadena[1])
        }
        else if (division =! -1){
            cadena = renglon.split('/')
            num1 = Number(cadena[0])
            operacion('/')
            num2 = Number(cadena[1])
        }
        else{ //if (multiplicacion =! -1)
            cadena = renglon.split('*')
            num1 = Number(cadena[0])
            operacion('*')
            num2 = Number(cadena[1])
        }
    }
}

function operacionResuelta(){
    leercadena()
    var res = 0
    switch (op){
        case '+':
        res = num1 + num2
        break;
        case '-':
        res = num1 - num2
        break;
        case '/':
        res = num1 / num2
        break;
        case '*':
        res = num1 * num2
        break;
    }
    console.log(num1)
    console.log(op)
    console.log(num2)
    console.log('=')
    console.log(res)
    renglon = ''
    return res
}

function escribircadena(valor){
    var visor = document.getElementById('visortxt')
    visor += valor
    renglon +=valor
}