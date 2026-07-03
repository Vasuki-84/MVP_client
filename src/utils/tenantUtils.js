// Read subdomain from browser URL
// acme.localhost → 'acme'
// medicloud.localhost → null (main site)
// localhost → null (no tenant)

export const getSubdomain = () => {
  const host = window.location.hostname.toLowerCase();

  // Localhost
  if (host === "localhost") return null;

  // Vercel deployment is the main site
  if (host.endsWith(".vercel.app")) return null;

  // InfinityFree backend
  if (host.endsWith(".infinityfreeapp.com")) return null;

  const parts = host.split(".");

  if (parts.length < 2) return null;

  const sub = parts[0];

  const ignored = [
    "www",
    "api",
    "localhost",
    "lvh",
    "medicloud",
  ];

  if (ignored.includes(sub)) return null;

  return sub;
};

export const getTenantApiBase = () => {
  const sub = getSubdomain();
  if (!sub) return null;
  return process.env.REACT_APP_TENANT_API_BASE;
};

