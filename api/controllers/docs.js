const fs = require('fs');

const getDocs = (req, res) => {
    fs.readFile(`${__dirname}/postman_collection.json`, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error al leer el archivo de documentación');
      }
      res.type('application/json');
      res.send(data);
    });
  };

  module.exports = getDocs;