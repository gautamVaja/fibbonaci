$("#button").click(function (e) {
  e.preventDefault();
  var n = $("#n").val();
  if (n == 0) {
    return;
  }
  let x = 0;
  let a = 0;
  let b = 1;
  if (n == 1) {
    $("#ans").html("0");
  } else if (n == 2) {
    $("#ans").html("0 1");
  } else {
    var ans = "0 1 ";
    for (let i = 2; i < n; i++) {
      x = a + b;
      ans += x + " ";
      a = b;
      b = x;
    }
    $("#ans").html(ans);
  }
});
