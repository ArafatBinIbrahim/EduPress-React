import React, { useEffect } from 'react';

export default function Counter() {
    useEffect(() => {
        const counters = document.querySelectorAll(".counter_value");
        counters.forEach(counter => {
            const target = +counter.getAttribute("data-count");
            let count = 0;
            const speed = target / 100;
            const updateCount = () => {
                count += speed;
                if (count < target) {
                    counter.innerText = Math.ceil(count) + (counter.innerText.includes('%') ? '%' : '');
                    setTimeout(updateCount, 25);
                } else {
                    counter.innerText = target + (counter.innerText.includes('%') ? '%' : '');
                }
            };
            updateCount();
        });
    }, []);

    return (
        <section className="counter_section py-5">
            <div className="container">
                <div className="row text-center">
                    <div className="col-lg-3 col-6 mb-3">
                        <div className="c_single p-4 shadow-sm bg-white rounded border-0">
                            <h2 className="counter_value text-warning fw-bold fs-2" data-count="25000">0</h2>
                            <p className="sc_p mb-0 text-muted">Active Students</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6 mb-3">
                        <div className="c_single p-4 shadow-sm bg-white rounded border-0">
                            <h2 className="counter_value text-warning fw-bold fs-2" data-count="899">0</h2>
                            <p className="sc_p mb-0 text-muted">Total Courses</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6 mb-3">
                        <div className="c_single p-4 shadow-sm bg-white rounded border-0">
                            <h2 className="counter_value text-warning fw-bold fs-2" data-count="158">0</h2>
                            <p className="sc_p mb-0 text-muted">Instructor</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6 mb-3">
                        <div className="c_single p-4 shadow-sm bg-white rounded border-0">
                            <h2 className="counter_value text-warning fw-bold fs-2" data-count="100">100%</h2>
                            <p className="sc_p mb-0 text-muted">satisfaction Rate</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}