import React from "react";
import {
  MDBCarousel,
  MDBCarouselCaption,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBContainer,
  MDBRow,
  MDBCol
} from "mdbreact";
import { Typography } from "@material-ui/core";

const Home = () => {
  return (
    <div>
      <MDBCarousel
        activeItem={1}
        length={6}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100 "
                src="https://pix10.agoda.net/hotelImages/4866617/0/2db202660bb86fe1336437eb18bf3c37.jpg?s=1024x768"
                alt="First slide"
                height="500px"
              />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">
                Novotel Hyderabad Convention Centre
              </h3>
              <p>
                “Courteous treatment will make a customer a walking
                advertisement” by James Cash Penney.
              </p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100 "
                src="https://www.hotelartsbarcelona.com/app/uploads/2017/11/Hotel_arts_piscina.jpg"
                alt="Second slide"
                height="500px"
              />
              <MDBMask overlay="black-strong" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Hotel Arts Barcelona</h3>
              <p>
                “Hospitality exists when you believe the other person is on your
                side”
              </p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://www.hotelroyalblue.com/wp-content/uploads/2019/07/Royal-Blue_Rooftop-pool-1500x630.jpg"
                alt="Third slide"
                height="500px"
              />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Hotel Royal Blue Dubrovnik</h3>
              <p>“There is only one boss. The Guest.</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://www.rwsentosa.com/-/media/project/non-gaming/rwsentosa/hotels/hard-rock-hotel-singapore/hardrockhotelsg-exterior.jpg"
                alt="Fourth slide"
                height="500px"
              />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Hard Rock Hotel</h3>
              <p>
                “Hospitality is simply an opportunity to show love and care”
              </p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="5">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3248/x_0,y_219,w_4947,h_2785,r_0,c_crop,q_60,fl_progressive/w_1500,c_fit,f_auto/summit-grace-hotel-and-spa-darjeeling/Exterior1_Summit_Grace_Hotel_and_Spa,_Darjeeling"
                alt="Fifth slide"
                height="500px"
              />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Summit Grace Hotel</h3>
              <p>
                “Washrooms will always tell if your hotel cares about its
                guests”.
              </p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="6">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://holidayturn.com/wp-content/uploads/2017/12/Safari-Court-Hotel-Pool.jpg"
                alt="Sixth slide"
                height="500px"
              />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Holiday Turn</h3>
              <p>
                “Customers may forget what you said but they will never forget
                how you made them feel”.
              </p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
      <br />
      <br />
      <Typography variant="h2" align="center" gutterBottom>
        Welcome to the best Hotel Registration and Booking Website.
      </Typography>
      <br />
      <Typography variant="body1" align="center" gutterBottom>
        Here you'll get the awesome user experience for hotel bookings as well
        as hotel registrations.
      </Typography>
      <br />
      <br />
      <MDBContainer fluid>
        <Typography variant="h4" gutterBottom>
          Recommended Destinations
        </Typography>
        <br />
        <MDBRow>
          <MDBCol size="12" md="8">
            <MDBView hover>
              <img
                style={{ border: "2px solid black" }}
                className="d-block w-100"
                src="https://imgcld.yatra.com/ytimages/image/upload/t_seo_Hotel_w_930_h_550_c_fill_g_auto_q_40_f_jpg/v1549633411/Hotel/Mumbai/00114653/95848147-H1-TMPM_Ex_Gateway_0084_Crop_fNLLtv.jpg"
                alt="Mumbai"
                height="300px"
              />
              <MDBMask className="flex-center" overlay="teal-slight">
                <Typography variant="h5" gutterBottom>
                  <p className="white-text">Mumbai Taj Hotel</p>
                </Typography>
              </MDBMask>
            </MDBView>
          </MDBCol>

          <MDBCol size="6" md="4">
            <MDBView hover>
              <img
                style={{ border: "2px solid black" }}
                className="d-block w-100"
                src=" https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3333/x_0,y_261,w_4995,h_2812,r_0,c_crop,q_60,fl_progressive/w_1500,c_fit,f_auto/hotel-southend-by-tgi---bommasandra-bangalore/Facade_at_Hotel_Southend_By_TGI_-_Bommasandra_Bangalore1_uyvr33"
                alt="Banglore"
                height="300px"
              />
              <MDBMask className="flex-center" overlay="teal-slight">
                <Typography variant="h5" gutterBottom>
                  <p className="white-text">Banglore's Southend Hotel</p>
                </Typography>
              </MDBMask>
            </MDBView>
          </MDBCol>
        </MDBRow>
        <br />

        <MDBRow>
          <MDBCol size="6" md="4">
            <MDBView hover>
              <img
                style={{ border: "2px solid black" }}
                className="d-block w-100"
                src=" https://r-cf.bstatic.com/images/hotel/max1024x768/546/54686729.jpg"
                alt="Dubai"
                height="300px"
              />
              <MDBMask className="flex-center" overlay="teal-slight">
                <Typography variant="h5" gutterBottom>
                  <p className="white-text">Dubai's Copthrone Hotel</p>
                </Typography>
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol size="6" md="4">
            <MDBView hover>
              <img
                style={{ border: "2px solid black" }}
                className="d-block w-100"
                src=" https://q-cf.bstatic.com/images/hotel/max1024x768/365/36573971.jpg"
                alt="New Delhi"
                height="300px"
              />
              <MDBMask className="flex-center" overlay="teal-slight">
                <Typography variant="h5" gutterBottom>
                  <p className="white-text"> Hotel Taj Palace New Delhi</p>
                </Typography>
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol size="6" md="4">
            <MDBView hover>
              <img
                style={{ border: "2px solid black" }}
                className="d-block w-100"
                src="https://q-cf.bstatic.com/images/hotel/max1024x768/662/66277662.jpg"
                alt="Chennai"
                height="300px"
              />
              <MDBMask className="flex-center" overlay="teal-slight">
                <Typography variant="h5" gutterBottom>
                  <p className="white-text"> Hotel The Park Chennai</p>
                </Typography>
              </MDBMask>
            </MDBView>
          </MDBCol>
        </MDBRow>
        <br />
        <MDBRow>
          <MDBCol size="6">
            <MDBView hover>
              <img
                style={{ border: "2px solid black" }}
                className="d-block w-100"
                src=" data:image/jpeg;base64,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"
                alt="Bangkok"
                height="300px"
              />
              <MDBMask className="flex-center" overlay="teal-slight">
                <Typography variant="h5" gutterBottom>
                  <p className="white-text"> Ibis Bangkok Riverside Hotel</p>
                </Typography>
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol size="6">
            <MDBView hover>
              <img
                style={{ border: "2px solid black" }}
                className="d-block w-100"
                src="https://q-cf.bstatic.com/images/hotel/max1024x768/224/224626424.jpg"
                alt="Singapore"
                height="300px"
              />
              <MDBMask className="flex-center" overlay="teal-slight">
                <Typography variant="h5" gutterBottom>
                  <p className="white-text"> Hotel Hilton Singapore</p>
                </Typography>
              </MDBMask>
            </MDBView>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Home;
