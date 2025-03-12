import { useAppSelector } from 'app/index';
import { getDate, HistoricalList, StatusRequest } from 'widgets/index';
import { getPosition, useGetOneDayHistoricalWeatherQuery } from 'features/index';
import { Page } from '../AbstractPage'

export const HistoryPage = () => {

    const position = useAppSelector(getPosition)
    const date = useAppSelector(getDate)

    const { data, isSuccess, isLoading, isError } = useGetOneDayHistoricalWeatherQuery(
        { position, date, isHourly: '1' },
        { skip: !date || !position}
    );

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