import { Button, TextField } from "@mui/material"
import { useAppDispatch } from "app/index"
import { useRef } from "react"
import cls from './SearchString.module.scss'
import { setPosition } from "features/index"

export const SearchString = () => {

    const ref = useRef<HTMLInputElement>(null)

    const dispatch = useAppDispatch()

    const handleClick = () =>  {
        dispatch(setPosition(ref.current.value))
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            dispatch(setPosition(ref.current.value))
        }
    }

    return (
        <div className={cls.searchBox} onKeyDown={handleKeyDown}>
            <TextField inputRef={ref} className={cls.searchString} label="Введите ваш город" id="fullWidth" />
            <Button onClick={handleClick} variant="contained">Поиск</Button>
        </div>
    )
}
