import { THistoricalWeather } from 'features/index'
import { HourlyHistoryRow } from './HourlyHistoryRow'
import cls from './HistoryWeather.module.scss'
import { Calendar } from 'widgets/index'

interface IHistoryWeatherProps {
  data: THistoricalWeather
}

export const HistoryWeather = (props: IHistoryWeatherProps) => {

  const historyDaysData = Object.values(props.data);

  return (
    <div className={cls.dayRow}>
    <Calendar/>
    {
      historyDaysData.map((day, indexDay) => {
        return (
          <div className={cls.day} key={indexDay}>
            <HourlyHistoryRow hourlyHistory={day.hourly}/>
          </div>
        )
      })
    }
</div>
  )
}