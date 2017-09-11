const moment = require('moment');
const crypto = require('crypto');
const superagent = require('superagent');
let account_sid = '';
let account_token = '';
let app_id = '';
exports.send_sms = async (phone_number, arr, template_id) => {
		let timestamp_formatted = moment().format('YYYYMMDDHHmmss');
		let to_be_signed_parts = [
			account_sid,
			account_token,
			timestamp_formatted,
		];
		let to_be_signed = to_be_signed_parts.join('');
		let signature = crypto.createHash('md5').update(to_be_signed).digest('hex').toUpperCase();
		let url_parts = [
			'https://app.cloopen.com:8883', 
			'/2013-12-26/Accounts/', account_sid,
			'/SMS/TemplateSMS?sig=', signature,
		];
		let url = url_parts.join('');
		let auth_buffer = new Buffer(account_sid + ':' + timestamp_formatted);
		let auth_value = auth_buffer.toString('base64');
		let request_body = {
			to: phone_number,
			datas: arr,
			templateId: template_id,
			appId: app_id,
		};
		let prepared_request = await superagent.post(url)
				.timeout(2000)
				.set('Authorization', auth_value)
				.set('Accept', 'application/json')
				.send(request_body);
		return prepared_request.body;
};

exports.init_sms = (account_sid, account_token, app_id) => {
		account_sid = account_sid;
		account_token = account_token;
		app_id = app_id;
};

exports.generate_code = () => {
		console.log('-------------');
		return (Math.random() * 900000) | 100000;
};