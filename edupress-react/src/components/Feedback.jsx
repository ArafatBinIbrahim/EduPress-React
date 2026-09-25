import React from 'react';

export default function Feedback() {
  return (
    <section className="feedbacks cm_padding py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col-lg-12">
            <h2 className="fw-bold mb-2">Student Feedback</h2>
            <p className="text-muted">What our students say about us</p>
          </div>
        </div>
        
        <div className="row g-4 justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="c_single p-4 shadow-sm bg-white rounded h-100 border-0 position-relative">
              <i className="fa-solid fa-quote-left mb-3" style={{ color: '#ffa500', fontSize: '28px' }}></i>
              <p className="text-muted mb-4" style={{ fontSize: '14.5px', lineHeight: '1.6' }}>
                I must explain to you how all this mistaken . Tidea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound
              </p>
              <div className="border-top pt-3 mt-auto">
                <h3 className="sc_h2 mb-0 fs-6 fw-bold text-dark">Roe Smith</h3>
                <p className="sc_p mb-0 text-muted small">Designer</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="c_single p-4 shadow-sm bg-white rounded h-100 border-0 position-relative">
              <i className="fa-solid fa-quote-left mb-3" style={{ color: '#ffa500', fontSize: '28px' }}></i>
              <p className="text-muted mb-4" style={{ fontSize: '14.5px', lineHeight: '1.6' }}>
                I must explain to you how all this mistaken . Tidea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound
              </p>
              <div className="border-top pt-3 mt-auto">
                <h3 className="sc_h2 mb-0 fs-6 fw-bold text-dark">Roe Smith</h3>
                <p className="sc_p mb-0 text-muted small">Designer</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="c_single p-4 shadow-sm bg-white rounded h-100 border-0 position-relative">
              <i className="fa-solid fa-quote-left mb-3" style={{ color: '#ffa500', fontSize: '28px' }}></i>
              <p className="text-muted mb-4" style={{ fontSize: '14.5px', lineHeight: '1.6' }}>
                I must explain to you how all this mistaken . Tidea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound
              </p>
              <div className="border-top pt-3 mt-auto">
                <h3 className="sc_h2 mb-0 fs-6 fw-bold text-dark">Roe Smith</h3>
                <p className="sc_p mb-0 text-muted small">Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}