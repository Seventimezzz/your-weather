import { useAppSelector, RootState } from 'app/index';
import { useGetCurrentWeatherQuery  } from "features/index";
import { StatusRequest } from 'widgets/index';
import { CurrentWeather } from 'entities/current-weather';
import { Page } from '../AbstractPage'
import { useCallback, useEffect } from 'react';

export const MainPage = () => {
    
    const position = useAppSelector((state: RootState) => state.location.position);

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