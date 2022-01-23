import { injectable, inject } from "inversify";
import { ILoggerService, IPrinter } from "ioc-container/interfaces";
import TYPES from "ioc-container/types";

@injectable()
export default class LoggerService implements ILoggerService {
  private _terminal: IPrinter;
  private _file: IPrinter;

  constructor(
    @inject(TYPES.Terminal) terminal: IPrinter,
    @inject(TYPES.File) file: IPrinter
  ) {
    this._terminal = terminal;
    this._file = file;
  }

  writeToTerminal(message: string): boolean {
    return this._terminal.write(message) as boolean;
  }

  async writeToFile(message: string): Promise<boolean> {
    return await this._file.write(message);
  }
}
