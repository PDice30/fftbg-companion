const fetchJSON = (url: string) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const response = fetch(url, {
    method: 'GET',
    mode: 'cors',
    headers : {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
    }
  })

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return response;
}

export default fetchJSON;