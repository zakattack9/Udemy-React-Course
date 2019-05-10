import React from 'react';

class ImageCard extends React.Component {
  constructor (props) {
    super(props);
    this.state = { spans: 0 };

    // allows us to access the DOM properties of a rendered JSX element (references DOM node of JSX element)
    this.imageRef = React.createRef();
  }

  componentDidMount () {
    // passing function "setSpans" as a reference so that it is not invoked everytime when rendered
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    
    // ES2015 allows us to simplify { spans: spans } to just { spans }
    this.setState({ spans })
  }

  render () {
    const { description, urls } = this.props.image;

    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }} >
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard; 