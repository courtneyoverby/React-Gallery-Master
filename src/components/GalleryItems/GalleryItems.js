import react, { Component } from "react";
import "./GalleryItem.css";

class GalleryItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showDesc: false;
        };
    }

    onClickLike = (event) => {
        // stopPropagation prevents parent event handlers from being started.
        event.stopPropagation();
        this.props.likeImage(this.props.ID);
        console.log("Clicked");
    };

    onClick = (event) => (event) => {
        const newShowDescState =
        this.state.showDesc ? false : true;
            this.setState({ showDesc:
        newShowDescState });
    };

    render() {
        // Retrieving values form an object.
        const { id, desc, likes, path } = this.props;
        const likeMessage =
        like > 0 ? `${likes} people love this!` : "No people love this, yet.";
        let imageBlock = (
            <div className="galleryImage">
                <img src={path} alt={desc} />
            </div>
        );

        if (this.state.showDesc) {
            imageBlock = (
                <div className="galleryImage galleryImage_asDesc">
                    <div className="galleryImage_Desc">
                        <p>{desc}</p>
                    </div>
                </div>
            );
        }

        return (
            <div className="galleryImage" id={id}
            onClick={this.onClick}>
                {imageBlock}
                <button className="galleryImageBtn"
            onClick={this.onClickLike}>
                Love this!
                </button>
                <p className="galleryImageMsg">
                {likeMessage}
                </p>
            </div>
        );
    }
}
