/**
 * Descripción
 * @method Nombre de la función
 * @param Parámetro A
 * @param Parámetro B
 * @return Valor que retorna
 */

/**
 * Obtiene los elementos de la interfaz de usuario.
 * @method obtenerElementos
 * @return {object} Objeto que contiene los elementos de la interfaz de usuario.
 */
const obtenerElementos = () => {
    return {
      unid_metro: document.lasUnidades.unid_metro,
      unid_pulgada: document.lasUnidades.unid_pulgada,
      unid_pie: document.lasUnidades.unid_pie,
      unid_yarda: document.lasUnidades.unid_yarda,
    };
  };
  
  /**
   * Muestra una alerta de error cuando el valor ingresado no es un número.
   * @method mensajeError
   */
  const mensajeError = () => {
    alert("El valor ingresado es incorrecto");
  };
  
  /**
   * Convierte unidades y asigna los valores a los campos en la interfaz de usuario.
   * @method convertirUnidades
   * @param {string} id - Id del elemento input del html.
   * @param {number} valor - Valor del elemento input.
   */
  const convertirUnidades = (id, valor) => {
    const elementos = obtenerElementos();
  
    if (isNaN(valor)) {
      mensajeError();
      elementos.unid_metro.value = "";
      elementos.unid_pulgada.value = "";
      elementos.unid_pie.value = "";
      elementos.unid_yarda.value = "";
    } else {
      const valorMetro = valor * 0.0254;
      const valorPulgada = valor * 39.3701;
      const valorPie = valor * 3.28084;
      const valorYarda = valor * 1.09361;
  
      if (id === "metro") {
        elementos.unid_pulgada.value = valorPulgada;
        elementos.unid_pie.value = valorPie;
        elementos.unid_yarda.value = valorYarda;
      } else if (id === "pulgada") {
        elementos.unid_metro.value = valorMetro;
        elementos.unid_pie.value = valorPie;
        elementos.unid_yarda.value = valorYarda;
      } else if (id === "pie") {
        elementos.unid_pulgada.value = valorPulgada;
        elementos.unid_metro.value = valorMetro;
        elementos.unid_yarda.value = valorYarda;
      } else if (id === "yarda") {
        elementos.unid_pulgada.value = valorPulgada;
        elementos.unid_pie.value = valorPie;
        elementos.unid_metro.value = valorMetro;
      }
    }
  };
  
  

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

/**
 * Mostrar/Ocultar elementos del style
 * @method mostra_ocultar de la función
 * @param {string} id - Id del elemento input del html
 */

let mostra_ocultar = (id) => {
    if(valorMO=="val_mostrar"){
        document.getElementById("divMO").style.display = "block";
    }else if(valorMO=="val_ocultar"){
        document.getElementById("divMO").style.display = "none";
    }
}

/**
 * Cargar Listener
 * @method cargarListenerEjemplo de la función
 */

let cargarListenerEjemplo = () => {
    document.getElementById("myCanvas").addEventListener("mousemove", dibujarCuadriculado);
}

/**
 * Dibujar en la cuadricula canvas
 * @method dibujarCuadriculado de la función
 */

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

/**
 * Dibujar imagen en lienzo canvas
 * @method dibujarImagen de la función
 * @param {float} posX - Coordenadas de aparicion de la imagen
 * @param {float} posY - Coordenadas de aparicion de la imagen
 */

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

/**
 * funcion que cierra el dialogo
 * @method cerrarDialog de la función
 */

let cerrarDialog = () => {
    const dialog = document.getElementById("myDialog");
    dialog.close;
}

/**
 * funcion que abre el dialogo
 * @method openDialog de la función
 */

let openDialog = () => {
    const dialog = document.getElementById("myDialog");
    dialog.showModal();
}

/**
 * guardado de Listener
 * @method guardaLS de la función
 */

let guardaLS = () => {

}

/**
 * funcion sumar
 * @method calcularSuma de la función
 */

function  calcularSuma(){
    var num1, num2;
    num1 = document.getElementsByName("sum_num1")[0].value;
    num2 = document.getElementsByName("sum_num2")[0].value;
    document.getElementsByName("sum_total")[0].value = Number(num1) + Number(num2);
}

/**
 * funcion restar
 * @method calcularResta de la función
 */

function  calcularResta(){
    var num1, num2;
    num1 = document.getElementsByName("res_num1")[0].value;
    num2 = document.getElementsByName("res_num2")[0].value;
    document.getElementsByName("res_total")[0].value = Number(num1) - Number(num2);
}

/**
 * funcion Multiplicar
 * @method calcularMult de la función
 */

function  calcularMult(){
    var num1, num2;
    num1 = document.getElementsByName("mul_num1")[0].value;
    num2 = document.getElementsByName("mul_num2")[0].value;
    document.getElementsByName("mul_total")[0].value = Number(num1) * Number(num2);
}

/**
 * funcion dividir
 * @method calcularDiv de la función
 */

function  calcularDiv(){
    var num1, num2;
    num1 = document.getElementsByName("div_num1")[0].value;
    num2 = document.getElementsByName("div_num2")[0].value;
    document.getElementsByName("div_total")[0].value = Number(num1) / Number(num2);
}

/**
 * Dibuja un círculo y un cuadrado en un lienzo (canvas).
 * @method dibujarCirCuad
 */

function dibujarCirCuad() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var xMax = canvas.width;
    var yMax = canvas.height;
    var margen = 5;
    ctx.fillStyle = "#333899";
    ctx.fillRect(0+margen, yMax-40-margen, 40, 40);

    ctx.arc(xMax/2, yMax/2, 20, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = "#000"
    ctx.fill();
}

var bandera; //no es un buena practica.
function dibujar(event) {
    var canvas = document.getElementById("canvasAdibujar");
    var ctx = canvas.getContext("2d");

    var posX = event.clientX;
    var posY = event.clientY;
    console.log(posX,posY);

    canvas.onmousedown = function() {bandera=true};
    canvas.onmouseup = function() {bandera=false};

    if(bandera){
        ctx.fillRect(posX, posY, 5, 5);
        ctx.fill;
    }
}

function limpiarCanvas() {
    var canvas = document.getElementById("canvasAdibujar");
    var ctx = canvas.getContext("2d");

    canvas.width = canvas.width;
}