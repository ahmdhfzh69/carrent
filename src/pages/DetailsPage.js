import React, { Component } from 'react';
import Header from '../parts/header';
import PageDetailTitle from '../parts/PageDetailTitle';
import FeaturedImage from 'parts/FeaturedImage';
import PageDetailsDesctiption from 'parts/PageDetailsDesctiption';
import RentForm from 'parts/RentForm';
import Fade from "react-reveal/Fade";
import Testimony from 'parts/Testimony';
import Footer from 'parts/Footer';

import { connect } from "react-redux";
import { checkoutBooking } from "store/actions/checkout";
import { fetchPage } from "store/actions/page";

class DetailsPage extends Component {
    componentDidMount() {
        window.title = "Details Page";
        window.scrollTo(0, 0);
    
        if (!this.props.page[this.props.match.params.id])
        this.props
          .fetchPage(
            `https://admin-carrent-3ec626968682.herokuapp.com/api/v1/member/detail-page/${this.props.match.params.id}`,
            this.props.match.params.id
          )
          .then((response) => {
            document.title = `Car Rent | ${response.title}`;
          });
    }
  
    render() {
      const { page, match } = this.props;

    if (!page[match.params.id]) return null;
    
      const breadcrumb = [
        { pageTitle: "Home", pageHref: ""},
        { pageTitle: "Car Details", pageHref: ""}
      ];
    return (
      <>
       <Header {...this.props} />
        <PageDetailTitle breadcrumb={breadcrumb} data={page[match.params.id]} />
        <FeaturedImage data={page[match.params.id].imageId} />
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <Fade bottom>
                <PageDetailsDesctiption data={page[match.params.id]} />
              </Fade>
            </div>
            <div className="col-5">
              <Fade bottom>
                <RentForm
                  itemDetails={page[match.params.id]}
                  startBooking={this.props.checkoutBooking}
                />
              </Fade>
            </div>
          </div>
        </section>

        <Testimony data={page[match.params.id].testimonial} />

        <Footer />
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { checkoutBooking, fetchPage })(
  DetailsPage
);