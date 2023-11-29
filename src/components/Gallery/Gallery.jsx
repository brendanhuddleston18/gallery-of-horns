import React from 'react';
import HornedBeasts from '../HornedBeasts/HornedBeasts.jsx';
// import styles from './Gallery.css';


function Gallery(props) {



return (
  <>
    {
      props.beasts.map((beasts, index) =>
      <HornedBeasts 
      key={beasts._id} 
      src={beasts.image_url} 
      title={beasts.title}
      description={beasts.description}
      keyword={beasts.keyword}
      horns={beasts.horns}
      />
      )
    }
        {/* <HornedBeasts title="title" name="Rhino" src="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80" description = "This is a horned beast" />
        <HornedBeasts title ="title" name='Unicorn' src="https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg" description = "This is a horned beast" /> */}
  </>

)
}

export default Gallery;