#!/usr/local/bin/node

// 生成js代码
const path = require('path')
const fs = require('fs')
const chalk = require('chalk')

// 检查当前调用位置下，有没有assets目录
if (!fs.existsSync('./assets')) {
  // 直接报错，退出
  throw new Error('当前目录下，不存在assets目录。无法执行')
}

const ASSETS_FOLDER = path.resolve('./assets')

console.log(chalk.bgWhiteBright.black.bold(' JC: Assets Auto Link '))

let _assetsFolder = getArgv() || readFolderList(ASSETS_FOLDER)
/** 从命令行获取参数
 * @author Jonham.Chen <me@jonham.cn>
 * @date 2019-11-30
 * @returns {string}
 */
function getArgv () {
  const argv = process.argv
  if (argv.length <= 2) {
      console.log(chalk.blue(`未指定目录，处理「${chalk.red(ASSETS_FOLDER)}」下所有目录`))
      return ''
  }
  return argv[2]
}

/** 读取指定目录下，所有文件夹
 * @author Jonham.Chen <me@jonham.cn>
 * @date 2019-11-30
 * @param {string} [folderPath='.']
 * @returns 
 */
function readFolderList (folderPath = '.',) {
  const list = fs.readdirSync(folderPath).map(n => path.resolve(folderPath, n))
  return list.filter(n => fs.statSync(n).isDirectory())
}

function resolve (str, assetsFolder = '') {
  return path.resolve(ASSETS_FOLDER + assetsFolder, str)
}

/** 从文件名生成变量名
 * @author Jonham.Chen <me@jonham.cn>
 * @date 2019-11-30
 * @param {string} fn
 * @returns {string}
 */
function makeVarName (fn) {
  return fn
    .replace(/-([a-zA-Z0-9]{1})/g, (_, letter) => letter.toUpperCase())
    .replace(/\.\w+$/, '')
}

/** 匹配文件后缀名
 * @author Jonham.Chen <me@jonham.cn>
 * @date 2019-12-01
 * @param {string} fileName
 * @returns {boolean}
 */
function boolImgMatcher (fileName) {
  return fileName.match(/\.(png|jpg|svg)/)
}

function readDirAndListFileImport (dirStr = '.') {
  const d = resolve(dirStr)
  // read files
  const filenameList = fs.readdirSync(d)
  return filenameList
    .filter(boolImgMatcher)
    .map(d => `import ${makeVarName(d)} from './${d}'`)
}

function readDirAndListFile (dirStr = '.') {
  const d = resolve(dirStr)
  // read files
  const filenameList = fs.readdirSync(d)
  return filenameList
    .filter(boolImgMatcher)
    .map(i => makeVarName(i))
}

function writeJS(dir, content) {
  fs.writeFileSync(resolve(dir), content, 'utf-8')
}

function handleOneFolder (folderName = '') {
  console.log(chalk.red('Process > '), folderName)

  const filenames = readDirAndListFileImport(folderName).join('\n')
  // 缩进
  const intent = '  '
  
  writeJS(
    path.resolve(folderName, 'index.js'),
    filenames + `
export default {
${intent}${readDirAndListFile(folderName).join(',\n' + intent)}
}
`)
}

function main () {
  if (typeof _assetsFolder === 'string') {
    return handleOneFolder(_assetsFolder)
  }

  if (Array.isArray(_assetsFolder)) {
    _assetsFolder.forEach(folderName => {
      try {
        handleOneFolder(folderName)
      } catch (err) {
        console.log(err)
      }
    })
  }
}

main()
