import Admin from "./pages/Admin"
import AdminHome from "./pages/AdminHome/AdminHome";
import UserList from "./pages/UserList/UserList";
import NewUser from "./pages/NewUser/NewUser";
import Products from "./pages/Products/Products";
import NotFound from "./pages/NotFound/NotFound";

let routes = [
    {path: "/", element: <h1>Welcome to home</h1>, children: [

    ]},

    {path: "/admin", element: <Admin />, children: [
        {path: "users", element: <UserList />},
        {path: "newUser", element: <NewUser />},
        {path: "products", element: <Products />},
        {path: "*", element: <NotFound type="admin" />},
        
    ]},
    {path: "*", element: <NotFound type="home" />},

    
]

export default routes;