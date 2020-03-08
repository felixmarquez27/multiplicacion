const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite) => {

    console.log('==============='.green);
    console.log(`Tabla de ${base}`.green);
    console.log('==============='.green);
    for (let i = 0; i <= limite; i++) {
        console.log(`${base} x ${i} = ${base * i}\n`);
    }
}

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        let data = '';
        if (!Number(base)) {
            reject('La Base introducida no es número');
            return;
        }
        if (!Number(limite)) {
            reject('El Límite introducido no es número');
            return;
        }
        for (let i = 0; i <= limite; i++) {
            data += `${base} x ${i} = ${base * i}\n`;
        }


        fs.writeFile(`tablas/tabla base-${base}-hasta-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`base-${ base }.txt-hasta${limite}`.green);

        });



    })
}


module.exports = {
    crearArchivo,
    listarTabla
}