import { TWeatherErrorResponse } from 'features/api/types'
import { Button } from '@mui/material'
import cls from './Error.module.scss'
import { useAppDispatch } from 'app/providers'
import { setDate } from 'widgets/calendar'
import { getDateToString } from 'shared/utils'
import dayjs from 'dayjs'

interface IErrorProps {
    data?: TWeatherErrorResponse
}

export const Error = (props: IErrorProps) => {

    const { data } = props

    const dispatch = useAppDispatch()

    const handleClick = () => {
      const date = getDateToString(dayjs())
      dispatch(setDate(date))
    }

    return (
     <>
       <div className={cls.error}><p>{data && data.error.info || 'Непредвиденная ошибка'}</p></div>
       <Button onClick={handleClick}>Back</Button>
     </>
    )
}