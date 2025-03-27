export const appLink =
  process.env.NEXT_PUBLIC_DEMO_SITE_URL || `https://demo.school-admin.xyz`;

export const mainMenus: { name: string; link: string }[] = [
  { name: "Features", link: "#features" },
  { name: "How It Works", link: "#how-it-works" },
  { name: "Roadmap", link: "#roadmap" },
];
export const dialogMenus: { name: string; link: string }[] = [
  ...mainMenus,
  {
    name: "Login",
    link: appLink,
  },
  {
    name: "Book demo",
    link: "book-demo",
  },
];
