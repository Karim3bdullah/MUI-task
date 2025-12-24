import { Box, Typography, Button } from "@mui/material";
import heroImage from "../assets/hero.png";

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.55)",
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: 2,
        }}
      >
        <Box>
          <Typography
            sx={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: { xs: "2.2rem", sm: "2.8rem", md: "3.5rem" },
              mb: 2,
            }}
          >
            Welcome to Our Restaurant
          </Typography>

          <Typography
            sx={{
              color: "#e0e0e0",
              fontSize: { xs: "1rem", md: "1.2rem" },
              mb: 3,
            }}
          >
            Delicious food served with love
          </Typography>

          <Button variant="contained" size="large">
            SEE MENU
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
