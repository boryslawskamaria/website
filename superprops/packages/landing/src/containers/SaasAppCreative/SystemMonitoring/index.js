import React from 'react';
import Fade from 'react-reveal/Fade';
import Container from 'common/components/UI/Container';
import NextImage from 'common/components/NextImage';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Section, { Grid, FigureGroup, Content } from './systemMonitoring.style';
import report1 from 'common/assets/image/saasAppCreative/report1.png';
import report2 from 'common/assets/image/saasAppCreative/report2.png';

const SystemMonitoring = () => {
  return (
    <Section id="about-us">
      <Container width="1360px">
        <Grid>
          <Content>
            <Text className="subtitle" content="Our team" />
            <Heading content="Empowering Energy, Empowering Women." />
            <Text
              className="description"
              content="Steered by dynamic female leadership, our company proudly stands at the forefront of the tech industry's ongoing evolution. We are not just breaking boundaries in the technology realm; we're setting a strong example for the entire industry, demonstrating the powerful impact of women in the helm of technological innovation. Empowering, inspirational, and progressive, our leadership is paving the way towards a more inclusive and equitable future in technology."
            />
            {/* <Link href="#" className="explore">
              Explore details
              <img src={rightArrow?.src} alt="right arrow icon" />
            </Link> */}
          </Content>
          <FigureGroup>
            <Fade up>
              <NextImage src={report1} alt="report1" />
            </Fade>
            <div className="graph-2">
              <Fade up delay={200}>
                <NextImage src={report2} alt="report2" />
              </Fade>
            </div>
          </FigureGroup>
        </Grid>
      </Container>
    </Section>
  );
};

export default SystemMonitoring;
