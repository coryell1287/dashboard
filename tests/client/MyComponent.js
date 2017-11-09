import React, { Component } from 'react';
import Foo from './Foo'

export default class MyComponent extends Component {
   render(){
     return (
       <div>
         <Foo/>
         <Foo/>
         <Foo/>
       </div>
     );
   }
}
