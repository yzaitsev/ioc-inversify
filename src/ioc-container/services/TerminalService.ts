import { injectable } from "inversify";
import "reflect-metadata";

import { IPrinter } from "ioc-container/interfaces";

@injectable()
export default class TerminalService implements IPrinter {
  write(message: string): boolean {
    console.log(message);
    return true;
  }
}
