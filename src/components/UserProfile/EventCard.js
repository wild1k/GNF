import React, { useState, useEffect } from 'react';
import API from '../../utils/API';
import 'antd/dist/antd.css';
import './index.css';
import { Card, Button, Row, Divider } from 'antd';
import { WhiteSpace } from 'antd-mobile';
// import renderEmpty from 'antd/lib/config-provider/renderEmpty';
// import { render } from '@testing-library/react';



export default function EventCard() {
  const [userEvent, setUserEvent] = useState([])
  useEffect(() => {
     API.getUserEvent().then(res => {
        setUserEvent(res.data);
        console.log(res.data);
     })
  }, [])
  const gridStyle = {
     width: '{50}%',
     textAlign: 'center',
  }
  const renderEvents = () => {
     return (
        userEvent.map((event) => {
           return (
              <div>
                 <Card.Grid name='event_time'>{event.event_category}</Card.Grid>
                 <Card.Grid name='event_location' type='vertical'>{event.event_location}</Card.Grid>
                 <Card.Grid name='meeting_spot' type='vertical'>{event.meeting_spot}</Card.Grid>
              </div>
           )
        })
       
     )
  }
   renderEvents();
  // deleteEvent= id =>{
  //   const eventsCopy = [...this.userEvent];
  //   const filteredEvents = eventsCopy.filter(userEvent=>{
  //      if(userEvent.id == idDelete){
  //         return true
  //      }else{
  //         return false;
  //      }
  //   })
  // }
  return (
     // UserEvent.map(e =>{
     //    e.event_category
     // }
     <Card>
        {userEvent.map(event => {
           return (
              <Row align='bottom' justify='center'>
                 <Card name='event_name'>{event.event_category}
                    <div>
                       <Card.Grid name='event_time'>{event.event_category}</Card.Grid>
                       <Card.Grid name='event_location' type='vertical'>{event.event_location}</Card.Grid>
                       <Card.Grid name='meeting_spot' type='vertical'>{event.meeting_spot}</Card.Grid>
                       
                    </div>
                    <Divider></Divider>
                    <Button style={gridStyle}>Edit Event</Button>
                    <Button style={gridStyle}>Chat</Button>
                    <Button style={gridStyle}>Delete Event</Button>
                    <WhiteSpace />
                 </Card>
              </Row>
           )
        })}
        {/* <Row align=‘bottom’ justify=‘center’>
 <Card name=‘event_name’ title=“Event Name”>
  {renderEvents()} */}
        {/* {UserEvent.map(e =>{
          <h1> e.event_category</h1>
        })}  */}
        {/* <Card.Grid  name=‘event_time’>{event_category}</Card.Grid> */}
        {/* <Card.Grid name=‘event_location’ type=‘vertical’>{event_location}</Card.Grid> */}
        {/* <Card.Grid name=‘meeting_spot’ type=‘vertical’>{meeting_spot}</Card.Grid> */}
        {/* <Divider></Divider>
   <Button style={gridStyle}>Edit Event</Button>
   <Button style={gridStyle}>Chat</Button>
   <Button style={gridStyle}>Delete Event</Button>
  <WhiteSpace/>
 </Card>
 </Row> */}
     </Card>
  )
}
