import React, { useState } from "react";
import { FlatList, Image,  Pressable } from "react-native";
import {Picker} from '@react-native-picker/picker';
import { Text, View } from "../../components/Themed";
import styles from "./style";
import movie from "../../assets/data/movie";
import { AntDesign, Entypo, Feather, Ionicons, MaterialIcons } from "@expo/vector-icons";
import EpisodeItem from "../../components/EpisodeItem";


const firstSeason = movie.seasons.items[0];
const firstEpisode = firstSeason.episodes.items[0];
const MovieDetailsScreen = () => {

    const [currentSeason, setCurrnetSeason] = useState(firstSeason);
    const seasonNames = movie.seasons.items.map(season => season.name);
    return(
        <View>
            <Image style={styles.Image} source = {{uri: firstEpisode.poster }}/>
          
            <FlatList 
                data = {currentSeason.episodes.items}
                renderItem = {({item}) => <EpisodeItem episode={item}/> }
                style={{marginBottom: 250}}
                ListHeaderComponent= {(
                    <View style ={{padding: 12}} >
                    <Text style={styles.title}>{movie.title} </Text>
                    <View style = {{flexDirection: "row"}}>
                        <text style={styles.match} ></text>
                        <text style={styles.year} >{movie.year}</text>
                        <View style={styles.ageContainer} >
                        <text style ={styles.age} ></text>
                        </View>
                        <text style ={styles.year} >{movie.numberOfSeasons} Seasons</text>
                        <MaterialIcons name = "hd" size ={24} color="white"/>
                    </View>
                    <Pressable onPress={()=> {console.warn('Plage')}} style={styles.playButton}  >
                        <Text style={styles.playButtonText} >
                            <Entypo name='controller-play' size={16} color="black" /> Play
                        </Text>
                    </Pressable>
        
                    <Pressable onPress={()=> {console.warn('Plage')}} style={styles.downloadButton}  >
                        <Text style={styles.downloadButtonText} >
                            <AntDesign name='download' size={16} color="white" /> Download
                        </Text>
                    </Pressable>
        
                    <Text style={{marginVertical: 10}} >{movie.plot} </Text>
                    <Text style={styles.year} >{movie.cast}</Text>
                    <Text style={styles.year} >{movie.creator} </Text>
        
                    <View style= {{flexDirection: 'row', marginTop: 20}}>
                        <View style= {{alignItems: 'center', marginHorizontal:'20'}}>
                            <AntDesign name ="plus" size= {30} color= 'white' />
                            <Text style={{color:'darkgrey'}} >My List</Text>
                        </View>
                        <View style= {{alignItems: 'center', marginHorizontal:'20'}}>
                            <Feather name ="thumbs-up" size= {30} color= 'white' />
                            <Text style={{color:'darkgrey'}} >Rate</Text>
                        </View>
                        <View style= {{alignItems: 'center', marginHorizontal:'20'}}>
                            <Ionicons name ="share-social" size= {30} color= 'white' />
                            <Text style={{color:'darkgrey'}} >Share</Text>
                        </View>
                    </View>

                    <Picker
                        selectedValue={currentSeason.name}
                        onValueChange={(itemValue, itemIndex) => {
                            setCurrnetSeason(movie.seasons.items[itemIndex])
                        }}
                        style = {{color:'white', width: 130}}
                        dropdownIconColor={'white'}
                        >
                            {seasonNames.map(seasonName =>(
                                     <Picker.Item label="seasonName" value="seasonName" key="seasonName" />
                            ))}
                       
                        
                    </Picker>
            </View>
                )}

            />
        </View>
    )
};

export default MovieDetailsScreen;