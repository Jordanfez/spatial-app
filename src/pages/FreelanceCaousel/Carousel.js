import React, { useEffect, useState } from 'react';
import Carousel from "react-elastic-carousel";
// import Item from "./Item";
// import "./styles.css";
import StarIcon from '@mui/icons-material/Star';
import { Paper } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import URL_SERVER from '../../services/appApi';
// import { ProfilFisrt } from '../CardForCarrouselProfil';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Container from 'react-bootstrap/Container';
import { fetchprofilesFunction } from '../../services/GetFunction/GetEmployers/getEmployersFunctions';


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];
const Carouselle = () => {

    const [profiles, setProfiles] = useState([]);
    useEffect(() => {
        const fetchProfiles = async () => {
            try {
                const response = await fetchprofilesFunction();
                setProfiles(response.slice(-9)); // On récupère les 9
                console.log('valeurs profile', response);
            } catch (error) {
                console.error('Error fetching profiles:', error);
            }
        };

        fetchProfiles();
    }, [])
    return (
        <div className='App'>
            <Carousel breakPoints={breakPoints}>
                {profiles.length === 0 ? (
                    <Container >
                        <div className='row'>
                            <div className='col-3' style={{ marginLeft: '5%'}}>
                                <Grid >
                                    <Grid >
                                        <Paper elevation={0} sx={{ padding: '5%' }}>
                                            <Card sx={{ width: '300px', borderRadius: '2%', boxShadow: '5px 5px 5px 5px rgba(0, 0, 0, 0.1)' }}>
                                                <CardMedia
                                                    component="img"
                                                    style={{
                                                        borderRadius: '50%',
                                                        width: '150px',
                                                        height: '150px', marginTop: '5%', marginLeft: '25%'
                                                    }}
                                                    image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEhMQEhIVFRUVFRAPEBUVEBUQDxUVFRUWFhUVFxUYHSggGBolGxUVITEiJSkrLi4uFx8zODMsNygtLisBCgoKDg0OGBAQFysfHR0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSstLf/AABEIAKgBKwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAEAAIDBQYBB//EAEAQAAEDAgQDBgMEBwcFAAAAAAEAAhEDBAUSITEiQVEGE2FxgZEyobEUQsHRByNDUmKS8BUzcoOT4fEkVIKiwv/EABoBAAMBAQEBAAAAAAAAAAAAAAABAwIEBQb/xAAwEQACAgEDAgMHBAIDAAAAAAAAAQIRAxIhMQRBUWGBBRMicZGx8KHB0fEy4RUjQ//aAAwDAQACEQMRAD8Au8uVyJY/VcuKaiAK6zmLm2epK7EBaVdYVkNUCBmNU4bIhcyJ7AgANjDTf4FWgMiUPXpyn250hF2C2KLE3RVjwVjg9eRqgMeZFRrvRQ4TXy1C1Wq4mL3NWuJMOiSiUIK1m1xJJOoAMERA9EynhtOZ4uX3jy/rbZEd4PH+UoPD6NQPBc4nhIILnuBPDxcWgkg6cvVSlGN/43Z0QnPS/jqvzt8g63t20wQ3YmfkB+Cm28vokCkStJUQbbdvcSRXBp5fRMuXHKcu8abfimB1Q3nwFDVro0mveGve1obodHSXQcubfcaeyrqtGu5ud1Q8Jc5oEFozTwuMcUAxJjafFYeSpJJX+efrx4di0MGqOpySXC5dur4Vvba3Vb7XwXtqeEKYCdfZU2FXby0sLSXsAl2jmuzOMODRroJ0/hhWtvULhrvrPLnoYOoneFpS1KzGTG8cnFtP5O0090/VU1dOnukQVqLCTLWnXWWAkxoE+mTPP3TWuku20OnzXae6FQpXw2EBdC4FwlaRg5UKqL2qrCu9U91xEwqQRllc4y+eilsYLi4qGtwtJVeKlQiGDdVatGDUd9OgKkpUp2VThFhUHFUd6LV2paBoFCe3BtKwB9qQoMr+QV9AKb3QWVMbgVLS/oU5tVwVkaShfSIT1BQM6HCChvsaMbl22T8iQcmcc6SnMbJQtOorm0o8M80JDI6dBFZoQ9Zzgoc7lqhNlgHhOAQNKSYCIDXjkihWEOeBuoftjQiGNDhqEytZscNktu49zOdrq8NY8aiRKAp1YqNd1hW19Y7sOrTt4KluqeQtHQrpxraiTNzaPloU6r8JqywKwC52tyiIHN/qQn241/3XHMPRKiwhxMcgJny0UyiS3CXwNdo38kA25q1NWNaGcnOM5vEAct9Z1kKXEcxp1A2ZyOiDB25GRHumW5a4AhuZpY3Lwgt1nTXbr6hZduVXRWGmMNdW7rfhf32+T8q7RvSCGVAATORzXSxxH3ddnRy12PRRsY55JkgAgDQjYzsdfwITL5pGRp0eX0QIdvlMuO45TpzA57J9ZgYZDiJjQauOuum+2k+CUb3TfAZNCip8Xfy27/L90wa8oPewsABex7CwucWNDgRxExB2Og8NpUBxamaeWROrYJAdI4SN9YiJEjRXVlZVI4opt3lxmo4/vQNG7D8gh7/DnPILKjWxOWaQni8Z0lKMXLJ8Lrx2tfpvflv2uqE+qgsVThJpNtU0nv5S2q0uyfLWq967DKZdmrxDXBrab88cOZ2clo2+IkEzAjYp9J9UVHgsDWt/unAQSfu685G4RLLG7ZoHaa5YaAIIj4QOuqloPDXd3UaA4zkcNugAHXfYBPSofDdt/r4/nIPP75uVNJJJJ3slx/utrt9wvKNdB4prGhR0nj4SRm3yyJjyUzVVEnfceShDdNOocDrl0IOvTzUtQyD0VL9laC0ySW5Y4oENAAEAdBusvUuFZuCg09Ta9LDa1RVofqUU9xdoFPZYSZzu9ldSSW5GmyrqYe+sIaPXkirHBX0xrBV+1kCAITXOIU3kbNaUAfZH9FJQpOBVtb1AQpDTCm5M1pBqbDC6p4TXNlKx0Rprl1cetCBLqhOo3QPeOCtiFD3QTTMtGQY0NElQPxdzNAUy8qE6BNs8NNQydlRJGWxf2xVfoAjrKhWqauJA6LuVlHQDVT2V7UJ0botC2DG1O62aSnU8ZZsdPNGZ5GqHfb0z931WbXdD37BlG5a7ZECCqmjbAGGqzZRMaFYddhqyG7oNIk8lh8XcyXZXSt1c0y5paeYheb3eAVLU1HElzXEuBPKeSthdMzI13Z2tLAr9pWO7I15bC11MpZV8TCL2JinBRCs3rPlquCqf3SuZ5ILll1im+ED3DHBxeTABa7NmIDWj4m5ec6+/ghnAtJe3vKTCZM5XNBJ3LZlvMnzR140vYWgQTEdJBkT7KCrXe9ppim4OcC0yOASIJnmlcZ8Gk54/X6fun+oPXpkOID3Odlh7pEgP2YwDYmJJ3EAqa3YygZBzPOr3EzmJJcfmSnUHU2vqMc7VpzCdd2taOfgVR3mIDMYKr0nTucm+2+3r+eu/hXH7S6vQlb2VfWvxLslsuZN6E35mZ1S78hzZBMzp49PosqcQ5K5dfNtmgVDmcScuXeOflqr9TB4tMIRuUrSiuXS8eyX9HnYOqjk1TcqjGrfZb/rdUjSW19qdNNIkRy6KuxmoHcQ3Guhgqs/tthBMxzHiCYHryQFxiNUMLnNgiHb/AHdJ9d14koZb0uOndJW6d7Lbxra6W17novq4OPwy1Xva/NvK+ewfTeHQeEfrO8L5MjimCY3jh8vZWwKzdlehpcDJBEgDWf6CLpXriGt6AD+iurHmjGCb5/j8/wBnXilPqY2u337/ANLbyLWu/RAUWF+yKoOkQVIaTmtAa+Dy4Z9ITXVK+KKvpWlzbBWWVUGQFZ2gePiSte8G7wT4tgI1tQj4m+o1Crr1LZ2QcXF77HWtlNNEFEtg7JEJWOgLuiETTMqSAuQAi7BI4QoarsqlkHYqMs5n0QgZC0zuuuTSdU560ZInmE1cruDQSTACoamLamNuS0lZmyhFNW1C9p0mAO3VfTEDMVUBzq1TMfhGwW15iaNEyuyo6SICMNQbN2VPQYXHwCKqVoGiBMKrX0CNyum5NRoAEdSqxsOc0dTqrurb5Rw+yBgpujTIG45q8ocQBB0KydSu3Pr1haXBKukcuSUkNMsW0T1Q2IYWyswsdsURc3YYqPGMSe2lUfMZWyPM6N+ZCxbW5pK9iltLFttVNOk/PrBJGgPTxWkt6DnRJJ+nss3gbgcvXn+a2dq2AvOyZ55X8T9D1IYYYlst/EiqxSY50TlBPRQWmIF78mVuzjLX5pLXZdNNuc+Kkruid/cwpbAF7gAOWupgDRZ078m9UdLtW/HwCBTME6mASYaXH0A1Pko2WrW5C4FziGveQKmVpcADEGKfCSdVeUaIAj/lBHDiNG5MsxxMzOa0MgAEniMjnyPgrxj4HK5q9+DzbFrau7E61BhJa0UcxmAGNpM3cecHf1VZjF7ZPcBTpVCG6Zxc1aYcZ1MNInzPsFqO2tE2ouO7E1LmhRZUfBAlpc18a8OZukcl5U2vGh0I0IXtdNJZFu+ElStero+b6xe6k4xrU25W0nSbdJXdfuek2tzSvgGijlqty6h2haPDad9PnyRhyt0ygHbbXRYnsxiwpPOsEljmGdJaSY+a1WJX+eoXluTOcwaRHmQOkry/aUZuWhWorhW6ppX+qDDOPu3kaWva3S3u6vt/PcGuLBjiTmIBG07f7eCjpuFMOYCXEcXEdTI08hpHouVLlVGK3ZYO9EaNLSCYB5jzM8vFTWTNmShkm2u1+JyueOL/AOuKTZo+xt6Kl7TaAZAeXtI1ANN3ut9iGB06nEwBjuoHCfMLzj9Ddq+tc3F2/UMApg8i9+pA8mj5hem4tbd40AR8WYhwljuFw1EjaZ82hbzYlBuKVnvezYSxw3lVu/0S/YzppupHK8QfkfHyUra0Q480Zb4YGte1xJkhzTDc86y4mZJMjTwVNi7TTaQdCOLfl18lxuLR7cXGTpOy1bWRVvVcPyKzNG7D2yDDhoRzVlZ3UbrKk07QTxqi3Lu74x8P3x+74jwRgIIkIS1qNdpycCCEJhD3UnvtnGcvFSJ50zsPTb0XoY5e8hq7o8vJHRPT2ZbFD3B0RD9ENVMraMsHpsdyKnqEgJzQuP10TbszRC4805x0kqNUWP4pr3TToBxH8E6sV0CY/iwIImGj5rzi77ata9zRsDAUPbbHzrRYdeawq05adkCje7Pc7s8MdUKKUQAnUKwqU2OHMBFUWaytsyia3Gke6guH6onNAKBeFlsY6g6HAq/oXAc3xWfDdUVbOynVJMGB4lhri4vCbhONPoVA18lvzCuTVafvIKpYU6jhJW9XiFGjqu70sc0y07qm7R3jMjqJ3qOA05NYQZ+SfcP+yUw9gJDYzNmZHOPFZ+/oVLmuSz4Q1upIG8nbrqoZ2443XyLdNBSypPtuXuA24OrRp1WnbwiUHhFmKbAPASjq2xHoF5iR602m6RA8ZuERJPTxVlh7Mr8oIjKDtxTprslY2oaBIE8/yRjGgGYE7TGq3E5skuUEhOlQhyiub+nTEucrJkGjO41Rz/ayTOUsDQWtcBwA6EiRr0WeusQtLC2N3cMlsspwy3pVHlzpj4xtodSVeXF62pTunDNDi2OBxGjQNwI5IOjYU7q1qW1QvaHhkltJzyMj2vH3SN2x6qpNopMWoUiab2sblfke2aTWGHQRIAEaHZUf6Rajqd1SA1ytYW6R+6Ygaf8AK0/aJ2aoCAfiB+Ejn4hZT9J1T/qmOAPwtjhIOgZyI0VsMqmm34/Yh1ENWNpK/wC0R1LvxVRSoXGIV229FpcSeEbNA51HnkB1/NNpUX1iJOVvQCSt/wBk7lto3LTpgZtXu3qOP8TuflsljccS1bOX29Tzul9nyTuar7noHZfA6dhbst2axxVHRBe8/E4/h0AAR944ACSBqBr1KqsOxkP30VhctLwMuXedRIhc8pO7fJ7cYrZcIY4eI38UHjOFi4pwDDwJY7l5H+Eo9zHeHt/snDZSnujcG4u0eRPuHUatRhBBaQCDyMIu1xgk5Rz0A5eJK0Xbvs8a7PtFEfrmDiA3qMGuX/ENx6heeYVV4s3gIUGj1cclkjfc9Nsa2x5o+q/O5j442aSPvNO4+hWYwu9iFoqBzQRy3VMWRwla9Tl6nCpJ36FnJcfBchTNiENXuWM3cB6r0DyRz3QowgK2M0htLj0aEM/FKj/hZl89StqLMuSDb4kc9F532wxIW4e4nXktjTqvJhxnmF4j+kHEHVbuoyeFhj1Wv8UJbszlzWNRxe7cmUxcXFAujddicdEChUO3wk9Fvqbui8KY8gggwRqCt12T7WbUqx12B6qsJdmTlHujd1ZUbgpmPDhIKf3Ycm0ZBmHVIglFi2Cc1oEADzRQAzbc7oy1pRquPqcguZyE6ET37+AnpquYRUG8dJ8UPmL5a7bbxUbSaQl2gHPl6rm6y9Ko7egUdb1On2NR9qACLsGE8Z/8fzWbwq8pVnQXtDWxmJcBJOzR1JWkdiVJvOfJpXnq2d2Wo7B4KkzKnOMs6O+Q/FMfjDT90+4W6l4HLa8SxubuNAqC9oGpzUz78Hkfl+aZ9sp8zHmCqxtGHT7lbUsK4Y6myo5od0cQR5HkqSt2cuydLquPKvUH4rZ03NdsQfIyn5VrWLSYungF2N7msf8APf8AmhX4I+o8CrUe/LOXO8vid4k6bD2W9cxUYH61GoNJBb9nWN5BWFHC2tVm1i7lRqDSD0qAbsrG1uSOaBq1mN+JwHrr7KNl+zlJ9I+qTdjpGjZWlOLlQsxOPu/NPONfwj+Y/kpOMvA3aLkled9s8AFB5uaQhjz+tA2a8/e8nH5+a1bcbHNns4Lta/o1WOY9pLXAtcCM0g77SsOMvAriyqErR51QrFsLR4TjEQCgP7GBJbSqBzdchIOo5T0PomUsMrNdEDzzCEo45SVpHe82HiTS+Zq7i4qPju3kCNdNfdVzrSXS4k+ZlSUrtlBkOIc7oDIVdd460A7DxJXrYVLQk0fPZ3B5JOPAZVrNp7IKrcucZLtOgMLMX3a23pk5n5j0GqzuIdvHHSmyPEqtpE0mz0K8xllrRrV3n4WkME6knYLwy5ruqPc927iXHzJlFYli9a4/vHEjcDkglGc7KRjRxcSXFMoJOBTE4IA2XZTtWaZFKqZGwK9JtK7XAEGQV4IFp+y3aWpRe1jzLCY15KsZ3syco90evZk0oahcB4DmmQVMHLbMCOhT+UrhC6DIhACojT5qr7WVMtAt/fcxvoNT9Fak9FVdpbUupZyfhOb0Oixlv3bZvFXvI2U3Z5zWPDicvjzE9I1nlp1W6NueZ9zr+KwuAXFtScK1d05f7uk1pc7N+87kPAE+KtLvtw39nQJ8ajv/AJbP1XmRlV7nvZehzT0qMHtz2Xy9O5ozTA5/ID6lKPP3H4BYmt2wuz8Ips/w05Pu4lA1O0d67eu70hn0AW/eoUfZHUd6X1/g9Eynof69FDWpA7z7lednGbjnc1P9Z4/FdbjlX/uX/wCsT+KXvhv2RlXMkb3uI1a4j5/17omjiNanvDx/7fn9VgKePXHKsXefH9QUdS7QXAEup5gNSe5qDTrIED2WveJ8ojP2dljxKP1r7nolpiVKqIBh37p0KrP2yzFv2loVIL2ub0e05x7jX5KwdiNPLn75mXbNm4vLJvmRt2ZCeHLB1ODXp/BqbvFKdOAOJ3QKqrXlepzyDoN/l+azFx2npU57thPV7zkHn1+iHqYzdvGZtN7WnUFttUgjrJBlGqK8ykejzS5qK83Rqm2w5kn109gp6VEDYe3/AAsBUv7o6l9b+WqwfIBC1LupzqVPVz/xS975F4+y2/8A0ienimeh+a6WdQfc/kvKXYgR+2cP80j8U+ljtZvw3Tx/nkj2JS955FP+HyPiaPU+7aeZ+R/JQ31uBTe7KXwM2VujjGvDPP1WAtu1l239sHeByO+cT81bWfbmoP7ylTd1LCWH5yj3hh+yuoi7SUq86+9fcu8MxGlUDXMOmuafiBjYhNxO+MHL7rKXOI021e+oNeA4y+m5oyzziDEfRaVsVGBw2cA4TvqF19C1pcfM4/a3TSxSjOmoyXflPwf7Ph9jLYhe1crjmMrBXt7Ve4hz3HXrot5i1KA5eeXfxu81ebPNgREri6uKRuhLiS4kaEkuJIGJJcldSA6E5NXQUxGp7NdrH247t8uZy6hbGy7XW1Td8ea8mTgqRyNE3BHt9riVOp8DwfVHM11leXdizBW9pPIG6rF2Taot3PyjRNzio1zHDcEEICje6wQrCiBuAirfkJukY61wig53EHHr+seB8itNh/Z/DzvQB/xPefq5Udw0sqOA5Ep9HEHNXj8Npn0KyOcV8T+pq3dmsOLSBa0QYMHLJB5brlpgFtpNtQERMUWH5kKkt8VIO6uLHFgdynYqlxyXlLDbYaChSHiKTB+ClNOkzhAaDps0BKg4OG6qLi4FOoc0T+HJNsmoWy2aRyITqlyAInU+KCtrkP2UjrRrSX7k7k6x4DoEWNxV7lBivZGzrE1Ax1J51LqTsgJ6lvwk+iylr2eD3PaKtQlri0CKYJA8cq9CvXllN726kAmOqocGp93ne7RzyXOncDokXx5ZQtJv6jLDs1RpAOFLNUlpDqru8Ig6wDoPQLVXFGo9kNMdfLos+3EiX+HJaO3uzkkCSmieVS2kynN7kPdAnT4uWqvLKuC2d1hsavXCuXhng4Imn2ic1ulNyEwyY1pVdzTXOKsaS1wHqAga95ScfgZ/K38lmq769d2bLHSU19vXaeIjL4bpOTsxojS8S0v6lu4QKdPxPdMJ+iq2YRQdq6lT8u7b89E+1p5jPIfVHgLu6TCmtcvT+f4PO6zO4vRD1Af7GtgQRQpyNR+rb+SsKQ0hPASpiF3bdjgt9zNY9RiV5hiAio7zXr+P0tCV5NjTIqFQyFsbAFyUiuFQLClJcXJQMRK4kUkgEuhMCcgBy6mrqAHBdTU4JiNn2JpTqtq8wFneyVvlpgq8rPXRHgg+SWzbLldMVbh1PSVZtC3Ewyvxawc8h7BJGjh1VHVb4QenNbJoUFWkwmcoJ6xquXN0ym9SdM68HVvGtLVpGNc6ArfDazIB5q4qYdSf8TR9CqO8wh1I5my5pOkDiHmuafTzgr5OzF1cJ7cM0FLGmUm6lZfEcUdXql+3IBSGwqOjgdr4Ie7sKlIglpHQjUKLhLlpnTHNC9mrfmX2EVqg3K09teAt1WGtr9zeU+SJOLuJyuBb7hI05J8moq3jQ12vVYy9v3FriOZKIvbgtEAE+EaoCg0xxNIHkk206ZWOlK1uD2OLlulRp81f2vaJkcLp8Oap3U2v0YJPQBQ2+APmXHLzjmqxg2tkcuXNG/iYbcX/AHlQuRlpVG52XaOFU2idSfErlSwB2JHzCpLo8lXsc667HxxXkHPxKmwKCrU72NCBuZUNCwa3iPEfHYeiKaFfD0lPVP6HNm6u1px/UVNsKQBdaE8BdpwiapIXGhODUAV+MMli8i7Rtip7r2PEWy2F5H2tZFT1Kll4K4ygK4urhXOdBxcSSSASSSagBJyakEIBy6CuJBADkTY08z2jxQqsMFP61qa5E+D03DaYZTA8FNuUyieEeQUtFvEF0HOW1qyAEaxQUhATy9bMEj6iVMJjQngoAlBXAU0uSYgCRq45dCaSmBE2i0ahok7mBKcQpu6/ib7rhpfxN90uBg5aDyTKtJpGoRfc/wATfdRvpb8TffVDp7MabW6AbdobIAA8guvbJlS0KUk8TffVSmgf3m8ua3tVGHb3B3O0UYRNSkQNwfIyomhDYDHLrQkVIAsjOtCka1NaFIECEAnJBJxQMEutV5d27ow+V6hVWB/SDQ0zLM1sbhyYBNK6VwrkOkSSSaUAJcXVxFgJdSSSAQTlxJMDqIsqmV7T4pJI7g+D0/C6+ZgPgrGy1MpJLpOZlu1yeCkktmB7U+UkkANJUzUkkAOlNSSQAiuJJIASYVxJMAageIogpJLQjhTXJJIkBG0KUBJJZGOaFIEkkAdCjqOSSQAI9yzXbG3z0Skkh8DXKPKnCE1cSXGdZxcKSSQCSSSSEf/Z"
                                                    alt="Live from space album cover"
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h6" component="div" className='text-center'>
                                                        About me: <br /> <Typography className='text-center'>     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea repudiandae, a voluptatibus repellat temporibus  </Typography>
                                                    </Typography>
                                                    <Typography >
                                                        <Typography variant="h6" component="div"> what he says about me: </Typography>"I am very satisfied to work with this freelancer. very talented and rigorous in his work."
                                                    </Typography>
                                                </CardContent>
                                                <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>

                                                    <Link style={{ cursor: 'pointer' }} underline="none">
                                                        <StarIcon ></StarIcon>
                                                        <StarIcon ></StarIcon>
                                                        <StarIcon ></StarIcon>
                                                        <StarIcon ></StarIcon>
                                                        <StarIcon ></StarIcon>
                                                    </Link>
                                                </CardActions>
                                            </Card>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </div>
                            <div className='col-3' style={{ marginLeft: '5%'}}>
                                <Grid >
                                    <Grid >
                                        <Paper elevation={0} sx={{ padding: '5%' }}>
                                            <Card sx={{ width: '300px', borderRadius: '2%', boxShadow: '5px 5px 5px 5px rgba(0, 0, 0, 0.1)' }}>
                                                <CardMedia
                                                    component="img"
                                                    style={{
                                                        borderRadius: '50%',
                                                        width: '150px',
                                                        height: '150px', marginTop: '5%', marginLeft: '25%'
                                                    }}
                                                    image="data:image/jpeg;base64,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"
                                                    alt="Live from space album cover"
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h6" component="div" className='text-center'>
                                                        About me: <br /> <Typography className='text-center'>     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea repudiandae, a voluptatibus repellat temporibus  </Typography>
                                                    </Typography>
                                                    <Typography >
                                                        <Typography variant="h6" component="div"> what he says about me: </Typography>"I am very satisfied to work with this freelancer. very talented and rigorous in his work."
                                                    </Typography>
                                                </CardContent>
                                                <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>

                                                    <Link style={{ cursor: 'pointer' }} underline="none">
                                                        <StarIcon ></StarIcon>
                                                        <StarIcon ></StarIcon>
                                                        <StarIcon ></StarIcon>
                                                        <StarIcon ></StarIcon>
                                                        <StarIcon ></StarIcon>
                                                    </Link>
                                                </CardActions>
                                            </Card>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </div>
                            <div className='col-3' style={{ marginLeft: '5%'}}>
                                <Grid >
                                    <Grid >
                                        <Paper elevation={0} sx={{ padding: '5%' }}>
                                            <Card sx={{ width: '300px', borderRadius: '2%', boxShadow: '5px 5px 5px 5px rgba(0, 0, 0, 0.1)' }}>
                                                <CardMedia
                                                    component="img"
                                                    style={{
                                                        borderRadius: '50%',
                                                        width: '150px',
                                                        height: '150px', marginTop: '5%', marginLeft: '25%'
                                                    }}
                                                    image="data:image/jpeg;base64,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"
                                                    alt="Live from space album cover"
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant="h6" component="div" className='text-center'>
                                                        About me: <br /> <Typography className='text-center'>     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea repudiandae, a voluptatibus repellat temporibus  </Typography>
                                                    </Typography>
                                                    <Typography >
                                                        <Typography variant="h6" component="div"> what he says about me: </Typography>"I am very satisfied to work with this freelancer. very talented and rigorous in his work."
                                                    </Typography>
                                                </CardContent>
                                                <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>

                                                    <Link style={{ cursor: 'pointer' }} underline="none">
                                                        <StarIcon ></StarIcon>
                                                        <StarIcon ></StarIcon>
                                                        <StarIcon ></StarIcon>
                                                        <StarIcon ></StarIcon>
                                                        <StarIcon ></StarIcon>
                                                    </Link>
                                                </CardActions>
                                            </Card>
                                        </Paper>
                                    </Grid>
                                </Grid>
                            </div>

                        </div>
                    </Container>
                ) : (
                    profiles.map(item =>
                        <Grid >
                            <Grid key={item.id} >
                                <Paper elevation={0} sx={{ padding: '5%' }}>
                                    <Card sx={{ width: '300px', borderRadius: '2%', boxShadow: '5px 5px 5px 5px rgba(0, 0, 0, 0.1)' }}>
                                        <CardMedia
                                            component="img"
                                            style={{
                                                borderRadius: '50%',
                                                width: '150px',
                                                height: '150px', marginTop: '5%', marginLeft: '25%'
                                            }}
                                            image={`${URL_SERVER}${item.photo}`}
                                            alt="Live from space album cover"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h6" component="div" className='text-center'>
                                                About me: <br /> <Typography className='text-center'> {item.description} </Typography>
                                            </Typography>
                                            <Typography >
                                                <Typography variant="h6" component="div"> what he says about me: </Typography>"I am very satisfied to work with this freelancer. very talented and rigorous in his work."
                                            </Typography>
                                        </CardContent>
                                        <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>

                                            <Link style={{ cursor: 'pointer' }} underline="none">
                                                <StarIcon ></StarIcon>
                                                <StarIcon ></StarIcon>
                                                <StarIcon ></StarIcon>
                                                <StarIcon ></StarIcon>
                                                <StarIcon ></StarIcon>
                                            </Link>
                                        </CardActions>
                                    </Card>
                                </Paper>
                            </Grid>
                        </Grid>
                    )
                )}
            </Carousel>
        </div>)
}

export default Carouselle
