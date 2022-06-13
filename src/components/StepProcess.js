import React, { Component } from 'react';



export class StepProcess extends Component {

  render() {
    const { step } = this.props;
    console.log(step);
    return ( 
       
    <div>
      <span className={"step " + (step==3 || step==4? 'finish' : '')} > </span>
      <span className={"step " + (step==4 || step==5 ? 'finish' : '')} > </span>
      <span className={"step " + (step==5 ? 'finish' : '')} > </span>      
    </div>
    
    )
  }
}

export default StepProcess;
