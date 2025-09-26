import MaskedView from '@react-native-masked-view/masked-view'
import { Link } from 'expo-router'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const TrendingCard = ({ item, index }: any) => {
    const { movie_id, title, poster_url } = item;
    return (
        <Link href={`/movies/${movie_id}`} asChild>
            <TouchableOpacity className="w-32 mr-2">
                <Image
                    source={{ uri: poster_url || `https://placehold.co/600x400/1a1a1a/ffffff.png` }}
                    resizeMode="cover"
                    className='w-32 h-48 rounded-lg'
                />
                <Text
                    className="text-white text-sm font-semibold mt-2"
                    numberOfLines={1}
                >
                    {title}
                </Text>

                <View className='absolute top-40 -left-4.5 z-100'>
                    <MaskedView
                        maskElement={
                            <View className='flex-row items-center'>
                                <Text className='text-4xl text-white font-bold uppercase ml-1'>
                                    {index + 1}
                                </Text>
                            </View>
                        }
                    >
                        <View style={{ backgroundColor: 'red', height: 30, width: 30 }} />
                    </MaskedView>

                </View>
                <Text className='text-xs text-light-300 font-bold mt-2'
                    numberOfLines={2}
                >
                    {title}
                </Text>
            </TouchableOpacity>
        </Link>
    )
}

export default TrendingCard

const styles = StyleSheet.create({})