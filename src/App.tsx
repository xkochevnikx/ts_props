import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import TodoPage from "./Components/TodoPage";
import UserItemPage from "./Components/UserItemPage";
import UserPage from "./Components/UserPage";
// import Card, { CardVariant } from "./Components/Card";
// import Events from "./Components/Events";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Link to={"/userpage"} style={{ marginRight: 20 }}>
            пользователи
          </Link>
          <Link to={"/todopage"}>список дел</Link>
        </div>
        <Routes>
          <Route element={<UserPage />} path={"/userpage"} />
          <Route element={<TodoPage />} path={"/todopage"} />
          <Route element={<UserItemPage />} path={"/userpage/:id"} />
          <Route />
        </Routes>
      </BrowserRouter>
      {/* <Events />
      <Card
        onClick={num => console.log("Click", num)}
        variant={CardVariant.primary}
        height="200px"
        width="200px">
        <button>qwert</button>
      </Card> */}
    </>
  );
}

export default App;
