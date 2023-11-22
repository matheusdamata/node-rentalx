import { Specification } from '../../model/Specification'
import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository'

class ListSpecificationsUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute(): Specification[] {
    const repositories = this.specificationsRepository.list()

    return repositories
  }
}

export { ListSpecificationsUseCase }
