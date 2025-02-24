import { THourlyWeather } from 'features/index'
import cls from './HistoryWeather.module.scss'

interface IHourlyHistoryRowProps {
  hourlyHistory: THourlyWeather[]
}

export const HourlyHistoryRow = (props: IHourlyHistoryRowProps) => {

  const { hourlyHistory } = props

  const transformTime = (time: string): string => {
    const timeString = time.padStart(4, '0'); 
    const hours = parseInt(timeString.slice(0, 2), 10); 
    const minutes = timeString.slice(2); 

    let formattedTime;

    if (hours === 0) {
      formattedTime = `12:${minutes} AM`; 
    } else if (hours < 12) {
        formattedTime = `${hours}:${minutes} AM`; 
    } else if (hours === 12) {
        formattedTime = `12:${minutes} PM`; 
    } else {
        formattedTime = `${hours - 12}:${minutes} PM`; 
    }

    return formattedTime;
  }

  return (
    <div className={cls.hourlyRow}>
      {hourlyHistory.map((hour, indexHour) => {
        return (
          <div className={cls.hourly} key={indexHour}>
            <img className={cls.img} src={hour.weather_icons[0] || ''} alt="" />
            <p className={cls.temperature}>{hour.temperature + '°'}</p>
            <p className={cls.time}>{transformTime(hour.time)}</p>
          </div>
        )
      })}
  </div>
  )
}