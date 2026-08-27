export default function Footer() {
  return (
    <>
      <section className="footer_top">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-sm-12">
              <div className="ft_details">
                <img className="img-fluid" src="/img/logo.png" alt="EduPress" />
                <p className="mb-0 wppt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
            <div className="col-lg col-sm-4">
              <div className="ft_links">
                <h5>GET HELP</h5>
                <ul className="list-unstyled mb-0">
                  <li><a href="#">Contact Us</a></li>
                  <li><a href="#">Latest Articles</a></li>
                  <li><a href="#">FAQ</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg col-sm-4">
              <div className="ft_links">
                <h5>PROGRAMS</h5>
                <ul className="list-unstyled mb-0">
                  <li><a href="#">Art & Design</a></li>
                  <li><a href="#">Business</a></li>
                  <li><a href="#">IT & Software</a></li>
                  <li><a href="#">Languages</a></li>
                  <li><a href="#">Programming</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg col-sm-4">
              <div className="ft_links">
                <h5>CONTACT US</h5>
                <ul className="list-unstyled mb-0">
                  <li><a href="#">Address: 2321 New Design Str, Lorem Ipsum10 Hudson Yards, USA</a></li>
                  <li><a href="#">Tel: + (123) 2500-567-8988</a></li>
                  <li><a href="#">Mail: supportlms@gmail.com</a></li>
                  <li><img src="/img/Social.png" alt="EduPress" /></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer_top1">
        <p className="mb-0 text-center">Copyright © 2024 <a href="#">KaziArafatBinIbrahim</a></p>
      </footer>
    </>
  );
}