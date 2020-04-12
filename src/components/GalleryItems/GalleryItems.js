import React, { Component } from "react";
import "./GalleryItem.css";

class GalleryItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDesc: false,
    };
  }

  onClickLike = (event) => {
    event.stopPropagation();
    this.props.likeImage(this.props.id);
    console.log("Clicked");
  };

  onClick = (event) => {
    const newShowDescState = this.state.showDesc ? false : true;
    this.setState({ showDesc: newShowDescState });
  };

  render() {
    const { id, desc, likes, path } = this.props;
    const likeMessage =
      likes > 0 ? `${likes} people love this!` : "No people love this...";
    let imgBlock = (
      <div className="galleryImage-img">
        <img src={path} alt={desc} />
      </div>
    );

    if (this.state.showDesc) {
      imgBlock = (
        <div className="galleryImage-img galleryImage-img_asDesc">
          <div className="galleryImage-img-desc">
            <p>{desc}</p>
          </div>
        </div>
      );
    }

    return (
      <div className="galleryImage" id={id} onClick={this.onClick}>
        {imgBlock}
        <button className="galleryImage-btn" onClick={this.onClickLike}>
          love it!
        </button>
        <p className="galleryImage-msg">{likeMessage}</p>
      </div>
    );
  }
}

export default GalleryItem;
