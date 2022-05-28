import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import { Form, Container, Col, Row } from "react-bootstrap";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const initialState = {
  name: "",
  email: "",
  phone: "",
};

export class FormUserDetails extends Component {
  state = initialState;
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // this.props.nextStep();
    // console.log(this.state);
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
    }
  };
  validate = () => {
    let val = 1;
    this.state.nameError = "";
    this.state.phoneError = "";
    if (!this.setState.nameError) {
      this.setState({ nameError: "Please Enter your name" });
      val = 0;
    }
    if (!this.setState.phoneError) {
      this.setState({ nameError: "Please Enter your number" });
      val = 0;
    }
    // elseif(!this.setState.phoneError.length>9 ){
    //   this.setState({ nameError: "Please Enter  10 digit number" });
    //   val = 0;
    // }
    return val;
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Container >
            <Row>
              <Col lg={6}></Col>
              <Col lg={6} className="mb-4 mt-3">
                <h3 className="mt-4 mb-3">Signup</h3>
                <Form>
                  <Col md={10}>
                    <AppBar title="Enter User Details" />
                    <TextField
                      name="name"
                      value={this.state.name}
                      placeholder="Enter Your Name"
                      label="Name"
                      onChange={handleChange("Name")}
                      defaultValue={values.Name}
                      margin="normal"
                      fullWidth
                    />
                    <br />
                    <div
                      className="invalid-feedback d-block"
                      style={{ color: "red" }}
                    >
                      {!this.state.name ? (
                        <small className="form-alert">
                          {this.state.nameError}
                        </small>
                      ) : null}
                    </div>{" "}
                    <TextField
                      name="number"
                      value={this.state.number}
                      placeholder="Enter Your Phone Number"
                      label="Number"
                      onChange={handleChange("number")}
                      defaultValue={values.number}
                      margin="normal"
                      fullWidth
                    />
                    <br />
                    <div
                      className="invalid-feedback d-block"
                      style={{ color: "red" }}
                    >
                      {!this.state.number ? (
                        <small className="form-alert">
                          {this.state.numberError}
                        </small>
                      ) : null}
                    </div>{" "}
                    <TextField
                      placeholder="Enter Your Pin"
                      label="PIN"
                      onChange={handleChange("otp")}
                      defaultValue={values.otp}
                      margin="normal"
                      fullWidth
                    />
                    <br />
                    <div className="invalid-feedback d-block">
                      {this.state.emailError}
                    </div>
                    <Button
                      color="primary"
                      variant="contained"
                      onClick={this.continue}
                    >
                      Continue
                    </Button>
                  </Col>
                </Form>
              </Col>
            </Row>
          </Container>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;
