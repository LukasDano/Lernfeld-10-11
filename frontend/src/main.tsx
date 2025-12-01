import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import './index.css';
import {App} from './components/App.tsx';
import {AppContextProvider} from "./components/AppContextProvider.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <AppContextProvider>
                <App/>
            </AppContextProvider>
        </QueryClientProvider>
    </StrictMode>,
);
