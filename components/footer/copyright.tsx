import { Box, Typography } from "@mui/material";

export const CopyRight = () => {
  const now = new Date().getFullYear();
  return (
    <footer>
      <Box
        sx={{ textAlign: "center", p: 3, bgcolor: "#0f1f38", color: "#9ca3af" }}
      >
        <Typography variant="body2" fontSize={"13px"}>
          &copy; {now} School Admin. All rights reserved.
        </Typography>
      </Box>
    </footer>
  );
};
