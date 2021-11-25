/**
 * 所有页面会使用相同的侧边栏
 */

const path = require("path");
const dirTree = require("directory-tree");
const SRC_PATH = path.resolve(__dirname, "../../");
var fs = require('fs');


function toSidebarOption(tree = []) {
  if (!Array.isArray(tree)) return [];


  return tree.map((v) => {
    var stat = fs.statSync(v.path);
  
    if (stat.isDirectory()) {
      return {
        text: v.name,
        link: v.path.split("docs")[1]+'/',
        children: toSidebarOption(v.children),
      };
    } else {
      return {
        text: path.basename(v.path).replace(/\.md$/, ""),
        link: v.path.split("docs")[1]
      }
    }
  });
}

/**
 去除.vuepress的节点
 {
            "path":"d:/Github/vlog/docs/.vuepress",
            "name":".vuepress",
            "children":Array[4]
 }
 * @param {*} srcDir 
 * @returns 
 */
function removeDotvuepress(srcDir){
    return srcDir.children.filter(node => !node.path.endsWith('.vuepress') );
}

function autoGetSidebarOptionBySrcDir(srcPath = SRC_PATH) {
  const srcDir = dirTree(srcPath, {
    extensions: /\.md$/,
    normalizePath: true,
    exclude: /README.md|readme.md/
  });

  const children = removeDotvuepress(srcDir);
  //console.log(JSON.stringify(children))

  const sideBar = toSidebarOption(children);
  console.log('Generated all page same sidebar finished :)');
  return sideBar;
}





//const result = autoGetSidebarOptionBySrcDir();
//console.log(JSON.stringify(result));

/** 生成的结果
[
    {
        "text":"vuepress",
        "link":"/vuepress/",
        "children":[
            {
                "text":"01 搭建vuepress2",
                "link":"/vuepress/01 搭建vuepress2.md"
            },
            {
                "text":"02 图片存放路径",
                "link":"/vuepress/02 图片存放路径.md"
            },
            {
                "text":"03 侧边栏配置",
                "link":"/vuepress/03 侧边栏配置.md"
            }
        ]
    }
]
 */


module.exports = autoGetSidebarOptionBySrcDir;