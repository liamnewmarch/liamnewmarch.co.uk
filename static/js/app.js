import '../libs/es6-promise/promise.js';
import '../libs/fetch/fetch.js';

import { AsyncForm } from './components/async-form';
import { DisqusComments } from './components/disqus-comments';
import { Filter } from './components/filter';
import { FocusHinting } from './components/focus-hinting';
import { GoogleAnalytics } from './components/google-analytics';
import { InsertAge } from './components/insert-age';
import { Modal } from './components/modal';
import { TimelineLayers } from './components/timeline-layers';

import { canonicalRedirect } from './utils/canonical-redirect';
import { registerComponent } from './utils/register-component';
import { registerServiceWorker } from './utils/register-service-worker';


canonicalRedirect();
registerServiceWorker();

registerComponent(AsyncForm);
registerComponent(DisqusComments);
registerComponent(Filter);
registerComponent(FocusHinting);
registerComponent(GoogleAnalytics);
registerComponent(InsertAge);
registerComponent(Modal);
registerComponent(TimelineLayers);
