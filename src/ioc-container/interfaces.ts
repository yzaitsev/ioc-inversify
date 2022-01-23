export interface IPrinter {
  write: (message: string) => boolean | Promise<boolean>;
}

export interface ILoggerService {
  writeToTerminal(message: string): boolean;
  writeToFile(message: string): Promise<boolean>;
}
