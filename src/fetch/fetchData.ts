export const fetchData = async (url: string, request?: string) => {
  let link = url;
  if (request) {
    link = `${url}${request}`;
  }
  const response = await fetch(link);
  const json = await response.json();
  return json;
};
