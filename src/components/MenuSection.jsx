import {
    Box,
    Typography,
    Grid,
    Card,
    CardMedia,
    CardContent,
  } from "@mui/material";
  
  import menu1 from "../assets/1.png";
  import menu2 from "../assets/2.png";
  import menu3 from "../assets/3.png";
  
  const menuItems = [
    { title: "Grilled Salmon", price: "$15.99", img: menu1 },
    { title: "Pasta Carbonara", price: "$12.99", img: menu2 },
    { title: "Cheesecake", price: "$8.99", img: menu3 },
  ];
  
  const MenuSection = () => {
    return (
      <Box sx={{ py: { xs: 6, md: 10 } }}>
        <Typography
          variant="h4"
          align="center"
          fontWeight="bold"
          mb={5}
        >
          Our Menu
        </Typography>
  
        <Grid
          container
          spacing={4}
          justifyContent="center"
          px={{ xs: 2, md: 6 }}
        >
          {menuItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ height: "100%", maxWidth: 350, mx: "auto" }}>
                <CardMedia
                  component="img"
                  height="230"
                  image={item.img}
                  alt={item.title}
                  sx={{ objectFit: "cover" }}
                />
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="h6">
                    {item.title}
                  </Typography>
                  <Typography color="text.secondary">
                    {item.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  };
  
  export default MenuSection;
  