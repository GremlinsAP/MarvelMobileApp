import { BaseData } from './interfaces/BaseData';
import { MainData } from './interfaces/MainData';
import axios, { AxiosInstance } from "axios";
import { Character } from './interfaces/Character';
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
                ...config.params,
            };
            return config;
        });
    }

    public async getCharacters() {
        return await this.getData<Character>("/characters");
    }

    public async getComics() {
        return await this.getData<Comic>("/comics");
    }

    private async getData<T>(endpoint: string): Promise<T[]> {
        const raw = await this.axiosInstance.get(endpoint);
        const data: MainData<T> = raw.data;
        return data.data.results;
    }
}