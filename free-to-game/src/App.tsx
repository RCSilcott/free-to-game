import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";

export default function App() {
  return (
    <>
      <header>
        <h1>My React App</h1>
        <Navbar />

        <hr />
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}