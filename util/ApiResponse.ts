import { Api } from './Api';
import { AxiosResponse } from './../node_modules/axios/index.d';
import { MainData } from "./interfaces/MainData";

export class ApiResponse<T> {
    
    private readonly _controller: AbortController;
    private _raw: Promise<AxiosResponse<any, any>>;
    private _data: T[] = [];

    constructor(controllerCallback: { (controller: AbortController): Promise<AxiosResponse<any, any>> }) {
        this._controller = new AbortController();
        this._raw = controllerCallback(this.controller);
    }

    public process = async (): Promise<ApiResponse<T>> => {
        const raw = await this._raw;
        const data: MainData<T> = raw.data;
        this._data = data.data.results;
        return this;
    }

    public get controller() {
        return this._controller;
    }

    public get data() {
        return this._data;
    }
}