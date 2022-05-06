const axios = require("axios");

class Busquedas {
  historial = ["tegucigalpa", "Madrid", "San Jose"];

  constructor() {
    //TODO: leer DB si existe
  }

  get paramsMapbox() {
    return {
      access_token:
        "pk.eyJ1IjoibWF0ZW8tZm9uc2VjYSIsImEiOiJjbDJ0b2oyZmYwNmFkM2tub3k4ZHdyd3Z3In0.4KBt6kcGYSEsBljgTlfUYQ",
      limit: "3",
      language: "es",
    };
  }

  async ciudad(lugar = "") {
    try {
      // peticion http
      const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json `,
        params: this.paramsMapbox,
      });
      const resp = await instance.get();

      console.log(resp.data);
      return []; //retornar los lugares
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}

module.exports = Busquedas;
