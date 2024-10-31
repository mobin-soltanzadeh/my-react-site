import MainWeb from "./MainWeb"
import WebSite from "./WebsitePages/WebSite";
import Admin from "./pages/Admin"
import AdminHome from "./pages/AdminHome/AdminHome";
import Analytics from "./pages/Analytics/Analytics";
import Sales from "./pages/Sales/Sales";
import UserList from "./pages/UserList/UserList";
import Products from "./pages/Products/Products";
import Reports from "./pages/Reports/Reports";
import Mail from "./pages/Mail/Mail";
import NotFound from "./pages/NotFound/NotFound";

let routes = [
    {path: "/my-react-site", element: <MainWeb /> , children: [
        {path: "", element: <WebSite />},

        {path: "admin", element: <Admin />, children: [
            {path: "", element: <AdminHome />},
            {path: "analytics", element: <Analytics />},
            {path: "sales", element: <Sales />},
            {path: "users", element: <UserList />},
            {path: "products", element: <Products />},
            {path: "transactions", element: <Sales />},
            {path: "reports", element: <Reports />},
            {path: "mails", element: <Mail />},
            {path: "*", element: <NotFound type="admin" />},
            
        ]},
    ]},

    
    {path: "*", element: <NotFound type="home" />},

]

export default routes;