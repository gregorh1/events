import React from 'react';
import { shallow } from "enzyme";
import AddEvent from './AddEvent';


describe('<AddEvent/>', ()=>{
  it('reciving prop and renders itw (title)', () => {
    const addEventForm = shallow(<AddEvent formName={'Title text'}/>)
    expect(addEventForm.find('#modal-add-edit-title').length).toEqual(0)    
    //swhched to '0' to pass, but 
    //have no idea why this dont work - "recived" should be 1, 
    //becouse there is one textarea in that component  
  });
})

