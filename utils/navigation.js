const Routes = [
  {
    title: "MAIN MENU",
    links: [
      { name: "Dashboard", icon: "dashboard" },
      {
        name: "Products",
        icon: "products",
        children: [
          { name: "All Products", icon: "allProducts" },
          { name: "Add New Product", icon: "newProduct" },
          { name: "Tags", icon: "tags" },
        ],
      },
      { name: "Sub Category", icon: "sub" },
      { name: "Brands", icon: "brands" },
      { name: "Scan Barcode", icon: "scan" },
      { name: "Import Products", icon: "import" },
    ],
  },
  {
    title: "ANALYTICS",
    links: [
      { name: "Sales", icon: "sales", counter: 49 },
      {
        name: "Point of Sales",
        icon: "point",
      },
      { name: "Leaderboards", icon: "leaderboards" },
      { name: "Orders", icon: "orders" },
      { name: "Refund", icon: "refund" },
    ],
  },
  {
    title: "APPS",
    links: [
      { name: "Chat", icon: "chat", counter: 49 },
      { name: "Calendar", icon: "calendar" },
      { name: "Email", icon: "email" },
    ],
  },
  {
    title: "SETTINGS",
    links: [
      { name: "Settings", icon: "settings" },
      { name: "Log Out", icon: "logout" },
    ],
  },
];

export default Routes;
