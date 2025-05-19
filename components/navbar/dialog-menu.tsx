"use client";

import { useState } from "react";
import {
  Box,
  Dialog,
  IconButton,
  List,
  ListItemText,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { MenuIcon, X } from "lucide-react";
import { dialogMenus } from "@/constant";

export const DialogMenu = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggleDialog = () => {
    setOpen((open) => !open);
  };

  return (
    <>
      <Box sx={{ display: { xs: "flex", md: "none" } }}>
        <IconButton aria-label="close" onClick={toggleDialog}>
          <MenuIcon size={30} />
        </IconButton>
      </Box>

      <Dialog
        fullScreen
        open={open}
        onClose={toggleDialog}
        sx={{
          display: { xs: "", lg: "none" },
          height: "250px",
          m: 1,
        }}
      >
        <Box sx={{ display: "flex", px: 3, py: 1 }}>
          <List dense>
            {dialogMenus.map(({ name, link }) => (
              <Link
                href={link?.includes("https") ? link : `/${link}`}
                key={link}
                onClick={toggleDialog}
              >
                <ListItemText>
                  <Typography
                    gutterBottom
                    sx={{
                      fontSize: "18px",
                      fontWeight: 600,
                      "&:hover": {
                        color: "#DF5C52",
                      },
                    }}
                  >
                    {name}
                  </Typography>
                </ListItemText>
              </Link>
            ))}
          </List>
          <Box flexGrow="1" />
          <Box
            onClick={toggleDialog}
            sx={{
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "&:hover": {
                cursor: "pointer",
                bgcolor: "#f7f9fd",
                borderRadius: "5px",
              },
            }}
          >
            <X />
          </Box>
        </Box>
      </Dialog>
    </>
  );
};
