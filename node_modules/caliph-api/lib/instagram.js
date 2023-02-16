(exports.post = function (e) {
  let a = new URL(e)["pathname"];
  return new Promise((t, e) => {
    require("axios")({
      url: "https://www.instagramsave.com/",
      method: "GET",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36",
      },
    }).then((e) => {
      Promise.all([
        require("axios")({
          url: "https://www.instagramsave.com/system/action.php",
          method: "POST",
          headers: {
            "User-Agent":
              "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36",
            cookie: e.headers["set-cookie"][0].split(";")[0],
          },
          data: new URLSearchParams(
            Object.entries({
              url: "https://www.instagram.com" + a,
              action: "post",
              token: String(
                require("cheerio").load(e.data)("#token").attr("value")
              ),
              json: "",
            })
          ),
        }),
      ]).then((e) => {
        t(e[0].data);
      });
    });
  });
}.bind()),
  (exports.story = function (a) {
    return new Promise((t, e) => {
      require("axios")({
        url: "https://www.instagramsave.com/",
        method: "GET",
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36",
        },
      }).then((e) => {
        Promise.all([
          require("axios")({
            url: "https://www.instagramsave.com/system/action.php",
            method: "POST",
            headers: {
              "User-Agent":
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36",
              cookie: e.headers["set-cookie"][0].split(";")[0],
            },
            data: new URLSearchParams(
              Object.entries({
                url: "https://www.instagram.com/" + a,
                action: "story",
                token: String(
                  require("cheerio").load(e.data)("#token").attr("value")
                ),
                json: "",
              })
            ),
          }),
        ]).then((e) => {
          t(e[0].data);
        });
      });
    });
  }.bind());
