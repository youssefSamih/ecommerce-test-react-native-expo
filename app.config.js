import "dotenv/config";

export default {
  name: "e_commerce",
  version: "1.0.0",
  ios: {
    config: {
      googleMapsApiKey: process.env.MAP_API_KEY,
    },
  },
};
