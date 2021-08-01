import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Title from "./src/components/Title";
import Button from "./src/components/Button";
import generateRandomNumber from "./src/utils/generateRandomNumber";
import Number from "./src/components/Number";
import Subtitle from "./src/components/Subtitle";

export default function App() {
  const [diceImage, setDiceImage] = useState(require("./src/images/dice1.png"));
  const [userGuess, setUserGuess] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [winner, setWinner] = useState(null);

  const handleOnPress = (number) => {
    setUserGuess(number);
    setSelectedNumber(number);
    setWinner(null);
  };

  const handleOnSubmit = () => {
    const number = generateRandomNumber();

    switch (number) {
      case 1:
        setDiceImage(require("./src/images/dice1.png"));
        setWinner(checkWinner(number, userGuess));
        break;
      case 2:
        setDiceImage(require("./src/images/dice2.png"));
        setWinner(checkWinner(number, userGuess));
        break;
      case 3:
        setDiceImage(require("./src/images/dice3.png"));
        setWinner(checkWinner(number, userGuess));
        break;
      case 4:
        setDiceImage(require("./src/images/dice4.png"));
        setWinner(checkWinner(number, userGuess));
        break;
      case 5:
        setDiceImage(require("./src/images/dice5.png"));
        setWinner(checkWinner(number, userGuess));
        break;
      case 6:
        setDiceImage(require("./src/images/dice6.png"));
        setWinner(checkWinner(number, userGuess));
        break;
      default:
        setDiceImage(require("./src/images/dice1.png"));
        setWinner(checkWinner(number, userGuess));
        break;
    }
    setSelectedNumber(null);
  };

  const checkWinner = (randomNumber, guessNumber) => {
    return randomNumber === guessNumber ? true : false;
  };

  const renderNumberView = () => {
    const diceNumbers = [1, 2, 3, 4, 5, 6];
    return diceNumbers.map((i) => {
      return (
        <Number
          key={i}
          handleOnPress={() => handleOnPress(i)}
          number={i}
          selected={selectedNumber == i ? true : false}
        />
      );
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Title title="Dice Roller Game" />
        {winner ? (
          <Title
            style={{ backgroundColor: "green" }}
            title={"Hurry, You Won 🥳"}
          />
        ) : winner === false ? (
          <Title
            style={{ backgroundColor: "red" }}
            title={"Better Luck Next Time"}
          />
        ) : (
          <Title title={" "} />
        )}
      </View>
      <View style={styles.diceContainer}>
        {!selectedNumber ? (
          <Image style={styles.diceImage} source={diceImage} />
        ) : (
          <Title title={"Select your number"} />
        )}
      </View>
      <View style={styles.numberContainer}>{renderNumberView()}</View>
      <View style={styles.buttonContainer}>
        <Subtitle
          title={
            selectedNumber
              ? `You have selected ${userGuess}`
              : "Select any number to start a game"
          }
        />
        <Button
          disabled={!selectedNumber ? true : false}
          handleOnSubmit={handleOnSubmit}
          title="Roll Dice"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  diceImage: {
    width: 125,
    height: 125,
  },
  titleContainer: {
    marginTop: 50,
    flex: 1,
    justifyContent: "center",
  },
  diceContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  numberContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
