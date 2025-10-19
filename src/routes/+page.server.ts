// src/routes/+page.server.ts
import { providerMap } from '../auth';

export async function load() {
  return {
    providerMap,
  };
}
