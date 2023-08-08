import type fsp from "node:fs/promises";
import { notImplemented } from "../../../_internal/utils";

export { constants } from "../_constants";

export const access: typeof fsp.access = notImplemented("fs.access");
export const copyFile: typeof fsp.copyFile = notImplemented("fs.copyFile");
export const cp: typeof fsp.cp = notImplemented("fs.cp");
export const open: typeof fsp.open = notImplemented("fs.open");
export const opendir: typeof fsp.opendir = notImplemented("fs.opendir");
export const rename: typeof fsp.rename = notImplemented("fs.rename");
export const truncate: typeof fsp.truncate = notImplemented("fs.truncate");
export const rm: typeof fsp.rm = notImplemented("fs.rm");
export const rmdir: typeof fsp.rmdir = notImplemented("fs.rmdir");
export const mkdir: typeof fsp.mkdir = notImplemented("fs.mkdir");
export const readdir: typeof fsp.readdir = notImplemented("fs.readdir");
export const readlink: typeof fsp.readlink = notImplemented("fs.readlink");
export const symlink: typeof fsp.symlink = notImplemented("fs.symlink");
export const lstat: typeof fsp.lstat = notImplemented("fs.lstat");
export const stat: typeof fsp.stat = notImplemented("fs.stat");
export const link: typeof fsp.link = notImplemented("fs.link");
export const unlink: typeof fsp.unlink = notImplemented("fs.unlink");
export const chmod: typeof fsp.chmod = notImplemented("fs.chmod");
export const lchmod: typeof fsp.lchmod = notImplemented("fs.lchmod");
export const lchown: typeof fsp.lchown = notImplemented("fs.lchown");
export const chown: typeof fsp.chown = notImplemented("fs.chown");
export const utimes: typeof fsp.utimes = notImplemented("fs.utimes");
export const lutimes: typeof fsp.lutimes = notImplemented("fs.lutimes");
export const realpath: typeof fsp.realpath = notImplemented("fs.realpath");
export const mkdtemp: typeof fsp.mkdtemp = notImplemented("fs.mkdtemp");
export const writeFile: typeof fsp.writeFile = notImplemented("fs.writeFile");
export const appendFile: typeof fsp.appendFile =
  notImplemented("fs.appendFile");
export const readFile: typeof fsp.readFile = notImplemented("fs.readFile");
export const watch: typeof fsp.watch = notImplemented("fs.watch");
export const statfs: typeof fsp.statfs = notImplemented("fs.statfs");

export default <typeof fsp>{};
