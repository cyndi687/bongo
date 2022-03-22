import React, { Component } from "react";
import Footer from "../reuseables/footer";
import MainNav from "../reuseables/mainNav";
import TopBar from "../reuseables/topBar";
import Login from "../auth";
import { getAllTracking, getFormDetails, updateTracking, switchAuthForm, } from "../redux/actions";
import { connect } from "react-redux";
import Loader from "../reuseables/formLoader";
import Modal from "../reuseables/modal";

class index extends Component {
  constructor(props) {
    super(props);
    this.state ={
      editing: false,
      textColor: {
        color:'black'
      }
    }
  }
  componentWillMount() {
    this.props.getAllTracking();
    this.props.getFormDetails({
      props: "status",
      value: "onhold",
    })
  }
  setUpdateTracking(tracking_id) {
    const tracking = this.props.allProducts.filter(p => p.tracking_id == tracking_id);
    if (tracking.length > 0) {
      this.setState({
        editing: true
      })
      this.props.getFormDetails({
        props: "trackingNo",
        value: tracking[0].tracking_no,
      })
    }
  }
  render() {
    const { updatingPackage,
      trackingNo, presentlocation, locationdescription, calcweight,
      updateerr, authForm, user, allProducts, estdeliveryDate, status } = this.props
      console.log(allProducts)
    return (
      <div>
        {/* Main Wrapper */}
        {/* Popup: Login */}
        <Login />
        {/* /Popup: Login */}
        {authForm == 5 ? (
          <Modal
            closeModal={() => this.props.switchAuthForm(0)}
            modalDetail={
              <div className="">
                <div className="login-wrap text-center">
                  <img src="../assets/img/icons/success.png" alt="success" />
                  <h5> Updated Successfully</h5>
                </div>
                <div className="create-accnt">
                  <h2 className=""> </h2>
                </div>
              </div>
            }
          />
        ) : (
            ""
          )}
        <main className="wrapper">
          {/* Header */}
          <header className="header-main">
            {/* Header Topbar */}
            <TopBar />
            {/* /.Header Topbar */}
            {/* Header Logo & Navigation */}
            <MainNav />
            {/* /.Header Logo & Navigation */}
          </header>
          {/* /.Header */}
          {/* Content Wrapper */}
          <article className="about-page">
            {/* Breadcrumb */}
            <section className="theme-breadcrumb pad-50">
              <div className="theme-container container ">
                <div className="row">
                  <div className="col-sm-8 pull-left">
                    <div className="title-wrap">
                      <h2 className="section-title no-margin">Dashboard</h2>
                      <p className="fs-16 no-margin">{user.name == undefined ? "User" : user.name}</p>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <ol className="breadcrumb-menubar list-inline">
                      <li>
                        <a href="#" className="gray-clr">
                          Home
                        </a>
                      </li>
                      <li className="active">Dashboard</li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>
            {/* /.Breadcrumb */}

            {/* More About Us */}
            {
              !this.state.editing?
              <section className="pad-30 more-about-wrap">
              <div className="theme-container container pb-100">
                <div className="row">


                  <table style={{width:"100%"}}>
                    <tr>
                      <th>tracking no</th>
                      <th>shipment name</th>
                      <th>description</th>
                      <th>Container no</th>
                      <th>Action</th>
                    </tr>
                    {
                      allProducts.length > 0?
                      allProducts.map((product) => {
                        return (
                          <tr>
                            <td>{product.tracking_no}</td>
                            <td>{product.Shipments[0].name}</td>                            
                            <td>{product.tracking_description}</td>
                            <td>{product.Shipments[0].container_no}</td>
                            <td><div
                              
                            >
                              <button
                              className="btn-1 t-center"
                              onClick={() =>this.setUpdateTracking(product.tracking_id)}>Update Location</button>
                              
                                      </div></td>
                          </tr>
                        )

                      }): <tr>no data to display</tr>

                    }
                  </table>
                </div>
              </div>
            </section>
:null
            }
                        {
              this.state.editing?
              <section className="pad-30 more-about-wrap" >
              <div className="theme-container container pb-100">
                <div className="row">
                  <section className="calculate pt-100">
                    <div className="theme-container container">
                      <span
                        className="bg-text right wow fadeInUp"
                        data-wow-offset={50}
                        data-wow-delay=".20s"
                      >
                        {" "}
                        update{" "}
                      </span>
                      <a onClick={()=>{this.props.getAllTracking()}} style={{color:'#f5ab35'}}>view List</a>
                      <div className="row">
                        <div className="col-md-6 text-center">
                          <img
                            src="assets/img/block/Package-PNG-Pic.png"
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
                            Update Tracking Info{" "}
                          </h2>
                          <p
                            className="fs-16 wow fadeInUp"
                            data-wow-offset={50}
                            data-wow-delay=".25s"
                          >
                            Update a package's tracking information
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
                                  <label className="title-2">
                                    {" "}
                                    Tracking No:{" "}
                                  </label>
                                </div>
                                <div className="col-sm-9">
                                  {" "}
                                  <input
                                    data-bind="in:value, f: float"
                                    data-name="height"
                                    type="text"
                                    placeholder
                                    disabled
                                    className="form-control"
                                    value={trackingNo}
                                    style={this.state.textColor}
                                    onChange={(e) =>
                                      this.props.getFormDetails({
                                        props: "trackingNo",
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
                                  <label className="title-2">
                                    {" "}
                                    location:{" "}
                                  </label>
                                </div>
                                <div className="col-sm-9">
                                  {" "}
                                  <input
                                    data-bind="in:value, f: float"
                                    data-name="width"
                                    type="text"
                                    placeholder
                                    className="form-control"
                                    value={presentlocation}
                                    style={this.state.textColor}
                                    onChange={(e) =>
                                      this.props.getFormDetails({
                                        props: "presentlocation",
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
                                  <label className="title-2">
                                    {" "}
                                    description:{" "}
                                  </label>
                                </div>
                                <div className="col-sm-9">
                                  {" "}
                                  <textarea
                                    data-bind="in:value, f: float"
                                    data-name="depth"
                                    type="text"
                                    placeholder
                                    className="form-control"
                                    value={locationdescription}
                                    style={this.state.textColor}
                                    onChange={(e) =>
                                      this.props.getFormDetails({
                                        props: "locationdescription",
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
                                  <label className="title-2">
                                    {" "}
                                    est delivery date:{" "}
                                  </label>
                                </div>
                                <div className="col-sm-9">
                                  {" "}
                                  <input
                                    data-bind="in:value, f: float"
                                    data-name="depth"
                                    type="date"
                                    placeholder
                                    className="form-control"
                                    value={estdeliveryDate}
                                    style={this.state.textColor}
                                    onChange={(e) =>
                                      this.props.getFormDetails({
                                        props: "estdeliveryDate",
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
                                  <label className="title-2">
                                    {" "}
                                    status:{" "}
                                  </label>
                                </div>
                                <div className="col-sm-9">
                                  {" "}
                                  <select
                        data-name="package"
                        onChange={(e) =>
                          this.props.getFormDetails({
                            props: "status",
                            value: e.target.value,
                          })
                        }
                        className="form-control"
                        title="select your package"
                      >
                        <option value={"onhold"}>On Hold</option>
                        <option value={"on-transit"}>On Transit</option>
                        <option value={"delivered"}>Delivered</option>
                      </select>
                                 {" "}
                                </div>
                              </div>


                              <p className='error'> {updateerr}</p>
                              <div
                                className="form-group wow fadeInUp"
                                data-wow-offset={50}
                                data-wow-delay=".20s"
                              >
                                <div className="col-sm-9 col-xs-12 pull-right">
                                  {updatingPackage ? (
                                    <div className="btn-1 t-center">
                                      {" "}
                                      <Loader />{" "}
                                    </div>
                                  ) : (
                                      <div
                                        className="btn-1 t-center"
                                        onClick={() =>
                                          this.props.updateTracking(
                                            trackingNo,
                                            locationdescription,
                                            presentlocation,estdeliveryDate, status
                                          )
                                        }
                                      >
                                        Submit
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
                </div>
              </div>
            </section>
:null
            }
                       {/* /.More About Us */}
          </article>
          {/* /.Content Wrapper */}
          {/* Footer */}
          <Footer />
          {/* /.Footer */}
        </main>
        {/* / Main Wrapper */}
        {/* Top */}
        <div className="to-top theme-clr-bg transition">
          {" "}
          <i className="fa fa-angle-up" />{" "}
        </div>
        {/* Search Popup */}
        <div className="search-popup">
          <div>
            <div className="popup-box-inner">
              <form>
                <input
                  className="search-query"
                  type="text"
                  placeholder="Search and hit enter"
                />
              </form>
            </div>
          </div>
          <a href="javascript:void(0)" className="close-search">
            <i className="fa fa-close" />
          </a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { updatingPackage } = state.Loader
  const { trackingNo, presentlocation, locationdescription, estdeliveryDate, status,authForm, calcweight } = state.General
  const { updateerr, allProducts } = state.Tracking
  const { user } = state.Auth
  console.log(state.General)
  return {
    updatingPackage,
    trackingNo, presentlocation,
    locationdescription, calcweight,
    updateerr, authForm, user, allProducts, estdeliveryDate, status
  };
};

export default connect(mapStateToProps, { getAllTracking, getFormDetails, updateTracking, switchAuthForm })(index);
