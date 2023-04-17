import React from 'react';
import '../../css/custom.css';

export default function Project(props) {
  
  const { title, description, imageURL, siteURL } = props;

  return (

    <div class="col">
    <div class="card" style={{width: '18rem'}}>
      <img src={imageURL} class="card-img-top"  style={{width:'288px', height:'180px'}} alt={title}/>
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{description}.</p>
        <a href={siteURL} class="btn btn-primary">View Site</a>
      </div>
    </div>
  </div>
    
  );
}
