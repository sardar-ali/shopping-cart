import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import './index.css';
import ContextProvider from './context-api/contextProvider';
import Routes from './Routes';

const App = () => {

  return (
    <>
      <ContextProvider >
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Routes />
      </ContextProvider>
    </>
  );

}


export default App;
