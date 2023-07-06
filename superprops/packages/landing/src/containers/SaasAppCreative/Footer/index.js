import React from 'react';
import Container from 'common/components/UI/Container';
import Image from 'common/components/Image';
import Text from 'common/components/Text';
import Link from 'common/components/Link';
import {
  Section,
  Grid,
  AboutUs,
  FooterWidget,
} from './footer.style';
import { footer } from 'common/data/SaasAppCreative';

const Footer = () => {
  return (
    <Section>
      <Container width="1360px">
        <Grid>
          <AboutUs>
            <Image src={footer.about.logo?.src} alt="SaaS App Creative" />
            <Text content={footer.about.text} />
          </AboutUs>
          {footer.widgets.map((item) => (
            <FooterWidget key={item.id}>
              <h4>{item.title}</h4>
              <ul>
                {item.list.map((item) => (
                  <li className="widgetListItem" key={item.id}>
                    <Link href={item.link}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </FooterWidget>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Footer;
