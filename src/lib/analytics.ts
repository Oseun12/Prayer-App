import ReactGA from "react-ga4";



const GA4_TRACKING_ID = process.env.NEXT_PUBLIC_GA4_TRACKING_ID;

export const initGA = () => {
    if (GA4_TRACKING_ID) {
      ReactGA.initialize(GA4_TRACKING_ID);
      console.log('GA4 Initialized with ID:', GA4_TRACKING_ID);
      
      // Test event
      ReactGA.event('test_event', {
        category: 'Test',
        action: 'Initialized'
      });
    }
  };

  export const trackPageView = (path: string) => {
    if (GA4_TRACKING_ID) {
      ReactGA.send({ 
        hitType: "pageview", 
        page: path,
        title: document.title 
      });
    }
  };

  export const trackEvent = (
    category: string, 
    action: string, 
    label?: string
  ) => {
    if (GA4_TRACKING_ID) {
      ReactGA.event({
        category,
        action,
        label: label || '',
      });
    }
  };