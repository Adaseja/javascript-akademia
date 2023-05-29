$(document).ready(function() {
    $("#count-sum").click(function() {
      let sum = 0
      $(".salary").each(function() {
        /* $(this).salary('.salary', sum); */
        let salary = parseInt($(this).text());
        sum = sum + salary;
     
    });
    $("#sum").text(sum );
  });
});