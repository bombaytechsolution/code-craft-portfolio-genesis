
// This file defines process.env for Vite environment
window.process = {
  env: {
    NODE_ENV: import.meta.env.MODE,
    // Add any other environment variables you need
    __NEXT_ROUTER_BASEPATH: '',
    __NEXT_HAS_REWRITES: false,
  }
};
