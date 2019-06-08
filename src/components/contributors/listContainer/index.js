/* eslint-disable no-console */
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList
} from 'react-native';

import ContributorListItem from './listItem';

const styles = StyleSheet.create({
  flex: {
    display: 'flex',
    flex: 1,
  },
});

// const sortData = (dataArray) => {
//   // sorts the array by join date
//   dataArray.sort((firstItem, secondItem) => (firstItem.joined < secondItem.joined ? -1 : 1))
//     // then sorts array by active status
//     .sort((firstItem, secondItem) => (firstItem.active > secondItem.active ? -1 : 1));
//   return dataArray;
// };

export default class ListContainer extends Component {
  constructor() {
    super();
    this.state = {
      contributorsData: [],
      dataLoaded: false,
      isSelected: true
    };
  }

  componentDidMount() {
    fetch('https://api-dev.coding.garden/contributors')
      .then(res => res.json())
      .then((data) => {
        // sortData(data);
        console.log(data);
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
          renderItem={({ item }, index) => {
            const contributorData = item.attributes;
            const devTeams = item.attributes.teamIds;
            return (
              <ContributorListItem
                contributorData={contributorData}
                devTeams={devTeams}
                index={index}
              />
            );
          }
        }
          keyExtractor={item => item.attributes.name}
          ItemSeparatorComponent={this.renderSeparator}
        />
      );
    }
    return <Text style={{ alignSelf: 'center', marginTop: 50 }}>Loading...</Text>;
  }
}
