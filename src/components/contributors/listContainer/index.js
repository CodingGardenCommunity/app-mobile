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

import ContributorHeader from './listItem/contribHeader';
import ContributorDevTeam from './listItem/contribDevTeam';


const styles = StyleSheet.create({
  flex: {
    display: 'flex',
    flex: 1,
  },
  listItem: {
    height: 130,
    marginLeft: 0,
    paddingVertical: 0,
    paddingHorizontal: 10,
  },
  thumbnail: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  inactive: {
    opacity: 0.4,
  }
});

const sortData = (dataArray) => {
  // sorts the array by join date
  dataArray.sort((firstItem, secondItem) => (firstItem.joined < secondItem.joined ? -1 : 1))
    // then sorts array by active status
    .sort((firstItem, secondItem) => (firstItem.active > secondItem.active ? -1 : 1));
  return dataArray;
};

export default class ListContainer extends Component {
  constructor() {
    super();
    this.state = {
      contributorsData: [],
      dataLoaded: false,
    };
  }

  componentDidMount() {
    fetch('https://raw.githubusercontent.com/CodingGardenCommunity/contributors/mock-user-data/contributors.json')
      .then(res => res.json())
      .then((data) => {
        sortData(data);
        this.setState({
          contributorsData: data,
          dataLoaded: true
        });
      })
      .catch(error => console.log(error));
  }

  renderSeparator = () => <View style={{ height: 1, backgroundColor: '#121212', }}></View>;

  render() {
    if (this.state.dataLoaded) {
      return (
        <FlatList
          style={styles.flex}
          data={this.state.contributorsData}
          renderItem={({ item, index }) => {
            const {
              name,
              github,
              teamIds,
              image,
              active,
            } = item;

            return (
            <ListItem
              style={[
                // sets every other listItem as a darker grey
                styles.listItem, !(index % 2)
                  ? { backgroundColor: '' }
                  : { backgroundColor: '#cccccc' }]}
              avatar>
              <Left>
                <Thumbnail
                  source={{ uri: image || null }}
                  style={[styles.thumbnail, active ? {} : styles.inactive, { paddingVertical: 0 }]}
                />
              </Left>
              <Body style={{ paddingVertical: 0 }}>
                <ContributorHeader name={name} github={ github } />
                <ContributorDevTeam teamIds={teamIds} />
              </Body>
            </ListItem>
            );
          }
        }
          keyExtractor={item => item.name + this.index}
          ItemSeparatorComponent={this.renderSeparator}
        />
      );
    }
    return <Text style={{ alignSelf: 'center', marginTop: 50 }}>Loading...</Text>;
  }
}
