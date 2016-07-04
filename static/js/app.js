import { AsyncForm } from './components/async-form';
import { Bookmarklet } from './components/bookmarklet';
import { DisqusComments } from './components/disqus-comments';
import { Filter } from './components/filter';
import { GoogleAnalytics } from './components/google-analytics';
import { InsertAge } from './components/insert-age';
import { Modal } from './components/modal';
import { TimelineLayers } from './components/timeline-layers';

import { registerComponent } from './utils/register-component';
import { serviceWorker } from './utils/service-worker';


registerComponent(AsyncForm);
registerComponent(Bookmarklet);
registerComponent(DisqusComments);
registerComponent(Filter);
registerComponent(GoogleAnalytics);
registerComponent(InsertAge);
registerComponent(Modal);
registerComponent(TimelineLayers);

serviceWorker.register();
