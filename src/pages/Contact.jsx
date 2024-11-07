import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import { Box, Typography, TextField, Button } from "@mui/material";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFailure, setShowFailure] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_qa0hr1r",
        "template_drz0bo3",
        {
          from_name: formData.name,
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "tcvV1gTcbx1CgoGzF"
        // F
      )
      .then(
        (result) => {
          setShowSuccess(true);
          setShowFailure(false);
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          setShowSuccess(false);
          setShowFailure(true);
        }
      );
  };

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
      {showSuccess && (
        <Alert
          icon={<CheckIcon fontSize="inherit" />}
          severity="success"
          onClose={() => setShowSuccess(false)}
        >
          Message sent successfully!
        </Alert>
      )}

      {showFailure && (
        <Alert severity="error">
          Failed to send message. Please try again.
        </Alert>
      )}
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
          onSubmit={sendEmail}
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
              name="name"
              variant="outlined"
              required
              onChange={handleChange}
              value={formData.name}
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
              name="email"
              type="email"
              required
              onChange={handleChange}
              value={formData.email}
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
            name="subject"
            required
            variant="outlined"
            onChange={handleChange}
            value={formData.subject}
            sx={{ marginBottom: "16px", width: "100%" }}
            InputProps={{
              sx: {
                borderRadius: 10,
              },
            }}
          />
          <TextField
            label="Message"
            name="message"
            required
            multiline
            onChange={handleChange}
            value={formData.message}
            sx={{ marginBottom: "16px", width: "100%" }}
            InputProps={{
              sx: {
                borderRadius: 5,
                height: "150px",
              },
            }}
          />
          <Button
            type="submit"
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
