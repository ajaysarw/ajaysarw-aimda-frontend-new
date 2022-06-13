import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class DealerSearch extends Component {
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
         <h1>Enter Details</h1>
            <TextField
              placeholder="Name of the Firm"
              label="Name of the Firm"
              onChange={handleChange('firmName')}
              defaultValue={values.firmName}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Dealer Name"
              label="Enter Dealer Name"
              onChange={handleChange('dealerName')}
              defaultValue={values.dealerName}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter gstNum"
              label="gstNum"
              onChange={handleChange('gstNum')}
              defaultValue={values.gstNum}
              margin="normal"
              fullWidth
            />
            <TextField
              placeholder="Enter mobile"
              label="mobile"
              onChange={handleChange('mobile')}
              defaultValue={values.mobile}
              margin="normal"
              fullWidth
            />
            <TextField
              placeholder="Enter address"
              label="address"
              onChange={handleChange('address')}
              defaultValue={values.address}
              margin="normal"
              fullWidth
            />
               <TextField
              placeholder="Enter pin"
              label="pin"
              onChange={handleChange('pin')}
              defaultValue={values.address}
              margin="normal"
              fullWidth
            />
               <TextField
              placeholder="Enter totalStore"
              label="totalStore"
              onChange={handleChange('totalStore')}
              defaultValue={values.totalStore}
              margin="normal"
              fullWidth
            />

             <TextField
              placeholder="Enter dateOfBirth"
              label="dateOfBirth"
              onChange={handleChange('dateOfBirth')}
              defaultValue={values.dateOfBirth}
              margin="normal"
              fullWidth
            />        



            <br />
            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>
            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>         
        </>
     
    );
  }
}

export default DealerSearch;
