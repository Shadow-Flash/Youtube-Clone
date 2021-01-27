import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  renderInput({ input, label, meta }) {
    return (
      <div className="field">
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        <div>{meta.error}</div>
      </div>
    );
  }

  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form"
      >
        <Field name="title" component={this.renderInput} label="Enter Title:" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const Validate = (formValues) => {
  const error = {};
  if (!formValues.title) {
    error.title = "You Must enter A title";
  }

  if (!formValues.description) {
    error.description = "You must enter description";
  }

  return error;
};

export default reduxForm({
  form: "streamCreate",
  validate: Validate,
})(StreamCreate);
