import React from "react";

const ImageComponent = React.memo(function ImageComponent(props: { index: number }) {
  return <img alt={`Animal ${props.index}`} src={`/images/nature/${props.index}img.png`} />;
});

export default ImageComponent
