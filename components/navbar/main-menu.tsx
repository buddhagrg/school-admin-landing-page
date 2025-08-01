import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { mainMenus } from "@/constants";

export const MainMenu = () => {
  return (
    <Box
      sx={{
        display: {
          xs: "none",
          md: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      {mainMenus.map(({ name, link }) => (
        <Link key={link} href={`/${link}`}>
          <Typography
            sx={{
              mx: 3,
              "&:hover": {
                color: "#DF5C52",
              },
            }}
          >
            {name}
          </Typography>
        </Link>
      ))}
    </Box>
  );
};
