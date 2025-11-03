import { View, FlatList, StyleSheet } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../Components/MealItem";
import { useLayoutEffect } from "react";
import MealList from "../Components/MealList";

const MealsOverviewScreen = ({ route, navigation }) => {
  const catId = route.params.catId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const catTitle = CATEGORIES.find((cat) => cat.id === catId).title;

    navigation.setOptions({ title: catTitle });
  }, [catId, navigation]);

  return <MealList items={displayedMeals} />;
};
export default MealsOverviewScreen;
