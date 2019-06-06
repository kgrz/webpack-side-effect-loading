// This imports the sub exports from polyfill, which basically imports all the
// modules from a, b, c and reexports them.
//
// Although we don't really need the module from a.js here, we still end up
// bundling React in the final bundle. This is because webpack can't tell for
// sure if React doesn't mess with the module environment when it's loaded. We
// just import it and do nothing webpack assumes that we need
// it to create some side-effect like running polyfill code or something.
//
// This can result in accidental *huge* bundles unless carefully pruned.
import { b, c } from './polyfill';

b();
c()
