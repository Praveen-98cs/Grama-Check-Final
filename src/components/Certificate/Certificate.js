import React from "react";
import policePng from '../../images/police.png';
import {PoliceCertification, PoliceCertificationStack, PoliceCertificationStackStack, PoliceCertificationStackStackRow, Container, 
    Rect3, Detail, Rect, Auther, Auther1, Image, Date} from './CertificateElements';

function Certificate({name,nic,address}) {


  return (
    <Container>
      <PoliceCertificationStackStackRow>
        <PoliceCertificationStackStack>
          <PoliceCertificationStack>
            <PoliceCertification>Grama Certification</PoliceCertification>
            <Rect3></Rect3>
          </PoliceCertificationStack>
          <Detail>
            This is to certify that {name} {"\n"} holding National Identity card
            bearing number{"\n"}
            {" " + nic} who has been residing at {"\n"}
            {" " + address} in my police station area to{"\n"}has not been
            involved in any criminal activities, nor has he/she come to the
            {"\n"}adverse notice of during the period of residence in my area.
          </Detail>
          <Rect></Rect>
          <Auther>
            Authorised by officer in charge{"\n"}
            Village Officer{"\n"}
            (respective Area)
          </Auther>
          <Auther1>To Whom It May Concern,</Auther1>
          <Image
            src={policePng}
          ></Image>
          <Date>DATE :</Date>
        </PoliceCertificationStackStack>
      </PoliceCertificationStackStackRow>
    </Container>
  );
}

export default Certificate;