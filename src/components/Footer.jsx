import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "#1f1f1f",
        color: "#fff",
        py: 2,
        textAlign: "center",
      }}
    >
      <Typography variant="body2">
        © 2025 Restaurant. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
