import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { appLink } from "./constant";

export const RightMenu = () => {
  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        alignItems: "center",
      }}
    >
      <Link href={appLink}>
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
      <Link href={"/book-demo"}>
        <Button variant="contained" sx={{ backgroundColor: "#DF5C52" }}>
          Book a demo
        </Button>
      </Link>
    </Box>
  );
};
