import React from 'react';

const AboutUs = () => {
  return (
    <div className="about-us text-start mt-4">
      <div className="container">
        <section className="mb-4">
          <h2>Our mission</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
          </p>
        </section>
        <section className="mb-4">
          <h2>Our history</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
          </p>
        </section>
        <section>
          <h2>Our team</h2>
          <div className="row g-4 cats-container" id="cats-container">
            <div className="col-md-4">
              <div className="cat-card">
                <img src="path/to/image1.jpg" alt="Bob Doe" className="img-fluid mb-2" style={{ borderRadius: '8px', height: '200px', objectFit: 'cover' }} />
                <div className="cat-info">
                  <h3 className="h5 mb-1">Bob Doe</h3>
                  <p className="mb-0">Director</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="cat-card">
                <img src="path/to/image2.jpg" alt="Rob Doe" className="img-fluid mb-2" style={{ borderRadius: '8px', height: '200px', objectFit: 'cover' }} />
                <div className="cat-info">
                  <h3 className="h5 mb-1">Rob Doe</h3>
                  <p className="mb-0">Director</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="cat-card">
                <img src="path/to/image3.jpg" alt="Dob Doe" className="img-fluid mb-2" style={{ borderRadius: '8px', height: '200px', objectFit: 'cover' }} />
                <div className="cat-info">
                  <h3 className="h5 mb-1">Dob Doe</h3>
                  <p className="mb-0">Director</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
