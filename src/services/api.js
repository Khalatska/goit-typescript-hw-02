import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.unsplash.com/",
});

export class UnsplashApi {
  constructor() {
    this.currentPage = 1;
    this.query = null;
    this.totalResult = 0;
  }

  async fetchImages() {
    const options = {
      headers: {
        Authorization: "Client-ID 2V4Gfo4PlwInIQmbj4lcUzilY0OSMOaFx0z7l7ZWwbY",
      },
      params: {
        query: this.query,
        page: this.currentPage,
        per_page: 12,
      },
    };
    const res = await instance.get("/search/photos", options);
    return res.data;
  }
}
