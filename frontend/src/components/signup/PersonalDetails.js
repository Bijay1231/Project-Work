import React, { Component } from "react";
import InputLabel from "@material-ui/core/InputLabel";
import { Link } from "react-router-dom";
import { Form, Container, Col, Row } from "react-bootstrap";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const initialState = {
  gender: "",
  age: "",
  heightFeet: "",
  heightInches: "",
  weight: "",
  physicalActivity: "",
  occupation: "",
  medicalCondition: "",
  waterIntake: "",
  sleep: "",
  genderError: "",
  ageError: "",
  heightFeetError: "",
  heightInchesError: "",
  weightError: "",
  physicalActivityError: "",
  occupationError: "",
  medicalConditionError: "",
  waterIntakeError: "",
  sleepError: "",
};
export class PersonalDetails extends Component {
  state = initialState;

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // this.props.nextStep();
    // console.log(this.state);
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // Clear Form
      this.setState(initialState);
    }
  };
  validate = () => {
    let val = 1;
    this.state.genderError = "";
    this.state.ageError = "";
    this.state.heightFeetError = "";
    this.state.heightInchesError = "";
    this.state.weightError = "";
    this.state.physicalActivityError = "";
    this.state.occupationError = "";
    this.state.medicalConditionError = "";
    this.state.waterIntakeError = "";
    this.state.sleepError = "";

    if (!this.state.gender) {
      this.setState({ genderError: "Select Your Gender" });
      val = 0;
    }
    if (!this.state.age) {
      this.setState({ ageError: " Age cannot be blank" });
      val = 0;
    }
    if (!this.state.heightInches) {
      this.setState({ heightInchesError: "Height in Inches cannot be blank" });
      val = 0;
    }
    if (!this.state.heightFeet) {
      this.setState({ heightFeetError: "Height in Feet cannot b)e blank" });
      val = 0;
    }
    if (!this.state.physicalActivity) {
      this.setState({
        physicalActivityError: " Physical Activit)y cannot be blank",
      });
      val = 0;
    }
    if (!this.state.weight) {
      this.setState({ weightError: "Weight cannot be blank" });
      val = 0;
    }
    if (!this.state.occupation) {
      this.setState({ occupationError: "Select Your occupation" });
      val = 0;
    }
    if (!this.state.medicalCondition) {
      this.setState({
        medicalConditionError: "Medical Condition cannot be blank",
      });
      val = 0;
    }
    if (!this.state.waterIntake) {
      this.setState({ waterIntakeError: "Water Intake cannot be) blank" });
      val = 0;
    }
    if (!this.state.sleep) {
      this.setState({ sleepError: "total sleeping timing  canno)t be blank" });
      val = 0;
    }
    return val;
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  //   handleChange = (e) => {
  //     [e.target.name] = e.target.value;
  //   };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Container>
            <Row>
              <Col lg={6} sm={12} className="mb-4">
                <Form>
                  <h3 className="mt-3 p-2">Personal Details</h3>
                  <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                  <Form.Group>
                    <Form.Control
                      as="select"
                      className="person-detail-form-control"
                    >
                      <option>Small select</option>
                      <option>Small select</option>
                      <option>Small select</option>
                    </Form.Control>
                  </Form.Group>
                  <div
                    className="invalid-feedback d-block"
                    style={{ color: "red" }}
                  >
                    {this.state.genderError}
                  </div>
                  <TextField
                    name="age"
                    value={this.state.age}
                    placeholder="Enter Your Age"
                    label="Age"
                    onChange={this.handleChange}
                    defaultValue={values.age}
                    margin="normal"
                    fullWidth
                  />
                  <div
                    className="invalid-feedback d-block"
                    style={{ color: "red" }}
                  >
                    {!this.state.age ? (
                      <small className="form-alert">
                        {this.state.ageError}
                      </small>
                    ) : null}
                  </div>{" "}
                  <br />
                  <TextField
                    name="heightInches"
                    value={this.state.heightInches}
                    placeholder=" height (inches)"
                    label="Height(inches)"
                    onChange={this.handleChange}
                    defaultValue={values.heightInches}
                    margin="normal"
                    fullWidth
                  />
                  <div
                    className="invalid-feedback d-block"
                    style={{ color: "red" }}
                  >
                    {!this.state.heightInches ? (
                      <small className="form-alert">
                        {this.state.heightInchesError}
                      </small>
                    ) : null}
                  </div>{" "}
                  <br />
                  <TextField
                    name="heightFeet"
                    value={this.state.heightFeet}
                    placeholder=" height (feet)"
                    label="Height(feet)"
                    onChange={this.handleChange}
                    defaultValue={values.heightFeet}
                    margin="normal"
                    fullWidth
                  />
                  <div
                    className="invalid-feedback d-block"
                    style={{ color: "red" }}
                  >
                    {!this.state.heightFeet ? (
                      <small className="form-alert">
                        {this.state.heightFeetError}
                      </small>
                    ) : null}
                  </div>{" "}
                  <br />
                </Form>
              </Col>
              <Col lg={6} sm={12}>
                <Form>
                  <TextField
                    name="weight"
                    value={this.state.weight}
                    placeholder="Weight"
                    label="Weight"
                    onChange={this.handleChange}
                    // defaultValue={values.weight}
                    margin="normal"
                    fullWidth
                  />
                  <div
                    className="invalid-feedback d-block"
                    style={{ color: "red" }}
                  >
                    {!this.state.weight ? (
                      <small className="form-alert">
                        {this.state.weightError}
                      </small>
                    ) : null}
                  </div>
                  <br />
                  <Row>
                    <Col md={6} sm={12}>
                      <InputLabel id="demo-simple-select-label">
                        Physical Activity
                      </InputLabel>
                      <Form.Group>
                        <Form.Control
                          as="select"
                          className="person-detail-form-control"
                        >
                          <option>Small select</option>
                          <option>Small select</option>
                          <option>Small select</option>
                        </Form.Control>
                      </Form.Group>

                      <div
                        className="invalid-feedback d-block"
                        style={{ color: "red" }}
                      >
                        {!this.state.physicalActivity ? (
                          <small className="form-alert">
                            {this.state.physicalActivityError}
                          </small>
                        ) : null}
                      </div>
                      <br />
                    </Col>

                    <Col md={6} sm={12}>
                      <InputLabel id="demo-simple-select-label">
                        Occupation
                      </InputLabel>
                      <Form.Group>
                        <Form.Control
                          as="select"
                          className="person-detail-form-control"
                        >
                          <option>Small select</option>
                          <option>Small select</option>
                          <option>Small select</option>
                        </Form.Control>
                      </Form.Group>

                      <div
                        className="invalid-feedback d-block"
                        style={{ color: "red" }}
                      >
                        {!this.state.occupation ? (
                          <small className="form-alert">
                            {this.state.occupationError}
                          </small>
                        ) : null}
                      </div>
                    </Col>
                  </Row>

                  <TextField
                    name="medicalCondition"
                    value={this.state.medicalCondition}
                    label="Medical Condition"
                    placeholder="Medical Condition"
                    onChange={this.handleChange}
                    defaultValue={values.medical}
                    margin="normal"
                    fullWidth
                  />

                  <div
                    className="invalid-feedback d-block"
                    style={{ color: "red" }}
                  >
                    {!this.state.medicalCondition ? (
                      <small className="form-alert">
                        {this.state.medicalConditionError}
                      </small>
                    ) : null}
                  </div>
                  <br />
                  <TextField
                    name="waterIntake"
                    value={this.state.waterIntake}
                    placeholder="Water Intake/Day"
                    label="Water Intake"
                    onChange={this.handleChange}
                    defaultValue={values.waterIntake}
                    margin="normal"
                    fullWidth
                  />

                  <div
                    className="invalid-feedback d-block"
                    style={{ color: "red" }}
                  >
                    {!this.state.waterIntake ? (
                      <small className="form-alert">
                        {this.state.waterIntakeError}
                      </small>
                    ) : null}
                  </div>
                  <br />
                  <TextField
                    name="sleep"
                    value={this.state.sleep}
                    placeholder="Sleep"
                    label="Sleep"
                    onChange={this.handleChange}
                    defaultValue={values.sleep}
                    margin="normal"
                    fullWidth
                  />
                  <br />
                  <div
                    className="invalid-feedback d-block"
                    style={{ color: "red" }}
                  >
                    {!this.state.sleep ? (
                      <small className="form-alert">
                        {this.state.sleepError}
                      </small>
                    ) : null}
                  </div>
                  <Link to={"/foodtype"}>
                    <Button className="mr-3">Back</Button>
                  </Link>
                  <Button
                    color="primary"
                    variant="contained"
                    // onClick={}
                    onClick={this.handleSubmit}
                  >
                    Submit
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </>
      </MuiThemeProvider>
    );
  }
}

export default PersonalDetails;
