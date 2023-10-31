import validator from 'validator';

validator.isEmail('test@test.com') //true
validator.isEmail('abcDE123') //false