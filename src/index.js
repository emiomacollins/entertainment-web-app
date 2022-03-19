import 'normalize-css';
import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import './css/global.css';
import { persistor, store } from './redux/store';

const queryClient = new QueryClient();

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<QueryClientProvider client={queryClient}>
						<App />
					</QueryClientProvider>
				</PersistGate>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
