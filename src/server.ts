import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import {join} from 'node:path';
import {environment} from '@environments/environment.development';

const browserDistFolder = join(import.meta.dirname, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine();

const xmlbuilder = require('xmlbuilder');

app.get('/robots.txt' );

// ...en la configuración del servidor Express
app.get('/sitemap.xml', async (req, res) => {
  try {
    const staticRoutes = ['/', '/login', '/register'];
   // const dynamicUrls = await getDynamicUrlsFromDatabase(); // Función para obtener URLs de tu DB
    const dynamicUrls = ['/forum/view/me-perdi/1/10']
    const urls = [...staticRoutes, ...dynamicUrls];

    const root = xmlbuilder.create('urlset', { version: '1.0', encoding: 'UTF-8' });
    root.att('xmlns', 'http://www.sitemaps.org/schemas/sitemap/0.9');

    urls.forEach(url => {
      const urlNode = root.ele('url');
      urlNode.ele('loc', `${environment.public_url}${url}`);
      urlNode.ele('changefreq', 'yearly');
      urlNode.ele('priority', '0.7');
    });

    const xml = root.end({ pretty: true });
    res.header('Content-Type', 'application/xml');
    res.send(xml);

  } catch (error) {
    console.error('Error generating sitemap:', error);
    res.status(500).send('Error generating sitemap');
  }
});
/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

/**
 * Start the server if this module is the main entry point.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url)) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, (error) => {
    if (error) {
      throw error;
    }

    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);
