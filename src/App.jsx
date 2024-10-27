import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar/navbar";
import { Home } from "./pages/home";
import { Information } from "./pages/information/information";
import { News } from "./pages/information/news-newsLetter-section";
import { Member } from "./pages/information/member";
import { Admin } from "./pages/adm";
import { Login } from "./pages/login";
import { Table } from "./components/tables/table";
import { routes } from "./router";

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
