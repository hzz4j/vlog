const path = require("path");
const dirTree = require("directory-tree");
const SRC_PATH = path.resolve(__dirname, "../");
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

function autoGetSidebarOptionBySrcDir(srcPath = SRC_PATH) {
  const srcDir = dirTree(srcPath, {
    extensions: /\.md$/,
    normalizePath: true,
    exclude: /README.md|readme.md/
  });

  console.log(JSON.stringify(srcDir))

  const sideBar = toSidebarOption(srcDir.children);
  console.log('Generated sidebar finished :)');
  return sideBar;
}

module.exports = autoGetSidebarOptionBySrcDir;
