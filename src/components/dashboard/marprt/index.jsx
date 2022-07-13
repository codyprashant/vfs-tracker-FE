import React, { Fragment, useEffect, useState } from 'react';

import Breadcrumb from '../../../layout/breadcrumb'
import {Container,Row,Col,Card,CardBody, Table} from 'reactstrap';
// import { Container, Row, Col, Card, CardBody, CardHeader, Table } from 'reactstrap'
import {getSlotsData} from '../../../Actions/SlotsAction'
import { toast } from 'react-toastify'

const  Sample = (props) => {
  const [slotsData, setSlotsData] = useState([])
  const [loader, setLoader] = useState(true)
  useEffect(() => {
    getAllData () 
 },[])

 async function getAllData () {
   // setisActive(true)
   let source = "Morocco"
   let destination = "Portugal"
   const response = await getSlotsData(source, destination);
   if(response.status === 'SUCCESS'){
     setSlotsData(response.message);
     setLoader(false)
   } else{
     toast.error("Something Went wrong")
   }
 }

 const formatDate = (checkDate) => {
  let formattedDate = new Date(checkDate).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'});
    return formattedDate;
 }

    return (
         <Fragment>
         <Breadcrumb parent="Dashboard" title="Morocco - Portugal Slots"/>
          <Container fluid={true}>
            <Row>
              <Col xl="12">
                <Card>
                  <CardBody>
                    <div className="best-seller-table responsive-tbl">
                      <div className="item">
                        <div className="table-responsive product-list">
                          <Table borderless>
                            <thead>
                              <tr>
                                <th>{"Location Name"}</th>
                                <th>{"Category"}</th>
                                <th>{"Sub-Category"}</th>
                                <th>{"Status"}</th>
                                <th>{"Slots"}</th>
                                <th>{"Slot Timings"}</th>
                                <th>{"Last checked(IST)"}</th>
                                {/* <th>{"History"}</th> */}
                              </tr>
                            </thead>
                            <tbody>
                            {
                          loader ? <div className="loader-box"><div className="loader-30"></div></div> : 
                          slotsData.map((slot, i) => { return <tr key={i}>
                                <td width="25%">{slot.locationName}</td>
                                <td width="15%">{slot.category}</td>
                                <td width="10%">{slot.subCategory}</td>
                                <td width="15%">{slot.availbilityRes}</td>
                                <td width="8%">{slot.availbileSlots}</td>
                                <td width="12%">{slot.availbileTime}</td>
                                <td width="15%">{formatDate(slot.recordChecked)}</td>
                                {/* <td width="100px">{"Test"}</td> */}
                              </tr>
                          })
                        }                              
                            </tbody>
                          </Table>
                        </div>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>   
         </Fragment> 
    );
}

export default Sample;