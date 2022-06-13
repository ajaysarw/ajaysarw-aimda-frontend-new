import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Labels,ButtonLabels } from  '../AppConstants';

export class Welcome extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
        <>
         
         <form className='regForm textAlignCener'>
            <h1>{ Labels.WELCOME_MESSAGE} </h1>            
            <div>
            <img src={process.env.PUBLIC_URL + '/indian-flag.png'} width="200px"/>;
            </div>
            <div>
            <h3> {Labels.APP_HEADLINE} </h3>            
            <Button color="primary" variant="contained" onClick={this.continue}>{ButtonLabels.CONTINUE}</Button>         
           </div>
           </form>
         
        </>    
    );
  }
}

export default Welcome;
