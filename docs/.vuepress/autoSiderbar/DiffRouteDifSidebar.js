/**
 * 不同子路径下的页面会使用不同的侧边栏
 */

const autoGetSidebarOptionBySrcDir = require('./AllPageSameSildeBar');

function autoGenSidebar(){
    let result = {};
    const contents = autoGetSidebarOptionBySrcDir();
    contents.forEach(element => {
   
        if(!(element.link in result)){
            result[element.link] = []
        }
   
        result[element.link].push({
            text: element.text,
            children: element.children
        })
    });

    return result;
}

// 测试
//console.log(JSON.stringify(autoGenSidebar()));
/**
{
    "/vuepress/":[
        {
            "text":"Vuepress博客搭建",
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
}
*/
 
 module.exports = autoGenSidebar;