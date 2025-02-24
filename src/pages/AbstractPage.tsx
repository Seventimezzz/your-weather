import { ReactNode } from "react"
import cls from './AbstractPage.module.scss'

interface TPageProps {
  children: ReactNode
}

export const Page = ({children}: TPageProps) => {

    return (
        <div className={cls.page}>
            {children}
        </div>
    )
}