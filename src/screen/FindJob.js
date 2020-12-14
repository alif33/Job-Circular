import 'react-native-gesture-handler'
import React, { useEffect } from 'react'
import { View, Text, StyleSheet, ActivityIndicator, FlatList } from 'react-native'
import { Header } from '../components/header'
import JobItem from '../components/JobItem'
import fb from '../../firebase'
import _, { set } from 'lodash'

const Home = props => {
    console.log(props.route.params.skey)

    const [list, setList] = React.useState(null);

    useEffect(() => {
        fb.database().ref(props.route.params.pass).on('value', snapshot => {
            const JobList = _.map(snapshot.val(), (val, key) => {
                return {
                    ...val,
                    key: key
                }
            })
            let QueryJob = JobList.filter(job => {
                return job.category === props.route.params.skey
            })
            setList(QueryJob)
        })

    }, [props.route.params.skey])
    let jobList = null
    if (list) {
        jobList = (<FlatList data={list} renderItem={({ item }) => { return (<JobItem item={item} navigation={props.navigation} />) }} />)

    } else {
        jobList = <ActivityIndicator size="large" color="#0000ff" />
    }

    return (
        <View style={styles.container}>
            <Header navigation={props.navigation} />
            <View style={styles.body}>
                {jobList}
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    body: {
        flex: 0.93,
        backgroundColor: '#fff'
    }
})
export default Home





