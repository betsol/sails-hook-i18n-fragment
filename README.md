# i18n fragment hook for Sails.js

[![npm version](https://badge.fury.io/js/sails-hook-i18n-fragment.svg)][repo-npm]


A special hook for Sails.js to support localization using fragments instead of strings.
Fragments are stored in the Markdown format and could be included into your views using locale aware function.


## Usage

Install hook via npm: `npm install --save sails-hook-i18n-fragment`.

Create the following files in your project:

- /locale/fragments/en/foo.md
- /locale/fragments/de/foo.md
- /locale/fragments/ru/foo.md

Call the following function inside of your template: `fragment('foo')`.
It will output the fragment according to active locale.
Locale is determined by original `i18n` hook (the `node-i18n` library), which is required.

You can use a complex file structure if you want to:

- /locale/fragments/en/the/part/of/my/app/fragment.md

`fragment('the.part.of.my.app.fragment')`.

You can change the base path using the `path` configuration option:

```javascript
# config/i18n.js
module.exports['i18n-fragment'] = {
  path: 'my-fragments/{locale}/{path}.md'
};
```


## Changelog

Please see the [complete changelog][changelog] for list of changes.


## Contributors

This library was made possible by [it's contributors][contributors].


## Developer guide

Fork, clone, create a feature branch, commit, create a PR.


## Feedback

If you have found a bug or have another issue with the library —
please [create an issue][new-issue].

If you have a question regarding the library or it's integration with your project —
consider asking a question at [StackOverflow][so-ask] and sending me a
link via [E-Mail][email]. I will be glad to help.

Have any ideas or propositions? Feel free to contact me by [E-Mail][email].

Cheers!


## Support

If you like this library consider to add star on [GitHub repository][repo-gh]
and on [NPM][repo-npm].

Thank you!


## License

The MIT License (MIT)

Copyright (c) 2015 Slava Fomin II, BETTER SOLUTIONS

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


  [changelog]: changelog.md
  [contributors]: https://github.com/betsol/sails-hook-i18n-fragment/graphs/contributors
  [so-ask]: http://stackoverflow.com/questions/ask?tags=sails,node.js
  [email]: mailto:s.fomin@betsol.ru
  [new-issue]: https://github.com/betsol/sails-hook-i18n-fragment/issues/new
  [repo-gh]: https://github.com/betsol/sails-hook-i18n-fragment
  [repo-npm]: https://www.npmjs.com/package/sails-hook-i18n-fragment
