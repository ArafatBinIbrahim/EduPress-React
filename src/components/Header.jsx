/*main index.html theke just header part ta nilam and nicher part ta lekhe call korbo*/

/* 
export default function Banner() {
  return (
  );
}

আপনার Header.jsx ফাইলে বুটস্ট্রাপের সাধারণ <a> ট্যাগগুলোর পরিবর্তে রিঅ্যাক্ট রাউটারের <Link> ব্যবহার করতে হবে। তা না হলে মাল্টি-পেজে যাওয়ার সময় পেজ রিলোড হয়ে যাবে।

*/ 
 
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <img className="img-fluid logo" src="/img/logo.png" alt="EduPress" />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse menu" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/courses">Courses</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/blog">Blog</Link>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Pages
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                  </ul>
                </li>
              </ul>
              <a href="/login" className="btn btn_cm btn_search">
                Login/Register<i className="fa-solid fa-magnifying-glass gl"></i>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}