var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/dispositivo_ver_numero_paso/', function (req, res, next) {

    let {
        Id
    } = req.params;

    axios({
        method: "GET",
        url: "https://checkroom.lddevsoft.com/api/checkroom/dispositivos/dispositivo_ver_numero_paso/",
        data: {

        }
    }).then(response => {

        let data = response.data;
        console.log(data);
        res.send(data + "");

    }).catch((error) => {
        console.error(error);
    });

});


router.get('/pasos_nueva_guella_agregar_paso/:numeroPasos', function (req, res, next) {

    let {
        numeroPasos
    } = req.params;

    axios({
        method: "GET",
        url: "https://checkroom.lddevsoft.com/api/checkroom/dispositivos/pasos_nueva_guella_agregar_paso/"+numeroPasos,
        data: {

        }
    }).then(response => {

        let data = response.data;

        res.send(data + "");

    }).catch((error) => {
        console.error(error);
    });

});

router.post('/dispositivo_agregar_entrada', function (req, res, next) {

    let {
        dispositivo
    } = req.body;

    axios({
        method: "POST",
        url: "https://checkroom.lddevsoft.com/api/checkroom/dispositivos/dispositivo_agregar_entrada/",
        data: {
            dispositivo
        }
    }).then(response => {

        let data = response.data;

        res.send(data + "");

    }).catch((error) => {
        console.error(error);
    });

});


router.get('/dispositivo_obtener_IdUsuario', function (req, res, next) {

    let {
        dispositivo
    } = req.body;

    axios({
        method: "GET",
        url: "https://checkroom.lddevsoft.com/api/checkroom/dispositivos/dispositivo_obtener_IdUsuario/",
        data: {
            dispositivo
        }
    }).then(response => {

        let data = response.data;

        res.send(data + "");

    }).catch((error) => {
        console.error(error);
    });

});





module.exports = router;