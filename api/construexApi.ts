import axios from "axios";

const construexApi = axios.create({
  baseURL: "https://s3.amazonaws.com/construex-next-gen-mock-backend",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export default construexApi;
