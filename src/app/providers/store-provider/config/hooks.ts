import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch  } from './config'

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()