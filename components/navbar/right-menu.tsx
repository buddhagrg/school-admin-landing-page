import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { mainApp } from "@/constants";

export const RightMenu = () => {
  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        alignItems: "center",
      }}
    >
      <Link href={mainApp}>
        <Typography
          sx={{
            color: "black",
            mr: 3,
            "&:hover": {
              color: "#DF5C52",
            },
          }}
        >
          Login
        </Typography>
      </Link>
      <Link href={"/request-access"}>
        <Button variant="contained" sx={{ backgroundColor: "#DF5C52" }}>
          Request Access
        </Button>
      </Link>
    </Box>
  );
};
