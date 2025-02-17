import { WeatherErrorResponse } from 'features/api/types'
import cls from '../SearchList.module.scss'

interface IErrorProps {
    data?: WeatherErrorResponse
}

export const Error = (props: IErrorProps) => {

    const { data } = props

    return (
        <div className={cls.resultContainer}><p>{data && data.error.info || 'Непредвиденная ошибка'}</p></div>
    )
}