import * as sapper from '@sapper/server';
import compression from 'compression';
import polka from 'polka';
import sirv from 'sirv';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

polka()
	.use(
    'sandbox',
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	)
	.listen(PORT);
