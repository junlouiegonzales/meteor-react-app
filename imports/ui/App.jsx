import React from 'react';
import { Hello } from './Hello.jsx';
import { Info } from './Info.jsx';
import {AppForm} from './AppForm';

export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <Hello/>
    <Info/>
    <AppForm />
  </div>
);
