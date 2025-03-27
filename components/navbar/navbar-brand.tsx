import { Box, Typography } from "@mui/material";
import { School } from "lucide-react";
import Link from "next/link";

export const NavbarBrand = ({ color }: { color: string }) => {
  return (
    <Link href={"/"}>
      <Box sx={{ color: color, display: "flex" }}>
        <School style={{ marginRight: 5 }} />
        <Typography
          variant="h6"
          sx={{
            mr: 5,
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          School Admin
        </Typography>
      </Box>
    </Link>
  );
};
