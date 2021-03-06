var map;
var infowindow = new google.maps.InfoWindow();

function codeAddressComp() {
	var geocoder = new google.maps.Geocoder();
	if(document.getElementById("company_street_address").value==""||document.getElementById("company_locality").value==""||document.getElementById("company_country_name").value=="") {
		alert("Cannot determine latitude/longitude values. First, at least country, city and street address have to be filled in.");
		return false;
	}
	var address = document.getElementById("company_street_address").value+", "+
		document.getElementById("company_postal_code").value+" "+
		document.getElementById("company_locality").value+", "+
		document.getElementById("company_country_name").value;
	if (geocoder) {
		geocoder.geocode( { 'address': address }, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				var lat = results[0].geometry.location.lat();
				var lng = results[0].geometry.location.lng();
				var latlng = new google.maps.LatLng(lat, lng);
				var moptions = {
					zoom: 9,
					center: latlng,
					mapTypeId: google.maps.MapTypeId.ROADMAP
				};
				document.getElementById("map_canvas").style.height = "300px";
				map = new google.maps.Map(document.getElementById("map_canvas"), moptions);
				document.getElementById("company_latitude").value = lat;
				document.getElementById("company_longitude").value = lng;
				var geo_string = "";
				for(var i=0; i<Math.min(results[0].address_components.length, 8); i++)
					geo_string += results[0].address_components[i].short_name+"<br/>";
				document.getElementById("geo_string").innerHTML = "<span style=\"font-size:11px;color:green;\"><strong>found geocode position for:</strong><br/><br/>"+geo_string+"</span>";
				map.setCenter(latlng);
				infowindow.setContent(results[0].address_components[0].short_name+", "+results[0].address_components[1].short_name);
				infowindow.setPosition(latlng);
				infowindow.open(map);
			} else {
				alert("Geocode was not successful for the following reason: " + status);
			}
		});
	}
}

function codeAddressLososp() {
	var geocoder = new google.maps.Geocoder();
	if(document.getElementById("lososp_street_address").value==""||document.getElementById("lososp_locality").value==""||document.getElementById("lososp_country_name").value=="") {
		alert("Cannot determine latitude/longitude values. First, at least country, city and street address have to be filled in.");
		return false;
	}
	var address = document.getElementById("lososp_street_address").value+", "+
		document.getElementById("lososp_postal_code").value+" "+
		document.getElementById("lososp_locality").value+", "+
		document.getElementById("lososp_country_name").value;
	if (geocoder) {
		geocoder.geocode( { 'address': address }, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				var lat = results[0].geometry.location.lat();
				var lng = results[0].geometry.location.lng();
				var latlng = new google.maps.LatLng(lat, lng);
				var moptions = {
					zoom: 9,
					center: latlng,
					mapTypeId: google.maps.MapTypeId.ROADMAP
				};
				document.getElementById("map_canvas").style.height = "300px";
				map = new google.maps.Map(document.getElementById("map_canvas"), moptions);
				document.getElementById("lososp_latitude").value = lat;
				document.getElementById("lososp_longitude").value = lng;
				var geo_string = "";
				for(var i=0; i<Math.min(results[0].address_components.length, 8); i++)
					geo_string += results[0].address_components[i].short_name+"<br/>";
				document.getElementById("geo_string").innerHTML = "<span style=\"font-size:11px;color:green;\"><strong>found geocode position for:</strong><br/><br/>"+geo_string+"</span>";
				map.setCenter(latlng);
				infowindow.setContent(results[0].address_components[0].short_name+", "+results[0].address_components[1].short_name);
				infowindow.setPosition(latlng);
				infowindow.open(map);
			} else {
				alert("Geocode was not successful for the following reason: " + status);
			}
		});
	}
}
  