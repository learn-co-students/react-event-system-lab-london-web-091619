// Code EyesOnMe Component Here
import React, {Component} from 'react';

class EyesOnMe extends Component (){
 eyeFocus () { 
     console.log('Good!')
 }


 eyeBlur () { 
     console.log("Hey! Eyes on me!")
 }

 render(){ 
     return < button onFocus={this.eyeFocus} onBlur={this.eyeBlur}></button>
 }
}






export default EyesOnMe ; 
