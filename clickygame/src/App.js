import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Image from "./components/Image";
import Img from "./components/Img.json";
import logo from './logo.svg';

import messi from "../public/assets/images/messi.jpg"
import cr7 from "../public/assets/images/cr7.jpg"
import beckenbauer from "../public/assets/images/beckenbauer.jpg"
import cruyff from "../public/assets/images/cruyff.jpg"
import drogba from "../public/assets/images/drogba.jpg"
import henry from "../public/assets/images/henry.jpg"
import karimi from "../public/assets/images/karimi.jpg"
import maradona from "../public/assets/images/maradona.jpg"
import pele from "../public/assets/images/pele.jpg"
import ronaldinho from "../public/assets/images/ronaldinho.jpg"
import ronaldo from "../public/assets/images/ronaldo.jpg"
import zidane from "../public/assets/images/zidane.jpg"

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
