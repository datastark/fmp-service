var Joi = require('joi')

var serverSchema = Joi.object().required().keys({
  host: Joi.string().hostname(),
  port: Joi.number().required(),
  labels: Joi.string()
})

var envVarSchema = Joi.object().required().keys({
  fmp_db_conn: Joi.string().required()
})

module.exports = {
  server: serverSchema,
  logging: Joi.object(),
  envVars: envVarSchema
}