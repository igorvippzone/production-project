import {Suspense} from "react";
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";

import App from "app/App";
import {ThemeProvider} from "app/providers/ThemeProvider";
import "shared/config/i18n/i18n";
import {PageLoader} from "widgets/PageLoader";

const root = createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <ThemeProvider>
            <Suspense fallback={<PageLoader/>}>
                <App/>
            </Suspense>
        </ThemeProvider>
    </BrowserRouter>
)
