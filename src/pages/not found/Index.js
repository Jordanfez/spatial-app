import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Typography from '@mui/material/Typography';

import Logo from '../../img/logoPSI.png';

import Footer from '../../components/Footer';
import Header from '../../components/Header';

const Index = () => {
    return (
        <>
            <Header />

            <Container fluid className="bg-white my-2">
                <Container>
                    <Row>
                        <Col xs={12} className="mt-3 text-center ">
                            <Typography className='text-dark mb-2 fs-1 fw-normal fs-sm-5'>
                             404 Page non trouvée
                            </Typography>
                        </Col>
                        <Col xs={false} className=" text-center">
                            <img src="https://media.giphy.com/media/QzByjvu8nkyw4bsm74/giphy.gif?cid=790b7611azo1y05uir5xloxpxanrmulhigu1kckbjrntikhp&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="404 GIF" />                        </Col>
                    </Row>
                </Container>
            </Container>


            <Footer />
        </>
    )
}

export default Index