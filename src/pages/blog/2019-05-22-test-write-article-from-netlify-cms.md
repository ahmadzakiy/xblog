---
templateKey: blog-page
title: Membuat Website dengan GatsbyJS coy
date: 2019-05-22T16:05:12.953Z
description: This is a description section's of xBlog
cover: /img/asus-zephyrus-g.jpg
---
### An h3 header ubah dari cms

```javascript{1-2,2}{numberLines:
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`undefined
    options: {
      plugins: [
        `gatsby-remark-prismjs`undefined
      ]
    }
  }
]
```

![Asus Zephyrus G](/img/asus-zephyrus-g.jpg "Best Laptop Gaming")

Paragraphs are separated by a blank line. test sama indra

2nd paragraph. _Italic_, **bold**, and `monospace`. Itemized lists look like:

* this one
* that one
* the other one

Note that --- not considering the asterisk --- the actual text content starts at 4-columns in.

> Block quotes are written like so.
>
> They can span multiple paragraphs, if you like

```jsx
  (function() {

    var script = document.createElement('script');

    script.type = 'text/javascript';

    script.src = 'http://www.bukalapak.com/ast/widget.js';

    var script_doc = document.getElementsByTagName('script')\[0];

    if(script_doc.src != script.src)
    script_doc.parentNode.insertBefore(script, script_doc);

  })();
```

this a `code`
