import { Box, Typography } from "@mui/material";

const Resume = () => {
  return (
    <Box
      component="div"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* ............................................................. */}
      <Box
        component="div"
        sx={{
          width: "100%",
          minHeight: "30%",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          component="h1"
          variant="h1"
          sx={{
            textAlign: "center",
            fontSize: 150,
            WebkitTextStroke: "1px #dee2e6",
            color: "transparent",
            fontFamily: "Roboto",
            fontWeight: "900",
          }}
        >
          RESUME
        </Typography>
        <Typography
          component="h4"
          variant="h4"
          sx={{
            textAlign: "center",
            position: "absolute",
            color: "#0BCEAF",
            fontWeight: "900",
          }}
        >
          EXPERIENCE
        </Typography>
      </Box>
      {/* ....................................................................... */}
      <Box
        component="div"
        sx={{ width: "50%", minHeight: "70%", border: 1 }}
      ></Box>
    </Box>
  );
};

export default Resume;
