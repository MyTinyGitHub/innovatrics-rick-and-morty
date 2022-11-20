import { Route, Routes } from "react-router-dom";
import "./App.css";
import Table from "./component/table/Table";
import Detail from "./component/details/Detail";

import "./localization/i18n";

export let language = "sk";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Table />}></Route>
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
