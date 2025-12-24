import { Box, Typography, Container } from "@mui/material";
import aboutImage from "../assets/about.png";

const AboutSection = () => {
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            flexDirection: { xs: "column", md: "row" }, // ← هنا السر
          }}
        >
          
          <Box
            component="img"
            src={aboutImage}
            alt="About us"
            sx={{
              width: { xs: "100%", md: "50%" },
              height: 300,
              objectFit: "cover",
              borderRadius: 3,
            }}
          />

        
          <Box sx={{ width: { xs: "100%", md: "50%" } }}>
            <Typography variant="h4" fontWeight="bold" mb={2}>
              About Us
            </Typography>

            <Typography color="text.secondary" lineHeight={1.7}>
              We are a family-owned restaurant dedicated to serving
              delicious meals made from fresh ingredients, providing
              an unforgettable dining experience.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutSection;
