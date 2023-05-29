$(document).ready(function() {
    $("#getData").click(function() {
      $.getJSON("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php")
        .done(function(data) {
          var content = "<p>Imię: " + data.imie + "</p>";
          content += "<p>Nazwisko: " + data.nazwisko + "</p>";
          content += "<p>Zawód: " + data.zawod + "</p>";
          content += "<p>Firma: " + data.firma + "</p>";
          $("#dane-programisty").html(content);
        })
        .fail(function() {
          $("#dane-programisty").html("<p>Nie udało się pobrać danych.</p>");
        });
    });
  });
  