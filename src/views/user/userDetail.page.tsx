import { Prompt, useHistory, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/redux.hook'
import { userActions } from '../../store/slices/user.slice'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { IUser } from '../../utils/type/user.type'
import { UserEditSchema } from '@pages/user/userEdit.schema'

function renderObject(o: object): any {
  return Object.entries(o).map(([key, value]) => {
    if (typeof value === 'object') {
      return renderObject(value)
    } else {
      return (
        <div key={key}>
          {key}: {String(value)}
        </div>
      )
    }
  })
}

const UserDetailPage = () => {
  const history = useHistory()
  const params = useParams<{ id: string }>()
  const { id } = params

  const dispatch = useAppDispatch()
  const user: IUser | undefined = useAppSelector((state) => state.user.userDetail)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(UserEditSchema)
  })

  const onSubmit = handleSubmit(
    (data) => {
      console.log('onSubmit', data)
    },
    (errors1) => {
      console.error(errors1)
    }
  )

  useEffect(() => {
    dispatch(userActions.fetchUserById(id))
  }, [])

  useEffect(() => {
    if (user) {
      reset({ ...user })
    }
  }, [user])

  return (
    <div>
      <h1>Welcome User {id}</h1>
      <button onClick={history.goBack}>GO BACK</button>

      <hr />
      <form onSubmit={onSubmit}>
        <fieldset>
          <legend>Personal</legend>
          <div>
            <label htmlFor="name">Name</label>
            <input {...register('name')} />
            <p>{errors.name?.message}</p>
          </div>
          <div>
            <label htmlFor="username">username</label>
            <input {...register('username')} />
            <p>{errors.username?.message}</p>
          </div>
          <div>
            <label htmlFor="phone">phone</label>
            <input {...register('phone')} />
            <p>{errors.phone?.message}</p>
          </div>

          <div>
            <label htmlFor="website">website</label>
            <input {...register('website')} />
            <p>{errors.website?.message}</p>
          </div>
        </fieldset>
        <fieldset>
          <legend>Address</legend>
          <div>
            <label htmlFor="address.city">City</label>
            <input {...register('address.city')} />
            <p>{errors.address?.city?.message}</p>
          </div>
          <div>
            <label htmlFor="address.street">Street</label>
            <input {...register('address.street')} />
            <p>{errors.address?.street?.message}</p>
          </div>
          <div>
            <label htmlFor="address.suite">Suite</label>
            <input {...register('address.suite')} />
            <p>{errors.address?.suite?.message}</p>
          </div>
          <div>
            <label htmlFor="address.zipcode">ZipCode</label>
            <input {...register('address.zipcode')} />
            <p>{errors.address?.zipcode?.message}</p>
          </div>

          <fieldset>
            <legend>Geo</legend>
            <div>
              <label htmlFor="address.geo.lat">Lat</label>
              <input {...register('address.geo.lat')} />
              <p>{errors.address?.geo?.lat?.message}</p>
            </div>
            <div>
              <label htmlFor="address.geo.lng">Lng</label>
              <input {...register('address.geo.lng')} />
              <p>{errors.address?.geo?.lng?.message}</p>
            </div>
          </fieldset>
        </fieldset>
        <fieldset>
          <legend>Company</legend>
          <div>
            <label htmlFor="company.name">name</label>
            <input {...register('company.name')} />
            <p>{errors.company?.name?.message}</p>
          </div>
          <div>
            <label htmlFor="company.catchPhrase">catchPhrase</label>
            <input {...register('company.catchPhrase')} />
            <p>{errors.company?.catchPhrase?.message}</p>
          </div>
          <div>
            <label htmlFor="company.aaa">bs</label>
            <input {...register('company.bs')} />
            <p>{errors.company?.bs?.message}</p>
          </div>
        </fieldset>

        <button type={'submit'}>SUBMIT</button>
      </form>
      <hr />
      <hr />

      {user && renderObject(user)}
      <Prompt message={'Are you sure wan to go back?'} />
    </div>
  )
}

export default UserDetailPage
