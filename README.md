# is-false-ai

A lightweight utility to detect if given value is false using AI.

## Installation

```bash
npm install is-false-ai
```

## Initialize

```typescript
import { initializeOpenAI } from 'is-false-ai';

initializeOpenAI({ apiKey: process.env.OPENAI_API_KEY }); // use your own OpenAI API key
```

## Usage

```typescript
import { isFalseAI } from 'is-false-ai';

isFalseAI(true) // false
isFalseAI(false) // true
isFalseAI('Hello, world!') // false
isFalseAI('This is a test.') // false
isFalseAI(NaN) // true
isFalseAI(undefined) // true
isFalseAI(null) // true
isFalseAI({}) // true
isFalseAI([]) // true
```
