import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useLayoutEffect, useContext } from "react";
import IconButton from "../Components/IconButton";
import { FavouritesContext } from "../store/context/favourites-context";

const MealDetailsScreen = ({ route, navigation }) => {
  const favouritesCtx = useContext(FavouritesContext);

  const mealId = route.params.mealId;

  const selectedMeals = MEALS.find((meal) => meal.id === mealId);
  const mealIsFavourite = favouritesCtx.ids.includes(mealId);

  const iconPressHandler = () => {
    if (mealIsFavourite) {
      favouritesCtx.removeFromFavourites(mealId);
    } else {
      favouritesCtx.addToFavourites(mealId);
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          color="white"
          size={22}
          icon={mealIsFavourite ? "star" : "star-outline"}
          onPress={iconPressHandler}
        />
      ),
    });
  });
  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeals.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeals.title}</Text>
      <View style={styles.details}>
        <Text style={styles.detailsItem}>{selectedMeals.duration} min</Text>
        <Text style={styles.detailsItem}>
          {selectedMeals.affordability.toUpperCase()}
        </Text>
        <Text style={styles.detailsItem}>
          {selectedMeals.complexity.toUpperCase()}
        </Text>
      </View>
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>Ingredients</Text>
          </View>
          {selectedMeals.ingredients.map((ingredient) => (
            <View key={ingredient} style={styles.listItem}>
              <Text style={styles.itemText}>{ingredient}</Text>
            </View>
          ))}

          <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>Steps</Text>
          </View>
          {selectedMeals.steps.map((step) => (
            <View key={step} style={styles.listItem}>
              <Text style={styles.itemText}>{step}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailsScreen;
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    color: "white",
    textAlign: "center",
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailsItem: {
    marginHorizontal: 4,
    fontSize: 12,
    color: "white",
  },
  subTitle: {
    fontSize: 18,
    color: "#cd8a4fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  subTitleContainer: {
    margin: 4,
    padding: 6,
    borderBottomWidth: 2,
    borderBottomColor: "#cd8a4fff",
    marginHorizontal: 12,
  },
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#cd8a4fff",
  },
  itemText: {
    color: "#6f3400ff",
    textAlign: "center",
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});
