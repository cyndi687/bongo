import React from 'react'

const BreadCrumbs = () => {
    return (
        <section className="theme-breadcrumb pad-50">
            <div className="theme-container container ">
                <div className="row">
                    <div className="col-sm-8 pull-left">
                        <div className="title-wrap">
                            <h2 className="section-title no-margin"> Get a Quote </h2>
                            <p className="fs-16 no-margin"> Find out how much it would cost to ship your product</p>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <ol className="breadcrumb-menubar list-inline">
                            <li><a href="#" className="gray-clr">Home</a></li>
                            <li className="active">Quote</li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>


    )
}

export default BreadCrumbs