import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import GalleryList from "../GalleryList/GalleryList";

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
    axios("/gallery").then((passGallery) => {
      this.setState({
        galleryCollection: passGallery.data,
      });
      return passGallery;
    });
  }

  onLikeImage = (imageId) => {
    axios
      .put(`/gallery/like/${imageId}`)
      .then((passLike) => {
        console.log("passLike: ", passLike);
        this.fetchGallery();
      })
      .catch((failLike) => {
        console.error("Error liking the image: ", failLike);
      });
  };

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">
            Salvador Dali Artwork - Surrealism Movement
          </h1>
        </header>
        <p class="gallery-bio">
          Salvador Dali (11 May 1904 – 23 January 1989) – Avant-garde Spanish
          surrealist painter, film-maker, sculptor, and photographer. Famous
          works include “The Persistence of Memory” which hints at the illusion
          of time. Dali sought to challenge convention through his surrealist
          art.
        </p>
        <GalleryList
          collection={this.state.galleryCollection}
          likeImage={this.onLikeImage}
        />
      </div>
    );
  }
}

export default App;
