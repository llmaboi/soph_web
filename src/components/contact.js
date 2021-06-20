import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { init, sendForm } from 'emailjs-com';
init('user_QIalg8admsGfnHMvGnkM2');

// eslint-disable-next-line
const validEmailRegex = RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/);
const validWebsiteRegex = RegExp(
  '(http|https)://[w-]+(.[w-]+)+([w.,@?^=%&amp;:/~+#-]*[w@?^=%&amp;/~+#-])?'
);

const noFormErrors = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    // if we have an error string set valid to false
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
};

const verifyRequiredFields = (stateValues) => {
  let valid = true;
  if (!stateValues.first_name) {
    valid = false;
  } else if (!stateValues.last_name) {
    valid = false;
  } else if (!stateValues.email_address) {
    valid = false;
  }
  return valid;
};

const generateNewContactNumber = () => {
  var numStr = '000000' + ((Math.random() * 1000000) | 0);
  numStr = numStr.substring(numStr.length - 6);
  return numStr;
};

toast.configure();
class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: '',
      last_name: '',
      email_address: '',
      phone_number: '',
      website: '',
      company: '',
      reason_to_contact: '',
      errors: {
        first_name: '',
        last_name: '',
        email_address: '',
        phone_number: '',
        website: '',
        company: '',
        reason_to_contact: '',
      },
      submitDisabled: true,
      recaptchaValid: false,
      contact_number: generateNewContactNumber(),
    };
  }

  recaptchaEnabeled = (value) => {
    console.log(value);
    if (value) {
      this.setState({ recaptchaValid: true });
    } else {
      this.setState({ recaptchaValid: false });
    }
  };

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    let errorBoolean = false;

    console.log(name);
    console.log(value);

    switch (name) {
      case 'first_name':
        errors.first_name = '';
        if (value.length < 2) {
          errors.first_name = 'First name must be at least 2 characters long.';
          errorBoolean = true;
        }
        break;
      case 'last_name':
        errors.last_name = '';
        if (value.length < 2) {
          errors.last_name = 'Last name must be at least 2 characters long.';
          errorBoolean = true;
        }
        break;
      case 'email_address':
        if (value.length <= 0 || validEmailRegex.test(value)) {
          errors.email_address = '';
        } else {
          errors.email_address = 'Email format is incorrect.';
          errorBoolean = true;
        }
        break;
      case 'phone_number':
        errors.phone_number = '';
        if (value.length < 6) {
          errors.phone_number = 'Phone number must contain at least 6 numbers.';
          errorBoolean = true;
        }
        break;
      case 'website':
        if (value.length <= 0 || validWebsiteRegex.test(value)) {
          errors.website = '';
        } else {
          errorBoolean = true;
          errors.website =
            "Website must be a full url ex: 'http://www.google.com'.";
        }
        break;
      case 'company':
        errors.company = '';
        if (value.length < 5) {
          errors.company = 'Company Name must be at least 5 characters long.';
          errorBoolean = true;
        }
        break;
      case 'reason_to_contact':
        errors.reason_to_contact = '';
        if (value.length < 8) {
          errors.reason_to_contact =
            'The reason why you are contacting me must be at least 8 characters long.';
          errorBoolean = true;
        }
        break;
      default:
        break;
    }

    var requiredValues = verifyRequiredFields(this.state);

    var aBoolean = true;
    if (requiredValues && !errorBoolean) {
      aBoolean = false;
    }

    this.setState({
      errors,
      [name]: value,
      submitDisabled: aBoolean,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('submit');
    // console.log(event);
    if (noFormErrors(this.state.errors)) {
      console.log(' submit the form!');
      this.setState({ submitDisabled: true });
      sendForm('personal_contact_form', 'template_p5mqdhs', '#contact-form')
        .then(function (response) {
          console.log(response);
          toast.success('Successfully sent your request!', {
            position: toast.POSITION.TOP_CENTER,
          });
        })
        .catch(function (error) {
          console.log(error);
          toast.error('Unable to send the email, please try again later.');
        });
      this.setState({
        first_name: '',
        last_name: '',
        email_address: '',
        phone_number: '',
        website: '',
        company: '',
        reason_to_contact: '',
        errors: {
          first_name: '',
          last_name: '',
          email_address: '',
          phone_number: '',
          website: '',
          company: '',
          reason_to_contact: '',
        },
        submitDisabled: true,
        recaptchaValid: false,
        contact_number: generateNewContactNumber,
      });
    } else {
      toast.warning('Invalid form...');
    }
  };

  render() {
    const { errors, submitDisabled, recaptchaValid, contact_number } =
      this.state;

    return (
      <div className="container mx-auto sm:p-4">
        <h3 className="text-center text-3xl font-bold text-primary pb-4">
          Let me know why you are contacting me!
        </h3>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form
            id="contact-form"
            className="contact-form"
            onSubmit={this.handleSubmit}
          >
            <input type="hidden" name="contact_number" id="contact_number" />
            <div className="overflow-hidden">
              <div className="px-4 py-5 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="first_name"
                      className="block text-sm font-medium text-secondary"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      onChange={this.handleChange}
                      required
                      autoComplete="given-name"
                      minLength="2"
                      className={
                        'p-2 focus:ring-indigo-500 hover:border-indigo-500focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 bg-secondary text-opposite rounded-md ' +
                        (errors.first_name.length > 0 ? 'error' : '')
                      }
                    />
                    {errors.first_name.length > 0 && (
                      <span className="error">{errors.first_name}</span>
                    )}
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="last_name"
                      className="block text-sm font-medium text-secondary"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      id="last_name"
                      onChange={this.handleChange}
                      required
                      autoComplete="family-name"
                      minLength="2"
                      className={
                        'p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 bg-secondary text-opposite rounded-md ' +
                        (errors.last_name.length > 0 ? 'error' : '')
                      }
                    />

                    {errors.last_name.length > 0 && (
                      <span className="error">{errors.last_name}</span>
                    )}
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <label
                      htmlFor="email_address"
                      className="block text-sm font-medium text-secondary"
                    >
                      Email address
                    </label>
                    <input
                      type="email"
                      name="email_address"
                      id="email_address"
                      onChange={this.handleChange}
                      required
                      autoComplete="email"
                      minLength="6"
                      className={
                        'p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 bg-secondary text-opposite rounded-md ' +
                        (errors.email_address.length > 0 ? 'error' : '')
                      }
                    />

                    {errors.email_address.length > 0 && (
                      <span className="error">{errors.email_address}</span>
                    )}
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="phone_number"
                      className="block text-sm font-medium text-secondary"
                    >
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone_number"
                      id="phone_number"
                      onChange={this.handleChange}
                      autoComplete="phone"
                      className="p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 bg-secondary text-opposite rounded-md"
                    />

                    {errors.phone_number.length > 0 && (
                      <span className="error">{errors.phone_number}</span>
                    )}
                  </div>

                  <div className="col-span-6">
                    <label
                      htmlFor="website"
                      className="block text-sm font-medium text-secondary"
                    >
                      Website
                    </label>
                    <input
                      type="text"
                      name="website"
                      id="website"
                      onChange={this.handleChange}
                      autoComplete="website"
                      className="p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 bg-secondary text-opposite rounded-md"
                    />

                    {errors.website.length > 0 && (
                      <span className="error">{errors.website}</span>
                    )}
                  </div>
                  <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-secondary"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      id="company"
                      onChange={this.handleChange}
                      className="p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 bg-secondary text-opposite rounded-md"
                    />

                    {errors.company.length > 0 && (
                      <span className="error">{errors.company}</span>
                    )}
                  </div>

                  <div className="col-span-12 sm:col-span-12 lg:col-span-12">
                    <label
                      htmlFor="reason_to_contact"
                      className="block text-sm font-medium text-secondary"
                    >
                      Reason to contact
                    </label>
                    <textarea
                      id="reason_to_contact"
                      name="reason_to_contact"
                      rows="3"
                      onChange={this.handleChange}
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2 block w-full sm:text-sm border-gray-300 bg-secondary text-opposite rounded-md"
                    ></textarea>

                    {errors.reason_to_contact.length > 0 && (
                      <span className="error">{errors.reason_to_contact}</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="px-4 py-3 text-center sm:px-6">
                <ReCAPTCHA
                  sitekey="6LczX4IaAAAAABjifZ0DWO5W6P0kaT2yCm0jKPby"
                  onChange={this.recaptchaEnabeled}
                />
                <span
                  className={
                    submitDisabled || !recaptchaValid
                      ? 'bg-opacity-50 opacity-50'
                      : ''
                  }
                >
                <button
                  type="submit"
                  id="submitBtn"
                  disabled={submitDisabled || !recaptchaValid}
                  className={`${
                    submitDisabled || !recaptchaValid
                      ? 'cursor-not-allowed'
                      : 'hover:bg-accent'
                  } inline-flex justify-center py-2 px-4 text-sm font-medium rounded-md text-secondary bg-secondary`}
                >
                  Submit
                </button>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;
