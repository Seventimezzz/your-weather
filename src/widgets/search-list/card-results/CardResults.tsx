import cls from './CardResults.module.scss'
import { JSX } from "react"
import { StoreResults } from "./store"
import { TItemClassNames, TListItem } from './types'
import { WeatherSuccessResponse } from 'features/api/types'

interface CardResultsProps {
    data: WeatherSuccessResponse
}

export const CardResults = (props: CardResultsProps) => {

    const { data } = props

    const storeResult = new StoreResults(data)
    
    const renderData = <T extends TListItem>(list: T[], className: TItemClassNames): JSX.Element[] => {
        return list.map((el, index) => {
            return (
                <p key={index} className={cls[className]}>
                    <span>{el.name}</span>: {el.data}
                </p> 
            )
        })
    }

    return (
        <div className={cls.card}>
            <div className={cls.locationBox}>
                <img className={cls.img} src={data.current.weather_icons[0] || ''} alt="" />
                { renderData(storeResult.LocationList, 'location') }
            </div>
            <div className={cls.infoBox}>
                { renderData(storeResult.InfoList, 'info') }  
            </div>
        </div>
    )
}
