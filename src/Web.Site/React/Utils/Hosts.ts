export default (host: string): string => {
  if (host.includes('localhost')) {
    return '//localhost:5001';
  }
  return '//pdf.ricardogaefke.com';
};
