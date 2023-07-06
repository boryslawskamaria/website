import React from 'react';
import Fade from 'react-reveal/Fade';
import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import NextImage from 'common/components/NextImage';
import worldMap from 'common/assets/image/saasAppCreative/world-map.png';
import Section, { SectionHeading, Figure } from './worldMap.style';

const OurCommunity = () => {
  return (
    <Section id="about-us">
      <Container width="1360px">
        <SectionHeading>
          <Text className="slogan" content="Our mission" />
          <Heading content="We're passionate about transforming the energy landscape in Eastern Europe. " />
          <Text
            className="description"
            content=" We envision an Eastern Europe where energy doesn't just fuel growth but symbolises innovation, responsibility, and respect for our environment. With Enzum, you're choosing a partner that is dedicated to cost-saving, resource-conserving, and planet-protecting practices. "
          />
        </SectionHeading>
        <Fade up>
          <Figure>
            <NextImage src={worldMap} alt="World Map" />
          </Figure>
        </Fade>
      </Container>
    </Section>
  );
};

export default OurCommunity;
