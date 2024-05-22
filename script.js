function convertir(){
    const VACIO = "";
    let dolar = 1;
    let euro = 1;
    let peso = 1;
    let yen = 1;
    let cantidad = prompt("Ingrese cantidad: ");
    if (cantidad != VACIO && cantidad > 0){
        let moneda1 = prompt("Ingrese moneda canjeada: dolar euro peso yen");
        let moneda = prompt("Ingrese moneda a canjear: dolar euro peso yen");


                if (moneda1 === moneda){
                    alert("Conversion innecesaria");
                } else if (moneda === dolar){
                    let dolar = 17;
                    let total = cantidad * dolar
                    alert(total + " dolares");
                } else if (moneda === euro){
                    let euro = 19;
                    let total = cantidad * euro
                    alert(total + " euros");
                } else if (moneda === peso){
                    let peso = 12;
                    let total = cantidad * peso
                    alert(total + " pesos");
                } else if (moneda === yen){
                    let yen = 7;
                    let total = cantidad * yen
                    alert(total + " yenes");
                }


            }
            else{
                alert("Moneda invalida");
            }
        }

convertir()
