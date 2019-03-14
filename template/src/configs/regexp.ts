export const PHONE_REGEXP = /^(((13[0-9]{1})|(14[5-9]{1})|(15[0-9]{1})|(166)|(17[0-8]{1})|(18[0-9]{1})|(19[8-9]{1}))\d{8})$/;

// 中：字母+数字，字母+特殊字符，数字+特殊字符
export const PASSWORD_REGEXP = /^(?![a-zA-Z]+$)(?![\W_]+$)(?![0-9]+$)[a-zA-Z0-9\W_]{6,20}$/
