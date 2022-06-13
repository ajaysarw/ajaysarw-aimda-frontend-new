import React, { Component } from 'react';
import DealerDetails from './DealerDetails';
import DealerBankDetails from './DealerBankDetails';
import Confirm from './Confirm';
import Success from './Success';
import Welcome from './Welcome';
import StepProcess from './StepProcess';

export class UserForm extends Component {
  state = {
    step: 1,
    firmName: '',
    dealerName: '',
    gstNum: '',
    mobile: '',
    address: '',
    pin: '',
    totalStore: '',
    dateOfBirth: '',
    bankName: '',
    ifcsCode: '',
    upiId: '',
    bankAccountNum: '',
    bankBranch: '',
    aadharNum: '',
    panNum: ''
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step, firmName, dealerName, gstNum, mobile, address, pin, totalStore, dateOfBirth, password, confirmPassword, bankName, ifcsCode, upiId, bankAccountNum, bankBranch, aadharNum, panNum } = this.state;
    const values = { firmName, dealerName, gstNum, mobile, address, pin, totalStore, dateOfBirth, password, confirmPassword, bankName, ifcsCode, upiId, bankAccountNum, bankBranch, aadharNum, panNum };

    switch (step) {
      case 1:
        return (
          <>
           {/* <form className='regForm textAlignCener'> */}
            <Welcome
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
            {/* <StepProcess></StepProcess>
            </form> */}
          </>

        );
      case 2:
        return (
          <>
            <form className='regForm textAlignCener'>
            <DealerDetails
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
            <StepProcess className="step" step={step}></StepProcess>
            </form>
          </>
        );
      case 3:
        return (
          <>
           <form className='regForm textAlignCener'>
            <DealerBankDetails
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
            <StepProcess  className="step" step={step}></StepProcess>
            </form>
          </>
        );

      case 4:
        return (
          <>
             <form className='regForm textAlignCener'>
            <Confirm
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              values={values}
            />
            <StepProcess  className="step" step={step}></StepProcess>
            </form>
          </>
        );
      case 5:
        return <Success />;
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default UserForm;
