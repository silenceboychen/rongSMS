# rongSMS
一个nodejs实现的容联云发送短信模板模块（云联云官方没有提供nodejs实现的版本），支持node7.6以上版本。支持所有短信模板。<br/>
一些常用的容联云返回码：<br/>

| code  |   含义                              |
|-------|------------------------------------|
|000000  | 发送成功                            |
|160038  | 短信验证码发送过频繁                  |
|160040  | 该手机号短信验证码发送次数超过当日限制   |

# Installation
```
$ npm install rongsms
```
or

```
$ yarn add rongsms
```

# Usage

```
const rongSms = require('rongSms');

//生成验证码，在发送验证码是可以用来生成6位验证码。如果不是发送验证码可以不用。
const code = rongSms.generate_code();

//初始化
//account_sid: 主账户sid，登陆云通讯网站后，可在控制台首页看到开发者主账号ACCOUNT SID
//account_token： 主账户Token，登陆云通讯网站后，可在控制台首页看到开发者主账号AUTH TOKEN。
//app_id: 请使用管理控制台中已创建应用的APPID。
rongSms.init_sms(account_sid, account_token, app_id);

//发送短信
//phone:接受短信手机号
//arr: 数组，对应短信模板中的替换内容。如短信模板为：您的验证码为{1}，请于{2}内正确输入，如非本人操作，请忽略此短信。arr取值为：['123456', '10分钟']
//template_id：模板id
rongSms.send_sms(phone, arr, template_id);

```
