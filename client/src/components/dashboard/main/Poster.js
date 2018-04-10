import React from 'react';

export default (props) => {
  let imgUrl = props.imgUrl;
  if(!props.imgUrl || props.imgUrl=="N/A") {
    imgUrl = "https://squawkr.io/img/noposter.jpg";
  }
  return (
    <div id="poster-div">
      <div role="top"/>
      <img
        src={imgUrl}
      />
      <div role="bottom"/>
    </div>
  );
}
