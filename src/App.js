import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userAPI";
import './index.css'

const App = observer(() => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  // 1.948847
  useEffect(() => {
    check().then(data => {
      console.log(data)
      console.log("HERE")
      user.setUser(true)
      user.setIsAuth(true)
    }).catch((error) => console.log("authorization error"))
        .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <div>Loading</div>
  }

  return (
      <BrowserRouter>
        <NavBar />
        <AppRouter />
      </BrowserRouter>
  );
});

export default App;