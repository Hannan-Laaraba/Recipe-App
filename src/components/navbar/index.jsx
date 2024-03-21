import { AppBar, Toolbar, Typography, Button } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Recipe App
        </Typography>
        <Button variant="contained" color="primary">Add Recipe</Button>
      </Toolbar>
    </AppBar>
  );
}
