import { Text, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import { FavouritesContext } from "../store/context/favourites-context";
import { useContext } from "react";
import MealList from "../Components/MealList";

const FavouriteScreen = () => {
  const favouriteCtx = useContext(FavouritesContext);
  const favouriteMeals = MEALS.filter((meal) =>
    favouriteCtx.ids.includes(meal.id)
  );

  if (favouriteMeals.length === 0) {
    return <Text style={styles.text}>You have no favourite meals yet.</Text>;
  }

  return <MealList items={favouriteMeals} />;
};

export default FavouriteScreen;

const styles = StyleSheet.create({
  text: {
    flex: 1,
    fontSize: 18,
    fontWeight: "bold",
    margin: 20,
    textAlign: "center",
  },
});
