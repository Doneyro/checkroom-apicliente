var express = require('express');
var router = express.Router();
var axios = require('axios');

const decifrado = (data) => {

  data = data.split(",")
  // console.log(data);
  let ttt = "0";
  for (let i = 0; i < data.length; i++) {
  //  console.log(data[i]);
    ttt = ttt + letra_a_numero(data[i]);
  }

  // letras = data;

  // for (let i = 0; i < data.length; i++) {
  //     ttt = ttt + letra_a_numero(data[i]);
  // }

  return ttt;

}

const letra_a_numero = (letra) => {

  let numero = "";

  if (letra == "5058f1af8388633f609cadb75a75dc9d") {
      numero = ".";
  } else {
      switch (letra) {

          case "cfcd208495d565ef66e7dff9f98764da": numero = "0"; break;
          case "c4ca4238a0b923820dcc509a6f75849b": numero = "1"; break;
          case "c81e728d9d4c2f636f067f89cc14862c": numero = "2"; break;
          case "eccbc87e4b5ce2fe28308fd9f2a7baf3":numero = "3";break;
          case "a87ff679a2f3e71d9181a67b7542122c":numero = "4"; break;
          case "e4da3b7fbbce2345d7772b0674a318d5":numero = "5";break;
          case "1679091c5a880faf6fb5e6087eb1b2dc":numero = "6";break;
          case "8f14e45fceea167a5a36dedd4bea2543":numero = "7";break;
          case "c9f0f895fb98ab9159f51fd0297e236d":numero = "8";break;
          case "45c48cce2e2d7fbdea1afc51c7c6ad26":numero = "9";break;
      }
  }
  return numero;
}


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.post('/newRegisterTyH', function (req, res, next) {
  let {
    data
  } = req.body;
  // console.log(data);

  // data = {
  //   temperatura : parseFloat(decifrado(data.temperatura)),
  //   humedad : parseFloat(decifrado(data.humedad)),
  // }
  
  console.log(data);

  axios({
    method: "POST",
    url: "https://checkroom.lddevsoft.com/api/checkroom/TyH/nuevoRegistro",
    headers: {
      //token : cookies.get('token')
      "Access-Control-Allow-Origin": "*"
    },
    data: {
      data
    }
  }).then(response => {

  }).catch((error) => {
    console.error(error);
  });

  res.send("ok");
});

router.post('/newRegisterMov', function (req, res, next) {

  let 
    {IdUbicacion}
   = req.body;
  console.log(IdUbicacion);
  axios({
    method: "POST",
    url: "https://checkroom.lddevsoft.com/api/checkroom/movimientos/nuevoRegistro_movimiento",
    headers: {
      //token : cookies.get('token')
      "Access-Control-Allow-Origin": "*"
    },
    data: {
      IdUbicacion
      
    }
  }).then(response => {

  }).catch((error) => {
    console.error(error);
  });
  res.send("ok");
});


module.exports = router;