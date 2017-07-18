import '../libs/es6-promise/promise.js';
import '../libs/fetch/fetch.js';

import { AsyncForm } from './components/async-form.js';
import { DisqusComments } from './components/disqus-comments.js';
import { Filter } from './components/filter.js';
import { FocusHinting } from './components/focus-hinting.js';
import { GoogleAnalytics } from './components/analytics.js';
import { InsertAge } from './components/insert-age.js';
import { Modal } from './components/modal.js';
import { TimelineLayers } from './components/timeline-layers.js';

import { canonicalRedirect } from './utils/canonical-redirect.js';
import { registerComponent } from './utils/register-component.js';
import { registerServiceWorker } from './utils/register-service-worker.js';


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
