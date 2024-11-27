interface IsFalseAIOptions {
    apiKey: string;
}
declare function initializeOpenAI(options: IsFalseAIOptions): void;
declare function isFalseAI(value: any): Promise<boolean>;
export { initializeOpenAI, isFalseAI };
