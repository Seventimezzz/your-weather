import { useAppSelector, RootState } from 'app/index';
import { useLazyGetCurrentWeatherQuery  } from "features/index";
import { StatusRequest } from 'widgets/index';
import { CurrentWeather } from 'entities/current-weather';
import { Page } from '../AbstractPage'
import { useCallback, useEffect } from 'react';

export const MainPage = () => {
    
    const position = useAppSelector((state: RootState) => state.location.position);

    const [trigger, status] = useLazyGetCurrentWeatherQuery();

    const {
        isSuccess,
        isLoading,
        isError,
        data
    } = status

    const handleFetchWeather = useCallback(() => {
        trigger(position);
    }, [position, trigger])

    useEffect(() => {
        if (position) handleFetchWeather()   
    }, [handleFetchWeather, position])

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