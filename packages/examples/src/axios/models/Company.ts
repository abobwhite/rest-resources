import {Resource, ResourceKey} from 'rest-resources'

@Resource('companies')
export class Company {
  @ResourceKey()
  id: string
  description: string
  numEmployes: number
  dateFounded: Date
}
