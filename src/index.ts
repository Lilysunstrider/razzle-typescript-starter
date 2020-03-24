import http from 'http';
import app from '@/server'

const server = http.createServer(app);

let currentApp = app;

// @ts-ignore
server.listen(process.env.PORT || 3000, error => {
  if (error) {
    console.log(error);
  }

  console.log('🚀 started');
});

// @ts-ignore
const hot = module.hot;
if (hot) {
  console.log('✅  Server-side HMR Enabled!');

  hot.accept('./server', () => {
    console.log('🔁  HMR Reloading `./server`...');

    try {
      server.removeListener('request', currentApp);
      server.on('request', app);
      currentApp = app;
    } catch (error) {
      console.error(error);
    }
  });
}
