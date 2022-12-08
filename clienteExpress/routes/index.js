var express = require('express');
var router = express.Router();
var axios = require('axios');

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