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

const style = StyleSheet.create({
  flex: {
    display: 'flex',
    flex: 1,
  },
  listItem: {
    height: 100,
  },
  name: {
    fontSize: 20
  },
  teamIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 20,
    borderColor: '#212121',
    borderWidth: 1
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
          developmentTeams: ['Planning', 'Frontend', 'Backend', 'Design', 'DevOps', 'Testing']
        },
        {
          id: '1',
          name: 'Joshua Ferris',
          avatar: 'https://avatars3.githubusercontent.com/u/22730186?s=460&v=4',
          developmentTeams: ['Planning', 'Frontend', 'Backend', 'Design']
        },
      ],
      githubData: [],
    };
  }

  componentDidMount() {
    fetch('https://app-backend-iel278lgr.now.sh/contributors')
      .then(res => res.json())
      .then((data) => {
        this.setState({
          githubData: data,
        }, () => {
          console.log('data fetched');
          console.log(this.state.githubData);
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    if (this.state.githubData) {
      return (
        <FlatList
          style={style.flex}
          data={this.state.githubData}
          renderItem={({ item }) => {
            console.log(item);
            const {
              name,
              teamIds,
              joined,
              github,
              image,
              active
            } = item;

            return (
            <ListItem style={style.listItem} avatar>
              <Left>
                <Thumbnail source={{ uri: image }} />
              </Left>
              <Body>
                <Text style={style.name}>
                  {name}
                </Text>
                <View style={{ backgroundColor: '#ccc', height: 60 }}>
                  <Text>Development Teams</Text>
                  <View style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
                    {
                      teamIds.map((team, index) => <View
                      key={index}
                      style={style.teamIcon}>
                        { console.log(team) }
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
    return <Text>No data found</Text>;
  }
}
