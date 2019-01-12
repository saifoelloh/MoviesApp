import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';

export default class App extends React.Component {
  state = {
    movies: [
      {
        title: 'Hello - 01',
        image: 'https://facebook.github.io/react/logo-og.png',
        description: 'lorem ipsum dor amet',
      },
      {
        title: 'Hello - 02',
        image:
          'https://cdn-images-1.medium.com/max/1026/1*3SVfBkNZI2f-sspiq59xcw.png',
        description: 'lorem ipsum dor amet',
      },
      {
        title: 'Hello - 03',
        image:
          'https://cdn-images-1.medium.com/max/1600/1*HP8l7LMMt7Sh5UoO1T-yLQ.png',
        description: 'lorem ipsum dor amet',
      },
    ],
  };
  render() {
    const msg = 'Hallo';
    return (
      <View>
        <Text>Open up App.js {msg}</Text>
        {this.state.movies.map((movie, key) => (
          <Card
            key={key}
            image={movie.image}
            title={movie.title}
            description={movie.description}
          />
        ))}
        <Card />
        <Card />
      </View>
    );
  }
}

class Card extends React.Component {
  render() {
    return (
      <View style={cardContainer}>
        <Image style={cardImage} source={{uri: this.props.image}} />
        <View style={cardInfo}>
          <Text style={cardTitle}>{this.props.title}</Text>
          <Text>{this.props.description}</Text>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    padding: 50,
    flex: 1,
    flexDirection: 'row',
  },
  cardContainer: {
    marginVertical: 8,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
  },
  cardImage: {
    flex: 2,
  },
  cardInfo: {
    flex: 3,
    padding: 5,
  },
  cardTitle: {
    textAlign: 'center',
    marginVertical: 5,
  },
});
