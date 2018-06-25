import { hourToMiliseconds, isStartBeforEnd } from './App.logic'


describe('App.logic', () => {
  it('converts hour to milisecunds', () => {
    expect(hourToMiliseconds('1:10')).toEqual(4200000)
  });

  it('checks if start is befor end in form', () => {
    expect(isStartBeforEnd(
      {
        startInt: 1529661600000,
        endInt: 1529661600000,
        startHour: '11:00',
        endHour: '12:00',
      }
    )).toBeTruthy()
  })

  it('checks if start is befor end in form', () => {
    expect(isStartBeforEnd(
      {
        startInt: 1529661600000,
        endInt: 1529661600000,
        startHour: '13:00',
        endHour: '12:00',
      }
    )).toBeFalsy()
  })



})

