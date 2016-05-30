import { Bookmarklet } from './components/bookmarklet';
import { ContactForm } from './components/contact-form';
import { DisqusComments } from './components/disqus-comments';
import { GoogleAnalytics } from './components/google-analytics';
import { InsertAge } from './components/insert-age';
import { MainMenu } from './components/main-menu';

import { registerComponents } from './utils/register-components';


registerComponents([
  Bookmarklet,
  ContactForm,
  DisqusComments,
  GoogleAnalytics,
  InsertAge,
  MainMenu,
]);
