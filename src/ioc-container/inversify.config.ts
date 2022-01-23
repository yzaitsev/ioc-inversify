import { Container } from "inversify";
import "reflect-metadata";

import FileService from "ioc-container/services/FileService";
import LoggerService from "ioc-container/services/LoggerService";
import TerminalService from "ioc-container/services/TerminalService";
import TYPES from "ioc-container/types";
import { ILoggerService, IPrinter } from "ioc-container/interfaces";

const container = new Container();

container.bind<ILoggerService>(TYPES.Logger).to(LoggerService);
container.bind<IPrinter>(TYPES.Terminal).to(TerminalService);
container.bind<IPrinter>(TYPES.File).to(FileService);

export default container;
