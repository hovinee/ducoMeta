import { UserModel } from '@/models/user'

import Joi from 'joi'

export const loginSchema = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: false },
    })
    .required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,20}$')).required(),
})

export const registerSchema = Joi.object<UserModel>({
  name: Joi.string().required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: false },
    })
    .required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{8,20}$')).required(),
})

export function validateUserRegister(user: UserModel) {
  return registerSchema.validate(user)
}

export function validateUserLogin(user: Omit<UserModel, 'userName'>) {
  return loginSchema.validate(user)
}
