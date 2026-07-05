// Returns tenant from URL parameter in production
// Returns tenant from subdomain in local development

export const getSubdomain = () => {
  const host = window.location.hostname.toLowerCase();

  // -------------------------------
  // Production (Vercel)
  // Example:
  // https://mvp-client-peach.vercel.app/login?tenant=apollo
  // -------------------------------
  if (host.endsWith(".vercel.app")) {
    const params = new URLSearchParams(window.location.search);
    return params.get("tenant");
  }

  // -------------------------------
  // Localhost
  // Example:
  // http://apollo.lvh.me:3000/login
  // -------------------------------
  if (
    host === "localhost" ||
    host.endsWith(".lvh.me")
  ) {
    const parts = host.split(".");

    if (parts.length > 2) {
      const sub = parts[0];

      const ignored = ["www", "api", "lvh", "medicloud"];

      if (!ignored.includes(sub)) {
        return sub;
      }
    }

    return null;
  }

  // InfinityFree backend itself never has tenant
  if (host.endsWith(".infinityfreeapp.com")) {
    return null;
  }

  return null;
};

export const getTenantApiBase = () => {
  return process.env.REACT_APP_TENANT_API_BASE;
};