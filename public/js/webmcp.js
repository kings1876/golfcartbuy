(function () {
  if (typeof navigator === 'undefined' || !navigator.modelContext) return;

  navigator.modelContext.provideContext({
    tools: [
      {
        name: "browse_products",
        description: "Browse golf carts by category",
        inputSchema: {
          type: "object",
          properties: {
            category: { type: "string", description: "Category slug to browse" }
          }
        },
        execute: async ({ category }) => {
          const url = category
            ? "https://golfcartbuy.com/shop/" + category + "/"
            : "https://golfcartbuy.com/shop/";
          window.location.href = url;
          return { url };
        }
      },
      {
        name: "start_order",
        description: "Go to the order form. Minimum order $3500.",
        inputSchema: { type: "object", properties: {} },
        execute: async () => {
          window.location.href = "https://golfcartbuy.com/order/";
          return { url: "https://golfcartbuy.com/order/" };
        }
      },
      {
        name: "contact",
        description: "Contact for product questions or support",
        inputSchema: { type: "object", properties: {} },
        execute: async () => {
          window.location.href = "https://golfcartbuy.com/contact/";
          return { url: "https://golfcartbuy.com/contact/" };
        }
      }
    ]
  });
})();
