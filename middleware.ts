// Temporarily disabled i18n middleware to fix routing
// The app structure needs to be updated to support locale-based routing
// For now, the site will work in Chinese only

export function middleware() {
  // No-op middleware
  return;
}

export const config = {
  matcher: []
};
