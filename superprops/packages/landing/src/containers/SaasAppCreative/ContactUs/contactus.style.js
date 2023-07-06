import { rgba } from 'polished';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const Section = styled.section`
  padding-top: 90px;
  padding-bottom: 60px;
  @media (max-width: 1024px) {
    padding-bottom: 50px;
  }
  @media (max-width: 768px) {
    padding-bottom: 40px;
  }
  .container {
    @media only screen and (max-width: 1366px) {
      max-width: 1170px;
    }
    @media only screen and (max-width: 1024px) {
      max-width: 960px;
    }
  }
`;

export const Grid = styled.div`
  gap: 100px;
  display: grid;
  align-items: center;
  grid-template-columns: 660px auto;
  @media only screen and (max-width: 1536px) {
    gap: 80px;
    grid-template-columns: 640px 1fr;
  }
  @media (max-width: 1440px) {
    grid-template-columns: 650px 1fr;
  }
  @media (max-width: 1366px) {
    gap: 60px;
  }
  @media (max-width: 1024px) {
    gap: 60px;
    grid-template-columns: 450px 1fr;
  }
  @media (max-width: 768px) {
    display: block;
  }
`;

export const Content = styled.div`
  text-align: center;
  max-width: 465px;
  @media only screen and (max-width: 767px) {
    margin-top: 80px;
  }
  @media only screen and (min-width: 768px) {
    margin: 90px auto 0;
  }
  @media only screen and (min-width: 1024px) {
    text-align: left;
    margin-top: 0;
  }
  @media only screen and (min-width: 1440px) {
    margin-left: 0;
  }
  .subtitle {
    color: ${themeGet('colors.secondary')};
    font-family: 'Caveat', cursive;
    font-weight: 700;
    font-size: 28px;
    line-height: 35px;
    letter-spacing: 0.5px;
    margin-bottom: 12px;
    @media (max-width: 1366px) {
      font-size: 22px;
      margin-bottom: 6px;
    }
  }
  h2 {
    font-family: 'Noto Serif KR', serif;
    font-weight: 700;
    font-size: 36px;
    line-height: 1.39;
    letter-spacing: -0.02em;
    @media (max-width: 1366px) {
      font-size: 32px;
    }
    @media (max-width: 1024px) {
      font-size: 26px;
    }
    @media (max-width: 480px) {
      font-size: 24px;
    }
  }
  .description {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    line-height: 2;
    color: ${themeGet('colors.textColor')};
  }
  .explore {
    color: ${themeGet('colors.linkColor')};
    font-weight: 700;
    img {
      line-height: 1;
      transform: translateX(0px);
      transition: 0.3s ease 0s;
      margin-left: 6px;
    }
    &:hover img {
      transform: translateX(3px);
    }
  }
`;

export const ContactInfo = styled.div`
  @media screen and (max-width: 768px) {
    grid-column: 2/4;
  }
  @media screen and (max-width: 480px) {
    grid-column: 1/3;
  }
  h4 {
    font-weight: 700;
    font-size: 16px;
    line-height: 1.38;
    margin: 0 0 25px;
  }
`;

export const InfoItem = styled.div`
  color: ${rgba('#09131F', 0.7)};
  display: flex;
  align-items: flex-start;
  font-family: Inter, sans-serif;
  font-size: 15px;
  line-height: 28px;
  letter-spacing: -0.002em;
  i {
    color: ${rgba('#000', 0.35)};
    margin-right: 12px;
  }
`;

export default Section;
