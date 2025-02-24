import dayjs from "dayjs"

export const  getDateToString = (date: dayjs.Dayjs): string => {
    const year = date.get('year').toString()
    let month = (date.get('M') + 1).toString()
    let day = date.get('D').toString()

    if (month.length === 1) month = 0 + month 
    if (day.length === 1) day = 0 + day

    return `${year}-${month}-${day}`
}