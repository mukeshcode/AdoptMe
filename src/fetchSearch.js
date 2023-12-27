const fetchSearch = async ({ queryKey }) => {
  const { animal, breed, location } = queryKey[1];

  const res = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&breed=${breed}&location=${location}`
  );

  if (!res.ok)
    throw new Error(`Fetch Pet not ok ${animal}, ${breed}, ${location}`);

  // Not awaiting as async returns a promise.
  return res.json();
};

export default fetchSearch;