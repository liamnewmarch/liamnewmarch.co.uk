from django.http import HttpResponse, HttpResponsePermanentRedirect, Http404
from django.shortcuts import render
from blog.models import blog_posts


def home_view(request):
    context = {'recent_posts': blog_posts.most_recent(10)}
    return render(request, 'index.html', context)


def about_view(request):
    return render(request, 'about.html')


def contact_view(request):
    return render(request, 'contact.html')


def post_view(request, post_slug):
    post = blog_posts.get_by_slug(post_slug)
    context = {'post': post}
    return render(request, 'post.html', context)

def old_post_view(request, post_slug):
    post = blog_posts.get_by_slug(post_slug)
    if not post:
        raise Http404
    return HttpResponsePermanentRedirect('/posts/' + post_slug + '/')
