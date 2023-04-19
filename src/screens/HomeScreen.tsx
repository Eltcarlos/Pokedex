import React from "react";
import { Image, FlatList, ActivityIndicator, Text, View } from "react-native";
import { styles } from "../theme/appTheme";
import { usePokemonPaginated } from "../hooks/usePOkemonPaginated";
import { PokemonCard } from "../components/PokemonCard";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const { simplePokemonList, loadPokemons } = usePokemonPaginated();
  console.log(simplePokemonList);
  return (
    <>
      <Image source={require("../assets/pokebola.png")} style={styles.pokebolaBG} />
      <View
        style={{
          alignItems: "center",
        }}
      >
        <FlatList
          data={simplePokemonList}
          keyExtractor={(pokemon) => pokemon.id}
          showsHorizontalScrollIndicator={false}
          numColumns={2}
          ListHeaderComponent={
            <Text style={{ ...styles.title, ...styles.globalMargin, top: top + 20, marginBottom: top + 20 }}>
              Pokedex
            </Text>
          }
          renderItem={({ item }) => <PokemonCard pokemon={item} />}
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.4}
          ListFooterComponent={<ActivityIndicator style={{ height: 100 }} size={20} color="grey" />}
        />
      </View>
    </>
  );
};
