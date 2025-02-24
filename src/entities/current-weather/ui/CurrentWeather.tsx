import { TCurrentWeatherSuccessResponse } from "features/index"
import { CardInfo } from "./card-info/CardInfo"
import cls from './CurrentWeather.module.scss'

interface TCurrentWeatherProps {
    data: TCurrentWeatherSuccessResponse
}

export const CurrentWeather = (props: TCurrentWeatherProps) => {

    const { data } = props

    return (
        <div className={cls.box}>
            <CardInfo data={data}/>
            
        </div>
    )
}
