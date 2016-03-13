import json
import codecs

from markdown import markdown

from django.utils.html import mark_safe

from blog.settings import BASE_DIR


class BlogPost:
    def __init__(self, data):
        self.title = data['title']
        self.slug = data['slug']
        self.published = data['published']
        self.file_name = data['markdown']
        self.markdown = self.get_markdown()
        self.html = self.get_html()
        print len(self.markdown)
        print len(self.html)

    def get_markdown(self):
        file_path = 'static/posts/' + self.file_name
        markdown_file = codecs.open(file_path, encoding='utf-8', mode='r')
        return markdown_file.read()

    def get_html(self):
        extensions = ['markdown.extensions.fenced_code']
        html = markdown(self.markdown, extensions=extensions)
        return mark_safe(html)


class BlogPosts:
    def __init__(self, manifest_path):
        manifest_json = codecs.open(manifest_path, encoding='utf-8', mode='r')
        data = json.loads(manifest_json.read())
        self.posts = [BlogPost(post) for post in data['posts']]

    def get_by_slug(self, slug):
        for post in self.posts:
            if post.slug == slug:
                return post

    def most_recent(self, num=10):
        return sorted(self.posts, key=lambda x: x.published, reverse=True)[:num]


blog_posts = BlogPosts('static/posts/manifest.json')
