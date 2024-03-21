import React from "react";
import Recipes from "./pages/recipes";
import Navbar from "./components/navbar";
import Recipe from "./pages/recipe";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AddRecipe from "./pages/add_recipe/addrecipe";

const router = createBrowserRouter([
  { path: "/", element: <Recipes /> },
  { path: "/recipes", element: <Recipe /> },
  { path: "/recipes/:id", element: <Recipe /> },
  { path: "/addrecipe", element: <AddRecipe /> }
]);

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
