export const trackPageView = (url) => {
  try {
    window.gtag('config', process.env.ANALYTICS_CORONA_ID, {
      page_location: url
    });
  } catch (error) {
    // silences the error in dev mode
    // and/or if gtag fails to load
  }
}

