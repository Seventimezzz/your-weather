import { TWeatherCurrentResponse, TWeatherErrorResponse } from "features/index"
import { Error, Loading } from "shared/ui";

interface TStatusRequestProps<T> {
  Component: React.FC<{data: T}>,
  status: {
    isSuccess: boolean,
    isLoading: boolean,
    isError: boolean,
    data: T
  }
}

export const StatusRequest = <T extends TWeatherCurrentResponse>(props: TStatusRequestProps<T>) => {
  
    const {
        status,
        Component
    } = props

    const {
        isSuccess,
        isLoading,
        isError,
        data
    } = status

    return (
        <>
            { 
                isLoading && <div><Loading/></div> ||
                isSuccess && 'error' in data && <Error data={data as TWeatherErrorResponse}/> ||
                isSuccess && <Component data={data}/> ||
                isError && <Error />
            }
        </>
    )
}