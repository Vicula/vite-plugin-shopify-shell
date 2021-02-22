export interface shopifyTheme {
  id: string
  theme: string
  live: boolean
}

export interface pluginInput {
  shopifyPass_var?: string
  shopifyStore_var?: string
  devFolder_url?: string
}
