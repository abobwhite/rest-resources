import {Resource, ResourceKey} from 'rest-resources'

@Resource('employees')
export class Employee {
  @ResourceKey()
  key: number
  firstName: string
  lastName: string
}
