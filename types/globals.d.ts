interface Window {
    gtag: (
      command: 'config' | 'event' | 'consent' | 'set' | 'get',
      id: string,
      config?: GtagConfig | GtagEventParams
    ) => void;
    dataLayer: Record<string, unknown>[];
  }
  
  interface GtagConfig {
    page_path?: string;
    send_page_view?: boolean;
    debug_mode?: boolean;
  }
  
  interface GtagEventParams {
    event_category?: string;
    event_label?: string;
    value?: number;
    [key: string]: unknown;
  }