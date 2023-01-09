export const getGifts = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=pGyq9JNgrL4MkrvIY2TUBlpYOglFFs17&q=${category}&limit=20`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifts = data?.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.downsized_medium,
  }));
  return gifts;
};
