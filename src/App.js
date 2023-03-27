import classes from './App.module.scss';
import Window from './component/Window/Window';
import Navigation from './component/Navigation/Navigation';

import Chapter from './component/Chapter/Chapter';

import { useState } from 'react';

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [visitStep, setVisitStep] = useState([0]);
  const [resultForm, setResultForm] = useState({});

  const nextStepHandler = (step) => {
    setVisitStep([...visitStep, currentStep + step]);
    setCurrentStep(currentStep + step);
  };

  const selectStepHandler = (step) => {
    if (visitStep.includes(step)) {
      setCurrentStep(step);
    }
  };

  const setFormHandler = (name, value) => {
    const newResultForm = { ...resultForm };
    newResultForm[name] = value;
    setResultForm({ ...newResultForm });
  };

  const sendJson = () => {
    console.log(JSON.stringify(resultForm));
  };

  const pricesMonth = {
    Arcade: 9,
    Advanced: 12,
    Pro: 15,
    'Online service': 1,
    'Larger storage': 2,
    'Customizable Profile': 2,
  };

  const pricesYear = {
    Arcade: 90,
    Advanced: 120,
    Pro: 150,
    'Online service': 10,
    'Larger storage': 20,
    'Customizable Profile': 20,
    sale: '2 months free',
  };

  const steps = [
    {
      step: 1,
      name: 'your info',
      title: 'Personal info',
      description: 'Please provide your name, email address, and phone number.',
      inputs: [
        { type: 'text', name: 'Name', placeholder: 'e.g. Stephen King' },
        {
          type: 'email',
          name: 'Email Address',
          placeholder: 'e.g. stephenking@lorem.com',
        },
        {
          type: 'phone',
          name: 'Phone Number',
          placeholder: 'e.g. +1 234 567 890',
        },
      ],
    },
    {
      step: 2,
      name: 'select plan',
      title: 'Select your plan',
      description: 'You have the option of monthly or yearly billing.',
      inputs: [
        {
          type: 'radio',
          name: 'Arcade',
          img: './images/icon-arcade.svg',
          price: '$9/mo',
          value: 9,
        },
        {
          type: 'radio',
          name: 'Advanced',
          img: './images/icon-advanced.svg',
          price: '$12/mo',
          value: 12,
        },
        {
          type: 'radio',
          name: 'Pro',
          img: './images/icon-pro.svg',

          price: '$15/mo',
          value: 15,
        },
        {
          type: 'switchToggle',
          typeName: 'checkbox',
          name: 'planDuration',

          options: ['Monthly', 'Yearly'],
        },
      ],
    },
    {
      step: 3,
      name: 'add ons',
      title: 'Pick add-ons',
      description: 'Add-ons help enhance your gaming experience.',
      inputs: [
        {
          type: 'checkbox',
          name: 'Online service',
          description: 'Access to multiplayer games',
          price: '+$1/mo',
        },
        {
          type: 'checkbox',
          name: 'Larger storage',
          description: 'Extra 1TB of cloud save',

          price: '+$2/mo',
        },
        {
          type: 'checkbox',
          name: 'Customizable Profile',
          description: 'Custom theme on your profile',

          price: '+$2/mo',
        },
      ],
    },
    {
      step: 4,
      name: 'summary',
      title: 'Finishing up',
      description: 'Double-check everything looks OK before confirming.',
      inputs: [
        {
          name: 'result',
          type: 'table',
          options: [
            resultForm?.selectPlan,
            resultForm?.addOns,
            resultForm?.planduration,
          ],
        },
      ],
    },
    {
      step: 5,
      name: 'Finish',
      title: 'Thank you!',
      description:
        'Thank for confirming your subscription! We hope you have fun using our platform.',
      img: './images/icon-thank-you.svg',
    },
  ];
  return (
    <div className={classes.App}>
      <Window>
        <Navigation
          steps={steps}
          setSelectStep={(i) => selectStepHandler(i)}
          currentStep={currentStep}
          visitStep={visitStep}
        />
        <Chapter
          steps={steps}
          selectStep={(i) => nextStepHandler(i)}
          currentStep={currentStep}
          stateValue={resultForm}
          setStateValue={setFormHandler}
          pricesMonth={pricesMonth}
          pricesYear={pricesYear}
          selectStepReturn={selectStepHandler}
          sendJson={sendJson}
        />
      </Window>
    </div>
  );
}

export default App;
