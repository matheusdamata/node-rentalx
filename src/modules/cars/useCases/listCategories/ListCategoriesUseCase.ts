import { Category } from '../../model/Category'
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository'

class ListCategoriesUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute(): Category[] {
    const categories = this.categoriesRepository.list()

    return categories
  }
}

export { ListCategoriesUseCase }
