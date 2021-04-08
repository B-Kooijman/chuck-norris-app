export async function fetchResult(url) {
  const result = await fetch(url).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw Error(`Error occurred: ${response.status}`);
  });

  return result;
}
