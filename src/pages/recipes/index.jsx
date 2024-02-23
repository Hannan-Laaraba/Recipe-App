import { Container, TextField, Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";

export default function Recipes(){
    return (
       <Container sx={{my:'2rem'}} maxWidth="sm">
        <TextField fullWidth id="outlined-basic" label="Enter a keyword to search recipes and hit Enter" variant="outlined" />

       

        <Grid sx={{ mt:'1rem'}} container spacing={3}>
            <Grid item xs={4}>
                <Card>
                    <CardMedia
                    sx={{height: 250}} 
                    image= "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlY2lwZXN8ZW58MHx8MHx8fDA%3D"/>
                </Card>
                <CardContent>
                    <Typography variant="h5">Salad</Typography>
                </CardContent>
            </Grid>
        </Grid>
       </Container>
    );
}