const axios = require("axios");

class Busquedas {
  historial = ["tegucigalpa", "Madrid", "San Jose"];

  constructor() {
    //TODO: leer DB si existe
  }

  get paramsMapbox() {
    return {
      access_token: process.env.MAPBOX_KEY,
      limit: 3,
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

      return resp.data.features.map((lugar) => ({
        id: lugar.id,
        nombre: lugar.place_name,
        lng: lugar.center[0],
        lat: lugar.center[1],
      })); //Regresar un objeto de forma implicita
    } catch (error) {
      console.log(error);
      return [];
    }
  }
}

module.exports = Busquedas;
