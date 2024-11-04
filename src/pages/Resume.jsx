import { Box, Typography } from "@mui/material";

const Resume = () => {
  const expericences = [
    {
      id: 1,
      name: "Software Development Intern",
      company: "TAP Talent Acceleration Platform",
      period: "June 2024 - September 2024",
      details: [
        "· Contributed to the development of a E-Commerce project, resulting in a 20% performance improvement.",
        "· Refactored legacy codebase, reducing technical debt and improving maintainability.",
        "· Implemented automated testing, increasing code coverage by 30%.",
        "· Reduced build times by 15% through optimization of CI/CD pipelines.",
      ],
    },
    {
      id: 2,
      name: "Amazon AWS Cloud trainee",
      company: "Gaza Sky Geeks",
      period: "Feb 2023 - June 2023",
      details: [
        "· Successfully obtained AWS Certified Cloud Practitioner certification.",
        ". Designed and deployed scalable and secure cloud infrastructure using AWS services such as EC2, S3, RDS, and VPC.",
        "· Implemented cost-saving measures, reducing cloud expenses by 20% through AWS cost management tools and best practices.",
        "· Led a project to migrate on-premises applications to AWS cloud, resulting in improved performance and reduced maintenance costs.",
        "· Conducted training sessions for team members on AWS services and best practices, improving overall team proficiency.",
      ],
    },
  ];

  return (
    <Box
      component="div"
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: { xs: "center", sm: "flex-start", xl: "center" },
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
          marginTop: { xs: "24px", sm: "24px" },
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
            fontSize: { xs: 25, sm: 30, lg: 50 },
          }}
        >
          EXPERIENCE
        </Typography>
      </Box>
      {/* ....................................................................... */}
      <Box
        component="div"
        sx={{
          width: { xs: "100%", sm: "80%", lg: "50%", xl: "50%" },
          minHeight: "70%",
          marginTop: { sm: "24px" },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            color: "#343a40",
            marginBottom: "24px",
            fontSize: "32px",
            marginLeft: { xs: "24px" },
          }}
        >
          My Expericence
        </Typography>
        <Box component="div" className="expDe" sx={{ paddingLeft: "24px" }}>
          {expericences.map((exp) => {
            return (
              <Box
                key={exp.id}
                component="div"
                sx={{
                  width: "100%",
                  minHeight: "200px",
                  marginBottom: "16px",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: "#0BCEAF",
                    fontWeight: 700,
                    marginBottom: "10px",
                    fontSize: { xs: "22px" },
                  }}
                >
                  {exp.name}
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "16px",
                    color: "#6c757d",
                    fontWeight: 700,
                    marginBottom: "10px",
                  }}
                >
                  {exp.company} |{" "}
                  <Box
                    component="span"
                    sx={{ fontSize: "14px", fontWeight: 400 }}
                  >
                    {exp.period}
                  </Box>
                </Typography>
                <Typography>
                  {exp.details.map((detail) => {
                    return (
                      <Typography
                        sx={{
                          color: "#6c757d",
                          fontSize: "16px",
                          fontWeight: 400,
                        }}
                      >
                        {detail}
                      </Typography>
                    );
                  })}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Resume;
