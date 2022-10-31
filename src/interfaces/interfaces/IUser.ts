import { IRoleDetail } from './IRoleDetail'

export interface IUser {
  id: number
  username: string
  fullname: string
  email: string
  birthday: Date
  phone: string
  imageName: string
  isSuperUser: boolean
  status: string
  __roles__: IRoleDetail[]
}
