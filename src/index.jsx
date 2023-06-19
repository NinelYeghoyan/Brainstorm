import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { ROUTER_URL } from "./config/index";
import { store } from "./redux/store";
import App from "./App";

import "./i18n/config";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Provider store={store}>
        <BrowserRouter basename={ROUTER_URL}>
            <App />
        </BrowserRouter>
    </Provider>,
);
