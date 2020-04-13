import React, { Component } from "react";
import "./App.css";
import axios from "axios";
// import GalleryList from "../GalleryList/GalleryList";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      galleryCollection: [],
      successfulLikes: 0,
    };
  }

  componentDidMount() {
    this.getGallery();
  }

  getGallery() {
    axios("/gallery").then((sendGallery) => {
      this.setState({
        galleryCollection: sendGallery.data,
      });
      return sendGallery;
    });
  }


  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">
            Salvador Dali Artwork - Surrealism Movement
          </h1>
        </header>
        <p className="gallery-bio">
          Salvador Dali (11 May 1904 – 23 January 1989) – Avant-garde Spanish
          surrealist painter, film-maker, sculptor, and photographer. Famous
          works include “The Persistence of Memory” which hints at the illusion
          of time. Dali sought to challenge convention through his surrealist
          art.
        </p>
      
      </div>
    );
  }
}

export default App;
