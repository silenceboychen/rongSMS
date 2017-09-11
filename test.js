const sms = require('./index');
sms.init_sms('8a216da857511049015759fefd4d051e', 'd24f8c1124e14f65b4e0ee9723232560');
sms.send_sms('17839718588', '')
const code = sms.generate_code();