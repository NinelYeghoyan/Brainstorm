# brainstorm

## Stack
* `React`
* `Redux Thunk`
* `Styled components`

## How to run
    Create .env file
    pnpm install
    pnpm start

## Folder structure
    src
        ├── assets
        │   ├── icons
        │   └── ...
        ├── components
        │   ├── {components}
        │   │   ├── index.jsx
        │   │   ├── styled.js
        │   │   └── ...
        │   └── ...
        ├── config
        │   └── ...
        ├── hooks
        │   └── ...
        ├── i18n
        │   └── ...
        ├── layout
        │   ├── {component}
        │   │   ├── index.tsx
        │   │   ├── styled.ts
        │   │   └── ...
        │   └── ...
        ├── pages
        │   ├── {page}
        │   │   ├── index.jsx
        │   │   ├── styled.js
        │   │   └── ...
        │   └── ...
        ├── redux
        │   ├── actions
        │   │   ├── index.jsx
        │   │   └── ...
        │   ├── reducers
        │   │   ├── index.jsx
        │   │   └── ...  
        │   ├── store
        │   │   ├── index.jsx
        │   │   └── ...
        │   └── ...
        ├── routes
        │   └── ... 
        ├── style
        │   ├── scss  
        │   │   ├── {name}.scss 
        │   │   └── ... 
        │   └── theme
        │   │   ├── {name}.js 
        │   │   └── ...
        └── ...

## Code example

```jsx
import {  useCallback } from "react";

const ComponentName = () => {
    const handleChnage = useCallback(() => {}, []);

    return <tag onChange={handleChnage}>content</tag>;
};

export default ComponentName
```

## Styled components example

```js
import styled from "styled-components";

export const StyledComponentName = styled.div`
    width: 100px;
    height: 100px;
  
    font-family: ${({ theme }) => theme.typography.fontFamily.roboto}, sans-serif;
    font-size: ${(p) => p.theme.typography.fontSize.p16};
    font-weight: ${(p) => p.theme.typography.weight.normal};
    
    background-color: ${(p) => p.theme.palette.accent};
    color: ${({ theme }) => theme.palette.white};
    padding: 10px;
`;
```