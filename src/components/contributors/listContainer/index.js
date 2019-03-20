/* eslint-disable no-console */
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList
} from 'react-native';
import {
  ListItem,
  Left,
  Body,
  Thumbnail
} from 'native-base';

import ContributorName from './listItem';

const style = StyleSheet.create({
  flex: {
    display: 'flex',
    flex: 1,
  },
  listItem: {
    height: 100,
    marginLeft: 0,
    paddingLeft: '5%',
    paddingBottom: 10
  },
  teamIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 20,
    borderColor: '#212121',
    borderWidth: 1
  },
  active: {
    
  }
});

export default class ListContainer extends Component {
  constructor() {
    super();
    this.state = {
      contributorsData: [],
      dataLoaded: false,
    };
  }

  componentDidMount() {
    fetch('https://app-backend-iel278lgr.now.sh/contributors')
      .then(res => res.json())
      .then((data) => {
        this.setState({
          contributorsData: data,
          dataLoaded: true
        }, () => {
          console.log('data fetched');
          console.log(this.state.contributorData);
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    if (this.state.dataLoaded) {
      return (
        <FlatList
          style={style.flex}
          data={this.state.contributorsData}
          renderItem={({ item }) => {
            console.log(item);
            const {
              name,
              teamIds,
              image,
              active
            } = item;

            return (
            <ListItem style={[style.listItem, active ? style.active : style.inactive]} avatar>
              <Left>
                <Thumbnail
                  source={{ uri: image }}
                  style={{ width: 80, height: 80, borderRadius: 40 }}
                />
              </Left>
              <Body>
                <ContributorName
                  name={name}
                />
                <View style={{ backgroundColor: '#ccc', height: 60 }}>
                  <Text>Development Teams</Text>
                  <View style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
                    {
                      teamIds.map((team, index) => <View
                      key={index}
                      style={[style.teamIcon, { alignItems: 'center', justifyContent: 'center' }]}>
                        <Text>{ team }</Text>
                      </View>)
                    }
                  </View>
                </View>
              </Body>
            </ListItem>
            );
          }
        }
          keyExtractor={item => item.name}
        />
      );
    }
    return <Text style={{ alignSelf: 'center', marginTop: 50 }}>Loading...</Text>;
  }
}
