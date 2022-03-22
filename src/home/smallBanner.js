import React from 'react'

const SmallBanner = () => {
    return (
        <section className="steps-wrap mask-overlay pad-80">
            <div className="theme-container container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <div className="font-2 fs-50 wow fadeInLeft" data-wow-offset={50} data-wow-delay=".20s"> 1. </div>
                        <div className="steps-content wow fadeInLeft" data-wow-offset={50} data-wow-delay=".25s">
                            <h2 className="title-3">Order</h2>
                            <p className="gray-clr">Place an order <br /> on our website</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="font-2 fs-50 wow fadeInLeft" data-wow-offset={50} data-wow-delay=".20s"> 2. </div>
                        <div className="steps-content wow fadeInLeft" data-wow-offset={50} data-wow-delay=".25s">
                            <h2 className="title-3">Wait</h2>
                            <p className="gray-clr">Track your package<br />  using your package ID </p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="font-2 fs-50 wow fadeInLeft" data-wow-offset={50} data-wow-delay=".20s"> 3. </div>
                        <div className="steps-content wow fadeInLeft" data-wow-offset={50} data-wow-delay=".25s">
                            <h2 className="title-3">Deliver</h2>
                            <p className="gray-clr">We get the package where  <br /> you want it at no time </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="step-img wow slideInRight" data-wow-offset={50} data-wow-delay=".20s"> <img src="assets/img/block/step-img.png" alt="" /> </div>
        </section>
    )
}

export default SmallBanner