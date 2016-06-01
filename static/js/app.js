import { AsyncForm } from './components/async-form';
import { Bookmarklet } from './components/bookmarklet';
import { DisqusComments } from './components/disqus-comments';
import { Filter } from './components/filter';
import { GoogleAnalytics } from './components/google-analytics';
import { InsertAge } from './components/insert-age';
import { Modal } from './components/modal';

import { registerComponent } from './utils/register-component';


registerComponent(AsyncForm);
registerComponent(Bookmarklet);
registerComponent(DisqusComments);
registerComponent(Filter);
registerComponent(GoogleAnalytics);
registerComponent(InsertAge);
registerComponent(Modal);
