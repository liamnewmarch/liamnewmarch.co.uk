import { Bookmarklet } from './components/bookmarklet';
import { ContactForm } from './components/contact-form';
import { DisqusComments } from './components/disqus-comments';
import { GoogleAnalytics } from './components/google-analytics';
import { InsertAge } from './components/insert-age';
import { MainMenu } from './components/main-menu';


document.addEventListener('DOMContentLoaded', () => {
  Bookmarklet.register('.bookmarklet');
  ContactForm.register('.form--contact');
  DisqusComments.register('.disqus-comments');
  GoogleAnalytics.register('.google-analytics');
  InsertAge.register('.insert-age');
  MainMenu.register('.hamburger');
}, false);
