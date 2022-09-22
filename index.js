const fetch = require("fetch").fetchUrl;

const ding = ({
  token = '',
  text = '',
  atMobiles = [],
  isAtAll = false
}) => {
  return new Promise((resolve, reject) => {
    fetch(`https://oapi.dingtalk.com/robot/send?access_token=${token}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      payload: JSON.stringify({
        "msgtype": "text",
        "text": {
          "content": text
        },
        "at": {
          "atMobiles": atMobiles,
          "isAtAll": isAtAll,
        },
      })
    }, (error, _, body) => {
      if (error) {
        reject(error)
      } else {
        resolve()
      }
    })
  })
}

const Ding = ({
  token = '',
  atMobiles = [],
  isAtAll = false
}) => {
  return (text) => ding({
    token,
    text,
    atMobiles,
    isAtAll
  });
}

module.exports = Ding