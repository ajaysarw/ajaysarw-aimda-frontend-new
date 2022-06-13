import React, { Component } from 'react';
import { FormConstants } from "../AppConstants"
import Button from '@material-ui/core/Button';
import { Labels, ButtonLabels } from '../AppConstants'

export class DealerDetails extends Component {
  continue = e => {
    console.log(this.props)
    if(this.props.values.password !== this.props.values.confirmPassword) {
      console.log(this.props)
      alert("Password and Confirm password are not same");
      return false;
    } else {
      e.preventDefault();
      this.props.nextStep();
    }
    
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };


  render() {
    const { values, handleChange } = this.props;

    return (
      <>
        {/* <div className="container"> */}

        {/* <form className='regForm textAlignCener'> */}
        <div className="tab">
          <h1>Enter Dealer Details</h1>


          <p> <input type="text"
            placeholder={FormConstants.FIRM_NAME}
            label={FormConstants.FIRM_NAME}
            onChange={handleChange('firmName')}
            defaultValue={values.firmName}
            required

          /> </p>

          <p> <input type="text"
            placeholder={FormConstants.DEALER_NAME}
            label={FormConstants.DEALER_NAME}
            onChange={handleChange('dealerName')}
            defaultValue={values.dealerName}
           required

          /></p>

          <p> <input type="text"
            placeholder={FormConstants.ENTER_GST_NUMBER}
            label={FormConstants.ENTER_GST_NUMBER}
            onChange={handleChange('gstNum')}
            defaultValue={values.gstNum}
           required

          /></p>

          <p> <input type="text"
            placeholder={FormConstants.ENTER_MOBILE}
            label={FormConstants.ENTER_MOBILE}
            onChange={handleChange('mobile')}
            defaultValue={values.mobile}
           required

          /></p>

          <p> <input type="text"
            placeholder={FormConstants.ENTER_ADDRESS}
            label={FormConstants.ENTER_ADDRESS}
            onChange={handleChange('address')}
            defaultValue={values.address}
           required

          /></p>

          <p> <input type="text"
            placeholder="Enter Pincode"
            label="Enter Pincode"
            onChange={handleChange('pin')}
            defaultValue={values.pin}
           required

          /></p>

          <p> <input type="text"
            placeholder="Enter total number of Stores"
            label="Enter total number of Stores"
            onChange={handleChange('totalStore')}
            defaultValue={values.totalStore}
           required

          /></p>

          <p> <input type="password"
            placeholder="Enter Date of Birth"
            label="Enter Date of Birth"
            onChange={handleChange('dateOfBirth')}
            defaultValue={values.dateOfBirth}
           required autoComplete='false'
          /></p>
          <p> <input type="text"
            placeholder="Enter Password"
            label="Enter Password"
            onChange={handleChange('password')}
            defaultValue={values.password}
           required
          /></p>
          <p> <input type="password"
            placeholder="Confirm Password"
            label="Confirm Password"
            onChange={handleChange('confirmPassword')}
            defaultValue={values.confirmPassword}
           required
          /></p>

          <Button color="secondary" variant="contained" onClick={this.back}>Back</Button>
          &nbsp;
          <Button color="primary" variant="contained" onClick={this.continue}>{ButtonLabels.CONTINUE}</Button>
        </div>
      </>
    );
  }
}

export default DealerDetails;
