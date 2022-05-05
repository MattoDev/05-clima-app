const axios = require("axios");

class Busquedas {
  historial = ["tegucigalpa", "Madrid", "San Jose"];

  constructor() {
    //TODO: leer DB si existe
  }
  async ciudad(lugar = "") {
    // peticion http
    // console.log("Ciudad: ", lugar);

    try {
      const resp = await axios.get("https://reqres.in/api/users?page=2");
      console.log(resp.data);
      return []; //retornar los lugares
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}

module.exports = Busquedas;
