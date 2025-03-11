import { useGetOneDayHistoricalWeatherQuery } from 'features/index';
import { useAppSelector, RootState } from 'app/index';
import { HistoricalList, StatusRequest } from 'widgets/index';
import { Page } from '../AbstractPage'

export const HistoryPage = () => {

    const position = useAppSelector((state: RootState) => state.location.position)
    const date = useAppSelector((state: RootState) => state.calendar.date)

    //TODO ререндерится компонент при запросе
    console.log('page history', position, date)

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