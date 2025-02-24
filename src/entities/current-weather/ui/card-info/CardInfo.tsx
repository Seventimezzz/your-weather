import { TCurrentWeatherSuccessResponse } from "features/index"
import Humidity  from "../../../../shared/assets/img/humidity.png"
import Pressure  from "../../../../shared/assets/img/pressure.png"
import Wind  from "../../../../shared/assets/img/wind.png"
import cls from './CardInfo.module.scss'

interface TCardInfoProps {
  data: TCurrentWeatherSuccessResponse
}

export const CardInfo = (props: TCardInfoProps) => {

  const { data } = props

  return (
    <div className={cls.currentWeather}>
      <p className={cls.location}>{`Country ${data.location.country}, region ${data.location.region}`}</p>
      <div className={cls.temperature}>
          <h1 className={cls.currentTemperature}>{`${data.current.temperature}°`}</h1>
          <img className={cls.weatherImg} src={data.current.weather_icons[0]} alt="Weather" />
          <div>
              <p className={cls.temperatureInfo}>{data.current.weather_descriptions}</p>
              <p className={cls.temperatureInfo}>{`Fells like ${data.current.feelslike}°`}</p>
          </div>
      </div>
      <div className={cls.info}>
          <div className={cls.flex}>
              <img className={cls.icon} src={Wind} alt="Wind" />
              <p>{`${data.current.wind_speed} km/h`}</p>
          </div>
          <div className={cls.flex}>
              <img className={cls.icon} src={Humidity} alt="Humidity" />
              <p>{`${data.current.humidity}`}</p>
          </div>
          <div className={cls.flex}>
              <img className={cls.icon} src={Pressure} alt="Pressure" />
              <p>{`${data.current.pressure}`}</p>
          </div>
      </div>
    </div>
  )
}