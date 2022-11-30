//This will submit the typed query into the specified endpoint for basic functionality
//In order to get the server message to the frontend I think we need to create this from the backend?
export const queryEndpoint = async (url, query) => {
  let start = window.performance.now()
  
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
      let end = window.performance.now()
      let querySpeed = end - start
      return [toPrint, querySpeed]
  } catch (error) {
      return 'Error in queryEndpoint function';
  }
}

//check if Introspection is on depending on result from fetch
export const checkIntrospection = async (url) => {
  const query = `{
    __schema {
      types {
        name
      }
    }
  }`
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
      const schema = await result.json();
      return true
  } catch (error) {
    console.log('Introspection is turned off or the endpoint is not a graphql endpoint')
    return false;
  }
}