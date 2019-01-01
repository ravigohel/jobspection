import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <div>
        <header>
          <div className="overlay" />
          <video
            className="img-responsive"
            playsInline="playsinline"
            autoPlay="autoplay"
            muted="muted"
            loop="loop"
          >
            <source src="./video/office.mp4" type="video/mp4" />
          </video>
          <div className="container h-100">
            <div className="d-flex justify-content-center h-100">
              <div className="my-auto w-75 text-white">
                <h3 className="display-4 text-uppercase text-center d-none d-md-block">
                  Find The Career You Deserve
                </h3>
                <h6 className="mt-0 text-center text-uppercase">
                  Your Job Search Starts And Ends With Us, Browse Job Offers Now
                </h6>
                <div className="container bg-main rounded">
                  <form className="pt-5 pb-3 px-5 mt-5 text-light rounded">
                    <div className="row">
                      <div className="form-group col-md-5 mb-0 pb-2 mr-3">
                        <select
                          id="inputTitle"
                          className="form-control form-control-md"
                          name="post_designation"
                        >
                          <option>Physics Faculty</option>
                          <option>Chemistry Faculty</option>
                          <option>Mathematics Faculty</option>
                          <option>Biology Faculty</option>
                          <option>Web Developer</option>
                          <option>App Developer</option>
                        </select>
                        <label htmlFor="inputTitle">Select Role</label>
                      </div>
                      <div className="form-group col-md-5 mb-0 pb-2 mr-3">
                        <select
                          id="inputLocation"
                          className="form-control form-control-md selectpicker"
                          data-live-search="true"
                          name="post_location"
                        >
                          <option>Mumbai, Maharashtra</option>
                          <option>Delhi, Delhi</option>
                          <option>Bengaluru, Karnataka</option>
                          <option>Hyderabad, Telangana</option>
                          <option>Ahmedabad, Gujarat</option>
                          <option>Chennai, Tamilnadu</option>
                          <option>Kolkata, West Bengal</option>
                          <option>Surat, Gujarat</option>
                          <option>Pune, Maharashtra</option>
                          <option>Jaipur, Rajasthan</option>
                          <option>Lucknow, Uttar Pradesh</option>
                          <option>Kanpur, Uttar Pradesh</option>
                          <option>Nagpur, Maharashtra</option>
                          <option>Visakhapatnam, Andhra Pradesh</option>
                          <option>Indore, Madhya Pradesh</option>
                          <option>Thane, Maharashtra</option>
                          <option>Bhopal, Madhya Pradesh</option>
                          <option>Patna, Bihar</option>
                          <option>Vadodara, Gujarat</option>
                          <option>Ghaziabad, Uttar Pradesh</option>
                          <option>Ludhiana, Punjab</option>
                          <option>Coimbatore, Tamilnadu</option>
                          <option>Agra, Uttar Pradesh</option>
                          <option>Madurai, Tamilnadu</option>
                          <option>Nashik, Maharashtra</option>
                          <option>Faridabad, Haryana</option>
                          <option>Meerut, Uttar Pradesh</option>
                          <option>Rajkot, Gujarat</option>
                          <option>Kalyan, Maharashtra</option>
                          <option>Vasai, Maharashtra</option>
                          <option>Varanasi, Uttar Pradesh</option>
                          <option>Srinagar, Jammu &amp; Kashmir</option>
                          <option>Aurangabad, Maharashtra</option>
                          <option>Dhanbad, Jharkhand</option>
                          <option>Amritsar, Punjab</option>
                          <option>Navi Mumbai, Maharashtra</option>
                          <option>Prayagraj, Uttar Pradesh</option>
                          <option>Ranchi, Jharkhand</option>
                          <option>Howrah, West Bengal</option>
                          <option>Jabalpur, Madhya Pradesh</option>
                          <option>Gwalior, Madhya Pradesh</option>
                          <option>Vijaywada, Andhra Pradesh</option>
                          <option>Jodhpur, Rajasthan</option>
                          <option>Raipur, Chhattisgarh</option>
                          <option>Kota, Rajasthan</option>
                          <option>Guwahati, Assam</option>
                          <option>Chandigarh, Chandigarh</option>
                          <option>Solapur, Maharashtra</option>
                          <option>Tiruchirappalli, Tamilnadu</option>
                          <option>Bareilly, Uttar Pradesh</option>
                          <option>Mysore, Karnataka</option>
                          <option>Tiruppur, Tamilnadu</option>
                          <option>Gurgaon, Haryana</option>
                          <option>Aligarh, Uttar Pradesh</option>
                          <option>Jalandhar, Punjab</option>
                          <option>Bhubaneswar, Odisha</option>
                          <option>Salem, Tamilnadu</option>
                          <option>Warangal, Telangana</option>
                          <option>Thiruvananthapuram, Kerala</option>
                          <option>Guntur, Andhra Pradesh</option>
                          <option>Bhiwandi, Maharashtra</option>
                          <option>Saharanpur, Uttar Pradesh</option>
                          <option>Gorakhpur, Uttar Pradesh</option>
                          <option>Bikaner, Rajasthan</option>
                          <option>Amravati, Maharashtra</option>
                          <option>Noida, Uttar Pradesh</option>
                          <option>Jamshedpur, Jharkhand</option>
                          <option>Bhilai, Chhattisgarh</option>
                          <option>Cuttak, Odisha</option>
                          <option>Firozabad, Uttar Pradesh</option>
                          <option>Kochi, Kerala</option>
                          <option>Nellore, Andhra Pradesh</option>
                          <option>Bhavnagar, Gujarat</option>
                          <option>Dehradun, Uttarakhand</option>
                          <option>Durgapur, West Bengal</option>
                          <option>Asansol, West Bengal</option>
                          <option>Rourkela, Odisha</option>
                          <option>Nanded, Maharashtra</option>
                          <option>Kolhapur, Maharashtra</option>
                          <option>Ajmer, Rajasthan</option>
                          <option>Akola, Maharashtra</option>
                          <option>Gulbarga, Karnataka</option>
                          <option>Jamnagar, Gujarat</option>
                          <option>Ujjain, Madhya Pradesh</option>
                          <option>Loni, Uttar Pradesh</option>
                          <option>Siliguri, West Bengal</option>
                          <option>Jhansi, Uttar Pradesh</option>
                          <option>Ulhasnagar, Maharashtra</option>
                          <option>Jammu, Jammu &amp; Kashmir</option>
                          <option>Mangalore, Karnataka</option>
                          <option>Erode, Tamilnadu</option>
                          <option>Belgaum, Karnataka</option>
                          <option>Ambattur, Tamilnadu</option>
                          <option>Tirunelveli, Tamilnadu</option>
                          <option>Malegaon, Maharashtra</option>
                          <option>Gaya, Bihar</option>
                          <option>Jalgaon, Maharashtra</option>
                          <option>Udaipur, Rajasthan</option>
                          <option>Maheshtala, West Bengal</option>
                          <option>Devanagere, Karnataka</option>
                          <option>Kozhikode, Kerala</option>
                          <option>Kurnool, Andhra Pradesh</option>
                          <option>Rajahmundry, Andhra Pradesh</option>
                          <option>Bokaro, Jharkhand</option>
                          <option>Bellary, Karnataka</option>
                          <option>Patiala, Punjab</option>
                          <option>Gopalpur, West Bengal</option>
                          <option>Agartala, Tripura</option>
                          <option>Bhagalpur, Bihar</option>
                          <option>Muzaffarnagar, Uttar Pradesh</option>
                          <option>Bhatpara, West Bengal</option>
                          <option>Panihati, West Bengal</option>
                          <option>Latur, Maharashtra</option>
                          <option>Dhule, Maharashtra</option>
                          <option>Tirupati, Andhra Pradesh</option>
                          <option>Rohtak, Haryana</option>
                          <option>Korba, Chhattisgarh</option>
                          <option>Bhilwara, Rajasthan</option>
                          <option>Berhampur, Odisha</option>
                          <option>Muzaffarpur, Bihar</option>
                          <option>Ahmednagar, Maharashtra</option>
                          <option>Mathura, Uttar Pradesh</option>
                          <option>Kollam, Kerala</option>
                          <option>Avadi, Tamilnadu</option>
                          <option>Kadapa, Andhra Pradesh</option>
                          <option>Kamarhati, West Bengal</option>
                          <option>Sambalpur, Odisha</option>
                          <option>Bilaspur, Chhattisgarh</option>
                          <option>Shahjahanpur, Uttar Pradesh</option>
                          <option>Satara, Maharashtra</option>
                          <option>Bijapur, Karnataka</option>
                          <option>Rampur, Uttar Pradesh</option>
                          <option>Shivamogga, Karnataka</option>
                          <option>Chandrapur, Maharashtra</option>
                          <option>Junagadh, Gujarat</option>
                          <option>Thrissur, Kerala</option>
                          <option>Alwar, Rajasthan</option>
                          <option>Bardhaman, West Bengal</option>
                          <option>Kulti, West Bengal</option>
                          <option>Kakinada, Andhra Pradesh</option>
                          <option>Nizamabad, Telangana</option>
                          <option>Parbhani, Maharashtra</option>
                          <option>Tumkur, Karnataka</option>
                          <option>Darbhanga, Bihar</option>
                          <option>Panipat, Haryana</option>
                          <option>Bally, West Bengal</option>
                          <option>Jalna, Maharashtra</option>
                          <option>Durg, Chhattisgarh</option>
                          <option>Sagar, Madhya Pradesh</option>
                          <option>Bihar Sharif, Bihar</option>
                          <option>Dewas, Madhya Pradesh</option>
                          <option>Barasat, West Bengal</option>
                          <option>Farrukhabad, Uttar Pradesh</option>
                          <option>Aizawl, Mizoram</option>
                          <option>Satna, Madhya Pradesh</option>
                          <option>Ratlam, Madhya Pradesh</option>
                          <option>Imphal, Manipur</option>
                          <option>Khammam, Telangana</option>
                          <option>Ozhukarai, Puducherry</option>
                          <option>Bathinda, Punjab</option>
                          <option>Sonipat, Haryana</option>
                          <option>Mau, Uttar Pradesh</option>
                          <option>Karnal, Haryana</option>
                          <option>Eluru, Andhra Pradesh</option>
                          <option>Purnia, Bihar</option>
                          <option>Hapur, Uttar Pradesh</option>
                          <option>Arrah, Bihar</option>
                          <option>Karimnagar, Telangana</option>
                          <option>Anantapur, Andhra Pradesh</option>
                          <option>Etawah, Uttar Pradesh</option>
                          <option>Ambernath, Maharashtra</option>
                          <option>Bharatpur, Rajasthan</option>
                          <option>Begusarai, Bihar</option>
                          <option>New Delhi, Delhi</option>
                          <option>Gandhidham, Gujarat</option>
                          <option>Baranagar, West Bengal</option>
                          <option>Tiruvottiyur, Tamilnadu</option>
                          <option>Puducherry, Puducherry</option>
                          <option>Sikar, Rajasthan</option>
                          <option>Thoothukudi, Tamilnadu</option>
                          <option>Rewa, Madhya Pradesh</option>
                          <option>Mirzapur, Uttar Pradesh</option>
                          <option>Raichur, Karnataka</option>
                          <option>Pali, Rajasthan</option>
                          <option>Ramagundam, Telangana</option>
                          <option>Haridwar, Uttarakhand</option>
                          <option>Vijayanagaram, Andhra Pradesh</option>
                          <option>Katihar, Bihar</option>
                          <option>Nagercoil, Tamilnadu</option>
                          <option>Sri Ganganagar, Rajasthan</option>
                          <option>Mango, Jharkhand</option>
                          <option>Thanjavur, Tamilnadu</option>
                          <option>Bulandshahr, Uttar Pradesh</option>
                          <option>Uluberia, West Bengal</option>
                          <option>Murwara, Uttar Pradesh</option>
                          <option>Sambhal, Uttar Pradesh</option>
                          <option>Singrauli, Madhya Pradesh</option>
                          <option>Nadiad, Gujarat</option>
                          <option>Secunderabad, Telangana</option>
                          <option>Naihati, West Bengal</option>
                          <option>Yamunanagar, Haryana</option>
                          <option>Bidhan Nagar, West Bengal</option>
                          <option>Pallavaram, Tamilnadu</option>
                          <option>Bidar, Karnataka</option>
                          <option>Munger, Bihar</option>
                          <option>Panchkula, Haryana</option>
                          <option>Burhanpur, Madhya Pradesh</option>
                          <option>Kharagpur, West Bengal</option>
                          <option>Dindigul, Tamilnadu</option>
                          <option>Gandinagar, Gujarat</option>
                          <option>Hospet, Karnataka</option>
                          <option>Ongole, Andhra Pradesh</option>
                          <option>Deoghar, Jharkhand</option>
                          <option>Chapra, Bihar</option>
                          <option>Haldia, West Bengal</option>
                          <option>Nandyal, Andhra Pradesh</option>
                          <option>Chittoor, Andhra Pradesh</option>
                          <option>Morena, Madhya Pradesh</option>
                          <option>Amroha, Madhya Pradesh</option>
                          <option>Anand, Gujarat</option>
                          <option>Bhind, Madhya Pradesh</option>
                          <option>Madhyamgram, West Bengal</option>
                          <option>Bhiwani, Haryana</option>
                          <option>Baharampur, West Bengal</option>
                          <option>Ambala, Haryana</option>
                          <option>Morvi, Gujarat</option>
                          <option>Fatehpur, Uttar Pradesh</option>
                          <option>Rae Bareli, Uttar Pradesh</option>
                          <option>Khora, Uttar Pradesh</option>
                          <option>Bhusawal, Maharashtra</option>
                          <option>Orai, Uttar Pradesh</option>
                          <option>Bahraich, Uttar Pradesh</option>
                          <option>Vellore, Tamilnadu</option>
                          <option>Mahesana, Gujarat</option>
                          <option>Raiganj, West Bengal</option>
                          <option>Sirsa, Haryana</option>
                          <option>Danapur, Bihar</option>
                          <option>Serampore, West Bengal</option>
                          <option>Guna, Madhya Pradesh</option>
                          <option>Jaunpur, Uttar Pradesh</option>
                          <option>Panvel, Maharashtra</option>
                          <option>Shivpuri, Maharashtra</option>
                          <option>Surendranagar, Gujarat</option>
                          <option>Unnao, Uttar Pradesh</option>
                          <option>Hugli, West Bengal</option>
                          <option>Alappuzha, Kerala</option>
                          <option>Kottayam, Kerala</option>
                          <option>Machilipatnam, Andhra Pradesh</option>
                          <option>Shimla, Himachal Pradesh</option>
                          <option>Adoni, Andhra Pradesh</option>
                          <option>Udupi, Karnataka</option>
                          <option>Tenali, Andhra Pradesh</option>
                          <option>Proddatur, Andhra Pradesh</option>
                          <option>Saharsa, Bihar</option>
                          <option>Hindupur, Andhra Pradesh</option>
                          <option>Sasaram, Bihar</option>
                          <option>Hajipur, Bihar</option>
                          <option>Bhimavaram, Andhra Pradesh</option>
                          <option>Dehri, Bihar</option>
                          <option>Srikakulam, Andhra Pradesh</option>
                          <option>Motihari, Bihar</option>
                          <option>Phagwara, Punjab</option>
                          <option>Krishnaganj, Bihar</option>
                          <option>Buxar, Bihar</option>
                          <option>Jehanabad, Bihar</option>
                          <option>Gangtok, Sikkim</option>
                        </select>
                        <label htmlFor="inputLocation">Choose Location</label>
                      </div>
                      <div className="ml-auto text-center mb-0 pb-0">
                        <button
                          type="submit"
                          className="btn btn-success btn-md"
                        >
                          Search
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section id="about-things">
          <div className="dark-overlay">
            <div className="container pt-5">
              <h1>How does this work?</h1>
            </div>
          </div>
        </section>
        <section id="home-icons" className="py-5">
          <div className="container">
            <div className="row">
              <div className="font-icons col-md-4 mb-4 text-center">
                <span className="home-icons">
                  <i className="fas fa-user-plus mb-2" />
                </span>
                <p className="header">Register</p>
                <p className="footer">
                  We'll help you get your job profile just right.
                </p>
              </div>
              <div className="font-icons col-md-4 mb-4 text-center">
                <span className="home-icons">
                  <i className="fa fa-comment-dots mb-2" />
                </span>
                <p className="header">Communication</p>
                <p className="footer">
                  We select candidates based on the employer's requirements.
                </p>
              </div>
              <div className="font-icons col-md-4 mb-4 text-center">
                <span className="home-icons">
                  <i className="fa fa-person-booth mb-2" />
                </span>
                <p className="header">Selection</p>
                <p className="footer">
                  We put all the candidates through a test that checks their
                  abilities.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2" />
              <div className="font-icons col-md-4 mb-4 text-center">
                <span className="home-icons">
                  <i className="fa fa-street-view mb-2" />
                </span>
                <p className="header">Interview</p>
                <p className="footer">
                  Employers interview the three top contenders for the role.
                </p>
              </div>
              <div className="font-icons col-md-4 mb-4 text-center">
                <span className="home-icons">
                  <i className="fa fa-chalkboard-teacher mb-2" />
                </span>
                <p className="header">Hiring</p>
                <p className="footer">
                  Employers hire the best match for the role.
                </p>
              </div>
              <div className="col-md-2" />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
