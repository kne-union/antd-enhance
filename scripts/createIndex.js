const path = require('path');
const glob = require('pify')(require('glob'));
const fs =require('fs-extra');

glob(path.resolve(__dirname,'../src/+(components|hocs|hooks|func)/**/*.js')).then((files)=>{
  const moduleListInfo = files.map((dir)=>{
    return {
      name:path.basename(dir,path.extname(dir)),
      dir:`./${path.relative(path.resolve(__dirname,'../src/'),dir).replace(path.extname(dir),'')}`
    };
  });
  const fileContent = `export {default as preset} from './preset';
${moduleListInfo.map(({name,dir})=>`export {default as ${name}} from '${dir}';`).join('\n')}`;

  return fs.writeFile(path.resolve(__dirname,'../src/index.js'),fileContent);
});

