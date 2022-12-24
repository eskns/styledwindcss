# styledwindcss
Simpler code. No overhead after building with webpack or esbuild.

The inspiration for this project came from [twin.macro](https://github.com/ben-rogerson/twin.macro). You can use any version of tailwindcss with any version of @emotion/styled. You need to install (whatever versions of) those packages independently in addition to styledwindcss. Our code is way simpler. We have one file index.js and it has 4 lines of code and it allows you to do the samething as twin.macro. Both approaches use tagged templates with interpolation twice. Twin.macro uses styled-components for the outer interpolation and tailwindcss for the inner interpolation. **We do the opposite and use tailwindcss for the outer interpolation and styled-components for the inner interpolation.**  

## install
npm install tailwindcss

npm install @emotion/react

npm install @emotion/styled

NOTE: The following github package will be installed from npm.pkg.github.com. So, there should not be a leading @ while installing. However, it will be installed in
node_modules/@eskns/styledwindcss. So, while importing it you should use a leading @. Please see below. Also note that in order to install github packages from npm.pkg.github.com you need to create a github account and [create a read-only access token (classic)](https://docs.github.com/en/packages/learn-github-packages/introduction-to-github-packages#authenticating-to-github-packages) and [store that access token in your .npmrc file](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry).

npm install eskns/styledwindcss

## usage

If you are a new user wanting to use tailwindcss with styled-components, then our approach is ideal for you. If you want to switch over from twin.macro then you have to manually change the order of tw and styled-components function calls.

```
import React from 'react';
import tw from '@eskns/styledwindcss'
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
## explanation

Note that tw and styled.input are both functions and both are called with a tagged template literal with interpolations. It is just that styled.input is called inside an interpolation of the tagged template literal passed to tw. Use of && or &&& is necessary to prevent tailwindcss from overwriting the styled-components styles. The above example assumes that a theme was created using the ThemeProvider from @emotion/react.

You first pass all the tailwindcss utility classes to tw and then pass an interpolation (the stuff in ${...}). Inside that interpolation you can call any styled-component and pass it another tagged template literal with interpolations.

