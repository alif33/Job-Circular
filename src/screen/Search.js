import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { SearchHeader } from '../components/header'
import SuggestionSearchList from 'react-native-search-suggestion'
import searchList from '../../searchIndex.json'

const Search = props =>{

    const renderListItem = (item) => {
        return (
            <TouchableOpacity 
             underlayColor="#fbd42c" 
             key={`searchlist${item.id}`}
             onPress={()=>{
                props.navigation.navigate('Find Job', { pass: item.pass, skey : item.name})
             }}
            >
                <View style={styles.listItem}>
                    <Text style={styles.listItemText}>{ item.name }</Text>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <SearchHeader navigation={props.navigation} />
            <View style={{flex: .2}}></View>

            <ScrollView style={{flex: .71, padding: 20}}> 
                <SuggestionSearchList
                    list={searchList}
                    renderListItem={(item) => renderListItem(item)}
                    startSuggestingFrom={1}
                    inputStyle={{
                        height: 50,
                        borderColor: '#f2f2f2',
                        borderWidth: 1,
                        paddingLeft: 10,
                        backgroundColor: '#fff'
                    }}
                    suggestBoxStyle={{
                        backgroundColor: '#fff',
                        marginTop: 2,
                    }}
                />
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    searchInput: {
        height: 50,
        borderColor: '#f2f2f2',
        borderWidth: 1,
        paddingLeft: 10,
        backgroundColor: '#fff'
    },
    listItem: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        height: 55,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#e5e5e5',

    },
    listItemText: {
        fontSize: 20
    }
})
export default Search