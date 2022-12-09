import { AuthenticatePage } from "./pages/AuthenticatePage/AuthenticatePage";
import { useState, useEffect } from "react";
import { isLoggedInContext } from "./contexts/isLoggedIn";
import { MainLayout } from "./layout/MainLayout";
import { SearchForm } from "./components/SearchForm/SearchForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Statistics } from "./components/Statistics/Statistics";
import { Loader } from "./components/Loader/Loader";
import { RouteResults } from "./components/Results/Results";

function App() {
  const [data, setState] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  function getData() {
    const url = "https://localhost:7279/test";

    fetch("https://wa-eit-dk2.azurewebsites.net/test", { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        setState(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getData();
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <BrowserRouter>
          <isLoggedInContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {isLoggedIn ? (
              <MainLayout>
                <Routes>
                  <Route path="/team2-eitc/" element={<SearchForm />} />
                  <Route path="/team2-eitc/stats" element={<Statistics />} />
                  <Route
                    path="/team2-eitc/results"
                    element={<RouteResults />}
                  />
                </Routes>
              </MainLayout>
            ) : (
              <Routes>
                <Route path="/team2-eitc/" element={<AuthenticatePage />} />
              </Routes>
            )}
          </isLoggedInContext.Provider>
        </BrowserRouter>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App;
