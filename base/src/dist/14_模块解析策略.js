"use strict";
/*
  moduleResolution配置项 'node | classic'
  Classic 以前ts的默认解析策略，为了向后兼容
  1.相对路径
  /root/src/folder/a.ts 文件中 import * as d from './relative' 策略如下：
  /root/src/folder/relative.ts
  /root/src/folder/relative.d.ts
  2.绝对路径
  /root/src/folder/a.ts 文件中 import * as d from 'abs' 策略如下：
  /root/src/folder/abs.ts
  /root/src/folder/abs.d.ts
  /root/src/abs.ts
  /root/src/abs.ts
  /root/abs.ts
  /root/abs.d.ts
  总结一下就是绝对路径会向外冒泡，每次同时兼顾 file.ts和file.d.ts

  Node模块解析策略
  1.相对路径
  /root/src/folder/a.js 文件中 let a = require('./relative') 策略如下：
  // 第一步直接在当前目录寻找js文件
  /root/src/folder/relative.js

  // 第二步把relative当做文件夹，查找目录下的package.json的main，
  /root/src/folder/relative/ 目录下有package.json文件并且 main: 'lib/src/' 则 /root/src/folder/relative/lib/src/

  // 第三步relative目录下没有pakeage.json或者有但是没配置main，则查找index.js，这里的index就隐式设置为package.json的main配置
  /root/src/folder/relative/index.js
  
  2.绝对路径 绝对路径node会查找node_modules目录，注意这里可能出入有点大，和相对路径不能混淆
  /root/src/folder/a.js 文件中 let a = require('abs') 策略如下：
  /root/src/folder/node_modules/abs.js
  /root/src/folder/node_modules/abs/package.json的main配置
  /root/src/folder/node_modules/abs/index.js

  /root/src/node_modules/abs.js
  /root/src/node_modules/abs/ package.json的main配置
  /root/src/node_modules/abs/index.js

  /root/node_modules/abs.js
  /root/node_modules/abs/ package.json的main配置
  /root/node_modules/abs/index.js

  /node_modules/abs.js
  /node_modules/abs/ package.json的main配置
  /node_modules/abs/index.js
  也就是说绝对路径中模块解析策略是由内向外找node_modules中的 .js package.json index.js
  比如说import {} from 'vue'就是在node_modules中有vue文件夹 /vue/package.json 中有main的配置 "main": "dist/vue.runtime.common.js"
  也就是说/node_modules/vue/dist/vue.runtime.common.js才是真正引用的内容

  typescript模块解析策略是借鉴node
  node检查name.js /name/package.json 的main 以及index.js
  相对路径
  1.ts检查 name.ts name.tsx name.d.ts
  2.package.json的types而不是main
  3.index.ts index.tsx index.d.ts
  绝对路径
  node_modules下的文件以及冒泡行为
*/
Object.defineProperty(exports, "__esModule", { value: true });
