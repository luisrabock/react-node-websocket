const axios = require("axios");

const dotenv = require("dotenv");

dotenv.config();

const init = async () => {
  try {
    const did = (
      await axios({
        url: "https://api.totalvoice.com.br/35016301",
        method: "put",
        headers: {
          "Access-Token": process.env.TOTALVOICE_API_KEY,
        },
        data: {
          ura_id: 29203,
          ramal_id: null,
        },
      })
    ).data;
    console.log(did);
  } catch (e) {
    console.log(e);
  }
};

init();
