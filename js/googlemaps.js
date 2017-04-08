var myCenter=new google.maps.LatLng(-19.535460, -40.628752);

function initialize()
{
var mapProp = {
  center:myCenter,
  zoom:18,
  scrollwheel: false,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

var marker=new google.maps.Marker({
  position:myCenter,
  });

marker.setMap(map);

var infowindow = new google.maps.InfoWindow({
  content:"<div style="overflow:hidden;"><b>Pronto Clínica de Olhos</b><br/>Av.Getúlio Varga 315, Centro. 1º e 2º andares<br/>Telefone: 27 3722 3385</div>"
  });

infowindow.open(map,marker);
marker.addListener('click', function() {
    infowindow.open(map, marker);
  });
}

google.maps.event.addDomListener(window, 'load', initialize);