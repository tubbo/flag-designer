# flag-generator

An NPM package for generating SVG flags from [Flag Designer][]

## Usage

Install the package:

    yarn add flag-generator

Generate a URL:

```typescript
import { generateFlagURL } from 'flag-generator/url'

generateFlagURL() // => https://...
```

Generate an entire image:

```typescript
import { generateFlagURL } from 'flag-generator/url'

generateFlagImage() // => <Blob..>
```

For more information, check out the docs at
<https://tubbo.github.io/flag-generator>.

[flag designer]: https://flag-designer.appspot.com/
