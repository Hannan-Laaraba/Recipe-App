import Recipes from "./pages/recipes";
import Navbar from "./components/navbar";
import Recipe from "./pages/recipe";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {path: "/", element: <Recipes/>},
  //  {path: "/recipes", element: <Recipe />},
   {path: "/recipes/:id", element: <Recipe />}
]) ;

function App() {
  return (
   <>
   <Navbar />
   <RouterProvider router={router} />
   </>
  );
}

export default App;
