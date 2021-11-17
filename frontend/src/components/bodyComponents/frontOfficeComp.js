import React, { useContext } from 'react';
import '../Header.css'
import FrontOfficeSideNav from '../FronOfficeSideNav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Bookings from '../ViewBookings';
import ActiveBookings from '../ActiveBookings';
import PassBookings from '../PassBooking';
import BookingReq from '../UpcomingBookings';
import Accept from '../AcceptRequset';
import Decline from '../DeleteBookingRequest';
import FinalBill from '../FinalBill';
import PaidBill from '../FinalBillPopup';
import Footer from '../Footer';
import Header from '../Header';
import ViewBills from '../ViewFinalBills'
export default function frontOfficeComp() {

    return (

        <Router>
              <head>
                <title>Front Office Management</title>
            </head>

            <Header />
            <div className="content">


                <FrontOfficeSideNav />


                <div className="block">


                    {/* Bookings Routes */}
                    <Route path="/front-office-manager" exact component={Bookings} />
                    <Route path="/front-office-manager/active" exact component={ActiveBookings} />
                    <Route path="/front-office-manager/pass" exact component={PassBookings} />
                    <Route path="/front-office-manager/request" exact component={BookingReq} />
                    <Route path="/front-office-manager/accept/:id" exact component={Accept} />
                    <Route path="/front-office-manager/decline/:id" exact component={Decline} />

                    {/* Final Bill */}
                    <Route path="/front-office-manager/FinalBill" exact component={FinalBill} />
                    <Route path="/front-office-manager/PaidBill/:id" exact component={PaidBill} />
                    <Route path="/front-office-manager/ViewFinalBill" exact component={ViewBills} />


                </div>

            </div>
            <Footer/>
        </Router>
    );
}
