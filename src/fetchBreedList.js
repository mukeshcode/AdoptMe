const fetchBreedList = async ({ queryKey }) => {

  const animal = queryKey[1];

  if (animal === "")
    return [];

  const results = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );

  if (!results.ok)
    throw new Error(`/breeds?animal=${animal} Fetch not OK`);

  // Not awaiting, as async function returns promise.
  // we can though but there will be a minute performance degradation
  return results.json();
}

export default fetchBreedList;