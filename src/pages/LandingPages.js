import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from 'parts/header';
import Hero from 'parts/Hero';
import MostPicked from 'parts/MostPicked';
import Categories from 'parts/Categories';
import Testimony from 'parts/Testimony';
import Footer from 'parts/Footer';
import { fetchPage } from "store/actions/page";

class LandingPages extends Component {
  constructor (props){
    super(props);
    this.refMostPicked = React.createRef();
  }
  componentDidMount() {
    window.title = "Car Rent |  Home";
    window.scrollTo(0, 0);

    if (!this.props.page.landingPage)
      this.props.fetchPage(
    `https://admin-carrent-3ec626968682.herokuapp.com/api/v1/member/landing-page`, 
    "landingPage"
    );
  }

    render() {
      const { page } = this.props;
      console.log(page)
      if (!page.hasOwnProperty("landingPage")) return null;
      return (
        <>
          <Header {...this.props}></Header>
          <Hero refMostPicked={this.refMostPicked} data={page.landingPage.hero} />
          <MostPicked refMostPicked={this.refMostPicked} data={page.landingPage.mostPicked}/>
          <Categories data={page.landingPage.category}/>
          <Testimony data={page.landingPage.testimonial}/>
          <Footer/>
        </>
      );
    }
  }
  const mapStateToProps = (state) => ({
    page: state.page,
  });

  export default connect(mapStateToProps, { fetchPage })(LandingPages);