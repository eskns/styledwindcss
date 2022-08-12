# styledwindcss
Enables the use of any version of tailwindcss with any version of @emotion/styled

The inspiration for this project came from twin.macro. Unlike their approach, this package allows you to use the latest version of tailwindcss with the latest version of @emotion/styled *without any waiting time*. In fact, you need to install (whatever versions of) those packages independently in addition to styledwindcss.

## install
npm install tailwindcss

npm install @emotion/react

npm install @emotion/styled

npm install styledwindcss

## usage

```
import React from 'react';
import tw from 'styledwindcss'
import styled from '@emotion/styled';

const ItemInput = tw`m-0 p-0 h-6 w-fit self-center justify-self-center text-center \
bg-transparent rounded border-solid
  ${styled.input`
    &&& {
      border-color: ${props => props.theme.colors.lightGrey};
      color: ${props => props.theme.colors.darkGrey};
      font-family: Roboto, 'Helvetica Neue', Helvetica, Arial, sans-serif;
      max-width: ${props => props.max_width};
      grid-row-start: ${props => props.row_start ? props.row_start : "auto"};
      grid-row-end: ${props => props.row_end ? props.row_end : "auto"};
      grid-column-start: ${props => props.col_start ? props.col_start : "auto"};
      grid-column-end: ${props => props.col_end ? props.col_end : "auto"};
    }
  `}
`;
```
## Explanation

Note that tw and styled.input are both functions and both are called with a tagged template literal with interpolations. It is just that styled.input is called inside an interpolation of the tagged template literal passed to tw. Use of && or &&& is necessary to prevent tailwindcss from overwriting the styled-components styles. The above example assumes that a theme was created using the ThemeProvider from @emotion/react.

You first pass all the tailwindcss utility classes to tw and then pass an interpolation (the stuff in ${...}). Inside that interpolation you can call any styled-component and pass it another tagged template literal with interpolations.
