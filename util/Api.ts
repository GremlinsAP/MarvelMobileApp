import { BaseData } from './interfaces/BaseData';
import { MainData } from './interfaces/MainData';
import axios, { AxiosInstance } from "axios";
import { Character } from './interfaces/Character';
import { ApiResponse } from './ApiResponse';
import { Comic } from './interfaces/Comic';

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
                ts: 1,
                apikey: "9567d009e641913ca6da0fb89b3275d1",
                hash: "f5dc8827a5a81d6df3a6b8ac68cc4417",
                ...config.params
            };
            return config;
        });
    }

    public getCharacters() {
        return this.getData<Character>("/characters");
    }

    public getComics() {
        return this.getData<Comic>("/comics");
    }

    private getData<T>(endpoint: string): ApiResponse<T>  {
        const response = new ApiResponse<T>(async (controller) => {
            return this.axiosInstance.get(endpoint, { signal: controller.signal });
        });

        return response;
    }
}