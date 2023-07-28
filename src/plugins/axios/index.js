import axios from "axios";
import interceptors from "./interceptors";

const instance = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/volumes",
});

interceptors(instance);

export default instance;
