import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import MenuItem from '@mui/material/MenuItem';

function AddRecipe() {
  return (
    <Container maxWidth="sm">
      <h1>Add A New Recipe</h1>
      <form>
        <TextField
          label="Title" variant="outlined" name="title" fullWidth margin="normal" />
          <TextField
          label="Description" variant="outlined" name="description"fullWidth margin="normal"
        />
        <TextField select label="Country" variant="outlined" name="country"fullWidth margin="normal"
        >{['Ghana'].map((option) => (<MenuItem> {option}</MenuItem>))}</TextField>

        <TextField variant="outlined" name="image" fullWidth  margin="normal" type="file" accept="image/*" required
        /><br />
        <br /><br />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default AddRecipe;
