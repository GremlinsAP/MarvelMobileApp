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

    public getCharacters = (after: number = 0) => this.getData<Character>("/characters", {
        offset: after
    });

    public getCharacter = (id: number) => this.getData<Character>(`/characters/${id}`);

    public getComics = (after: number = 0) => this.getData<Comic>("/comics", {
        offset: after
    });

    public getComic = (id: number) => this.getData<Comic>(`/comics/${id}`);

    public getComicsForCharacter = (characterId: number, offset: number) => this.getData<Comic>(`/characters/${characterId}/comics`, {
        limit: 5,
        offset: offset
    });

    public getCharactersForComics = (comicId: number, offset: number) => this.getData<Character>(`/comics/${comicId}/characters`, {
        limit: 5,
        offset: offset
    });


    private getData = <T>(endpoint: string, data?: {}): ApiResponse<T> => new ApiResponse<T>(async (controller) => {
        return this.axiosInstance.get(endpoint, { signal: controller.signal, params: data });
    });
}