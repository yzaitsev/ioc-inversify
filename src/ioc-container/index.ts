import container from "ioc-container/inversify.config";
import TYPES from "ioc-container/types";
import { ILoggerService } from "ioc-container/interfaces";

export default {
  logger: container.get<ILoggerService>(TYPES.Logger),
};
