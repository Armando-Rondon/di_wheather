oculto = false;
$(function () {
  $("#city").hide();
  $("#buscar").hide();
  $("ul").hide();
  $("#buscarMasDias").hide();
});

$("#toggle").click(function (e) {
  /* if (oculto == false) {
    $("#navbarToggleExternalContent").className = "";
    oculto = true;
  } else {
    $("#navbarToggleExternalContent").className = "collapse";
    oculto = false;
  } */
  $("#navbarToggleExternalContent").toggleClass("collapse");
});
$("#nav-btnBuscar").click(function (e) {
  $("#city").show();
  $("#buscar").show();
  $("#buscarMasDias").show();
  $("#h1").text("Search by city");
  $("h2").hide();
  $(".card").empty();
});

//Solo un día
$("#buscar").click(function (e) {
  $("ul").show();
  $("ul").empty();
  $(".card").empty();
  $.get(
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=" +
      $("#city").val().trim() +
      "&appid=fd7605183e655d8109fff7cb6cdb11ff",
    function (clima) {
      let nuevoDiv = document.createElement("div");
      let imagen = document.createElement("img");
      let estado = document.createElement("p");
      let tituloEstado = document.createElement("h5");
      nuevoDiv.className = "card-img-overlay";
      imagen.className = "card-img ";
      estado.className = "card-text";
      tituloEstado.className = "card-title";
      switch (clima.weather[0].main) {
        case "Thunderstorm":
          imagen.src = "./img/thunderstrom.jpg";
          imagen.height = 350;
          imagen.width = 100;
          tituloEstado.innerHTML = "Thunderstrom";
          estado.innerHTML = clima.main.temp + "ºC";
          $("#divDeAbajo").append(imagen);
          nuevoDiv.append(tituloEstado);
          nuevoDiv.append(estado);
          break;
        case "Drizzle":
          imagen.src = "./img/raindrop.jpg";
          imagen.height = 350;
          imagen.width = 100;
          tituloEstado.innerHTML = "Drizzle";
          estado.innerHTML = clima.main.temp + "ºC";
          $("#divDeAbajo").append(imagen);
          nuevoDiv.append(tituloEstado);
          nuevoDiv.append(estado);
          break;
        case "Snow":
          imagen.src = "./img/snow.jpg";
          imagen.height = 350;
          imagen.width = 100;
          tituloEstado.innerHTML = "Snow";
          estado.innerHTML = clima.main.temp + "ºC";
          $("#divDeAbajo").append(imagen);
          nuevoDiv.append(tituloEstado);
          nuevoDiv.append(estado);
          break;
        case "Clear":
          imagen.src = "./img/clear.png";
          imagen.height = 350;
          imagen.width = 100;
          tituloEstado.innerHTML = "Clear";
          estado.innerHTML = clima.main.temp + "ºC";
          $("#divDeAbajo").append(imagen);
          nuevoDiv.append(tituloEstado);
          nuevoDiv.append(estado);
          break;
        case "Clouds":
          imagen.src = "./img/clouds.jpg";
          imagen.height = 350;
          imagen.width = 100;
          $("#divDeAbajo").append(imagen);
          tituloEstado.innerHTML = "Clouds";
          estado.innerHTML = clima.main.temp + "ºC";
          nuevoDiv.append(tituloEstado);
          nuevoDiv.append(estado);
          break;
        case "Mist":
          imagen.src = "./img/misty.jpg";
          imagen.height = 350;
          imagen.width = 100;
          $("#divDeAbajo").append(imagen);
          tituloEstado.innerHTML = "Mist";
          estado.innerHTML = clima.main.temp + "ºC";
          nuevoDiv.append(tituloEstado);
          nuevoDiv.append(estado);
          break;
        case "Rain":
          imagen.src = "./img/raindrop.jpg";
          imagen.height = 350;
          imagen.width = 100;
          $("#divDeAbajo").append(imagen);
          tituloEstado.innerHTML = "Rain";
          estado.innerHTML = clima.main.temp + "ºC";
          nuevoDiv.append(tituloEstado);
          nuevoDiv.append(estado);
          break;
      }
      $("#divDeAbajo").append(nuevoDiv);
    }
  );
});

