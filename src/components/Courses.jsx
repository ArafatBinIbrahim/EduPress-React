export default function Courses() {
  const coursesData = [
    { img: "img/Image_12.png", price: "$29.0", isFree: true },
    { img: "img/Image_2.png", price: "$49.0", oldPrice: "$59.0" },
    { img: "img/Image_3.png", price: "$29.0", isFree: true },
    { img: "img/Image_4.png", price: "$29.0", isFree: true },
    { img: "img/Image_5.png", price: "$29.0", isFree: true },
    { img: "img/Image_6.png", price: "$29.0", isFree: true },
  ];

  return (
    <>
      <section class="responsive">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-8 col-12">
              <div class="res_text">
                <h2 class="mb-0">Featured Courses</h2>
                <p>Explore our Popular Categories</p>
              </div>
            </div>
            <div class="col-lg-6 col-md-4 col-12">
              <div class="res_link">
                <a href="#" class="btn btn_cm b_link_1 float-end">All Courses</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="features cm_padding">
        <div class="container">
          <div class="row">
            {coursesData.map((course, index) => (
              <div class="col-lg-4" key={index}>
                <div class="c_single">
                  <div class="c_img">
                    <img class="w-100" src={`/${course.img}`} alt="EduPress" />
                  </div>
                  <p class="mb-0"><span>by</span>Determined-Poitras</p>
                  <h2 class="c_h2">Create an LMS Website with LearnPress</h2>

                  <div class="c_footer">
                    <div class="c_left float-start">
                      <ul class="list-inline mb-0">
                        <li class="list-inline-item cli">
                          <i class="fa-solid fa-clock fa-spin" style={{ color: "#ffa500" }}></i>
                        </li>
                        <li class="list-inline-item clt">
                          <span>2Weeks</span>
                        </li>
                      </ul>
                    </div>
                    <div class="c_right float-end">
                      <ul class="list-inline mb-0">
                        <li class="list-inline-item cli">
                          <i class="fa-solid fa-graduation-cap fa-bounce" style={{ color: "#ffa500" }}></i>
                        </li>
                        <li class="list-inline-item clt1">
                          <span>156 Students</span>
                        </li>
                      </ul>
                    </div>

                    <br />

                    <div class="c_footer">
                      <div class="c_left2 float-start">
                        <ul class="list-inline mb-0">
                          {course.isFree ? (
                            <>
                              <li class="list-inline-item cdtk">
                                <a href="#" class="btn btn_cm c_l">{course.price}</a>
                              </li>
                              <li class="list-inline-item cf">
                                <span>Free</span>
                              </li>
                            </>
                          ) : (
                            <>
                              <li class="list-inline-item cdtk">
                                <a href="#" class="btn btn_cm">{course.oldPrice}</a>
                              </li>
                              <li class="list-inline-item cls">
                                <span>{course.price}</span>
                              </li>
                            </>
                          )}
                        </ul>
                      </div>
                      <div class="c_right2 float-end">
                        <ul class="list-inline mb-0">
                          <li class="list-inline-item cdl">
                            <a href="#" class="btn btn_cm c_l">View More</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}