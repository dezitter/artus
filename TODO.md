# Features

## In-app

- [ ] 'back to top' button in View page

- [ ] add UI config module (limit/page, ...)
 - [ ] fix listing length when adding/removing

- [ ] add tagging support
 - [ ] filter by tags on listing page

- [ ] add user authentication support
 - see [passport](https://github.com/jaredhanson/passport)

## External

- [ ] create a bookmark saving button
- [ ] firefox/chrome "Add to Artus" item in context menu

# Improvements

- [ ] handle errors

- [ ] when fully fetching an article, add its content to listing (the content is excluded on initial listing)
 - [ ] then when viewing an article, see if its content is available in store already, and avoid fetch

- [x] hand off store's state from server to client
 - [ ] try to avoid refetching on client after bootstrapping

- [ ] follow airbnb/javascript styleguide

# Nice to have

- [ ] offline support
 - [ ] use last known list of articles
 - [ ] reload articles fully fetched (with content) if available in View
 - [ ] record delete actions and sync when possible
