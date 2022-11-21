
//This will submit the typed query into the specified endpoint for basic functionality
export const queryEndpoint = async (url, query) => {
  const result = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: query,
      variables: {},
    }),
  })
    const toPrint = await result.json();
    return toPrint;
  }
