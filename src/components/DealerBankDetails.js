import React, { Component } from 'react';
// import input type="text" from '@material-ui/core/input type="text"';
import Button from '@material-ui/core/Button';

export class DealerBankDetails extends Component {
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

        <h1>Enter Bank  Details </h1>
        <p> <input type="text"
          placeholder="Bank Name"
          label="Bank Name"
          onChange={handleChange('bankName')}
          defaultValue={values.bankName}
          margin="normal"

        />
        </p>
        <p> <input type="text"
          placeholder="Enter Branch"
          label="Enter Branch"
          onChange={handleChange('bankBranch')}
          defaultValue={values.bankBranch}
          margin="normal"

        />  </p>
        <p> <input type="text"
          placeholder="Enter IFSC Code"
          label="City"
          onChange={handleChange('ifcsCode')}
          defaultValue={values.ifcsCode}
          margin="normal"

        />
        </p>
        <p> <input type="text"
          placeholder="Enter Account Number"
          label="Enter Account Number"
          onChange={handleChange('bankAccountNum')}
          defaultValue={values.bankAccountNum}
          margin="normal"

        />  </p>
        <p> <input type="text"
          placeholder="Enter UPI Id"
          label="Enter UPI Id"
          onChange={handleChange('upiId')}
          defaultValue={values.upiId}
          margin="normal"

        />   </p>
     
        <p> <input type="text"
          placeholder="Enter Adahar Number"
          label="Enter Adahar Number"
          onChange={handleChange('aadharNum')}
          defaultValue={values.aadharNum}
          margin="normal"

        />  </p>

        <p> <input type="text"
          placeholder="Enter PAN Number"
          label="Enter PAN Number"
          onChange={handleChange('panNum')}
          defaultValue={values.panNum}
          margin="normal"
        />
        </p>
       
        <Button
          color="secondary"
          variant="contained"
          onClick={this.back}
        >Back</Button>
        &nbsp;
        <Button
          color="primary"
          variant="contained"
          onClick={this.continue}
        >Continue</Button>

      </>
    );
  }
}

export default DealerBankDetails;
