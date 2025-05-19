import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

export default function NotFound() {
  return (
    <Box
      sx={{
        marginTop: "100px",
        left: "50%",
        position: "absolute",
        transform: "translate(-50%)",
        overflow: "auto",
        textAlign: "center",
      }}
    >
      <Typography variant="h3" component="div" fontWeight={600}>
        404
      </Typography>
      <Typography variant="h6">Page Not Found</Typography>
      <Box sx={{ mt: 3 }} />
      <Link href="/">
        <Button variant="outlined" color="error">
          Return Home
        </Button>
      </Link>
    </Box>
  );
}
