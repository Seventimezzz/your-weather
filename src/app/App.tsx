import { HistoryPage, MainPage } from "pages/index"
import { useEffect } from "react"
import { Route, Routes } from "react-router"
import { ROUTER_PATHS, useGetCurrentPosition } from "shared/index"
import { Header } from "widgets/index"

export const App = () => {

    console.log('app')

    useGetCurrentPosition()

    return (
        <>
            <Header/>
            <Routes>
                <Route path={ROUTER_PATHS.MAIN} element={<MainPage />} />
                <Route path={ROUTER_PATHS.HISTORY} element={<HistoryPage />} />
            </Routes>
        </>
    )
}