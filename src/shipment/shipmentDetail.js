import React, { Component } from "react";
import { connect } from "react-redux";
import { createshipping, getFormDetails } from "../redux/actions";
import Loader from "../reuseables/formLoader";

class ShipmentDetail extends Component {
  render() {
    const {
      shipmentName,
      shipmentType,
      goodsType,
      width,
      length,
      weight,
      containerNo,
      creatingShipment,
      shipmentErr
    } = this.props;
    return (
      <div className="theme-container container">
        <span
          className="bg-text right wow fadeInUp"
          data-wow-offset={50}
          data-wow-delay=".20s"
        >
          {" "}
          Shipment Booking
        </span>
        <div className="row">
          <div className="col-md-12">
            <div className="pad-10" />
            <h2
              className="section-title pb-10 wow fadeInUp"
              data-wow-offset={50}
              data-wow-delay=".20s"
            >
              {" "}
              Shipment Booking
            </h2>
            <p
              className="fs-16 wow fadeInUp"
              data-wow-offset={50}
              data-wow-delay=".25s"
            >
              {" "}
              Create shipment
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
                    <label className="title-2"> name: </label>
                  </div>
                  <div className="col-sm-9">
                    <input
                      data-bind="in:value, f: float"
                      value={shipmentName}
                      onChange={(e) =>
                        this.props.getFormDetails({
                          props: ["shipmentName"],
                          value: e.target.value,
                        })
                      }
                      data-name="height"
                      type="text"
                      placeholder
                      className="form-control"
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
                    <label className="title-2"> Shipping Type: </label>
                  </div>
                  <div className="col-sm-9">
                    <div className="form-group">
                      <select
                        data-name="package"
                        onChange={(e) =>
                          this.props.getFormDetails({
                            props: ["shipmentType"],
                            value: e.target.value,
                          })
                        }
                        className="form-control"
                        title="select your package"
                      >
                        <option value={"freight"}>Freight</option>
                        <option value={"air"}>Air</option>
                      </select>
                    </div>
                  </div>
                </div>
                {/* <div className="form-group wow fadeInUp" data-wow-offset={50} data-wow-delay=".20s">
                                    <div className="col-sm-3"> <label className="title-2"> Container No: </label></div>
                                    <div className="col-sm-9"> <input data-bind="in:value, f: float" value={containerNo}
                                        onChange={(e) => this.props.getFormDetails({ props: ['contaainerNo'], value: e.target.value })}
                                        data-name="width" type="text" placeholder className="form-control" />
                                    </div>
                                </div> */}
                <div
                  className="form-group wow fadeInUp"
                  data-wow-offset={50}
                  data-wow-delay=".20s"
                >
                  <div className="col-sm-3">
                    {" "}
                    <label className="title-2"> Length(cm): </label>
                  </div>
                  <div className="col-sm-9">
                    {" "}
                    <input
                      data-bind="in:value, f: float"
                      data-name="depth"
                      value={length}
                      onChange={(e) =>
                        this.props.getFormDetails({
                          props: ["length"],
                          value: e.target.value,
                        })
                      }
                      type="text"
                      placeholder
                      className="form-control"
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
                      value={width}
                      onChange={(e) =>
                        this.props.getFormDetails({
                          props: ["width"],
                          value: e.target.value,
                        })
                      }
                      data-name="weight"
                      type="text"
                      placeholder
                      className="form-control"
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
                      value={weight}
                      onChange={(e) =>
                        this.props.getFormDetails({
                          props: ["weight"],
                          value: e.target.value,
                        })
                      }
                      type="text"
                      placeholder
                      className="form-control"
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
                    <label className="title-2"> Goods Type: </label>
                  </div>
                  <div className="col-sm-9">
                    <div className="form-group">
                      <select
                        data-name="package"
                        className="form-control"
                        onChange={(e) =>
                          this.props.getFormDetails({
                            props: ["goodsType"],
                            value: e.target.value,
                          })
                        }
                        data-width="100%"
                        data-toggle="tooltip"
                        title="select your package"
                      >
                        <option value="file">File</option>
                      </select>
                    </div>
                  </div>
                </div>
                <p className='error'>{shipmentErr}</p>
                <div
                  className="form-group wow fadeInUp"
                  data-wow-offset={50}
                  data-wow-delay=".20s"
                >
                  <div className="col-sm-9 col-xs-12 pull-right">
                    <div
                      className="btn-1 t-center"
                      onClick={() =>
                        this.props.createshipping(
                          shipmentName,
                          shipmentType,
                          goodsType,
                          width,
                          length,
                          weight,
                          containerNo
                        )
                      }
                    >
                      {creatingShipment ? <Loader /> : "Next"}
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="pt-80 hidden-lg" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    shipmentName,
    shipmentType,
    goodsType,
    width,
    length,
    weight,
    containerNo,
  } = state.General;
  const { creatingShipment } = state.Loader;
  const {shipmentErr} = state.Shipping
  return {
    shipmentName,
    shipmentType,
    goodsType,
    width,
    length,
    weight,
    containerNo,
    creatingShipment,
    shipmentErr
  };
};

export default connect(mapStateToProps, { createshipping, getFormDetails })(
  ShipmentDetail
);
