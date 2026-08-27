export default function LoginPage() {
  return (
    <div className="login-page-wrapper">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          
          {/* বাম পাশের টেক্সট ও গ্রাফিক্স বক্স */}
          <div className="col-lg-6 col-md-8 mb-4 mb-lg-0 text-center text-lg-start p-4">
            <div className="p-4">
              <span className="badge bg-danger px-3 py-2 mb-3 fs-6 rounded-pill">Online Care Portal</span>
              <h1 className="fw-bold display-5 text-dark mb-3">Edupress Online Coaching</h1>
              <p className="text-secondary fs-6 mb-4">
                Enter your registration number to access your student portal, live classes, exams, and study materials seamlessly.
              </p>
              <div className="d-flex gap-3 justify-content-center justify-content-lg-start">
                <div className="bg-white p-3 rounded shadow-sm text-center px-4">
                  <h3 className="fw-bold text-warning mb-0">25K+</h3>
                  <small className="text-muted">Students</small>
                </div>
                <div className="bg-white p-3 rounded shadow-sm text-center px-4">
                  <h3 className="fw-bold text-danger mb-0">100%</h3>
                  <small className="text-muted">Online Support</small>
                </div>
              </div>
            </div>
          </div>

          {/* ডান পাশের লগইন ফর্ম কার্ড */}
          <div className="col-lg-5 col-md-8">
            <div className="card p-5 border-0 shadow-lg login-card-box">
              <h2 className="text-center fw-bold mb-4 login-title">STUDENT LOGIN</h2>
              
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="mb-3">
                  <input 
                    type="text" 
                    className="form-control p-3 border-warning login-input" 
                    placeholder="Enter Your Registration Number" 
                  />
                </div>
                
                <div className="mb-4 text-start">
                  <a href="#forgot" className="text-decoration-none text-primary small">Forgot Registration Number?</a>
                </div>

                <div className="d-grid mb-4">
                  <button 
                    type="submit" 
                    className="btn text-white fw-bold py-3 login-btn">
                    Next
                  </button>
                </div>

                <div className="text-center">
                  <p className="text-muted small mb-0">Don't have a Registration Number?</p>
                  <a href="#register" className="text-decoration-none fw-bold text-primary">Register Now.</a>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}