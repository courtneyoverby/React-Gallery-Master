import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import GalleryList from "../GalleryList/GalleryList.js";

// Calling super, so we can pass the props parameter to the parent element (constructor).

class App extends Component {
  constructor(props) {
    super(props);

    // this.state represents rendered values, inside is our empty array.

    this.state = {
      galleryCollection: [],
      successfulLikes: 0,
    };
  }

  componentDidMount() {
    // Method runs after the component output has been rendered to the DOM.
    this.getGallery();
  }

  // Axios sends asynchronous HTTP requests to REST endpoints and performs operations.
  // getGallery is getting the gallery from the server.

  getGallery() {
    axios("/gallery").then((sendGallery) => {
      this.setState({
        galleryCollection: sendGallery.date,
      });
      return sendGallery;
    });
  }

  likeImage = (imageID) => {
    axios
      .put(`/gallery/like/${imageID}`)
      .then((passLike) => {
        console.log(passLike);
        this.getGallery();
      })
      .catch((failLike) => {
        console.error("Error liking the image: ", failLike);
      });
  };

  // Render is taking our react components and transforming them into DOM nodes.

  render() {
    return (
      <div className="app">
        <header className="appHeader">
          <h1 className="appTitle">
            Salvador Dali Artwork - Surrealism Movement
          </h1>
        </header>
        <p className="galleryBio">
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

// Export default is used when creating modules to export functions.

export default App;
