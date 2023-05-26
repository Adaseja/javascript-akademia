$(document).ready(function() {
    $("#moveForward").click(function() {
      $("#paragraphContainer p:last").prependTo("#paragraphContainer");
    });

    $("#moveBackward").click(function() {
      $("#paragraphContainer p:first").appendTo("#paragraphContainer");
    });
  });