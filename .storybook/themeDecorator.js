import React from "react"
import { ThemeProvider } from '@material-ui/core';
import theme from '../src/themes/main';

const ThemeDecorator = storyFn => (
    <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
  )

  export default ThemeDecorator