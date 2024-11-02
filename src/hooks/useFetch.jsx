import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_GIPHY_API;

const useFetch = ({keyword}) => {
  const [gifURL, setGifURL] = useState("");
  const fetchGifs = async () => {
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword.split(" ").join("")}&limit=1`
      );
      const { data } = await response.json();
      setGifURL(data[0]?.images?.downsized_medium?.url);
    } catch (error) {
      console.log(error);
      setGifURL(
        "https://metro.co.uk/wp-content/uploads/2015/05/pokemon_crying.gif?quality=90&strip=all&zoom=1&resize=500%2C284"
      );
    }
  };
  useEffect(() => {
   if(keyword) fetchGifs();
  }, [keyword]);

  return gifURL
};

export default useFetch