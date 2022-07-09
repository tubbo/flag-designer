# flag-designer

An NPM package for generating SVG flags from [Scrontch's Flag Designer][].

## Usage

Install the package:

    yarn add flag-designer

Generate a URL:

```typescript
import { generateFlagURL } from 'flag-designer/url'

generateFlagURL() // => https://...
```

Generate an image and download it:

```typescript
import { generateFlagImage } from 'flag-designer/image'

await generateFlagImage() // => Blob { ... }
```

You can customize the generated URL/image the same way as the form:

```typescript
import { generateFlagURL } from 'flag-designer/url'

generateFlagURL({ division: 1 }) // => https://.../?d=1&...
```

This package is distributed using [ESModules][], and is tree-shakeable
as each individual function is available in its own export. You can also
import the entire module from the root:

```typescript
import { generateFlagURL, generateFlagImage } from 'flag-designer'
```

For more information, check out the [docs][].

## Contributing

This project uses [Yarn Zero-Installs][], so there's no need to download
any dependencies. Check out `yarn run` to see all of the tasks you have
available. Make sure to run `yarn test` before submitting any changes,
and to write tests for any additional functionality or bug fixes.

[scrontch's flag designer]: https://flag-designer.appspot.com/
[docs]: https://tubbo.github.io/flag-designer
[yarn zero-installs]: https://yarnpkg.com/features/zero-installs
[esmodules]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
