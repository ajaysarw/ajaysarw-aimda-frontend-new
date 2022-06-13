import React, { Component } from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import { endPoints } from '../AppConstants';

export class Confirm extends Component {
 
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
 

  submitFormData = () => {
    const { firmName, dealerName, gstNum, mobile, address, pin, totalStore, dateOfBirth, password, bankName, ifcsCode, upiId,bankAccountNum, bankBranch, aadharNum, panNum } =  this.props.values;    
    const url = endPoints.userRegistrationProd;

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firmName, dealerName, gstNum, mobile, address, pin, totalStore, dateOfBirth, password, bankName, ifcsCode, upiId,bankAccountNum, bankBranch, aadharNum, panNum })
    };

    fetch(url, requestOptions)
      .then(response => {
        // setIsLoading(false);
        if (response.ok) {
          // setFormSubmittedSuccess(true)
          this.props.nextStep();
        } else {
          let errorMessage = (response.statusText) ? response.statusText : "There is something wrong. Please try again"
          // setErrorMessage(errorMessage);
          console.log(errorMessage);
        }

      })
      .catch(error => {
        console.log(error);
        //setIsLoading(false);
        //setErrorMessage("There is something wrong. Please try again")
      })
  };

  render() {
    const { values: { firmName, dealerName, gstNum, mobile, address, pin, totalStore, dateOfBirth, bankName, ifcsCode, upiId,bankAccountNum, bankBranch, aadharNum, panNum  }} = this.props;

    return (
     
        <> 
         
         <h1> Review Your Details </h1>
            <List>
              <ListItem>
                <ListItemText primary="Firm Name: " secondary={firmName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Last Name: " secondary={dealerName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="GST Number: " secondary={gstNum} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Mobile: " secondary={mobile} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Address: " secondary={address} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Pincode: " secondary={pin} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Total Number of Store: " secondary={totalStore} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Date of Birth: " secondary={dateOfBirth} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Bank Name: " secondary={bankName} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Bank Branch: " secondary={bankBranch} />
              </ListItem>
              <ListItem>
                <ListItemText primary="IFSC Code: " secondary={ifcsCode} />
              </ListItem>              
              <ListItem>
                <ListItemText primary="Bank Account Number: " secondary={bankAccountNum} />
              </ListItem>
              <ListItem>
                <ListItemText primary="UPI Id: " secondary={upiId} />
              </ListItem>              
              <ListItem>
                <ListItemText primary="Aadhar Number: " secondary={aadharNum} />
              </ListItem>
              <ListItem>
                <ListItemText primary="PAN Number: " secondary={panNum} />
              </ListItem>

                  

            </List>
            
            <br />

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>
            &nbsp;
            <Button
              color="primary"
              variant="contained"
              onClick={this.submitFormData}
            >Confirm & Continue</Button>
          
          
        </>
     
    );
  }
}

export default Confirm;
