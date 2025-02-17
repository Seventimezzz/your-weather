
import { useGetCurrentWeatherQuery } from 'features/index'
import { CardResults } from './card-results/CardResults'
import { Button, TextField } from '@mui/material'
import { useRef, useState } from 'react'
import { Loading } from 'shared/ui'
import cls from './SearchList.module.scss'
import { Error } from './error/Error'
import { WeatherErrorResponse, WeatherSuccessResponse } from 'features/api/types'

export const SearchList = () => {
    const [city, setCity] = useState('');

    const ref = useRef<HTMLInputElement>(null)

    const { data, isSuccess, isLoading, isError } = useGetCurrentWeatherQuery(city, {
        skip: !city,
    });

    const handleClick = () =>  {
        setCity(ref.current.value)
    }

    return (
        <div className={cls.list}>
            <div className={cls.searchBox}>
                <TextField inputRef={ref} className={cls.searchString} fullWidth label="Введите ваш город" id="fullWidth" />
                <Button onClick={handleClick} variant="contained">Поиск</Button>
            </div>
            { 
                isLoading && <div className={cls.resultContainer}><Loading/></div> ||
                isSuccess && 'error' in data && <Error data={data as WeatherErrorResponse}/> ||
                isSuccess && <CardResults data={data as WeatherSuccessResponse}/> ||
                isError && <Error />
            }
        </div>
    )
}

