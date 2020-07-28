---
layout: page
permalink: blog
title: Blog
description: We share news, experiences, and achievements here.
---

{% for post in site.categories.blog %}
 <li><span>{{ post.date | date_to_string }}</span> &nbsp; <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}