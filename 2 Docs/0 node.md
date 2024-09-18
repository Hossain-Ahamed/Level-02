# Insert something to Node express

- Insert a field `user` to `Request` in express  `index.d.ts` 18-6

```js
import { JwtPayload } from 'jsonwebtoken';

declare global {
	namespace Express {
		interface Request {
			user : JwtPayload
		}
	}
}
```
