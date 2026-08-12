# Connect Higgsfield (Sudarvel)

Config is saved at `.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "higgsfield": {
      "url": "https://mcp.higgsfield.ai/mcp"
    }
  }
}
```

## Important
The JSON only **points** Cursor to Higgsfield.  
You still must **log in once** (OAuth). No API key.

## Do this in Cursor Desktop
1. Save/pull so `.cursor/mcp.json` is present (already in this branch)
2. **Reload Cursor**: `Cmd/Ctrl+Shift+P` → **Developer: Reload Window**
3. Open **Settings → Tools & MCP** (or MCP Servers)
4. Find **higgsfield** — click **Connect / Authenticate**
5. Browser opens → sign in at higgsfield.ai → Allow
6. Dot should turn **green**
7. Come back to chat and say: **“Higgsfield connected — generate hero”**

### Or install from Marketplace
In chat type: `/add-plugin` → search **Higgsfield** → Install  
Then authenticate the same way.

## Note for Cloud Agents
This cloud chat may not see Higgsfield until your Desktop MCP is authenticated / the server is enabled for the cloud environment. If it still says not connected after login, open a **new Desktop Agent** chat on the Portfolio repo and continue hero generation there.

## Needs
An active Higgsfield account (paid plan may be required per their docs).
