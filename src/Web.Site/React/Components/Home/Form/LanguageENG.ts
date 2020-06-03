// eslint-disable-next-line no-unused-vars
import { ILanguage } from './ILanguage';

export default {
  title: 'Generate a PDF report',
  subtitle: 'Please fill out this form and receive the PDF report in your email!',
  question1: {
    text: 'First Field',
    title: 'First Field in English',
    required: 'This field is required',
  },
  question2: {
    text: 'Second Field',
    title: 'Second Field in English',
    required: 'This field is required',
  },
  question3: {
    text: 'Third Field',
    title: 'Third Field in English',
    required: 'This field is required',
  },
  question4: {
    text: 'Fourth Field',
    title: 'Fourth Field in English',
    required: 'This field is required',
  },
  question5: {
    text: 'Fifth Field',
    title: 'Fifth Field in English',
    required: 'This field is required',
  },
  approved: {
    label: 'Approved?',
    checked: 'Approved',
    unchecked: 'Disapproved',
  },
  english: {
    label: 'English report',
    title: 'English report is sent by default',
  },
  portuguese: {
    label: 'Portuguese report',
    title: 'Would you like to receive a Portuguese version?',
  },
  info: {
    title: 'Any additional information',
    text: 'Additional Information',
    max: '950 characters maximum',
  },
  name: {
    text: 'Name',
    title: 'Please enter your name',
    required: 'This field is required',
    min: '4 character minimum',
    max: '20 characters maximum',
  },
  email: {
    text: 'Email',
    title: 'Please enter your email',
    required: 'This field is required',
    email: 'Invalid email',
  },
  button: {
    text: 'Save changes',
    title: 'Click here to save changes',
  },
  feedback: {
    success: 'Successfully saved your data!',
    failure: 'Sorry but no data was saved.',
  },
} as ILanguage;
