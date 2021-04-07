function calcular(){
    let coste_total = 0;

    /* Añadimos valor del select al presupuesto */
    $select = $("select[name=tipoweb] option:selected");
    coste_total += parseInt($select.val());
    

    /* Calculo  valor de los checkbox (secciones adicionales) */
    $checkbox = $("input[type=checkbox]:checked");
    $checkbox.each(function(){
        coste_total += parseInt($(this).val());
    })

    /* Calculo descuento en funcion de los meses de plazo */
    $meses = $("input[type=number]");

    if($meses.val() < 4){

        let descuento = $meses.val() * 0.05;
        coste_total = coste_total * (1 - descuento);
    }
    else if ($meses.val() >= 4){
        coste_total = coste_total * (1 - 0.2);
    }
    
    if(coste_total != 0){

    $(".costeTotal").html("<br><p>Recuerda que este presupuesto es solo una estimación. El precio puede variar dependiendo de las necesidades del cliente. <br/> <p style=\"font-size: large;\"><br>Presupuesto Total: " + coste_total
                
        + "€</p><br/>");
    }

    else{
        $(".costeTotal").html("<br><p>No ha seleccionado ninguna opción</p>");
    }
}