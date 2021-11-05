import * as React from 'react';
import {Image, FlatList} from 'react-native';
import { Text  } from '../../components/Themed';


import styles from './style'

interface HomeCatagoryProps {
    catagory: {
            id: string,
            title: string,
            movies: {
                id:string,
                poster:string,
            }[]
    }
}

const HomeCatagory = (props: HomeCatagoryProps)=> {
    const {catagory} = props;
    return (
        <>
            <Text style={styles.title}>{catagory.title}</Text>
            <FlatList 
            data={catagory.movies}
            renderItem={({item}) =>(
                <Image style={styles.Image} source={{uri: item.poster}} ></Image>
            )} horizontal
            showsHorizontalScrollIndicator={false}/>
           
        </>
    );
}

export default HomeCatagory;