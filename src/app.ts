import container from "ioc-container";

const { logger } = container;

logger.writeToTerminal("Lorem Ipsum");

(async function () {
  const res = await logger.writeToFile("Lorem Ipsum");
  console.log(`---res: `, res);
})();
