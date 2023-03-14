# Brunost (Brown Cheese)

Brunost is a JavaScript library that lets you send messages to various chat services, which is useful for sending notifications to yourself or your team. Oh also, it has a cool name and has minimal dependencies.

Currently supported services are:
- Matrix

More services will be added in the future. If you have a suggestion for a service, please open an issue and I'll look into it.

## Usage

First we need to install the library.

```bash
npm install brunost
```

Then we can use it in our code.

```javascript
const brunost = require('brunost');

brunost.sendMatrixMessage("matrix.org", "token", "roomid", "Hello world!");
```

What about TypeScript? No problem!

```typescript
import { sendMatrixMessage } from 'brunost';

sendMatrixMessage("matrix.org", "token", "roomid", "Hello world!");
```

## API

### sendMatrixMessage

```typescript
sendMatrixMessage(server: string, token: string, roomid: string, message: string): Promise<void>
```

Sends a message to a Matrix room. Room ID can be found in the room settings (do not use room alias, aka #room:server.org).