import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
let App = React.lazy(() => import("./App.js"));
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<h1>Loading....</h1>}>
      <App/>
    </Suspense>
  </React.StrictMode>
)