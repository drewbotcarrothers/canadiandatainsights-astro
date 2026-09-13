import type { APIRoute } from 'astro';
import { getCompareLocations } from '../../lib/locations';

export const GET: APIRoute = async () => {
  const locations = await getCompareLocations();
  return new Response(JSON.stringify(locations), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
