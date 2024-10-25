import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { buildProvidersTree } from "./functions/providers";
import { NavigationContainer } from "@react-navigation/native";

export const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 1 } },
});

// Build a single one Provider with all needed Providers for the app
export const Providers = buildProvidersTree([
  [QueryClientProvider, { client: queryClient }],
  [NavigationContainer],
]);
