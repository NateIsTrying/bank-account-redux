import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './redux/accountSlice';
import App from './App';

// Create the Redux store
const store = configureStore({
   // ***TODO***
   reducer: {
      // Set the accountReducer as the reducer for the 'account' state
      account: accountReducer,
   },
});

// Render the App component inside the Provider component
ReactDOM.render(
   // ***TODO***
   <Provider store={store}>
      <App />
   </Provider>,
   document.getElementById('root')
);
