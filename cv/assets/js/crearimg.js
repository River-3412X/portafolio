window.onload=function(){
   
    var img = document.getElementById("contenedorGeneral");   

    var x=html2canvas(img).then(function(canvas) {
        Canvas2Image.saveAsImage(canvas, canvas.width, canvas.heigth, "jpeg", "cvm");
        
    });
    console.log(x);
    
}
function cerrar(){
    window.close();
}