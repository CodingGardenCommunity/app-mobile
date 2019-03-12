import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList
} from 'react-native';
import { List, ListItem } from 'native-base';

const style = StyleSheet.create({
  flex: {
    display: 'flex',
    flex: 1
  }
});

export default class ListContainer extends Component {
  constructor() {
    super();

    this.state = {
      contributors: [
        {
          id: '0',
          name: 'Sean RabbitWerks',
          avatar: 'https://yt3.ggpht.com/-hRIruU8PArM/AAAAAAAAAAI/AAAAAAAAAAA/6YE3uj59cgA/s88-c-k-no-mo-rj-c0xffffff/photo.jpg',
          developmentTeams: ['Planning', 'Frontend', 'Backend', 'Design']
        },
        {
          id: '1',
          name: 'Joshua Ferris',
          avatar: '',
          developmentTeams: ['Planning', 'Frontend', 'Backend', 'Design']
        },
      ]
    };
  }

  render() {
    if (this.state.contributors) {
      return (
        <List style={style.flex}>
          <FlatList
            style={style.flex}
            data={this.state.contributors}
            renderItem={({ item }) => <Text>{item.name}</Text>}
            keyExtractor={item => item.id}
          />
        </List>
      );
    }
    return <Text>No data found</Text>;
  }
}
