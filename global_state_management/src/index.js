import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App.jsx';
import reportWebVitals from './reportWebVitals';
import { AdminFlagProvider } from './providers/AdminFlagProvider';

// アプリ全体で参照できるようにするためにAppコンポーネントを囲む
ReactDOM.render(
  <AdminFlagProvider>
    <App />
  </AdminFlagProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
