import { Grid2, List, ListItem, Typography } from "@mui/material";
import Link from "next/link";

export const FooterNav = () => {
  const products: Array<{
    title: string;
    menus: { name: string; link: string }[];
  }> = [
    {
      title: "Product",
      menus: [
        {
          name: "Features",
          link: "#features",
        },
        { name: "Roadmap", link: "#roadmap" },
        { name: "Request Access", link: "request-access" },
      ],
    },
    {
      title: "Support",
      menus: [{ name: "Contact Us", link: "contact-us" }],
    },
  ];

  return products.map(({ title, menus }) => (
    <Grid2 size={{ xs: 12, md: 4 }} key={title}>
      <Typography variant="body1" color={"white"}>
        {title}
      </Typography>
      <List dense>
        {menus.map(({ name, link }) => (
          <ListItem
            key={name}
            sx={{ "&.a": { textDecoration: "none" }, padding: 0 }}
          >
            <Link href={`/${link}`} className="footer-link">
              <Typography
                variant="body2"
                gutterBottom
                sx={{ color: "#9ca3af", "&:hover": { color: "white" } }}
              >
                {name}
              </Typography>
            </Link>
          </ListItem>
        ))}
      </List>
    </Grid2>
  ));
};
