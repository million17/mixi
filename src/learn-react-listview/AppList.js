import React, { Component } from 'react';
import { View, Text, Platform, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native';
import { getAllProduct, local } from '../networking/Server';


export default class AppList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsData: [],
      isLoading: true,
    };
  }

  render() {
    const { productsData, isLoading } = this.state;
    return (
      <SafeAreaView style={{
        marginTop: Platform.OS === 'ios' ? 35 : 0,
        flex: 1
      }}>
        <FlatList
          style={{
            backgroundColor: 'yellow',
          }}
          data={productsData}
          renderItem={({ item }) =>
            <TouchableOpacity style={{
              marginBottom: 10,
              flex: 1,
              flexDirection: 'row',
            }}>
              <Image
                style={{ width: 100, height: 100 }}
                source={{ uri: local + item.mainImage }} />
              <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignContent: 'center',
                marginLeft: 4
              }}>

                <Text style={{
                  fontSize: 20,
                  color: 'red'
                }}>{item.productName}</Text>
                <Text>{item.categoryName}</Text>
                <Text>{item.price}</Text>
                <Text>{item.shortDesc}</Text>
                <Text>{item.createdDate}</Text>
              </View>
              <View style={{
                backgroundColor: 'white',
                height: 1,
              }}></View>
            </TouchableOpacity>

          }
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }

  componentDidMount() {
    //Load Service data
    //Fecth trên serve trả về
    fetch(local + '/api/product/list')
      //Ép thành JSON
      .then((res) => res.json())
      //Đúng thì nhảy vào đây
      .then((respJson) => {
        console.log(respJson)
        this.setState({
          productsData: respJson.data
        })
      })
      //Sai thì chạy ra đây
      .catch((err) => console.log(err))
      .finally(() => {
        this.setState({
          isLoading: false
        })
      })
  }
}
