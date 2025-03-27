import { AppBar, Box, Container, Toolbar } from "@mui/material";
import { NavbarBrand } from "./navbar-brand";
import { DialogMenu } from "./dialog-menu";
import { MainMenu } from "./main-menu";
import { RightMenu } from "./right-menu";

export const Navbar = () => {
  return (
    <AppBar
      sx={{ backgroundColor: "inherit", color: "inherit", boxShadow: "none" }}
      position="fixed"
    >
      <Container>
        <Toolbar disableGutters>
          <NavbarBrand color="inherit" />
          <MainMenu />
          <Box sx={{ flexGrow: 1 }} />
          <RightMenu />
          <DialogMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
