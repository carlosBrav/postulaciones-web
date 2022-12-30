export const sanitizeUrl = (url: string) =>
  url.toLowerCase().replace(/ /g, '').replace(/_/g, '')
