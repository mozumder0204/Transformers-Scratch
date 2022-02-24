const Joi = require('joi');

const transformerAddValidate = Joi.object({
  fullName: Joi.string().trim().required(),
  designation: Joi.string().trim().required(),
  employeeId: Joi.string().trim().required(),
  mobileNo: Joi.string().trim().required(),
  base64Data: Joi.string().trim().required(),
});

const transformerUpdateValidate = Joi.object({
  fullName: Joi.string().trim().required(),
  designation: Joi.string().trim().required(),
  employeeId: Joi.string().trim().required(),
});

module.exports = {
  transformerAddValidate: transformerAddValidate,
  transformerUpdateValidate: transformerUpdateValidate,
};
