/**
 * 小程序配置文件
 */

// 此处主机域名修改成腾讯云解决方案分配的域名
//var host = 'https://www.easywork.net.cn/kjc';
//var host = 'http://192.168.1.102:8082';
//var host = 'http://localhost:8080'
var host = 'https://www.wangyao.online/proseer';
var api = {

  // 下面的地址配合云端 Demo 工作
  service: {
    host,

    login: `${host}/api/v1/user/login`,

    

}
};

module.exports = api;
