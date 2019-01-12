import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Axios from 'axios';

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

  getData = () => {
    const params = {
      api_key: '2241cf83e2969999da0f62a2d1367cda',
      language: 'id',
      page: 1,
      region: 'id',
    };

    Axios.get('https://api.themoviedb.org/3/tv/', {params: params})
      .then(res => {
        let getMovies = res.data.results.map(movie => {
          return {
            id: movie.id,
            title: movie.title,
            image: `https://image.tmdb.org/t/p/w500/${movie.poste_path}`,
            description: movie.overeview,
          };
        });

        this.setState({
          movies: getMovies,
        });
      })
      .catch(err => console.error(err));
  };

  componentDidMount() {
    this.getData();
  }
  render() {
    const title = 'welcome';
    return (
      <View>
        <Text>{title.toUpperCase()}</Text>
        <ScrollView showsHorizontalScrollIndicator={true}>
          {this.state.movies.map((movie, key) => (
            <TouchableOpacity>
              <Card
                key={movie.id}
                image={movie.image}
                title={movie.title}
                description={movie.description}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
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
    padding: 20,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'lightbluesky',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '100',
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
