import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import  Footer  from "../components/footer"
export default {
  title: 'Footer ',
};


export const PedigreeFooter = () => <Footer onClick={action('clicked')}>Hello Button</Footer>;
