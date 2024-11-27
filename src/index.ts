import {
  initializeOpenAI as initializeOpenAIForTrue,
  isTrueAI,
} from "is-true-ai";

interface IsFalseAIOptions {
  apiKey: string;
}

function initializeOpenAI(options: IsFalseAIOptions) {
  initializeOpenAIForTrue(options);
}

async function isFalseAI(value: any): Promise<boolean> {
  return !(await isTrueAI(value));
}

export { initializeOpenAI, isFalseAI };
