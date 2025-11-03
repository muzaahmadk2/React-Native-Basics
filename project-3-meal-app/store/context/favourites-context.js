import { createContext, useState } from "react";

export const FavouritesContext = createContext({
  ids: [],
  addToFavourites: (id) => {},
  removeFromFavourites: (id) => {},
});

const FavouritesContextProvider = ({ children }) => {
  const [favouritesMealIds, setFavouritesMealIds] = useState([]);

  const addToFavourites = (id) => {
    setFavouritesMealIds((current) => [...current, id]);
  };
  const removeFromFavourites = (id) => {
    setFavouritesMealIds((current) =>
      current.filter((mealId) => mealId !== id)
    );
  };

  const value = {
    ids: favouritesMealIds,
    addToFavourites: addToFavourites,
    removeFromFavourites: removeFromFavourites,
  };
  return (
    <FavouritesContext.Provider value={value}>
      {children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesContextProvider;
