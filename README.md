Effects of side effects in modules
----------------------------------

This is a demonstration of how webpack may inadvertently bundle a
clearly-unused module in the final output sometimes. The key word being
"sometimes". This often results in *huge* bundle sizes for seemingly
simple chunks.

What's supposed to happen:
-------------------------

In this repo, there are two webpack configs, each with a different entry point.
The main content modules are the files `{a,b,c,d}.js`. There is a file
`polyfill.js` (which doesn't have anything to do with polyfilling), which
imports some (`{a,b,c}.js`) of the modules and re-exports them without any
modifications.

Both the entry points are supposed to run just the modules from `b.js` and
`c.js`. `a.js`, although is imported and rexported in `polyfill.js` doesn't get
used in the final bundle, so any of the modules that `a.js` itself import
should never show up in the final bundle.


What actually happens:
----------------------

The entrypoint that imports `b.js` and `c.js` directly works as one'd expect.
But the entrypoint where the `b` and `c` modules are imported via the
`polyfill.js` generates a final bundle that also includes the code that's
imported in `a.js` (React, in this example)!


___


Similar long-running issue: https://github.com/webpack/webpack/issues/4453

It concerns a different problem, but has some overlap with reexports.
