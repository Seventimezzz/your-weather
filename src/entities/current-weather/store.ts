
import { TCurrentWeatherSuccessResponse } from "features/index";
import { TListItem } from "./types";

export class StoreResults {

    private locationList: TListItem[];
    private infoList: TListItem[];

    constructor(data: TCurrentWeatherSuccessResponse) {
        this.locationList = [
            {
                name: 'Страна',
                data: data.location.country
            },
            {
                name: 'Регион',
                data: data.location.region
            },
            {
                name: 'Время',
                data: data.location.localtime
            }
        ];

        this.infoList = [
            {
                name: 'Скорость ветра',
                data:  `${data.current.wind_speed} км/ч`
            },
            {
                name: 'Напрваление ветра',
                data: data.current.wind_dir
            },
            {
                name: 'Уровень давления',
                data: `${data.current.pressure} миллибар`
            },
            {
                name: 'Уровень осадков',
                data:  `${data.current.precip} миллиметры`
            },
            {
                name: 'Уровень влажности воздуха',
                data: data.current.humidity
            },
            {
                name: 'Уровень облачности',
                data: data.current.cloudcover
            },
            {
                name: 'Температура ощущается как',
                data: `${data.current.feelslike} градусы Цельсия`
            },
            {
                name: 'УФ-индекс',
                data: data.current.uv_index
            },
            {
                name: 'Уровень видимости',
                data: `${data.current.visibility} километров`
            },
        ]
    }

    public get LocationList() {
        return this.locationList
    }

    public get InfoList() {
        return this.infoList
    }

}