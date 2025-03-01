# Add custom design

```css
@layer base {
  h1 {
    @apply text-4xl;
  }
}
@layer components {
  .btn {
    @apply px-3 py-2 bg-purple-400;
  }
}
```

or,

```js
import { nextui } from "@nextui-org/react";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
   
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6A1A',
        black: '#212337',
        green: '#749B3F',
        grey: {
          20: '#F4F6F6',
          50: '#F4F6F6',
        },
      },
    },
  },
  plugins: [
  nextui(),
    function ({ addUtilities }) {
      addUtilities({
        '.heading-1': {
          fontFamily: "'Rubik', sans-serif",
          fontSize: '80px',
          fontStyle: 'normal',
          fontWeight: '500',
          lineHeight: 'normal',
          letterSpacing: '-1.6px',
        },
      });
    },
  ],
};

```

# Tailwind merge

- to fix conflict issue in tailwind
- Install `npm i tailwind-merge`
  ```js
  twMerge("bg-red-500 bg-green-500")
  ```
# clsx
- To create conditional class 
- Install `npm i clsx`
  ```js
  clsx(
    "bg-red-500 px-3 py-2 rounded-md", // primary
      {
        "border border-purple-500 bg-opacity-10" : outline,   //conditional      
      } ,
            className // if available
      )
  ```
## Shorthand 

```js
const cn = (...inputs : ClassValue) => {
    return twMerge(clsx(inputs))
};

export default cn;

//call
 <button className={
      cn(
        "bg-red-500 px-3 py-2 rounded-md",
        {
          "border border-purple-500 bg-opacity-10": outline,
        },
        className
      )
      }
    >
      Click
    </button>
```
