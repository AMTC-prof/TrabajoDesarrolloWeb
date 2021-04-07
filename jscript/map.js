let mapa;
let mostrar_direcciones;
let servicios_rutas = new google.maps.DirectionsService();

function cargarmapa(){
    mostrar_direcciones = new google.maps.DirectionsRenderer();
    let punto = new google.maps.LatLng(
        28.357813759203744,
        -16.369254557482105
    );
    let opciones = {
        zoom: 18,
        center: punto,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    mapa = new google.maps.Map(document.getElementById("mapa"),opciones);
    mostrar_direcciones.setMap(mapa);
    mostrar_direcciones.setPanel(document.getElementById("ruta"));
    let marca = new google.maps.Marker({
        position: punto,
        map: mapa,
        title: "Oficina AMTC Development" 
    });
}

function calcularRuta(){
    let partida = document.getElementById("partida").value;
    let destino = new google.maps.LatLng(
        28.357813759203744,
        -16.369254557482105
    );
    let opciones = {
        origin: partida,
        destination: destino,
        travelMode: google.maps.DirectionsTravelMode.DRIVING
    };
    servicios_rutas.route(opciones, function(response,status){
        if(status == google.maps.DirectionsStatus.OK){
            mostrar_direcciones.setDirections(response);
        }
        else{
            alert("No se ha encontrado la direccion");
        }
    });
}
