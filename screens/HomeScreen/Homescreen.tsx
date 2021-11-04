import * as React from 'react';
import {Image, FlatList} from 'react-native';
import { Text, View  } from '../../components/Themed';
import categories from '../../assets/data/categories';

import styles from './style'
import HomeCatagory from '../../components/HomeCatagory';

const firstCatagory = categories.items[0];
const Homescreen = ()=> {
    return (
        <View style={styles.container}>
            {/* <HomeCatagory catagory={firstCatagory}/> */}
            <FlatList
                data={categories.items}
                renderItem={({item}) => <HomeCatagory catagory={item}/>}
            />
           
        </View>
    );
}

export default Homescreen;