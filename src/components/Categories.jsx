/* 
export default function Categories() {
  const categoriesList = [  
     { title: "", count: "", icon: "" }, j koita lagbe oita nicher moto kore add korbo
  ];
  return (
  );
}
 */

export default function Categories() {
  const categoriesList = [
    { title: "Art & Design", count: "38 Courses", icon: "fa-solid fa-palette fa-spin fa-spin-reverse" },
    { title: "Development", count: "38 Courses", icon: "fa-sharp fa-solid fa-code fa-flip" },
    { title: "Communication", count: "38 Courses", icon: "fa-brands fa-nfc-symbol fa-spin" },
    { title: "Videography", count: "38 Courses", icon: "fa-solid fa-film fa-spin-pulse" },
    { title: "Photography", count: "38 Courses", icon: "fa-solid fa-camera-retro fa-beat" },
    { title: "Marketing", count: "38 Courses", icon: "fa-solid fa-chart-simple fa-beat" },
    { title: "Content Writing", count: "38 Courses", icon: "fa-regular fa-newspaper fa-flip" },
    { title: "Finance", count: "38 Courses", icon: "fa-solid fa-coins fa-bounce" },
    { title: "Science", count: "38 Courses", icon: "fa-solid fa-flask-vial fa-shake" },
    { title: "Network", count: "38 Courses", icon: "fa-solid fa-globe fa-spin-pulse" },
    { title: "Business", count: "38 Courses", icon: "fa-solid fa-business-time fa-beat" },
    { title: "Accounting", count: "38 Courses", icon: "fa-solid fa-receipt fa-beat" },
  ];

  return (
    <>
      <section className="responsive">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-8 col-12">
              <div className="res_text">
                <h2 className="mb-0">Top Categories</h2>
                <p>Explore our Popular Categories</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-4 col-12">
              <div className="res_link">
                <a href="#" className="btn btn_cm b_link_1 float-end">All Courses</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ei nicher part er description ekdom niche dewa holo*/}
      <section className="catagories cm_padding"> 
        <div className="container">
          <div className="row">
            {categoriesList.map((cat, index) => (
              <div className="col-lg-2 col-sm-6" key={index}>
                <div className="sc_catagories text-center">
                  <div className="sc_img mx-auto">
                    <i className={cat.icon} style={{ color: "#ffa500" }}></i>
                  </div>
                  <h2 className="sc_h2">{cat.title}</h2>
                  <p className="sc_p mb-0">{cat.count}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}


{/* আপনার categoriesList array-তে ১২টা category আছে (Art & Design, Development, ...)। এই ১২টা card-এর HTML যদি হাতে-হাতে ১২ বার লিখতেন, তাহলে কোড অনেক বড় আর repetitive হয়ে যেত। তাই:

1).map() ব্যবহার করে array-এর প্রতিটা item থেকে একটা করে JSX card বানানো হচ্ছে — এক জায়গায় লিখে ১২টা card অটো জেনারেট হচ্ছে।

2) key={index} — React-কে বলে দেওয়া হচ্ছে প্রতিটা card কে আলাদাভাবে চিনতে (list render করলে React এটা must চায়, নাহলে warning দেয়)।

3) col-lg-2 col-sm-6 — Bootstrap-এর grid class, বড় স্ক্রিনে ৬টা card এক row-তে (12/2=6), ছোট স্ক্রিনে ২টা card এক row-তে (12/6=2) বসবে।

4) এতে করে ভবিষ্যতে নতুন category যোগ করতে চাইলে শুধু categoriesList array-তে একটা object যোগ করলেই হবে, JSX ছুঁতে হবে না।

summary: এক জায়গায় ডেটা (array), এক জায়গায় ডিজাইন (JSX) — repeat না করে loop দিয়ে render করা, এটাই React-এর মূল দর্শন। */}