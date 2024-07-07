import React from 'react';
import './CollectionSection.css';
 // Import the CSS file for styling
 import m from '../../assets/m.png'
 import line from '../../assets/line.png'

const CollectionSection: React.FC = () => {
  return (
    <div className="collection-section container">
      <div className="image-section">
        <img src={m} alt="Collection 2018" />
      </div>
      <div className="text-section">
        <h2>КОЛЛЕКЦИЯ 2018</h2>
        <img src={line}  style={{marginBottom:'30px'}} alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam rutrum ornare ut
          mauris habitant id ac, sagittis erat. Nec nisl magna etiam nisl ac urna. Vivamus
          vestibulum id et venenatis sed sollicitudin magna cras consectetur. Amet
          convallis quis gravida facilisis vulputate. Faucibus habitasse posuere
          interdum dictum dignissim. Sit quis velit rutrum pretium volutpat malesuada
          integer. Aenean praesent viverra nulla nullam rutrum vehicula congue auctor
          auctor. Vivamus viverra ullamcorper sodales fringilla dignissim egestas. Id
          aliquam at aliquam egestas sed orci pharetra sed arcu.
        </p>
        <button onClick={() => window.alert('Посмотреть коллекцию')}>
          ПОСМОТРЕТЬ КОЛЛЕКЦИЮ
        </button>
      </div>
    </div>
  );
};

export default CollectionSection;
