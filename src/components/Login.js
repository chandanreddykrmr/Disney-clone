import React from "react";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  overflow: hidden;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 10vw;
  padding: 80px 40px;
  height: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
`;

const Background = styled.div`
  background-image: url("/images/login-background.jpg");
  height: 100%;
  background-position: top;
  background-size: cover;
  background-repeate: no-repeat;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const CTA = styled.div`
  max-width: 650px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CTALogoOne = styled.img`
  margin-bottom: 12px;
  max-width: 600px;
  display: block;
  min-height: 1px;
  width: 100%;
`;

const SignUp = styled.a`
  align-items: center;
  letter-spacing: 1.5px;
  display: flex;
  justify-content: center;
  background: blue;
  border-radius: 4px;
  padding: 16.5px 0;
  border: 1px solid transparent;
  font-weight: bold;

  &:hover {
    background: #0483ee;
  }
`;

const Discription = styled.p`
  color: hsla(0, 0%, 95.3%, 1);
  font-size: 11px;
  margin: 0 0 24px;
  line-height: 1.5;
  letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
max-width: 600px;
margin-bottom: 20px;
display: inline-block;
vertical-align: bottom;
wiiidth: 100%;`;

const Login = (props) => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" alt="" />
          <SignUp>GET ALL THERE</SignUp>
          <Discription>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/21, the price of Disney+
            and The Disney Bundle will increase by $1.
          </Discription>
          <CTALogoTwo src="/images/cta-logo-two.png" alt="" />
        </CTA>
        <Background />
      </Content>
    </Container>
  );
};

export default Login;
