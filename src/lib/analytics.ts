import ReactGA from "react-ga4";

const GA4_TRACKING_ID = process.env.GA4_TRACKING_ID;

export const initGA = () => {
  if (process.env.NODE_ENV === "production" && GA4_TRACKING_ID) {
    ReactGA.initialize(GA4_TRACKING_ID);
    console.log("GA4 initialized");
  }
};

export const trackPageView = (path: string) => {
  ReactGA.send({ hitType: "pageview", page: path });
};

export const trackEvent = (category: string, action: string, label?: string) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};