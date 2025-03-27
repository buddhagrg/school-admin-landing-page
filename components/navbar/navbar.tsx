"use client";
import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { NavbarBrand } from "./navbar-brand";
import { appLink, mainMenus } from "./constant";
import { DialogMenu } from "./dialog-menu";

export const Navbar = () => {
  const theme = useTheme();
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isBigScreen = useMediaQuery(theme.breakpoints.up("md"));
  const [open, setOpen] = useState<boolean>(false);

  const getRightMenus = () => {
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
  const toggleDialog = () => {
    setOpen((open) => !open);
  };

  return (
    <AppBar
      sx={{ backgroundColor: "inherit", color: "inherit", boxShadow: "none" }}
      position="fixed"
    >
      <Container>
        <Toolbar disableGutters>
          <NavbarBrand color="inherit" />

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

          <Box sx={{ flexGrow: 1 }} />
          {getRightMenus()}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton aria-label="close" onClick={toggleDialog}>
              <MenuIcon size={30} />
            </IconButton>
          </Box>

          <DialogMenu open={open} toggleDialog={toggleDialog} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
