/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

import Header from './components/Header'
import GameBoard from './components/GameBoard'

type Props = {};
export default class App extends Component<Props> {
  state: {
      gameStarted: boolean
    };

    constructor() {
      super()
      this.state={ gameStarted: false }
    }

    startGame() {
      this.setState({ gameStarted: true })
    }

    render() {
      const { gameStarted } = this.state
      return (
        <View style={styles.container}>
          <Header />
          {
            gameStarted ? (
              <GameBoard />
            ) : (
              <View>
                <TouchableOpacity onPress={() => this.startGame()}>
                  <Text style={styles.instructions}>
                    Play
                  </Text>
                </TouchableOpacity>
              </View>
            )
          }
        </View>
      )
    }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    marginTop: 50,
  },
  instructions: {
    textAlign: 'center',
    marginTop: 40,
    color: 'grey',
    marginBottom: 5,
  },
})
