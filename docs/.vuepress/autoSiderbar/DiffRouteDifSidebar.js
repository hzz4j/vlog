let contents = [
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
 
 let result = {};

 contents.forEach(element => {
     console.log(element.link)
 });
 