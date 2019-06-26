import { cleanBuild, copyStatic, getPages, writePages } from './tasks.js';

/**
 * Main sequence of events. Logs (hopefully) helpful feedback to the console,
 * and catches errors from the async stack.
 */
async function main() {
  /* eslint-disable no-console */
  try {
    console.log('Build started.');

    console.log('Cleaning previous builds.');
    await cleanBuild();

    console.log('Copying static files.');
    await copyStatic();

    console.log('Reading pages.');
    const pages = await getPages();

    console.log('Writing pages.');
    await writePages(pages);

    console.log('Build complete.');
  } catch (error) {
    console.log('Build stopped because an error occurred:\n');
    console.error(error);
    process.exit(1);
  }
  /* eslint-enable */
}

main();
