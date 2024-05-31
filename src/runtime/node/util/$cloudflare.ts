// https://nodejs.org/api/util.html
import type nodeUtil from "node:util";
import unenvUtil from "./index";

// @ts-expect-error typings are not up to date, but this API exists, see: https://github.com/cloudflare/workerd/pull/2147
const workerdUtil = process.getBuiltinModule("node:util");

// TODO: Ideally this list is not hardcoded but instead is generated when the preset is being generated in the `env()` call
//       This generation should use information from https://github.com/cloudflare/workerd/issues/2097
export const {
  MIMEParams,
  MIMEType,
  TextDecoder,
  TextEncoder,
  _extend,
  aborted,
  callbackify,
  debug,
  debuglog,
  deprecate,
  format,
  formatWithOptions,
  inherits,
  inspect,
  log,
  parseArgs,
  promisify,
  stripVTControlCharacters,
  toUSVString,
  transferableAbortController,
  transferableAbortSignal,
} = workerdUtil;

export const {
  // @ts-expect-error undocumented public API
  _errnoException,
  // @ts-expect-error undocumented public API
  _exceptionWithHostPort,
  getSystemErrorMap,
  getSystemErrorName,
  isArray,
  isBoolean,
  isBuffer,
  isDate,
  isDeepStrictEqual,
  isError,
  isFunction,
  isNull,
  isNullOrUndefined,
  isNumber,
  isObject,
  isPrimitive,
  isRegExp,
  isString,
  isSymbol,
  isUndefined,
  parseEnv,
  styleText,
} = unenvUtil;

// TODO(cloudflare): we should just implement this in workerd and drop this special case.
export const types = {
  isExternal: unenvUtil.types.isExternal,
  ...workerdUtil.types,
} satisfies typeof nodeUtil.types;

export default {
  ...unenvUtil,
  MIMEParams,
  MIMEType,
  TextDecoder,
  TextEncoder,
  // @ts-expect-error undocumented public API
  _extend,
  aborted,
  callbackify,
  debug,
  debuglog,
  deprecate,
  format,
  formatWithOptions,
  inherits,
  inspect,
  log,
  parseArgs,
  promisify,
  stripVTControlCharacters,
  toUSVString,
  transferableAbortController,
  transferableAbortSignal,
  types
} satisfies typeof nodeUtil;
