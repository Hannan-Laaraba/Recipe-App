import { Container, TextField, Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import RecipeItem from "../../components/recipe-item";
import { useEffect, useState } from "react";

export default function Recipes() {

    const [recipes, setRecipes] = useState([]);

    const searchRecipes = () => {
        //prepare url
        const url = new URL('https://api.spoonacular.com/recipes/complexSearch');
        url.searchParams.append('apiKey', '961d51e43d8d42f0bcb8c0990d9170e8');
        //fetch recipes
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                //update recipes state
                setRecipes(data.results);
            })
            .catch((error) => {
                console.log(error);
            })

    }

    useEffect(searchRecipes, []);

    return (
        <Container sx={{ my: '2rem' }} >
            <TextField fullWidth id="outlined-basic" label="Search recipes" variant="outlined" />



            <Grid sx={{ mt: '1rem' }} container spacing={3}>
                {recipes.map((recipe) => <RecipeItem key={recipe.id} title={recipe.title} image={recipe.image} />)}
            </Grid>
        </Container>
    );
}