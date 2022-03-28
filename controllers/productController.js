//var autos = require('../db/autos');
//MARTU
const controller = {
    index: function(req, res) {
        res.send(autos.lista);
    },
    indexBrand: function(req, res) {
        res.send(autos.getCarsByBrand(req.params.brand));
    },
    indexColor: function(req, res) {
        res.send(autos.getCarsByColor(req.params.colour));
    },
    indexModel: function(req, res) {
        res.send(autos.getCarsByModel(req.params.model, req.params.anio));
    },
    indexYear: function(req, res) {
        res.send(autos.getCarsByYear(req.params.year));
    },
    show: function(req, res){
        const result = autos.lista[req.params.id];
        if(!result) {
            res.send('No hay auto con el ID ' + req.params.id)
        }
        res.send(result);
    }
};

module.exports = controller