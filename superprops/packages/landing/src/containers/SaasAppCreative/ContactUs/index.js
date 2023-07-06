import React from 'react';
import { Icon } from 'react-icons-kit';
import { ic_place } from 'react-icons-kit/md/ic_place';
import { ic_phone } from 'react-icons-kit/md/ic_phone';
import { paperPlane } from 'react-icons-kit/fa/paperPlane';
import { linkedin } from 'react-icons-kit/fa/linkedin';
import Fade from 'react-reveal/Fade';
import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import NextImage from 'common/components/NextImage';
import Link from 'common/components/Link';
import contact_image from 'common/assets/image/saasAppCreative/contact_image.png';
import Section, { Grid, Content, ContactInfo, InfoItem } from './contactus.style';
import { contacts } from 'common/data/SaasAppCreative';

const Contacts = () => {
  return (
    <Section id="contact">
      <Container width="1360px">
        <Grid>
          <Fade up>
            <NextImage src={contact_image} alt="Contact" />
          </Fade>
          <Content>
            <Text className="subtitle" content="Contact us" />
            <Heading content="Let's build sustainable future together" />
          <ContactInfo>
              <InfoItem>
                <Icon icon={ic_place} size={24} />
                <Text content={contacts.contactInfo.address} />
              </InfoItem>
              <InfoItem>
                <Icon icon={ic_phone} size={24} />
                <Text content={contacts.contactInfo.phone}
                />
              </InfoItem>
              <InfoItem>
                <Icon icon={paperPlane} size={24} />
                <Text content={contacts.contactInfo.email} />
              </InfoItem>
              <InfoItem>
                <Icon icon={linkedin} size={24} />
                <Link href={contacts.contactInfo.link}>enzum LinkedIn</Link>
              </InfoItem>
            </ContactInfo>
            </Content>
        </Grid>
      </Container>
    </Section>
  );
};

export default Contacts;
