import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import Homeheader from "./homeheader"

export default {
  title: '2-Test stories',
};

export const text = () => <Button onClick={action('clicked')}>stories</Button>;

export const emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);
