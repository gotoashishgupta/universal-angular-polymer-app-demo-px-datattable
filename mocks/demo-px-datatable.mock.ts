import { List } from 'immutable';
export const DATATABLE_ITEMS: List<{}> = List<{}>([
  {
    color: 'green', date: 10, first: 'Valentine', last: 'Meyer', email: 'valentinemeyer@scentric.com', open: true
  },
  {
    color: 'red', date: 50, first: 'Silva', last: 'Alexander', email: 'silvaalexander@gmail.com', open: false
  },
  {
    color: 'blue', date: 30, first: 'Hopkins', last: 'Wong', email: 'hopkinswong@hotmail.com', open: false
  },
  {
    color: 'white', date: 20, first: 'Joe', last: 'Sherman', email: 'joejoe@yahoo.com', open: true
  },
  {
    color: 'gray', date: 40, first: 'Jane', last: 'Bartlett', email: 'jane@scentric.com', open: false
  }
]);


export const DATATABLE_ITEMS_COLDEFS: List<{}> = List<{}>([
  {
    name: 'last',
    type: 'dropdown',
    dropdownItems: [
      { key: '1', val: 'iPhone' },
      { key: '2', val: 'Android' },
      { key: '3', val: 'Blackberry' },
      { key: '4', val: 'Windows Phone' },
      { key: '5', val: 'Flip Phone', disabled: true }
    ]
  },
  {
    name: 'color',
    type: 'dropdown',
    dropdownItems: [
      { key: '1', val: 'green' },
      { key: '2', val: 'red' },
      { key: '3', val: 'blue', disable: true },
      { key: '4', val: 'white' },
      { key: '5', val: 'gray', disabled: true }
    ]
  }
]);
