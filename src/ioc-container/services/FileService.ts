import path from "path";
import { writeFile } from "fs/promises";
import { injectable } from "inversify";
import "reflect-metadata";

import { IPrinter } from "ioc-container/interfaces";

@injectable()
export default class FileService implements IPrinter {
  async write(message: string): Promise<boolean> {
    await writeFile(path.resolve(process.cwd(), "log.txt"), message);
    return true;
  }
}
