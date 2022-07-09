# flag-designer

An NPM package for generating SVG flags from [Scrontch's Flag Designer][].

## Usage

Install the package:

    yarn add flag-generator

Generate a URL:

```typescript
import { generateFlagURL } from 'flag-generator/url'

generateFlagURL() // => https://...
```

Generate an image and download it:

```typescript
import { generateFlagImage } from 'flag-generator/image'

await generateFlagImage() // => Blob { ... }
```

You can customize the generated URL/image the same way as the form:

```typescript
import { generateFlagURL } from 'flag-generator/url'

generateFlagURL({ division: 1 }) // => https://.../?d=1&...
```

For more information, check out the [docs][].

[scrontch's flag designer]: https://flag-designer.appspot.com/
[docs]: https://tubbo.github.io/flag-generator
