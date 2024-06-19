# a-site-by-lbarr

This is a simple React component package that prints a developer credit signature in the console. It's designed to display a signature ASCII art when your application loads, giving credit to the developer or displaying a custom message. This package is especially useful for projects where branding or developer credits are required in the console.

## Installation

To install `a-site-by-lbarr`, run the following command in your project directory:

```bash
npm install a-site-by-lbarr
```

Alternatively, if you are using Yarn, use:

```bash
yarn add a-site-by-lbarr
```

## Usage

To use the component in your React application, import it and include it in your component tree:

```tsx
import React from "react"
import Credit from "a-site-by-lbarr"

function App() {
  return (
    <div>
      <Credit />
    </div>
  )
}

export default App
```

> [!NOTE]
> The Credit component does not render any visible content to the DOM but will log a signature in the console when the component mounts.

## License

> [!CAUTION]
> This package is not not available for public use, modification, or distribution without explicit permission from the author.

This package is UNLICENSED and is not available for public use, modification, or distribution without explicit permission from the author. For private use or requests for permission, please contact the author directly. Feel free to take inspiration from this package, but please do not rip off or use it for your own projects without permission.

## Author

[Liam Barr](https://lbarr.com)

For any issues or questions, please reach out to the author or file an issue in the project repository.
