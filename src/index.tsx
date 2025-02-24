import ReactDOM from "react-dom/client";
import { App } from "./app";
import './index.scss'
import { StoreProvider, RouterProvider } from "app/providers";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
    <StoreProvider>
        <RouterProvider>
            <App/>
        </RouterProvider>
    </StoreProvider>
);
