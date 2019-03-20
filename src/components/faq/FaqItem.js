import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, TouchableWithoutFeedback
} from 'react-native';
import { View, Text, Icon } from 'native-base';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    borderBottomColor: '#c6c6c6',
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    flex: 1,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#008132',
  },
  content: {
    flex: 1,
    fontSize: 18,
    paddingTop: 10,
    paddingHorizontal: 20,
  },
});

const FaqItem = class FaqItem extends React.Component {
  state = {
    isSelected: false,
  };

  onPress = () => {
    this.setState(prevState => ({
      isSelected: !prevState.isSelected,
    }));
  };

  renderDetails = content => (
    <View>
      <Text selectable style={styles.content}>{content}</Text>
    </View>
  )

  render() {
    const { title, content } = this.props.item;
    return (
      <View style={[styles.container, { backgroundColor: this.state.isSelected ? 'rgb(204,245,220)' : '#fff' }]}>
        <TouchableWithoutFeedback onPress={this.onPress}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
            {this.state.isSelected
              ? <Icon style={{ fontSize: 18 }} name="arrow-up" />
              : <Icon style={{ fontSize: 18 }} name="arrow-down" />
            }
          </View>
        </TouchableWithoutFeedback>
        {this.state.isSelected && this.renderDetails(content)}
      </View>
    );
  }
};

export default FaqItem;

FaqItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string
  }),
};
