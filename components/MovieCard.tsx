import { icons } from '@/constants/icons'
import { Link } from 'expo-router'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const MovieCard = ({ id, poster_path, title, vote_average, release_date, vote_count }: any) => {
    return (
        <Link href={`/movies/${id}`} asChild>
            <TouchableOpacity className="w-[100%]">
                <Image
                    source={{ uri: poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : `https://placehold.co/600x400/1a1a1a/ffffff.png` }}
                    resizeMode="cover"
                    className='w-full h-52 rounded-lg'
                />
                <Text
                    className="text-white text-sm font-semibold mt-2"
                    numberOfLines={1}
                >
                    {title}
                </Text>

                <View className='flex-row items-center mt-1'>
                    <Image source={icons.star} className='size-4' resizeMode='contain' tintColor='#f5c518' />
                    <Text className='text-xs text-white font-bold uppercase'>
                        {(vote_average / 2).toFixed(1)}
                    </Text>
                </View>

                <View className="flex-row items-center justify-between space-x-2 mt-1">
                    <Text className="text-xs text-light-300 font-medium">
                        {release_date?.split('-')[0] || 'N/A'}
                    </Text>



                    <Text className="text-xs text-light-300 font-medium">
                        {vote_count} votes
                    </Text>
                </View>

            </TouchableOpacity>

        </Link>
    )
}

export default MovieCard

const styles = StyleSheet.create({})