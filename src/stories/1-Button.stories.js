import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
//import  { Homeheader }  from "../../components";
//import  GymButton from "../components/GymButton"

export default {
  title: 'Button',
};

export const text = () => <Button onClick={action('clicked')}>Hello Button</Button>;

//export const SampleButton = () => <GymButton onClick={action('clicked')}>Hello Button</GymButton>;


// export const emoji = () => (
//   <Button onClick={action('clicked')}>
//     <span role="img" aria-label="so cool">
//       😀 😎 👍 💯
//     </span>
//   </Button>
// );
