from django.conf.urls import patterns, include, url

import session_csrf
session_csrf.monkeypatch()

from django.contrib import admin
admin.autodiscover()

from blog.views import (
    home_view,
    about_view,
    contact_view,
    post_view,
)

urlpatterns = patterns(
    '',
    url(r'^_ah/', include('djangae.urls')),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^csp/', include('cspreports.urls')),
    url(r'^auth/', include('djangae.contrib.gauth.urls')),

    # pages
    url(r'^$', home_view),
    url(r'^about/', about_view),
    url(r'^contact/', contact_view),
    # posts
    url(r'^posts/(?P<post_slug>\w+)', post_view),
    # posts (old url style)
    # url(r'^(?P<username>\w+)', post_view),

)
