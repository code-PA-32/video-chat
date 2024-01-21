import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import './index.css'
import {NextUIProvider} from "@nextui-org/react";
import './utils/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <NextUIProvider>
      <App />
    </NextUIProvider>
)