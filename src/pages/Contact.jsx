import { Box, Typography, TextField, Button } from "@mui/material";

const Contact = () => {
  return (
    <Box
      component="div"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "24px",
      }}
    >
      {/* ........................................................ */}
      <Box
        component="div"
        sx={{
          width: "100%",
          height: { xs: "50%", xl: "30%" },
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: { xs: "24px" },
        }}
      >
        <Typography
          component="h1"
          variant="h1"
          sx={{
            textAlign: "center",
            fontSize: { xs: 50, sm: 80, lg: 150, xl: 150 },
            WebkitTextStroke: "1px #dee2e6",
            color: "transparent",
            fontFamily: "Roboto",
            fontWeight: "900",
          }}
        >
          CONTACT
        </Typography>
        <Typography
          component="h4"
          variant="h4"
          sx={{
            textAlign: "center",
            position: "absolute",
            color: "#0BCEAF",
            fontWeight: "900",
            fontSize: { xs: 25, sm: 30, md: 35, lg: 50 },
          }}
        >
          CONTACT ME
        </Typography>
      </Box>
      {/* .......................................................... */}
      <Box
        component="div"
        className="first"
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <Box
          component="form"
          className="sec"
          sx={{
            width: { xs: "95%", lg: "60%", xl: "45%" },
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            component="div"
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: { xs: "column", md: "row", xl: "row" },
              justifyContent: "space-between",
              marginBottom: "16px",
            }}
          >
            <TextField
              label="Your Name"
              variant="outlined"
              sx={{
                width: { xs: "100%", md: "48%", xl: "48%" },
                marginBottom: { xs: "16px" },
              }}
              InputProps={{
                sx: {
                  borderRadius: 10,
                },
              }}
            />
            <TextField
              label="Your Email"
              variant="outlined"
              sx={{ width: { xs: "100%", md: "48%", xl: "48%" } }}
              InputProps={{
                sx: {
                  borderRadius: 10,
                },
              }}
            />
          </Box>
          <TextField
            label="Subject"
            variant="outlined"
            sx={{ marginBottom: "16px", width: "100%" }}
            InputProps={{
              sx: {
                borderRadius: 10,
              },
            }}
          />
          <TextField
            label="Message"
            multiline
            sx={{ marginBottom: "16px", width: "100%" }}
            InputProps={{
              sx: {
                borderRadius: 5,
                height: "150px",
              },
            }}
          />
          <Button
            variant="outlined"
            sx={{
              width: { xs: "50%", sm: "30%", xl: "25%" },
              height: "50px",
              borderColor: "#0BCEAF",
              color: "#0BCEAF",
              borderRadius: 10,
            }}
          >
            Send Message
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
