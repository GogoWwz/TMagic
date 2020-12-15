import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Button from './button'

const DefaultButton = () => <Button onClick={action("click button")}>Default</Button>

storiesOf("Button", module)
  .add("Default", DefaultButton)