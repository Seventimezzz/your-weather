import { MainPage } from "pages/index"
import { StoreProvider } from "./providers"

export const App = () => {

    return (
        <StoreProvider>
            <MainPage/>
        </StoreProvider>
    )
}