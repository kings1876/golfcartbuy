# Auth.md

Golf Cart Buy — golf cart e-commerce site.

## Agent Registration

No authentication or registration is required to access any public resource on golfcartbuy.com. All product, category, blog, and policy pages are publicly readable.

## Public Resources

| Resource | URL |
|---|---|
| Homepage | https://golfcartbuy.com/ |
| Product catalog | https://golfcartbuy.com/shop/ |
| Sitemap | https://golfcartbuy.com/sitemap.xml |
| llms.txt | https://golfcartbuy.com/llms.txt |
| API catalog | https://golfcartbuy.com/.well-known/api-catalog |
| Agent skills index | https://golfcartbuy.com/.well-known/agent-skills/index.json |
| MCP server card | https://golfcartbuy.com/.well-known/mcp/server-card.json |

```json
{
  "agent_auth": {
    "register_uri": null,
    "identity_types_supported": ["none"],
    "credential_types_supported": ["none"],
    "notes": "No authentication required. All resources are public."
  }
}
```

## Ordering

Orders placed through https://golfcartbuy.com/order/ are requests only — a human at Golf Cart Buy confirms price, availability, and payment details by email before any order is final. No payment is captured through this website or any automated interface.

## Age Restriction

None. Golf carts and accessories sold on this site carry no age restriction.
