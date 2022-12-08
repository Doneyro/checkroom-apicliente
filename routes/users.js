var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/usuario_IdUsuario_eliminar_dispositivo', function (req, res, next) {

 
  axios({
    method: "GET",
    url: "https://checkroom.lddevsoft.com/api/checkroom/user/usuario_IdUsuario_eliminar_dispositivo",
    data: {      
      
    }
  }).then(response => {

      let data = response.data;
      if(data == null){
        res.send("-1");

      }else{
        data = data[0].IdAccesoDispositivo + ""; 
        res.send(data);
      }

  }).catch((error) => {
    console.error(error);
  });
 
});



router.get('/usuario_check_acceso/:Id', function (req, res, next) {

  let {Id}=req.params;

  console.log(Id);

  axios({
    method: "GET",
    url: "https://checkroom.lddevsoft.com/api/checkroom/user/usuario_check_acceso/"+Id,
    data: {      
      
    }
  }).then(response => {

      let data = response.data;

      res.send(data+"");

  }).catch((error) => {
    console.error(error);
  });
 
});





module.exports = router;
