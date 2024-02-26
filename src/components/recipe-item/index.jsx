import { Grid, CardContent, Card, CardMedia, Typography} from "@mui/material";

export default function RecipeItem({title, image}){
    return(
        <Grid item xs={4}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 200 }}
                            image={image}
                            title={title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                               {title}
                            </Typography>
                           
                        </CardContent>
                    </Card>

                </Grid>
    )
}