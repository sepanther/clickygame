import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Image from "./components/Image";
import Img from "./components/Img.json";
import logo from './logo.svg';

import messi from "./images/messi.jpg"
import cr7 from "./images/cr7.jpg"
import beckenbauer from "./images/beckenbauer.jpg"
import cruyff from "./images/cruyff.jpg"
import drogba from "./images/drogba.jpg"
import henry from "./images/henry.jpg"
import karimi from "./images/karimi.jpg"
import maradona from "./images/maradona.jpg"
import pele from "./images/pele.jpg"
import ronaldinho from "./images/ronaldinho.jpg"
import ronaldo from "./images/ronaldo.jpg"
import zidane from "./images/zidane.jpg"

import './App.css';

class App extends Component {
  
  state = {
    picked: [],
    correct: 0,
    topscore: 0,
    message: 'Click an image to begin'
  };

  shuffleArray = () => {
    let imgArray = Img;
    for (let i = imgArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [imgArray[i], imgArray[j]] = [imgArray[j], imgArray[i]];
    }
    return imgArray
  }

  pickImg = (name) => {
    console.log("Clicked!");
    let picked = this.state.picked;
    
    if (picked.indexOf(name) === -1) {
      this.setState({
        picked: picked.concat(name),
        correct: this.state.correct + 1,
        topscore: this.state.correct + 1 > this.state.topscore ? this.state.correct + 1 : this.state.topscore,
        message: "Correct!" 
      })
      this.shuffleArray();
    }
    else {
      this.setState({
        message: "Already Selected - Game Over!",
        correct: 0,
        picked: []
      })
    }
  }
  
  imgSwitch = (name) => {
    switch (name) {
      case "messi":
        return `${messi}`
      case "beckenbauer":
        return `${beckenbauer}`
      case "cr7":
        return `${cr7}`
      case "cruyff":
        return `${cruyff}`
      case "drogba":
        return `${drogba}`
      case "henry":
        return `${henry}`
      case "karimi":
        return `${karimi}`
      case "maradona":
        return `${maradona}`
      case "pele":
        return `${pele}`
      case "ronaldinho":
        return `${ronaldinho}`
      case "ronaldo":
        return `${ronaldo}`
      case "zidane":
        return `${zidane}`
      default:
        return `${messi}`
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar correct={this.state.correct} topscore={this.state.topscore} message={this.state.message}/>
        <Header />
        <Main>
          {this.shuffleArray(Img).map(image => (
            <Image src={this.imgSwitch(image.name)} name={image.name} key={image.name} pickImg={this.pickImg}  />
          ))}
        </Main>
        <Footer />

      </div>
    );
  }

}

export default App;
