import { ReactNode } from "react"
import { BrowserRouter } from "react-router"

interface RouterProviderProps {
    children?: ReactNode
}

export const RouterProvider = ({children}: RouterProviderProps) => {

    return (
        <BrowserRouter>
            {children}
        </BrowserRouter>
    )
}