//Los 4 días
$("#buscarMasDias").click(function (e) {
  $(".card").empty();
  $("ul").show();
  $("ul").empty();
  let contador = 4;
  $.get(
    "https://api.openweathermap.org/data/2.5/forecast?units=metric&q= " +
      $("#city").val().trim() +
      "&appid=fd7605183e655d8109fff7cb6cdb11ff",
    function (climasDeMasDias) {
      $.each(climasDeMasDias.list, function (index, climas) {
        if (index == contador) {
          let divAbajo = document.createElement("div");
          divAbajo.id = "divDeAbajo" + index;
          let li = document.createElement("li");
          $(li).className = "list-group-item col-sm-6";
          $("ul").append(li);
          let divPadre = document.createElement("div");
          let nuevoDiv = document.createElement("div");
          $(li).append(divPadre);
          let imagen = document.createElement("img");
          let estado = document.createElement("p");
          nuevoDiv.id = index;
          let tituloEstado = document.createElement("h5");
          divPadre.className = "card";
          nuevoDiv.className = "card-img-overlay";
          imagen.className = "card-img ";
          estado.className = "card-text";
          tituloEstado.className = "card-title";
          $(divPadre).append(divAbajo);
          $(divPadre).append(nuevoDiv);
          switch (climas.weather[0].main) {
            case "Thunderstorm":
              imagen.src = "./img/thunderstrom.jpg";
              imagen.height = 250;
              imagen.width = 50;
              tituloEstado.innerHTML = "Thunderstrom";
              estado.innerHTML = climas.main.temp + "ºC";
              $("#divDeAbajo" + index).append(imagen);
              $("#" + index).append(tituloEstado);
              $("#" + index).append(estado);
              break;
            case "Drizzle":
              imagen.src = "./img/raindrop.jpg";
              imagen.height = 250;
              imagen.width = 50;
              tituloEstado.innerHTML = "Drizzle";
              estado.innerHTML = climas.main.temp + "ºC";
              $("#divDeAbajo" + index).append(imagen);
              $("#" + index).append(tituloEstado);
              $("#" + index).append(estado);
              break;
            case "Snow":
              imagen.src = "./img/snow.jpg";
              imagen.height = 250;
              imagen.width = 50;
              tituloEstado.innerHTML = "Snow";
              estado.innerHTML = climas.main.temp + "ºC";
              $("#divDeAbajo" + index).append(imagen);
              $("#" + index).append(tituloEstado);
              $("#" + index).append(estado);
              break;
            case "Clear":
              imagen.src = "./img/clear.png";
              imagen.height = 250;
              imagen.width = 50;
              tituloEstado.innerHTML = "Clear";
              estado.innerHTML = climas.main.temp + "ºC";
              $("#divDeAbajo" + index).append(imagen);
              $("#" + index).append(tituloEstado);
              $("#" + index).append(estado);
              break;
            case "Clouds":
              imagen.src = "./img/clouds.jpg";
              imagen.height = 250;
              imagen.width = 50;
              $("#divDeAbajo" + index).append(imagen);
              tituloEstado.innerHTML = "Clouds";
              estado.innerHTML = climas.main.temp + "ºC";
              $("#" + index).append(tituloEstado);
              $("#" + index).append(estado);
              break;
            case "Mist":
              imagen.src = "./img/misty.jpg";
              imagen.height = 250;
              imagen.width = 50;
              $("#divDeAbajo" + index).append(imagen);
              tituloEstado.innerHTML = "Mist";
              estado.innerHTML = climas.main.temp + "ºC";
              $("#" + index).append(tituloEstado);
              $("#" + index).append(estado);
              break;
            case "Rain":
              imagen.src = "./img/raindrop.jpg";
              imagen.height = 250;
              imagen.width = 50;
              $("#divDeAbajo" + index).append(imagen);
              tituloEstado.innerHTML = "Rain";
              estado.innerHTML = climas.main.temp + "ºC";
              $("#" + index).append(tituloEstado);
              $("#" + index).append(estado);
              break;
          }
          contador = contador + 8;
        }
      });
    }
  );
});
$("#nav-home").click(function (e) {
  $("#city").hide();
  $("#buscar").hide();
  $("#buscarMasDias").hide();
  $("#h1").text("Your Weather app");
  $("h2").show();
  $(".card").empty();
  $("ul").empty();
});

