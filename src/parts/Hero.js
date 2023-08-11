import React from 'react';
import Fade from "react-reveal/Fade";
import ImagesHero from 'assets/images/img-hero.jpg';
import ImagesHeros from 'assets/images/img-frame-hero.jpg';
import IconCar from 'assets/images/icon/ic-car.svg';
import IconCity from 'assets/images/icon/ic-city.svg';
import IconRent from 'assets/images/icon/ic-rent.svg';
import Button from 'elements/Button';
import formatNumber from "utils/formatNumber";
export default function Hero(props) {
    function showMostPicked(){
        window.scrollTo({
        top: props.refMostPicked.current.offsetTop - 30,
        behavior: "smooth"
    });
}
  return (
    <Fade bottom>
      <section className="container pt-4">
        <div className="row align-items-center">
          <div className="col-auto pr-5" style={{ width: 520, height:500 }}>
            <h2 className="font-weight-bold line-height-1 mb-3">
                Liburan ingin lebih aman dan nyaman?<br/>
                Silakan Rental Mobil Disini
            </h2>
            <p className="mb-4 font-weight-light text-gray-500 w-150">
            Kami menyediakan beberapa jenis mobil, Dari Minibus, SUV, MPV. <br/>
            Kenyamanan kamu menjadi prioritas kami.<br/>
            Anda Tertarik? Silakan Hubungi Kami.
            </p>
            <Button className="btn px-5" hasShadow isPrimary onClick={showMostPicked}>
            Show More
            </Button>
        
            </div>

        <div className="col-6 pl-5">
            <div style={{width: 520, height: 500}}>
                <img src={ImagesHero} alt="Best Choice For Rent" className="img-fluid position-absolute" style={{margin: '-30px 0 0 -30px', zIndex: 1}}/>
                <img src={ImagesHeros} alt="Best Choice For Rent frame" className="img-fluid position-absolute" style={{margin: "0 -15px -15px 0"}}/>
            </div>
        </div>
        </div>
    </section>
    </Fade>
  );
}
