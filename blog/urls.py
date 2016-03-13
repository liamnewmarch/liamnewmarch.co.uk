from django.conf.urls import patterns, include, url

import session_csrf
session_csrf.monkeypatch()

from django.contrib import admin
admin.autodiscover()

from blog import views

urlpatterns = patterns(
    '',
    url(r'^_ah/', include('djangae.urls')),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^csp/', include('cspreports.urls')),
    url(r'^auth/', include('djangae.contrib.gauth.urls')),

    # pages
    url(r'^$', views.home_view, name='home'),
    url(r'^about/', views.about_view, name='about'),
    url(r'^contact/', views.contact_view, name='contact'),
    # posts
    url(r'^posts/(?P<post_slug>[\w-]+)/', views.post_view, name='post'),
    # posts (old url style)
    url(r'^(?P<post_slug>[\w-]+)', views.old_post_view, name='old_post'),
)
