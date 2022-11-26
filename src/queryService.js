//This will submit the typed query into the specified endpoint for basic functionality
//In order to get the server message to the frontend I think we need to create this from the backend?
export const queryEndpoint = async (url, query) => {
  console.time('startTime')
  try {  
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
      console.timeEnd('startTime')
      return toPrint;
  } catch (error) {
    console.log('Introspection is turned off or the endpoint is not a graphql endpoint')
    return '';
  }
}
