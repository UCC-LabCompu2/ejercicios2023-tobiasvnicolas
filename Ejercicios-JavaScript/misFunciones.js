/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */

/**
 * convercion de unidades
 * @method convertirUnidades
 * @param {string} id - Id del elemento input del html
 * @param {number} valor - Valor del elemento input
 */
function convertirUnidades(id,valor){
    if(isNaN(valor)){
        alert("El valor ingresado es incorrecto")
        document.lasUnidades.unid_metro.value = "";
        document.lasUnidades.unid_pulgada.value = "";
        document.lasUnidades.unid_pie.value = "";
        document.lasUnidades.unid_yarda.value = "";
    }

    else if(id==="metro"){
        document.lasUnidades.unid_pulgada.value = valor*39.3701;
        document.lasUnidades.unid_pie.value = valor*3.28084;
        document.lasUnidades.unid_yarda.value = valor*1.09361;
    }

    else if(id==="pulgada"){
        document.lasUnidades.unid_metro.value = valor*0.0254;
        document.lasUnidades.unid_pie.value = valor*0.0833333;
        document.lasUnidades.unid_yarda.value = valor*0.0277778;
    }

        else if(id==="pie"){
        document.lasUnidades.unid_pulgada.value = valor*12;
        document.lasUnidades.unid_metro.value = valor*0.3048;
        document.lasUnidades.unid_yarda.value = valor*0.333333;
    }

        else if(id==="yarda"){
        document.lasUnidades.unid_pulgada.value = valor*36;
        document.lasUnidades.unid_pie.value = valor*3;
        document.lasUnidades.unid_metro.value = valor*0.9144;
    }
}

/**
 * convercion grado - radian
 * @method convertirGR
 * @param {string} id - Id del elemento input del html
 */

function convertirGR(id) {
    var grad, rad;
    if(id=="grados"){
        grad = document.getElementById("grados").value;
        rad = (grad*Math.PI)/180;
        if(isNaN(grad)){
            alert("El valor ingresado es incorrecto")
            grad = "";
            rad = "";
        }
    } else if(id=="radianes"){
        rad = document.getElementById("radianes").value;
        grad = (rad*180)/Math.PI
        if(isNaN(rad)){
            alert("El valor ingresado es incorrecto")
            rad = "";
            grad = "";
        }
        document.getElementById("grados").value = grad;
        document.getElementById("radianes").value = rad;
    }
}

let mostra_ocultar = (id) => {
    if(valorMO=="val_mostrar"){
        document.getElementById("divMO").style.display = "block";
    }else if(valorMO=="val_ocultar"){
        document.getElementById("divMO").style.display = "none";
    }
}

let cargarListenerEjemplo = () => {
    document.getElementById("myCanvas").addEventListener("mousemove", dibujarCuadriculado);
}

let dibujarCuadriculado = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.font = "10px Arial";
    ctx.fillStyle = "#00f";

    console.log("Se comenzara a dibujar!!!");
    const anchoMax = canvas.width;
    const alturaMax = canvas.height;

    let paso = 20;
    let ejeX = -25; //Calcular
    let ejeY = 15; //Calcular
    let despl = 2;


    //lineas Verticales
    for(let i = 0;i<anchoMax;i+=paso){
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, alturaMax);
        ctx.strokeStyle = "#090";
        ctx.fillText(ejeX, i, alturaMax/2 - 6);
        ejeX +=1;
        ctx.stroke();
        ctx.closePath();
    }

    //lineas Horizontales
    for(let i = 0;i<alturaMax;i+=paso){
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(anchoMax, i);
        ctx.strokeStyle = "#090";
        ctx.stroke();
        ctx.fillText(ejeY, anchoMax/2+despl, i+3);
        ejeY -=1;
        ctx.closePath();
    }

        //Eje X
            ctx.beginPath();
            ctx.moveTo(0, alturaMax/2);
            ctx.lineTo(anchoMax, alturaMax/2);
            ctx.strokeStyle = "#f00";
            ctx.stroke();
            ctx.closePath();

        //Eje Y
            ctx.beginPath();
            ctx.moveTo(anchoMax/2, 0);
            ctx.lineTo(anchoMax/2, alturaMax);
            ctx.strokeStyle = "#f00";
            ctx.stroke();
            ctx.closePath();
}

let dibujarImagen = (posX, posY) => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    const anchoMax = canvas.width;
    const alturaMax = canvas.height;

    canvas.width = canvas.width;

    console.log(posX, posY);
    let img = new Image();
    img.src = "images/auto.png";

    if(posX < 0 || posY < 0 || posX >= anchoMax || posY >= alturaMax){
        openDialog();
    }else{
        img.onload = function (){
            ctx.drawImage(img,posX, posY);
        }
    }
}

let cerrarDialog = () => {
    const dialog = document.getElementById("myDialog");
    dialog.close;
}

let openDialog = () => {
    const dialog = document.getElementById("myDialog");
    dialog.showModal();
}

let guardaLS = () => {

}

function  calcularSuma(){
    var num1, num2;
    num1 = document.getElementsByName("sum_num1")[0].value;
    num2 = document.getElementsByName("sum_num2")[0].value;
    document.getElementsByName("sum_total")[0].value = Number(num1) + Number(num2);
}

function  calcularResta(){
    var num1, num2;
    num1 = document.getElementsByName("res_num1")[0].value;
    num2 = document.getElementsByName("res_num2")[0].value;
    document.getElementsByName("res_total")[0].value = Number(num1) - Number(num2);
}

function  calcularMult(){
    var num1, num2;
    num1 = document.getElementsByName("mul_num1")[0].value;
    num2 = document.getElementsByName("mul_num2")[0].value;
    document.getElementsByName("mul_total")[0].value = Number(num1) * Number(num2);
}

function  calcularDiv(){
    var num1, num2;
    num1 = document.getElementsByName("div_num1")[0].value;
    num2 = document.getElementsByName("div_num2")[0].value;
    document.getElementsByName("div_total")[0].value = Number(num1) / Number(num2);
}