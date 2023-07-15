import React from 'react';
import { ScrollView, View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Carousel = ({ navigation }) => {
  //como se fosse um "grupo" onde vc define todas as fotos q vão ficar nesse carrossel
  const images = [
    {
      id: 1,
      imageUrl: require('./assets/comercio.jpg'),
      description: 'Comércios',
      nextPage: 'Page1',
    },
    {
      id: 2,
      imageUrl: require('./assets/placas.jpg'),
      description: 'Placas',
      nextPage: 'Page2',
    },
    {
      id: 3,
      imageUrl: require('./assets/coversacao.jpg'),
      description: 'Conversação',
      nextPage: 'Page3',
    },
    // pode adicionair mais fotos
  ];

  const images2 = [
    {
      id: 4,
      imageUrl: require('./assets/zonasdeperigo.jpg'),
      description: 'Zonas de perigo',
      nextPage: 'Page4',
    },
    {
      id: 5,
      imageUrl: require('./assets/monetario.jpg'),
      description: 'Converter monetário',
      nextPage: 'Page5',
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        {images.map((image) => (
          <TouchableOpacity
            key={image.id}
            onPress={() => {
              navigation.navigate(image.nextPage);
            }}
          >
            <View style={styles.imageContainer}>
              <Image source={image.imageUrl} style={styles.image} />
              <Text style={styles.description}>{image.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.spacing} />

      <ScrollView horizontal>
        {images2.map((image) => (
          <TouchableOpacity
            key={image.id}
            onPress={() => {
              navigation.navigate(image.nextPage);
            }}
          >
            <View style={styles.imageContainer}>
              <Image source={image.imageUrl} style={styles.image} />
              <Text style={styles.description}>{image.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  
  //distancia do inicio da tela, como se fosse uma margem
  container: {
    flex: 1,
    marginTop: 50,
  },
  //quadradinho
  imageContainer: {
    marginRight: 30,
    marginLeft: 2,
    width: 150,
    height: 140,
    borderRadius: 8,
    overflow: 'visible',
    backgroundColor: '#F7F7F7',
  },

  //foto
  image: {
    marginRight: 2,
    marginLeft: 2,
    width: 145,
    height: 75,
    borderRadius: 9,
    resizeMode: 'center',
  },
  //coisa escrita embaixo da foto
  description: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  //espaçamento entre os dois carrosséis
  spacing: {
    height: 1,
  },
});

export default Carousel;
