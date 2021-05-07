import React, { useState, useRef } from 'react'
import { Layout as BaseLayout, Main } from 'theme-ui'
import { Sidebar } from 'gatsby-theme-docz/src/components/Sidebar'
import { MainContainer } from 'gatsby-theme-docz/src/components/MainContainer'
import { media } from '~theme/breakpoints'
import { Global } from '@emotion/core'

import global from '~theme/global'

const main = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
}

const wrapper = {
  py: 0,
  flex: 1,
  display: 'grid',
  gridTemplateColumns: '250px minmax(0, 1fr)',
  minHeight: '100vh',
  [media.tablet]: {
    display: 'block',
  },
}

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false)
  const nav = useRef()
  return (
    <BaseLayout sx={{ '& > div': { flex: '1 1 auto' } }} data-testid="layout">
      <Global styles={global} />
      <Main sx={main}>
        <div sx={wrapper}>
          <Sidebar
            ref={nav}
            open={open}
            onFocus={() => setOpen(true)}
            onBlur={() => setOpen(false)}
            onClick={() => setOpen(false)}
          />
          <MainContainer data-testid="main-container">{children}</MainContainer>
        </div>
      </Main>
    </BaseLayout>
  )
}

export default Layout