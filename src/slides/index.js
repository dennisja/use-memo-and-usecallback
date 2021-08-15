import intro from './intro.mdx';
import dataTypes from './datatypes.mdx';
import immutability from './immutability.mdx';
import memoization from './memoization.mdx';
import beforeHooks from './beforeHooks.mdx';

export { default as theme } from './theme';

export default [
...intro, ...dataTypes, ...immutability, ...memoization, ...beforeHooks
]