import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Signup from "../views/Signup";
import Home from "../views/Home";
import AccommodationListings from "../views/AccommodationListings";
import Login from "../views/Login";
import CompanyListings from "../views/CompanyListings";
import MyListings from "../views/MyListings";

function UserRoutes() {
  return createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/signup" Component={Signup} />
        <Route path="/home" Component={Home} />
        <Route
          path="/AccommodationListings"
          Component={AccommodationListings}
        />
        <Route path="/Login" Component={Login} />
        <Route path="/CompanyListings" Component={CompanyListings} />
        <Route path="/MyListings" Component={MyListings} />
        <Route path="*" Component={Home} /> {/* Fallback route */}
      </Route>
    )
  );
}

export default UserRoutes;
