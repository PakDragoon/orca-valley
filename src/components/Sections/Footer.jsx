import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
// Assets
import LogoImg from "../../assets/svg/Logo";

export default function Contact() {

  const getCurrentYear = () => {
    return new Date().getFullYear();
  }

  return (
    <Wrapper>
      <div className="darkBg">
        <div className="container">
          <InnerWrapper className="flexSpaceCenter" style={{ padding: "30px 0 0 0" }}>
            <Link className="flexCenter animate pointer" to="home" smooth={true} offset={-80}>
              <LogoImg section="footer" />
              {/* <h1 className="font15 extraBold whiteColor" style={{ marginLeft: "15px" }}>
                Orca Valley
              </h1> */}
            </Link>

            {/* <Link className="whiteColor animate pointer font13" to="home" smooth={true} offset={-80}>
              Back to top
            </Link> */}
            <div className="contactInfo flexCenter">
              {/* Social Media Icons */}
              <div className="socialMediaIcons">
                <a href="https://www.linkedin.com/company/orca-valley/" className="socialIcon">
                  <FaLinkedin className="socialIcon" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61554669862402" className="socialIcon">
                  <FaFacebook className="socialIcon" />
                </a>
                <a href="https://instagram.com" className="socialIcon">
                  <FaInstagram className="socialIcon" />
                </a>
                <a href="https://twitter.com" className="socialIcon">
                  <FaXTwitter className="socialIcon" />
                </a>
              </div>
            </div>
          </InnerWrapper>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: "10px 0 30px 0" }}>
            <StyleP className="whiteColor font13">
              © {getCurrentYear() - 2} - <span className="purpleColor font13">Orca Valley</span> All Right Reserved
            </StyleP>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const InnerWrapper = styled.div`
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;
const StyleP = styled.p`
  @media (max-width: 550px) {
    margin: 20px 0;
  }
`;