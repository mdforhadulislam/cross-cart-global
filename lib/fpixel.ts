declare global {
  interface Window {
    fbq: (event: string, action: string) => void;
  }
}

export const FB_PIXEL_ID = "26093014930391502";

export const pageview = () => {
  window.fbq("track", "PageView");
};
