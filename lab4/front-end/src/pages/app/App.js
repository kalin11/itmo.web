import React, {useState} from "react";
import {BrowserRouter, Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import MainLayout from "../../layout/MainLayout";
import GraphLayout from "../../layout/GraphLayout";
import ErrorPage from "../../layout/ErrorPage";

function App() {
    const [access, setAccess] = useState(false);


    const handler = (value) => {
        setAccess(value);
    }

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout access={access} accessHandler={handler}/>} />
          <Route path="/main" element={
              <GraphLayout access={access} accessHandler={handler}/>
          }/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
    );
}

export default App;
