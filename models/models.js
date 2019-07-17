const mongoose = require('mongoose');
const _ = require('underscore');
const config = require('../_config');

module.exports = (wagner) => {
    mongoose.Promise = global.Promise;
    mongoose.connect(`mongodb://localhost:27017/${config.DB}`, { useNewUrlParser: true });
    wagner.factory('db', () => mongoose);
    //factory pone disponible una variable para que todos la puedan consultar
    const Product = require('./product.model');

    const models = {
        Product
    }

    //underscore ayuda a recorrer el objeto
    //each, as a for
    //k es el nombre y v el contenido/modelo
    _.each(models, (v, k) => {
        wagner.factory(k, () => v)
    })
}