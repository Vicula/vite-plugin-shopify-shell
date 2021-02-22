# Vite Shopify Shell (WIP)

This is a plugin for vite going to be used for building shopify themes.

```javascript
import shopify from 'vite-plugin-shopify-shell'

export default defineConfig({
  plugins: [
    shopify({
      shopifyPass_var: 'SHOPIFY_PASSWORD',
      shopifyStore_var: 'SHOPIFY_STORE',
      devFolder_url: 'src/shopify',
    }),
  ],
})

```

The above variables relate directly to your .env file variables.
