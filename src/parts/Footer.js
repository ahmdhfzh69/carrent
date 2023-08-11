import React from 'react'
import IconText from './IconText'
import Button from 'elements/Button'
export default function Footer() {
  return (
    <footer>
        <div className="container">
            <div className="row">
                <div className="col">
            <IconText/>
                <p className="brand-tagline">
                Rental mobil murah untuk wisata anda
                </p>
                </div>
                <div className="col-2 mr-5">
                    <h6 className="mt-2">
                    Whats Next?
                    </h6>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <Button type="link" href="/register">Register New Account</Button>
                        </li>
                        <li className="list-group-item">
                            <Button type="link" href="/payment">Payment</Button>
                        </li>
                        <li className="list-group-item">
                            <Button type="link" href="/rent">Let's Rent Now</Button>
                        </li>
                    </ul>
                </div>
                <div className="col-2 mr-5">
                <h6 className="mt-2">
                    Explore Us
                    </h6>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <Button type="link" href="/careers">Careers</Button>
                        </li>
                        <li className="list-group-item">
                            <Button type="link" href="/privacy">Privacy</Button>
                        </li>
                        <li className="list-group-item">
                            <Button type="link" href="/term">Term & Condition</Button>
                        </li>
                    </ul>
                </div>
                <div className="col-4">
                <h6 className="mt-2">
                    Contact Us
                    </h6>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <Button isExternal type="link" href="mailto:ahmdhfzh.umrah@gmail.com">ahmdhfzh.umrah@gmail.com</Button>
                        </li>
                        <li className="list-group-item">
                            <Button isExternal type="link" href="https://wa.me/+6282268650560">6285668166543</Button>
                        </li>
                        <li className="list-group-item">
                        <span>Tanjung Balai Karimun, Kepri</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col text-center copyrights">
                Copyright 2023 • All Right Reserved • Car Rent • Ahmad Hafizh
                </div>
            </div>
        </div>
    </footer>
  )
}
