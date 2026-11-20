/**
 * Tiny inline scripts that must run in <head> before the app hydrates.
 * Plain module (no "use client") so the root layout can inline them.
 */

/** Applies the saved light/dark choice (ThemeToggle) before first paint. */
export const THEME_INIT_SCRIPT = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}`;

/**
 * Keeps Chrome's install prompt (Android/desktop) for our own soft "install"
 * button instead of the browser's automatic bar. It can fire before React
 * hydrates, so it is caught here. See src/lib/install.ts.
 */
export const INSTALL_CAPTURE_SCRIPT = `window.addEventListener("beforeinstallprompt",function(e){e.preventDefault();window.__installPrompt=e;window.dispatchEvent(new Event("install-state"))});window.addEventListener("appinstalled",function(){window.__installPrompt=null;window.dispatchEvent(new Event("install-state"))});`;
