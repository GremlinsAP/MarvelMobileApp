import axios, { AxiosInstance } from "axios";

export class Api {

    private static _instance: Api;
    public static get INSTANCE() {
        if (!this._instance) this._instance = new Api();
        return this._instance;
    }

    private readonly axiosInstance: AxiosInstance;

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: "https://gateway.marvel.com/v1/public/",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            timeout: 3000
        });

        this.axiosInstance.interceptors.request.use(config => {
            config.params = {
                ts: 0,
                apikey: "",
                hash: "",
                ...config.params,
            };
            return config;
        });
    }

    public async getCharacters() {
        return await this.getData("characters");
    }

    private async getData<T>(endpoint:string):Promise<T> {
        const raw = await this.axiosInstance.get(endpoint);
        const data = raw.data;
        return data;
    }
}