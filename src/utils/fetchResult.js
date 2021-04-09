import config from "../config";

export async function fetchResult() {
  const result = await fetch(config.randomFactUrl + "sport").then(
    (response) => {
      if (response.ok) {
        return response.json();
      }
      throw Error(`${response.status}: category not found`);
    }
  );

  return result;
}
