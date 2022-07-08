$("#switch-id").change(function () {
  if ($(this).is(":checked")) {
    $(".anually").show();
    $(".monthly").hide();
  } else {
    $(".anually").hide();
    $(".monthly").show();
  }
});
