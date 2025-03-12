import { TCurrentWeatherSuccessResponse } from "features/index"
import { CardInfo } from "./card-info/CardInfo"
import cls from './CurrentWeather.module.scss'
import { memo } from "react"

interface TCurrentWeatherProps {
    data: TCurrentWeatherSuccessResponse
}

const arePropsEqual = (prevProps: TCurrentWeatherProps, nextProps: TCurrentWeatherProps): boolean => {
    if (prevProps.data.location.region === nextProps.data.location.region) return true
    return false
}

export const CurrentWeather = memo((props: TCurrentWeatherProps) => {

    const { data } = props

    return (
        <div className={cls.box}>
            <CardInfo data={data}/>
        </div>
    )
}, arePropsEqual)
