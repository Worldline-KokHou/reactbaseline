import * as Yup from 'yup'

export const UserEditSchema = Yup.object({
  name: Yup.string().required(),
  username: Yup.string().required(),
  phone: Yup.string(),
  website: Yup.string(),
  address: Yup.object({
    city: Yup.string().required(),
    street: Yup.string(),
    suite: Yup.string(),
    zipcode: Yup.string(),
    geo: Yup.object({
      lat: Yup.string(),
      lng: Yup.string()
    })
  }),
  company: Yup.object({
    name: Yup.string().required(),
    catchPhrase: Yup.string(),
    bs: Yup.string()
  })
})
