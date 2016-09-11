import React from 'react';
import {mount} from 'react-mounter';
import {Homepagelayout} from './layouts/Homepagelayout.jsx';
import Homepage from './components/Homepage.jsx';
import {Signuplayout} from './layouts/Signuplayout.jsx';
import Signup from './components/Signup.jsx';
import {Signinlayout} from './layouts/Signinlayout.jsx';
import Signin from './components/Signin.jsx';
import {Dashboardlayout} from './layouts/Dashboardlayout.jsx';
import Dashboard from './components/Dashboard.jsx';

FlowRouter.route('/', {
  action(){
    mount(Homepagelayout, {
      content: (<Homepage/>)
    })
  }
});

FlowRouter.route('/signup', {
  name: 'signup',
  action(){
    if(Meteor.userId()){
      FlowRouter.go('dashboard');
    }
    mount(Signuplayout, {
      content: (<Signup/>)
    })
  }
});

FlowRouter.route('/signin', {
  name: 'signin',
  action(){
    if(Meteor.userId()){
      FlowRouter.go('dashboard');
    }
    mount(Signinlayout, {
      content: (<Signin/>)
    })
  }
});




FlowRouter.route('/dashboard', {
  name: 'dashboard',
  action(){
    mount(Dashboardlayout, {
      content: (<Dashboard/>)
    })
  }
});
