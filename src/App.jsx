import { Suspense } from "react";
import { ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";

import GlobalStyles from "./style/theme/global.styled";
import theme from "./style/theme/theme";
import AppRoutes from "./routes";

import "./style/scss/styles.scss";

const App = () => (
    <ThemeProvider theme={theme}>
        <Reset />
        <GlobalStyles />

        <Suspense>
            <AppRoutes />
        </Suspense>
    </ThemeProvider>
);

export default App;
