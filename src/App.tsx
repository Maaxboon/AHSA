import { RouterProvider } from "react-router-dom";
import UserRoutes from "./routes/UserRoutes";
import "./App.css";

function App() {
  return (
    <>
      <RouterProvider router={UserRoutes()} />
    </>
  );
}

export default App;
