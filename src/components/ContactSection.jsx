import {
    Box,
    Typography,
    TextField,
    Button,
    Container,
  } from "@mui/material";
  
  const ContactSection = () => {
    return (
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: '#f5f5f5' }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            align="center"
            fontWeight="bold"
            mb={2}
            sx={{ fontSize: { xs: '1.75rem', md: '2.125rem' } }}
          >
            Contact Us
          </Typography>
          
          <Typography
            align="center"
            color="text.secondary"
            mb={5}
            sx={{ fontSize: { xs: '0.875rem', md: '1rem' } }}
          >
            We'd love to hear from you. Send us a message!
          </Typography>
  
          <Box 
            component="form"
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: { xs: 2, md: 3 },
              bgcolor: 'white',
              p: { xs: 3, md: 5 },
              borderRadius: 2,
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}
          >
            <TextField 
              label="Name" 
              fullWidth 
              variant="outlined"
              sx={{ gridColumn: { xs: '1', md: 'span 1' } }}
            />
            <TextField 
              label="Email" 
              type="email"
              fullWidth 
              variant="outlined"
              sx={{ gridColumn: { xs: '1', md: 'span 1' } }}
            />
            
            
            <TextField 
              label="Message" 
              multiline 
              rows={6} 
              fullWidth 
              variant="outlined"
              sx={{ gridColumn: { xs: '1', md: '1 / -1' } }}
            />
            <Button 
              variant="contained" 
              size="large"
              sx={{ 
                gridColumn: { xs: '1', md: '1 / -1' },
                py: 1.5,
                fontSize: { xs: '0.9rem', md: '1rem' },
                fontWeight: 'bold',
                textTransform: 'none'
              }}
            >
              Send Message
            </Button>
          </Box>
        </Container>
      </Box>
    );
  };
  
  export default ContactSection;