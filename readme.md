# Youtube Search Favorites

## Overview
This application is a youtube video search site.  The user can type in a
search string and find videos related to the search term.  The search results
will be on the right aside.  You may click on these videos to show the playable
video on the left.  This site is Stripped down and should serve faster video
than the original youtube site.

The user can also add a video to a community favorites list by just clicking on
the blue save to list button below.  To see the list of favorited videos just
click on the orange favorites list button.  This will take you to another page
which shows a feed of community favorite videos.  You will see videos other users
have also favorited.

The favorites videos page shows a list of videos complete with a title and
quick description.  To watch a video simply click on the watch button and a
modal will popup revealing the video.  When you are done watching, either close
the video by clicking close, or you can delete the video entirely by clicking
delete.  (Note this will delete the video for the entire community.)

Home button is above to take you back to the main search page.

## Technical
This application was built using data and the search features available from the
[youtube-api-search api](https://developers.google.com/youtube/v3/docs/search/list).
It requires user to register and receive an api key.  

Front end is built with React.js and Redux.js store.  
Back end is built using Node.js and the Express.js framework with Mongo database
hosted on [mongolab](https://mlab.com/).

mongolab is described below as per the site.

```"mLab is a fully managed cloud database service featuring automated provisioning and scaling of MongoDB databases, backup and recovery, 24/7 monitoring and alerting, web-based management tools, and expert support. mLab's Database-as-a-Service platform powers hundreds of thousands of databases across AWS, Azure, and Google and allows developers to focus their attention on product development instead of operations."```

The application is hosted on Heroku.

## Working application
please visit [Youtube search favorites](https://shrouded-mesa-30974.herokuapp.com/).
