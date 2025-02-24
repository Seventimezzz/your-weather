import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { setDate } from '../calendarSlice'
import { RootState, useAppDispatch, useAppSelector } from 'app/providers'
import { getDateToString } from 'shared/utils'
import dayjs from 'dayjs'

export const Calendar = () => {
    const dispatch = useAppDispatch()
  
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker defaultValue={dayjs()} onChange={(newValue) => dispatch(setDate(getDateToString(newValue)))} label="Выбрать дату" /> 
        </LocalizationProvider>
    )
}