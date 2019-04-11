import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import propTypes from 'prop-types';
import {
  ListItem,
  Left,
  Body,
  Thumbnail
} from 'native-base';


import ContributorHeader from './contribHeader';

import DevTeamHeader from './contribDevTeam/devTeamHeader';
import DevTeamsList from './contribDevTeam/devTeamsList';

import ExpanderIcon from './expanderIcon';


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
  listItemBodyContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  thumbnail: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  inactiveAvatar: {
    opacity: 0.4,
  }
});

export default class ContributorListItem extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      isExpanded: false
    };
  }

  toggleExpanded = () => {
    this.setState(prevState => ({
      isExpanded: !prevState.isExpanded,
    }));
  }

  render() {
    const { index } = this.props;
    const {
      name,
      github,
      image,
      joined,
      countryCode,
      active
    } = this.props.contributorData;
    const { devTeams } = this.props;
    const { isExpanded } = this.state;

    return (
      <>
      <ListItem
        style={[
          styles.listItem,
          // sets every other listItem as a darker grey based on odd/even of index
          !(index % 2)
            ? { backgroundColor: '#eeeeee' }
            : { backgroundColor: '#cccccc' }]}
        avatar>
        <Left>
          <Thumbnail
            source={{ uri: image || null }}
            style={[styles.thumbnail, active
              ? { }
              : styles.inactiveAvatar, { paddingVertical: 0 }]}
          />
        </Left>
        <Body style={{ paddingVertical: 0 }}>
          <ContributorHeader name={ name } github={ github } />
            <DevTeamHeader />
            <View style={ styles.listItemBodyContent }>
              <DevTeamsList devTeams={ devTeams } />
              <ExpanderIcon isExpanded={ isExpanded } onPress={this.toggleExpanded}/>
            </View>
        </Body>
      </ListItem>
      <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
        {
          this.state.isExpanded
            ? <View style={{ flex: 1 }}><Text>{ countryCode }</Text><Text>{ joined }</Text></View>
            : null
        }
      </View>
      </>
    );
  }
}

ContributorListItem.propTypes = {
  contributorData: propTypes.object,
  name: propTypes.string,
  github: propTypes.string,
  image: propTypes.string,
  joined: propTypes.string,
  countryCode: propTypes.string,
  active: propTypes.bool,
  devTeams: propTypes.array,
  index: propTypes.number,
};
