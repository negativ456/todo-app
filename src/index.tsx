import ReactDOM from 'react-dom/client';
import './app/styles/index.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import App from './app/App';
import {StoreProvider} from "./app/providers/StoreProvider";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <StoreProvider>
      <App />
    </StoreProvider>
);
