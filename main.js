$(document).ready(function(){
  var type = document.getElementById("type");
  var case1 = document.getElementById("case");
  var extension = document.getElementById("extension");
  var url;
  if(type.value === "letter")
  $("#case").show();
  else {
    $("#case").hide();
  }

  $("#type").change(function(){
    if(type.value === "letter")
    $("#case").show();
    else {
      $("#case").hide();
    }
  });
  $(".btn").click(function(){
    if(type.value === "numeric")
    url = "www."+(Math.floor(Math.random()*50000000))+extension.value;
    if(type.value === "alphanumeric")
    {
      var str="";
      var possible = "0123456789012345678901234567890123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (var i = 0; i < 10; i++)
      str += possible.charAt(Math.floor(Math.random() * possible.length));
      url = "www."+str+extension.value;
    }
    if(type.value === "letter")
    {
      if(case1.value === "lowercase")
      {
        var str="";
        var possible = "abcdefghijklmnopqrstuvwxyz";
        for (var i = 0; i < 10; i++)
        str += possible.charAt(Math.floor(Math.random() * possible.length));
        url = "www."+str+extension.value;
      }
      else if(case1.value === "uppercase")
      {
        var str="";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        for (var i = 0; i < 10; i++)
        str += possible.charAt(Math.floor(Math.random() * possible.length));
        url = "www."+str+extension.value;
        url = "www."+str+extension.value;
      }
      else{
        var str="";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        for (var i = 0; i < 10; i++)
        str += possible.charAt(Math.floor(Math.random() * possible.length));
        url = "www."+str+extension.value;
      }
    }
    document.getElementById("url").innerHTML = url;
  });
});
