import SearchBarComp from "@/components/SearchBarComp";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

import MovieCard from "@/components/MovieCard";
import TrendingCard from "@/components/TrendingCard";
import { fetchMovies } from "@/services/api";
import { getTrendingMovies } from "@/services/appwrite";
import useFetch from "@/services/useFetch";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  const {
    data: trendingMovies,
    loading: trendingLoading,
    error: trendingError,
  } = useFetch(getTrendingMovies)
  console.log('trendingMovies', trendingMovies);

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError
  } = useFetch(() => fetchMovies({ query: '' }), true);


  if (moviesLoading) {
    return (
      <View className="flex-1 justify-center items-center bg-primary">
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0" />

      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View className="p-2 w-1/3">
            <MovieCard {...item} />
          </View>
        )}
        numColumns={3}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingBottom: 100,
        }}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: 10,
        }}
        ListHeaderComponent={
          <View className="px-5">
            <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />

            <SearchBarComp
              onPress={() => router.push("/search")}
              placeholder="Search for a Movie"
              value=""
              onChangeText={() => { }}
            />

            <View className="mt10">
              <Text className="text-lg text-white font-bold mb-3 mt-10">Trending Movies</Text>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => <View className="w-4" />}
                data={trendingMovies}
                renderItem={({ item, index }) => {
                  return (
                    <TrendingCard item={item} index={index} />

                  );
                }}

              />
            </View>

            <Text className="text-white text-lg font-semibold mt-5 mb-3">
              Latest Movies
            </Text>
          </View>
        }
      />


    </View>
  );
}
