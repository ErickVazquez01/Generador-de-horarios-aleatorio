let alumnosConHorario = [];

function addAlumnoConHorario(alumnoNombre) {
    alumnosConHorario.push(alumnoNombre);
}

function asignaHorario(nombre, arrayMateria) {
    alumnosConHorario.push([
        nombre,
        arrayMateria[0],
        arrayMateria[1],
        arrayMateria[2],
        arrayMateria[3],
        arrayMateria[4],
        arrayMateria[5],
        arrayMateria[6],
        arrayMateria[7],
    ]);
}

//asignaHorario('Erick alejandro vazquez vargas',[1,2,3,4,5,6,7,8]);
//console.log(alumnoConHorario[0]);

//variable para llevar el control del horario individual sin que choque
let intento;
function setHorario(dia, horas) {
    
    if (horas != '-') {
        let posicion;
        switch (dia) {
            case '1'://lunes7-9 -> 0,1
                posicion = obtenerPosicionEnHorario(horas);
                if (posicion != null)
                    for (const key in posicion) {
                        intento[0][posicion[key]] = 'X';
                    }
                break;
            case '2'://martes
                posicion = obtenerPosicionEnHorario(horas);
                if (posicion != null)
                    for (const key in posicion) {
                        intento[1][posicion[key]] = 'X';
                    }
                break;
            case '3'://miercoles
                posicion = obtenerPosicionEnHorario(horas);
                if (posicion != null)
                    for (const key in posicion) {
                        intento[2][posicion[key]] = 'X';
                    }
                break;
            case '4'://jueves
                posicion = obtenerPosicionEnHorario(horas);
                if (posicion != null)
                    for (const key in posicion) {
                        intento[3][posicion[key]] = 'X';
                    }
                break;
            case '5'://viernes
                posicion = obtenerPosicionEnHorario(horas);
                if (posicion != null)
                    for (const key in posicion) {
                        intento[4][posicion[key]] = 'X';
                    }
                break;
        }
    }

}


function obtenerPosicionEnHorario(horas) {
    //7-9
    if (horas != '-') {
        switch (horas) {
            case '07-08':
                return [0];
                break;
            case '08-09':
                return [1];
                break;
            case '09-10':
                return [2];
                break;
            case '10-11':
                return [3];
                break;
            case '11-12':
                return [4];
                break;
            case '12-13':
                return [5];
                break;
            case '13-14':
                return [6];
                break;
            case '14-15':
                return [7];
                break;
            case '15-16':
                return [8];
                break;
            case '16-17':
                return [9];
                break;
            case '17-18':
                return [10];
                break;
            case '18-19':
                return [11];
                break;
            case '07-09':
                return [0, 1];
                break;
            case '09-11':
                return [2, 3];
                break;
            case '11-13':
                return [4, 5];
                break;
            case '13-15':
                return [6, 7];
                break;
            case '15-17':
                return [8, 9];
                break;
            case '17-19':
                return [10, 11];
                break;
        }
    }

}
function confirmaEspacio(dia, horaAAprobar) {
        //0,1
        let posicion = obtenerPosicionEnHorario(horaAAprobar);//2,3
        
        for (const key in posicion) {

            if (intento[(dia - 1)][posicion[key]] == 'X') {
                return false;
            }
        }
        return true;
    
}

/*setHorario('1', '13-14');
setHorario('3', '14-15');
setHorario('5', '13-15');
console.log(intento[0]);

console.log(confirmaEspacio('1','14-15'));
console.log(confirmaEspacio('3','13-14'));*/

