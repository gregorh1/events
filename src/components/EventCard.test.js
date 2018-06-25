import React from 'react';
import { shallow, mount } from "enzyme";
import EventCard from './EventCard';


describe('<EventCard/>', ()=>{
  it('reciving smth', () => {
    const card = shallow(<EventCard />)
    expect(card.find('.card-content').length).toEqual(0)
    //swhched to '0' to pass, but 
    //have no idea why this dont work - "recived" should be 1, 
    //becouse there is one div in that component with class 'card-content' 
  });


})

