import React from "react";
import policePng from '../../images/police.png';
import {PoliceCertification, PoliceCertificationStack, PoliceCertificationStackStack, PoliceCertificationStackStackRow, Container, 
     Detail, Auther, Auther1, Image, Date} from './CertificateElements';

function Certificate({name,nic,address}) {


  return (
    <Container>
      <PoliceCertificationStackStackRow>
        <PoliceCertificationStackStack>
          <PoliceCertificationStack>
            <PoliceCertification>Grama-Certification</PoliceCertification>
            
          </PoliceCertificationStack>
          <Detail>
            This is to certify that {name}  <br></br>holding National Identity card
            bearing number{"\n"} <br></br>
            {" " + nic} who has been residing at {"\n"} <br></br>
            {" " + address} in my police station area to <br></br>has not been
            involved in any criminal activities, <br></br>nor has he/she come to the
            {"\n"}adverse notice of <br></br> during the period of residence in my area.
          </Detail>
         
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