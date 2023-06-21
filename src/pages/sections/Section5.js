import React, { useState } from 'react';
import '../HomePage.css';

function Section5() {
  const [selectedValue, setSelectedValue] = useState('content1');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div className='section5'>
      <h1>What Clients say</h1>
      <div className = "section5-radiobuttons">
        <input
          type="radio"
          id="radio1"
          name="content"
          value="content1"
          checked={selectedValue === 'content1'}
          onChange={handleChange}
        />
        <label htmlFor="radio1">Telco</label>

        <input
          type="radio"
          id="radio2"
          name="content"
          value="content2"
          checked={selectedValue === 'content2'}
          onChange={handleChange}
        />
        <label htmlFor="radio2">Insurance</label>

        <input
          type="radio"
          id="radio3"
          name="content"
          value="content3"
          checked={selectedValue === 'content3'}
          onChange={handleChange}
        />
        <label htmlFor="radio3">Fintech</label>

        <input
          type="radio"
          id="radio4"
          name="content"
          value="content4"
          checked={selectedValue === 'content4'}
          onChange={handleChange}
        />
        <label htmlFor="radio4">IT</label>
      </div>
      
      {selectedValue === 'content1' && 
      <div className="content">
        <div>Through this initiative, GrowthOps have shown to have the right capabilities to take our platform to the next level. 
                  We believe the refreshed U.COM.MY will equip us with more insights, enabling us to make more data-led decisions 
                  that will result in new digital experiences that will truly benefit our customers.
        </div>

        <div className="content">
            Jasmine Lee
        </div>

        <div className="content">
            [Position], [Company Name]
        </div> 
      </div>}
      {selectedValue === 'content2' && <div className="content">This is Content 2.</div>}
      {selectedValue === 'content3' && <div className="content">This is Content 3.</div>}
      {selectedValue === 'content4' && <div className="content">This is Content 4.</div>}
    </div>
  );
};

export default Section5;
