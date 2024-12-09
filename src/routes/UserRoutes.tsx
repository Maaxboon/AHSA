import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "../views/Home";
import Login from "../views/Login";
import Signup from "../views/Signup";
import AccommodationListings from "../views/AccommodationListings";
import CompanyListings from "../views/CompanyListings";
import MyListings from "../views/MyListings";

function UserRoutes() {
  return createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" Component={Home} />
        <Route path="/login" Component={Login} />
        <Route path="/signup" Component={Signup} />
        <Route path="/accommodations" Component={AccommodationListings} />
        <Route path="/companies" Component={CompanyListings} />
        <Route path="/my-listings" Component={MyListings} />
        <Route path="*" Component={Home} />
      </Route>
    )
  );
}

export default UserRoutes;
