import { useAppSelector, RootState } from 'app/index';
import { getPosition, useGetCurrentWeatherQuery  } from "features/index";
import { StatusRequest } from 'widgets/index';
import { CurrentWeather } from 'entities/current-weather';
import { Page } from '../AbstractPage'
import { useCallback, useEffect } from 'react';

export const MainPage = () => {
    
    const position = useAppSelector(getPosition);

    const { data, isSuccess, isLoading, isError } = useGetCurrentWeatherQuery(position, { skip: !position});
    
    return (
        <Page>
            <StatusRequest 
                Component={CurrentWeather}
                status={{
                    isSuccess, 
                    isLoading, 
                    isError,
                    data
                }}/>
        </Page>
    )
}