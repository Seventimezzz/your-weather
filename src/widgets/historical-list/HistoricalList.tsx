import { TCurrentWeatherSuccessResponse, TGetOneDayHistoricalWeatherSuccessResponse } from "features/index";
import { CurrentWeather, HistoryWeather } from "entities/index";
import cls from './HistoricalList.module.scss'

interface IHistoricalList {
  data: TGetOneDayHistoricalWeatherSuccessResponse
}

export const HistoricalList = (props: IHistoricalList) => {

  const { data } = props;

  const currentWeatherData: TCurrentWeatherSuccessResponse = {
    request: data.request,
    location: data.location,
    current: data.current
  }

  return (
    <div className={cls.list}>
      <CurrentWeather data={currentWeatherData}/>
      <HistoryWeather data={data.historical}/>
    </div>
  )
}