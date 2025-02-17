import { SearchList } from "widgets/index"
import cls from './MainPage.module.scss'
import { Counter } from "features/counter/Counter"

export const MainPage = () => {

    return (
        <div className={cls.page}>
            <SearchList/>
        
        </div>
    )
}