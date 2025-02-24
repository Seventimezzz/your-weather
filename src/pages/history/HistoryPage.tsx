import { useLazyGetOneDayHistoricalWeatherQuery } from 'features/index';
import { useAppSelector, RootState } from 'app/index';
import { Calendar, HistoricalList, StatusRequest } from 'widgets/index';
import { Page } from '../AbstractPage'
import { useCallback, useEffect } from 'react';

export const HistoryPage = () => {

    const position = useAppSelector((state: RootState) => state.location.position)
    const date = useAppSelector((state: RootState) => state.calendar.date)


    //TODO ререндерится компонент при запросе
    console.log('page history', position, date)

    const [trigger, status] = useLazyGetOneDayHistoricalWeatherQuery();
    
    const {
        isSuccess,
        isLoading,
        isError,
        data
    } = status
    
    const handleFetchWeather = useCallback(() => {
        trigger( {
            position,
            date: date,
            isHourly: '1'
        });
    }, [position, date, trigger])
    
    useEffect(() => {
        if (position) handleFetchWeather()   
    }, [handleFetchWeather, position])

    return (
        <Page>
            
            <StatusRequest 
                Component={HistoricalList}
                status={{
                    isSuccess, 
                    isLoading, 
                    isError,
                    data
                }}/>
        </Page>
    )
}