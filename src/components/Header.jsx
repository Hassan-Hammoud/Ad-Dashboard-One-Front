import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width: 767px)");
  return isMobile ? (
    <Box>
      <Typography
        variant="h3"
        color={theme.palette.secondary[100]}
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography variant="h6" color={theme.palette.secondary[300]}>
        {subtitle}
      </Typography>
    </Box>
  ) : (
    <Box>
      <Typography
        variant="h2"
        color={theme.palette.secondary[100]}
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={theme.palette.secondary[300]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