//Geolocalización
$("#nav-btnLocalizacion").click(function (e) {
  navigator.geolocation.getCurrentPosition(onSuccess, onError);
});

var onSuccess = function (position) {
  $("#h1").text("In Your Location");
  $("h2").hide();
  $("#city").hide();
  $("#buscar").hide();
  $("ul").hide();
  $("#buscarMasDias").hide();
  $(".card").empty();
  $.get(
    "https://api.openweathermap.org/data/2.5/weather?units=metric&lat=" +
      position.coords.latitude +
      "&lon=" +
      position.coords.longitude +
      "&appid=fd7605183e655d8109fff7cb6cdb11ff",
    function (climaPorCoords) {
      let nuevoDiv = document.createElement("div");
      let imagen = document.createElement("img");
      let estado = document.createElement("p");
      let tituloEstado = document.createElement("h5");
      nuevoDiv.className = "card-img-overlay";
      imagen.className = "card-img ";
      estado.className = "card-text";
      tituloEstado.className = "card-title";
      switch (climaPorCoords.weather[0].main) {
        case "Thunderstorm":
          imagen.src = "./img/thunderstrom.jpg";
          imagen.height = 350;
          imagen.width = 100;
          tituloEstado.innerHTML = "Thunderstrom";
          estado.innerHTML = clima.main.temp + "ºC";
          $("#divDeAbajo").append(imagen);
          nuevoDiv.append(tituloEstado);
          nuevoDiv.append(estado);
          break;
        case "Drizzle":
          imagen.src = "./img/raindrop.jpg";
          imagen.height = 350;
          imagen.width = 100;
          tituloEstado.innerHTML = "Drizzle";
          estado.innerHTML = climaPorCoords.main.temp + "ºC";
          $("#divDeAbajo").append(imagen);
          nuevoDiv.append(tituloEstado);
          nuevoDiv.append(estado);
          break;
        case "Snow":
          imagen.src = "./img/snow.jpg";
          imagen.height = 350;
          imagen.width = 100;
          tituloEstado.innerHTML = "Snow";
          estado.innerHTML = climaPorCoords.main.temp + "ºC";
          $("#divDeAbajo").append(imagen);
          nuevoDiv.append(tituloEstado);
          nuevoDiv.append(estado);
          break;
        case "Clear":
          imagen.src = "./img/clear.png";
          imagen.height = 350;
          imagen.width = 100;
          tituloEstado.innerHTML = "Clear";
          estado.innerHTML = climaPorCoords.main.temp + "ºC";
          $("#divDeAbajo").append(imagen);
          nuevoDiv.append(tituloEstado);
          nuevoDiv.append(estado);
          break;
        case "Clouds":
          imagen.src = "./img/clouds.jpg";
          imagen.height = 350;
          imagen.width = 100;
          $("#divDeAbajo").append(imagen);
          tituloEstado.innerHTML = "Clouds";
          estado.innerHTML = climaPorCoords.main.temp + "ºC";
          nuevoDiv.append(tituloEstado);
          nuevoDiv.append(estado);
          break;
        case "Mist":
          imagen.src = "./img/misty.jpg";
          imagen.height = 350;
          imagen.width = 100;
          $("#divDeAbajo").append(imagen);
          tituloEstado.innerHTML = "Mist";
          estado.innerHTML = climaPorCoords.main.temp + "ºC";
          nuevoDiv.append(tituloEstado);
          nuevoDiv.append(estado);
          break;
        case "Rain":
          imagen.src = "./img/raindrop.jpg";
          imagen.height = 350;
          imagen.width = 100;
          $("#divDeAbajo").append(imagen);
          tituloEstado.innerHTML = "Rain";
          estado.innerHTML = climaPorCoords.main.temp + "ºC";
          nuevoDiv.append(tituloEstado);
          nuevoDiv.append(estado);
          break;
      }
      $("#divDeAbajo").append(nuevoDiv);
    }
  );
};

function onError(error) {
  console.log("error");
}
