import React from 'react';
import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Image from 'common/components/Image';
import Section, { Content } from './cta.style';
import lgbt from 'common/assets/image/saasAppCreative/lgbt.png';

const CallToAction = () => {
  const backgroundImage = {
    backgroundImage: `url(${lgbt?.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0.8,
  };

  const overlayStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    padding: '20px',
  };

  return (
    <Section id="about-us" style={backgroundImage}>
      <Container>
        <Content>
          <div className="image-overlay" style={overlayStyle}>
            <Text className="slogan" content="Powered by Pride" />
            <Heading content="Embracing Diversity, Energising Innovation." />
            <Text
              className="description"
              content="Our company proudly embraces diversity and inclusion at its very core, fostering an environment where everyone, regardless of their sexual orientation or gender identity, feels valued and accepted. We believe that the richness of ideas, backgrounds, and perspectives that our LGBTQIA+ team members bring is our biggest strength, fuelling our innovative drive."
            />
          </div>
        </Content>
      </Container>
    </Section>
  );
};

export default CallToAction;
