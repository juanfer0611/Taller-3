$(document).ready(function() {

console.log("cago")

droparea = document.getElementById("droparea")
ctx = droparea.getContext("2d")
img = document.getElementById("dropimage")
ctx.drawImage(img, 0, 0)

google.maps.event.addDomListener(window, 'load', initialize)

});

	//------ Gmaps ------>

    function initialize() {
       var mapOptions = {
        center: new google.maps.LatLng(3.416862,-436.538411),
        zoom: 12,
        mapTypeId:google.maps.MapTypeId.ROADMAP
        }
        map = new google.maps.Map(document.getElementById("map-canvas"),
          mapOptions)
		infoWindow = new google.maps.InfoWindow;
    }

    // ------ drag area ------->

    $('.beer').bind('dragstart', function(e){
    	e.dataTransfer.setData('text', this.id) 
    })

	//-------- drop area ------>

	$('#droparea').bind('dragover', function(e){
		e.preventDefault()
	})
	.bind('dragenter', function(e){
		e.preventDefault()
	})
	.bind('drop', function(e){
		var beerId = e.dataTransfer.getData('Text')
		console.log(beerId)
		var t = beerId + "img"
		var beerimg = document.getElementById(t)
		x = e.pageX - droparea.offsetLeft;
		y = e.pageY - droparea.offsetTop;
		w = 80;
		h = 80;
			//--- TO DO --- set x & y were it drops 
		ctx.drawImage(beerimg, 70, 125, w, h)

			//--- call fetch markers ---->
		fetchmarkers(beerId);
	})

	//--- fetch markers ---->

	function fetchmarkers(beerId){

		console.log("inicia fetch")
		var a = "corona";
		var b = 0;
		if(beerId === a){b = 1}else{b = 0}

		$.ajax({
			url: 'php/phpsqlajax_genxml3.php',
			
			success:function(data){
				
				//console.log(data)
				t = jQuery.parseJSON(data);
				//console.log(t)
				for(var i = 0; i < t["result"].length; i++)
				{
				var point = new google.maps.LatLng(t["result"][i].lat, t["result"][i].lng);
				var html = "<b>" + t["result"][i].name + "</b> <br/>";
				var icon = customIcons[t["result"][i].type] || {};
				console.log(point);

				if(t["result"][i].type == b ){createmarker(point, icon, html);}
				
				}
			}
		})
	}

	function createmarker(point, icon, html){
		var marker = new google.maps.Marker({
		position: point,
		icon: icon.icon
		});
		marker.setMap(map);
		bindInfoWindow(marker, map, infoWindow, html);
		console.log("done");
	}
	
	var customIcons = {
	  0 : {
		icon: 'http://labs.google.com/ridefinder/images/mm_20_blue.png'
	  },
	  1: {
		icon: 'http://labs.google.com/ridefinder/images/mm_20_red.png'
	  }
	};
	
	function bindInfoWindow(marker, map, infoWindow, html) {
	  google.maps.event.addListener(marker, 'click', function() {
		infoWindow.setContent(html);
		infoWindow.open(map, marker);
	  });
	}