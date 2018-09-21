var op = ''
var num1
var num2
var cadena = ''
var renglon = ''
var arregloDeOperaciones = []

function operacion(operador) {
    op = operador
}

function leercadena() {
    var suma, resta, division, multiplicacion
    if (renglon != '') {
        suma = renglon.indexOf('+')
        resta = renglon.indexOf('-')
        division = renglon.indexOf('/')
        multiplicacion = renglon.indexOf('*')
        if (suma != -1) {
            cadena = renglon.split('+')
            num1 = Number(cadena[0])
            operacion('+')
            num2 = Number(cadena[1])
        }
        else if (resta != -1) {
            cadena = renglon.split('-')
            num1 = Number(cadena[0])
            operacion('-')
            num2 = Number(cadena[1])
        }
        else if (division != -1) {
            cadena = renglon.split('/')
            num1 = Number(cadena[0])
            operacion('/')
            num2 = Number(cadena[1])
        }
        else { //if (multiplicacion != -1)
            cadena = renglon.split('*')
            num1 = Number(cadena[0])
            operacion('*')
            num2 = Number(cadena[1])
        }
    }
}

function operacionResuelta() {
    leercadena()

    var res = 0
    switch (op) {
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
    document.getElementById("visortxt").value += ' = '.concat(res).concat('\n');
    guardarOperacionEnElArreglo()
    renglon = ''
    return res
}

function escribircadena(valor) {
    var visor = document.getElementById('visortxt')
    //visor += valor
    document.getElementById("visortxt").value += valor
    renglon += valor
}
//no se si comiteo
function limpiarTextArea() {
    document.getElementById("visortxt").value = ''
}

function borrarcadena() {
    document.getElementById("visortxt").value = ''
}

function borraruncaracter() {
    var linea = document.getElementById("visortxt").value
    document.getElementById("visortxt").value = linea.slice(0, -1)
}

function guardarOperacionEnElArreglo() {
    arregloDeOperaciones.push(document.getElementById("visortxt").value)
}

function mostrarOperacionesDelArreglo() {
    var listaop = ''
    if(arregloDeOperaciones.length > -1)
    {
        for (i = 0; i < arregloDeOperaciones.length; i++) {
            listaop += "<li class=\"list-group-item list-group-item-secondary\">" + arregloDeOperaciones[i] + "</li>"            
        }
        document.getElementById("listaop").innerHTML = listaop
    }
    else{
        document.getElementById("listaop").innerHTML = "<br><li class=\"list-group-item list-group-item-secondary\">No hay operaciones realizada</li>"
    }
    
}