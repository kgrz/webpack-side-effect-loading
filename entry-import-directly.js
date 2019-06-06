// Since we are not even loading the module `a.js`, this generates the bundle
// with just the required modules, and no side-effect loads.
import b from './b';
import c from './c';

b();
c()
