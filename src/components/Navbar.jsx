import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ bgcolor: "#1f1f1f" }}>
      <Toolbar
        sx={{
          width: "100%",
          maxWidth: "1400px",
          mx: "auto",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h6" fontWeight="bold">
          Restaurant
        </Typography>

        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
          <Button color="inherit">HOME</Button>
          <Button color="inherit">MENU</Button>
          <Button color="inherit">ABOUT</Button>
          <Button color="inherit">CONTACT</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
