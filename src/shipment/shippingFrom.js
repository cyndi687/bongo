import React, { Component } from "react";
import { connect } from "react-redux";
import {
  shippingfrom,
  getFormDetails,
  getCountries,
  getStates,
  getCities,
} from "../redux/actions";
import Loader from "../reuseables/formLoader";

class ShippingFrom extends Component {
  componentWillMount() {
    this.props.getCountries();
  }
  render() {
    const {
      creatingShippingFrom,
      senderName,
      senderCompany,
      senderCountry,
      senderAddress1,
      senderAddress2,
      senderAddress3,
      senderState,
      senderCity,
      senderEmail,
      senderPhone,
      senderVatNo,
      allCountries,
      allStates,
      allCities,
      shipmentErr,
      description
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
              Shipping From
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
                    <label className="title-2"> Sender Name: </label>
                  </div>
                  <div className="col-sm-9">
                    {" "}
                    <input
                      value={senderName}
                      onChange={(e) =>
                        this.props.getFormDetails({
                          props: ["senderName"],
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
                    <label className="title-2"> Sender Email: </label>
                  </div>
                  <div className="col-sm-9">
                    <input
                      value={senderEmail}
                      onChange={(e) =>
                        this.props.getFormDetails({
                          props: ["senderEmail"],
                          value: e.target.value,
                        })
                      }
                      type="text"
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
                    <label className="title-2"> Sender Phone: </label>
                  </div>
                  <div className="col-sm-9">
                    <input
                      value={senderPhone}
                      onChange={(e) =>
                        this.props.getFormDetails({
                          props: ["senderPhone"],
                          value: e.target.value,
                        })
                      }
                      type="text"
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
                    <label className="title-2"> Sender Company: </label>
                  </div>
                  <div className="col-sm-9">
                    {" "}
                    <input
                      value={senderCompany}
                      onChange={(e) =>
                        this.props.getFormDetails({
                          props: ["senderCompany"],
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
                    <label className="title-2"> Package Description: </label>
                  </div>
                  <div className="col-sm-9">
                    {" "}
                    <input
                      value={description}
                      onChange={(e) =>
                        this.props.getFormDetails({
                          props: ["description"],
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
                    <label className="title-2">Sender's Country: </label>
                  </div>
                  <div className="col-sm-9">
                    <div className="form-group">
                      <select
                        onChange={(e) => {
                          this.props.getFormDetails({
                            props: ["senderCountry"],
                            value: e.target.value,
                          });
                          this.props.getStates(e.target.value);
                        }}
                        className="form-control"
                        data-live-search="true"
                      >
                        <option>Select Country</option>
                        {allCountries.map((country) => {
                          return (
                            <option value={country.id}>{country.name}</option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                </div>

                <div
                  className="form-group wow fadeInUp"
                  data-wow-offset={50}
                  data-wow-delay=".20s"
                >
                  <div className="col-sm-3">
                    {" "}
                    <label className="title-2"> location: </label>
                  </div>
                  <div className="col-sm-9">
                    <div className="col-sm-6 no-pad">
                      <select
                        onChange={(e) => {
                          this.props.getFormDetails({
                            props: ["senderState"],
                            value: e.target.value,
                          });
                          this.props.getCities(e.target.value);
                        }}
                        className="form-control from fw-600"
                        data-live-search="true"
                      >
                        <option>State</option>
                        {allStates.map((state) => {
                          return <option value={state.id}>{state.name}</option>;
                        })}
                      </select>
                    </div>
                    <div className="col-sm-6 no-pad">
                      <select
                        onChange={(e) =>
                          this.props.getFormDetails({
                            props: ["senderCity"],
                            value: e.target.value,
                          })
                        }
                        className="form-control from fw-600"
                        data-live-search="true"
                      >
                        <option>City</option>
                        {allCities.map((city) => {
                          return <option value={city.id}>{city.name}</option>;
                        })}
                      </select>
                    </div>
                  </div>
                </div>
                <div
                  className="form-group wow fadeInUp"
                  data-wow-offset={50}
                  data-wow-delay=".20s"
                >
                  <div className="col-sm-3">
                    {" "}
                    <label className="title-2">Sender Address : </label>
                  </div>
                  <div className="col-sm-9">
                    {" "}
                    <input
                      value={senderAddress1}
                      onChange={(e) =>
                        this.props.getFormDetails({
                          props: ["senderAddress1"],
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
                    <label className="title-2"> Sender Address 2: </label>
                  </div>
                  <div className="col-sm-9">
                    {" "}
                    <input
                      value={senderAddress2}
                      onChange={(e) =>
                        this.props.getFormDetails({
                          props: ["senderAddress2"],
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
                    <label className="title-2"> Sender Address 3: </label>
                  </div>
                  <div className="col-sm-9">
                    {" "}
                    <input
                      value={senderAddress3}
                      onChange={(e) =>
                        this.props.getFormDetails({
                          props: ["senderAddress3"],
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
                    <label className="title-2"> VAT no: </label>
                  </div>
                  <div className="col-sm-9">
                    {" "}
                    <input
                      value={senderVatNo}
                      onChange={(e) =>
                        this.props.getFormDetails({
                          props: ["senderVatNo"],
                          value: e.target.value,
                        })
                      }
                      type="text"
                      placeholder
                      className="form-control"
                    />{" "}
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
                        this.props.shippingfrom(
                          senderName,
                          senderCompany,
                          senderCountry,
                          senderAddress1,
                          senderAddress2,
                          senderAddress3,
                          senderState,
                          senderCity,
                          senderEmail,
                          senderPhone,
                          senderVatNo,
                          description
                        )
                      }
                    >
                      {creatingShippingFrom ? <Loader /> : "Next"}
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
    senderName,
    senderCompany,
    senderCountry,
    senderAddress1,
    senderAddress2,
    senderAddress3,
    senderState,
    senderCity,
    senderEmail,
    senderPhone,
    senderVatNo,
    description
  } = state.General;
  const { creatingShippingFrom } = state.Loader;
  const { allCountries, allStates, allCities } = state.Utility;
  const {shipmentErr} = state.Shipping
  return {
    senderName,
    senderCompany,
    senderCountry,
    senderAddress1,
    senderAddress2,
    senderAddress3,
    senderState,
    senderCity,
    senderEmail,
    senderPhone,
    senderVatNo,
    creatingShippingFrom,
    allCountries,
    allStates,
    allCities,
    shipmentErr,
    description
  };
};

export default connect(mapStateToProps, {
  shippingfrom,
  getFormDetails,
  getCountries,
  getStates,
  getCities,
})(ShippingFrom);
