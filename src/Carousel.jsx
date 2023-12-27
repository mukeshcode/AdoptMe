import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0
  }

  static defaultProps = {
    images: ["http:pets-images/dev-apis.com/pets/none.jpg"]
  }

  handleClick = (e) => {
    this.setState({
      active: +e.target.dataset.index
    })
  }

  render() {
    const { active } = this.state;
    const { images } = this.props;

    return (
      <div className="carousel">
        <img src={images[active]} alt="animal hero" />
        <div className="carousel-smaller">
          {images.map((img, index) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
            <img
              data-index={index}
              onClick={this.handleClick}
              key={img}
              src={img}
              alt="Thumbnail"
              className={index === active ? "active" : ""}

            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;