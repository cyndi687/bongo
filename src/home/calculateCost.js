import React, { Component } from "react";
import { connect } from "react-redux";
import { getFormDetails, calculatePackageCost } from "../redux/actions";
import Loader from "../reuseables/formLoader";
import { numberWithCommas } from "../helper";

class CalculateCost extends Component {
  render() {
    const {
      calculatingCost,
      calcheight,
      calcwidth,
      calcdepth,
      calcweight,
      calculatedPrice,
      calculatecosterr,
    } = this.props;
    return (
      <section className="calculate pt-100">
        <div className="theme-container container">
          <span
            className="bg-text right wow fadeInUp"
            data-wow-offset={50}
            data-wow-delay=".20s"
          >
            {" "}
            calculate{" "}
          </span>
          <div className="row">
            <div className="col-md-6 text-center">
              <img
                src="assets/img/block/Courier-Man.png"
                alt=""
                className="wow slideInLeft"
                data-wow-offset={50}
                data-wow-delay=".20s"
              />
            </div>
            <div className="col-md-6">
              <div className="pad-10" />
              <h2
                className="section-title pb-10 wow fadeInUp"
                data-wow-offset={50}
                data-wow-delay=".20s"
              >
                {" "}
                calculate your cost{" "}
              </h2>
              <p
                className="fs-16 wow fadeInUp"
                data-wow-offset={50}
                data-wow-delay=".25s"
              >
               Get an estimate of the cost of shipping in a second!
              </p>
              <div className="calculate-form">
                <form className="row">
                  <div
                    className="form-group wow fadeInUp"
                    data-wow-offset={50}
                    data-wow-delay=".20s"
                  >
                    <div className="col-sm-3">
                      {" "}
                      <label className="title-2"> height (cm): </label>
                    </div>
                    <div className="col-sm-9">
                      {" "}
                      <input
                        data-bind="in:value, f: float"
                        data-name="height"
                        type="text"
                        placeholder
                        className="form-control"
                        value={calcheight}
                        onChange={(e) =>
                          this.props.getFormDetails({
                            props: ["calcheight"],
                            value: e.target.value,
                          })
                        }
                      />{" "}
                    </div>
                  </div>
                  <div
                    className="form-group wow fadeInUp"
                    data-wow-offset={50}
                    data-wow-delay=".20s"
                  >
                    <div className="col-sm-3">
                      {" "}
                      <label className="title-2"> width (cm): </label>
                    </div>
                    <div className="col-sm-9">
                      {" "}
                      <input
                        data-bind="in:value, f: float"
                        data-name="width"
                        type="text"
                        placeholder
                        className="form-control"
                        value={calcwidth}
                        onChange={(e) =>
                          this.props.getFormDetails({
                            props: ["calcwidth"],
                            value: e.target.value,
                          })
                        }
                      />{" "}
                    </div>
                  </div>
                  <div
                    className="form-group wow fadeInUp"
                    data-wow-offset={50}
                    data-wow-delay=".20s"
                  >
                    <div className="col-sm-3">
                      {" "}
                      <label className="title-2"> depth (cm): </label>
                    </div>
                    <div className="col-sm-9">
                      {" "}
                      <input
                        data-bind="in:value, f: float"
                        data-name="depth"
                        type="text"
                        placeholder
                        className="form-control"
                        value={calcdepth}
                        onChange={(e) =>
                          this.props.getFormDetails({
                            props: ["calcdepth"],
                            value: e.target.value,
                          })
                        }
                      />{" "}
                    </div>
                  </div>
                  <div
                    className="form-group wow fadeInUp"
                    data-wow-offset={50}
                    data-wow-delay=".20s"
                  >
                    <div className="col-sm-3">
                      {" "}
                      <label className="title-2"> weight (kg): </label>
                    </div>
                    <div className="col-sm-9">
                      {" "}
                      <input
                        data-bind="in:value, f: float"
                        data-name="weight"
                        type="text"
                        placeholder
                        className="form-control"
                        value={calcweight}
                        onChange={(e) =>
                          this.props.getFormDetails({
                            props: ["calcweight"],
                            value: e.target.value,
                          })
                        }
                      />{" "}
                    </div>
                  </div>
                  <p className='error'> {calculatecosterr}</p>
                  {/* <div className="form-group wow fadeInUp" data-wow-offset={50} data-wow-delay=".20s">
                                        <div className="col-sm-3"> <label className="title-2"> location: </label></div>
                                        <div className="col-sm-9">
                                            <div className="col-sm-6 no-pad">
                                                <input type="text" data-bind="in:value" data-name="locations[from]" placeholder="From" className="form-control from fw-600" />
                                            </div>
                                            <div className="col-sm-6 no-pad">
                                                <input type="text" data-bind="in:value" data-name="locations[to]" placeholder="To" className="form-control to fw-600" />
                                            </div>
                                        </div>
                                    </div> */}
                  {/* <div className="form-group wow fadeInUp" data-wow-offset={50} data-wow-delay=".20s">
                                        <div className="col-sm-3"> <label className="title-2"> Package: </label></div>
                                        <div className="col-sm-9">
                                            <div className="form-group">
                                                <select data-bind="in:value" data-name="package" className="selectpicker form-control" data-live-search="true" data-width="100%" data-toggle="tooltip" title="select your package">
                                                    <option value="cost">Usual Delivery</option>
                                                    <option value="cost + 25">Fastest Delivery: + $25</option>
                                                    <option value="cost*0.9">Discount Delivery: -10%</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div> */}
                  <div
                    className="form-group wow fadeInUp"
                    data-wow-offset={50}
                    data-wow-delay=".20s"
                  >
                    <div className="col-sm-9 col-xs-12 pull-right">
                      {calculatingCost ? (
                        <div className="btn-1 t-center">
                          {" "}
                          <Loader />{" "}
                        </div>
                      ) : (
                        <div
                          className="btn-1"
                          onClick={() =>
                            this.props.calculatePackageCost(
                              calcheight,
                              calcwidth,
                              calcdepth,
                              calcweight
                            )
                          }
                        >
                          {" "}
                          <span> Total Cost: </span>
                          <span
                            data-bind="out:price, f:currency"
                            data-name="cost"
                            className="btn-1 dark"
                          >
                            {calculatedPrice == 0
                              ? "Go"
                              : "$" + numberWithCommas(calculatedPrice)}
                            {/* <span className="pr-sign">-&nbsp;</span> 
                          <span className="pr-wrap" style={{ display: "none" }}>
                    <span className="pr"></span>
                          </span> */}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </form>
              </div>
              <div className="pt-80 hidden-lg" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  const { calculatingCost } = state.Loader;
  const { calcheight, calcwidth, calcdepth, calcweight } = state.General;
  const { calculatedPrice, calculatecosterr } = state.Tracking;
  return {
    calculatingCost,
    calcheight,
    calcwidth,
    calcdepth,
    calcweight,
    calculatedPrice,
    calculatecosterr,
  };
};

export default connect(mapStateToProps, {
  getFormDetails,
  calculatePackageCost,
})(CalculateCost);
