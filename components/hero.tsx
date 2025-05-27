import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import { SectionLayout } from "./section-layout";

export const Hero = () => {
  return (
    <SectionLayout sx={{ pt: 15 }}>
      <Box textAlign="center">
        <Typography variant="h3" component="div" gutterBottom fontWeight={600}>
          Organize your school <br /> seamlessly.
        </Typography>
        <Typography variant="h5" color="#DF5C52" mb={5}>
          Built for efficient management of every aspect of your educational
          institution.
        </Typography>
        <Typography component="p" variant="body1" mb={2}>
          A complete school management system that helps administrators,
          teachers, students, parents, and staff <br />
          collaborate effectively. Set up your own school in minutes.
        </Typography>
        <Link href={"/request-access"}>
          <Button variant="contained" sx={{ backgroundColor: "#DF5C52" }}>
            Request System Access
          </Button>
        </Link>
      </Box>
    </SectionLayout>
  );
};
