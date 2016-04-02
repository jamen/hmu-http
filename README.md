# hmu-http
> A hmu plugin for fetching the HTTP status of a server.

A [`hmu`](https://github.com/jamen/hmu) plugin that performs a GET request to a HTTP server to check it's status.

## Installation
```shell
$ npm install -g hmu-http
```

## Usage
```hmu
$ hmu http <server> [...headers]
```

Example:
```
$ hmu http https://api.github.com/ --User-Agent='example'
```

## Credits
| ![jamen][avatar] |
|:---:|
| [Jamen Marzonie][github] |

  [avatar]: https://avatars.githubusercontent.com/u/6251703?v=3&s=125
  [github]: https://github.com/jamen
