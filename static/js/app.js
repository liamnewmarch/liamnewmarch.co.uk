import '../libs/es6-promise/promise.js';
import '../libs/fetch/fetch.js';

import { AsyncForm } from './components/async-form';
import { Bookmarklet } from './components/bookmarklet';
import { DisqusComments } from './components/disqus-comments';
import { Filter } from './components/filter';
import { GoogleAnalytics } from './components/google-analytics';
import { InsertAge } from './components/insert-age';
import { Modal } from './components/modal';
import { TimelineLayers } from './components/timeline-layers';

import { canonicalRedirect } from './utils/canonical-redirect';
import { registerComponent } from './utils/register-component';


canonicalRedirect();

registerComponent(AsyncForm);
registerComponent(Bookmarklet);
registerComponent(DisqusComments);
registerComponent(Filter);
registerComponent(GoogleAnalytics);
registerComponent(InsertAge);
registerComponent(Modal);
registerComponent(TimelineLayers);
