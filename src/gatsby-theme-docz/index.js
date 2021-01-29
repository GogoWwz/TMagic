import React from 'react'
import { theme, useConfig, ComponentsProvider } from 'docz'
import { Styled, ThemeProvider } from 'theme-ui'

import defaultTheme from '~theme'
import components from '~components'

import { H3 } from './components'

const ComponentsMerge = {
  ...components,
  h3: H3
}

const Theme = ({ children }) => {
  const config = useConfig()
  return (
    <ThemeProvider theme={config.themeConfig}>
      <ComponentsProvider components={ComponentsMerge}>
        {/* eslint-disable-next-line */}
        <Styled.root>{children}</Styled.root>
      </ComponentsProvider>
    </ThemeProvider>
  )
}

export default theme(defaultTheme)(Theme)