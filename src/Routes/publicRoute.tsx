import { createBrowserRouter } from "react-router";
import App from "../App";
import Practice from "../Pages/Practice";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },

    {
        path: 'practice',
        element: <Practice />
    }
]);

export default Routes;