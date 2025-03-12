import { useCallback, useEffect } from "react"
import { ESessionStorageItems, setSessionStorageData, transformGeolocationToString } from "shared/index"
import { useAppDispatch } from "app/providers"
import { getLocation } from "./getCurrentPosition"
import { setPosition } from "./currentPositionSlice"

export const useGetCurrentPosition = () => {
    const dispatch = useAppDispatch()

    const setCurrentPosition = useCallback(async(position: GeolocationPosition) => {
        setSessionStorageData(ESessionStorageItems.currentLocation, position)
        dispatch(setPosition(transformGeolocationToString('weather')))
    }, [dispatch])

    useEffect(() => {
        getLocation((position) => setCurrentPosition(position))
    }, [setCurrentPosition])       

}