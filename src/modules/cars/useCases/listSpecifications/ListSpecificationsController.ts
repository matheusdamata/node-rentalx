import { Request, Response } from 'express'
import { ListSpecificationsUseCase } from './ListSpecificationsUseCase'

class ListSpecificationsController {
  // eslint-disable-next-line no-useless-constructor
  constructor(private listSepecificationsUseCase: ListSpecificationsUseCase) {}

  handle(req: Request, res: Response): Response {
    const all = this.listSepecificationsUseCase.execute()

    return res.json(all)
  }
}

export { ListSpecificationsController }
