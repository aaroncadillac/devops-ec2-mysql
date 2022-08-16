const { DBFunction } = require("../utils/db-connection");

const getPet = DBFunction((name, connection, closeConnection) => {
  return new Promise((res, rej) => {
    connection.query(`SELECT * FROM pet WHERE name = '${name}'`, function (error, results) {
      if (error) {
        closeConnection();
        rej(error);
      } else {
        closeConnection();
        res(results)
      }
    });
  })
})

const addPet = DBFunction((name, owner, species, sex, connection, closeConnection) => {
  return new Promise((res, rej) => {
    connection.query(`INSERT INTO pet VALUES('${name}', '${owner}', '${species}', '${sex}')`, function (error, results) {
      if (error) {
        closeConnection();
        rej(error);
      } else {
        closeConnection();
        res(results)
      }
    });
  })
})

module.exports = {
  getPet,
  addPet
}