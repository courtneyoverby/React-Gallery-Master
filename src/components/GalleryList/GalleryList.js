import React, { Component } from "react";
import GalleryItem from "../GalleryItems/GalleryItems";
import "./GalleryList.css";

class GalleryList extends Component {
  render() {
    const { collection } = this.props;
    const uiCollection = collection.map((imageData, idx) => {
      const { desc, id, likes, path } = imageData;
      return (
        <li key={idx}>
          <GalleryItem
            desc={desc}
            id={id}
            keyVal={idx}
            likes={likes}
            path={path}
            likeImage={this.props.likeImage}
          />
        </li>
      );
    });

    return (
      <div>
        <p>Total photos: {collection.length}</p>
        <ul className="galleryList">{uiCollection}</ul>
      </div>
    );
  }
}

export default GalleryList;
