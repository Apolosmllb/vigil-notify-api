import { Request, Response } from "express";
import { Controller } from "./Controller";
import httpStatus from "http-status";

export default class StatusController implements Controller {
  async run(req: Request, res: Response): Promise<void> {
    res.status(httpStatus.OK).send();
  }
}
