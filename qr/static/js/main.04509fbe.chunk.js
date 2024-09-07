(this["webpackJsonpqr-generator"] =
  this["webpackJsonpqr-generator"] || []).push([
  [0],
  {
    28: function (e, a, l) {},
    29: function (e, a, l) {},
    39: function (e, a, l) {},
    43: function (e, a, l) {
      "use strict";
      l.r(a);
      var t = l(1),
        n = l.n(t),
        i = l(13),
        c = l.n(i),
        r = (l(28), l(29), l(3)),
        o = l.n(r),
        s = l(7),
        b = l(4),
        j = l(22),
        d = l.n(j),
        u = l(16),
        h = l(0),
        p = Object(b.a)(function (e) {
          var a = e.userStore,
            l = function (e, a) {
              var l = document.createElement("a");
              (l.href = e),
                (l.download = "qrCode." + a),
                document.body.appendChild(l),
                l.click(),
                document.body.removeChild(l);
            },
            t = (function () {
              var e = Object(s.a)(
                o.a.mark(function e() {
                  var a, t, n;
                  return o.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (a = document.getElementById("qrCode")),
                            (t = { scale: 10 }),
                            (e.next = 4),
                            Object(u.svgAsPngUri)(a, t)
                          );
                        case 4:
                          (n = e.sent), l(n, "png");
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            n = (function () {
              var e = Object(s.a)(
                o.a.mark(function e() {
                  var a, t, n;
                  return o.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (a = document.getElementById("qrCode")),
                            (t = { scale: 10 }),
                            (e.next = 4),
                            Object(u.svgAsDataUri)(a, t)
                          );
                        case 4:
                          (n = e.sent), l(n, "svg");
                        case 6:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return Object(h.jsxs)("div", {
            className: "pb-5",
            children: [
              Object(h.jsx)("div", {
                className: "p-3",
                children: Object(h.jsx)(d.a, {
                  id: "qrCode",
                  value: a.qrData,
                  renderAs: "svg",
                  size: "200",
                  includeMargin: !0,
                }),
              }),
              Object(h.jsx)("h5", { children: "Download QR " }),
              Object(h.jsx)("a", {
                className: "m-2",
                href: "# ",
                onClick: t,
                children: "PNG",
              }),
              Object(h.jsx)("a", {
                className: "m-2",
                href: "# ",
                onClick: n,
                children: "SVG",
              }),
            ],
          });
        }),
        x = l(2),
        O = l(5),
        m = Object(b.a)(function (e) {
          var a = e.userStore,
            l = Object(O.a)(),
            t = l.register,
            n = l.handleSubmit,
            i = l.formState.errors;
          return Object(h.jsxs)("div", {
            children: [
              Object(h.jsx)("h4", { className: "mt-3", children: "Link" }),
              Object(h.jsxs)("form", {
                onSubmit: n(function (e) {
                  return a.setQrData(e.url);
                }),
                children: [
                  Object(h.jsx)("label", {
                    className: !0 !== a.darkMode ? "text-dark" : "",
                    htmlFor: "url",
                    children: "URL",
                  }),
                  Object(h.jsx)(
                    "input",
                    Object(x.a)({}, t("url", { required: !0 })),
                  ),
                  i.url &&
                    Object(h.jsx)("span", {
                      children: "This field is required",
                    }),
                  Object(h.jsx)("input", {
                    className: "btn-primary",
                    type: "submit",
                    value: "submit",
                  }),
                ],
              }),
            ],
          });
        }),
        v = Object(b.a)(function (e) {
          var a = e.userStore,
            l = Object(O.a)(),
            t = l.register,
            n = l.handleSubmit,
            i = l.formState.errors;
          return Object(h.jsxs)("div", {
            children: [
              Object(h.jsx)("h4", { className: "mt-3", children: "Text" }),
              Object(h.jsxs)("form", {
                onSubmit: n(function (e) {
                  return a.setQrData(e.message);
                }),
                children: [
                  Object(h.jsx)("label", {
                    className: !0 !== a.darkMode ? "text-dark" : "",
                    htmlFor: "message",
                    children: "Message",
                  }),
                  Object(h.jsx)(
                    "input",
                    Object(x.a)({}, t("message", { required: !0 })),
                  ),
                  i.message &&
                    Object(h.jsx)("span", {
                      children: "This field is required",
                    }),
                  Object(h.jsx)("input", {
                    className: "btn-primary",
                    type: "submit",
                    value: "submit",
                  }),
                ],
              }),
            ],
          });
        }),
        g = Object(b.a)(function (e) {
          var a = e.userStore,
            l = Object(O.a)(),
            t = l.register,
            n = l.handleSubmit,
            i = l.formState.errors;
          return Object(h.jsxs)("div", {
            children: [
              Object(h.jsx)("h4", { className: "mt-3", children: "Email" }),
              Object(h.jsxs)("form", {
                onSubmit: n(function (e) {
                  return a.setQrData(
                    "mailto:"
                      .concat(e.sendto, "?subject=")
                      .concat(e.subject, "&body=")
                      .concat(e.text),
                  );
                }),
                children: [
                  Object(h.jsx)("label", {
                    className: !0 !== a.darkMode ? "text-dark" : "",
                    htmlFor: "sendto",
                    children: "Send To",
                  }),
                  Object(h.jsx)(
                    "input",
                    Object(x.a)({}, t("sendto", { required: !0 })),
                  ),
                  i.sendto &&
                    Object(h.jsx)("span", {
                      children: "This field is required",
                    }),
                  Object(h.jsx)("label", {
                    className: !0 !== a.darkMode ? "text-dark" : "",
                    htmlFor: "subject",
                    children: "Subject",
                  }),
                  Object(h.jsx)("input", Object(x.a)({}, t("subject"))),
                  Object(h.jsx)("label", {
                    className: !0 !== a.darkMode ? "text-dark" : "",
                    htmlFor: "text",
                    children: "Text",
                  }),
                  Object(h.jsx)("input", Object(x.a)({}, t("text"))),
                  Object(h.jsx)("input", {
                    className: "btn-primary",
                    type: "submit",
                    value: "submit",
                  }),
                ],
              }),
            ],
          });
        }),
        k = Object(b.a)(function (e) {
          var a = e.userStore,
            l = Object(O.a)(),
            t = l.register,
            n = l.handleSubmit,
            i = l.formState.errors;
          return Object(h.jsxs)("div", {
            children: [
              Object(h.jsx)("h4", { className: "mt-3", children: "Phone" }),
              Object(h.jsxs)("form", {
                onSubmit: n(function (e) {
                  return a.setQrData(
                    "tel:+".concat(e.countrycode).concat(e.phone),
                  );
                }),
                children: [
                  Object(h.jsx)("label", {
                    className: !0 !== a.darkMode ? "text-dark" : "",
                    htmlFor: "coutrycode",
                    children: "Country code",
                  }),
                  Object(h.jsxs)(
                    "select",
                    Object(x.a)(
                      Object(x.a)(
                        { class: "custom-select", name: "countrycode" },
                        t("countrycode", { required: !0 }),
                      ),
                      {},
                      {
                        children: [
                          Object(h.jsx)("option", {
                            value: "",
                            label: "--",
                            children: "--",
                          }),
                          Object(h.jsx)("option", {
                            value: "7840",
                            label: "Abkhazia (+7 840)",
                            children: "Abkhazia (+7 840)",
                          }),
                          Object(h.jsx)("option", {
                            value: "7940",
                            label: "Abkhazia (+7 940)",
                            children: "Abkhazia (+7 940)",
                          }),
                          Object(h.jsx)("option", {
                            value: "93",
                            label: "Afghanistan (+93)",
                            children: "Afghanistan (+93)",
                          }),
                          Object(h.jsx)("option", {
                            value: "355",
                            label: "Albania (+355)",
                            children: "Albania (+355)",
                          }),
                          Object(h.jsx)("option", {
                            value: "213",
                            label: "Algeria (+213)",
                            children: "Algeria (+213)",
                          }),
                          Object(h.jsx)("option", {
                            value: "1684",
                            label: "American Samoa (+1 684)",
                            children: "American Samoa (+1 684)",
                          }),
                          Object(h.jsx)("option", {
                            value: "376",
                            label: "Andorra (+376)",
                            children: "Andorra (+376)",
                          }),
                          Object(h.jsx)("option", {
                            value: "244",
                            label: "Angola (+244)",
                            children: "Angola (+244)",
                          }),
                          Object(h.jsx)("option", {
                            value: "1264",
                            label: "Anguilla (+1 264)",
                            children: "Anguilla (+1 264)",
                          }),
                          Object(h.jsx)("option", {
                            value: "1268",
                            label: "Antigua and Barbuda (+1 268)",
                            children: "Antigua and Barbuda (+1 268)",
                          }),
                          Object(h.jsx)("option", {
                            value: "54",
                            label: "Argentina (+54)",
                            children: "Argentina (+54)",
                          }),
                          Object(h.jsx)("option", {
                            value: "374",
                            label: "Armenia (+374)",
                            children: "Armenia (+374)",
                          }),
                          Object(h.jsx)("option", {
                            value: "297",
                            label: "Aruba (+297)",
                            children: "Aruba (+297)",
                          }),
                          Object(h.jsx)("option", {
                            value: "247",
                            label: "Ascension (+247)",
                            children: "Ascension (+247)",
                          }),
                          Object(h.jsx)("option", {
                            value: "61",
                            label: "Australia (+61)",
                            children: "Australia (+61)",
                          }),
                          Object(h.jsx)("option", {
                            value: "672",
                            label: "Australian External Territories (+672)",
                            children: "Australian External Territories (+672)",
                          }),
                          Object(h.jsx)("option", {
                            value: "43",
                            label: "Austria (+43)",
                            children: "Austria (+43)",
                          }),
                          Object(h.jsx)("option", {
                            value: "994",
                            label: "Azerbaijan (+994)",
                            children: "Azerbaijan (+994)",
                          }),
                          Object(h.jsx)("option", {
                            value: "1242",
                            label: "Bahamas (+1 242)",
                            children: "Bahamas (+1 242)",
                          }),
                          Object(h.jsx)("option", {
                            value: "973",
                            label: "Bahrain (+973)",
                            children: "Bahrain (+973)",
                          }),
                          Object(h.jsx)("option", {
                            value: "880",
                            label: "Bangladesh (+880)",
                            children: "Bangladesh (+880)",
                          }),
                          Object(h.jsx)("option", {
                            value: "1246",
                            label: "Barbados (+1 246)",
                            children: "Barbados (+1 246)",
                          }),
                          Object(h.jsx)("option", {
                            value: "1268",
                            label: "Barbuda (+1 268)",
                            children: "Barbuda (+1 268)",
                          }),
                          Object(h.jsx)("option", {
                            value: "375",
                            label: "Belarus (+375)",
                            children: "Belarus (+375)",
                          }),
                          Object(h.jsx)("option", {
                            value: "32",
                            label: "Belgium (+32)",
                            children: "Belgium (+32)",
                          }),
                          Object(h.jsx)("option", {
                            value: "501",
                            label: "Belize (+501)",
                            children: "Belize (+501)",
                          }),
                          Object(h.jsx)("option", {
                            value: "229",
                            label: "Benin (+229)",
                            children: "Benin (+229)",
                          }),
                          Object(h.jsx)("option", {
                            value: "1441",
                            label: "Bermuda (+1 441)",
                            children: "Bermuda (+1 441)",
                          }),
                          Object(h.jsx)("option", {
                            value: "975",
                            label: "Bhutan (+975)",
                            children: "Bhutan (+975)",
                          }),
                          Object(h.jsx)("option", {
                            value: "591",
                            label: "Bolivia (+591)",
                            children: "Bolivia (+591)",
                          }),
                          Object(h.jsx)("option", {
                            value: "387",
                            label: "Bosnia and Herzegovina (+387)",
                            children: "Bosnia and Herzegovina (+387)",
                          }),
                          Object(h.jsx)("option", {
                            value: "267",
                            label: "Botswana (+267)",
                            children: "Botswana (+267)",
                          }),
                          Object(h.jsx)("option", {
                            value: "55",
                            label: "Brazil (+55)",
                            children: "Brazil (+55)",
                          }),
                          Object(h.jsx)("option", {
                            value: "246",
                            label: "British Indian Ocean Territory (+246)",
                            children: "British Indian Ocean Territory (+246)",
                          }),
                          Object(h.jsx)("option", {
                            value: "1284",
                            label: "British Virgin Islands (+1 284)",
                            children: "British Virgin Islands (+1 284)",
                          }),
                          Object(h.jsx)("option", {
                            value: "673",
                            label: "Brunei (+673)",
                            children: "Brunei (+673)",
                          }),
                          Object(h.jsx)("option", {
                            value: "359",
                            label: "Bulgaria (+359)",
                            children: "Bulgaria (+359)",
                          }),
                          Object(h.jsx)("option", {
                            value: "226",
                            label: "Burkina Faso (+226)",
                            children: "Burkina Faso (+226)",
                          }),
                          Object(h.jsx)("option", {
                            value: "257",
                            label: "Burundi (+257)",
                            children: "Burundi (+257)",
                          }),
                          Object(h.jsx)("option", {
                            value: "855",
                            label: "Cambodia (+855)",
                            children: "Cambodia (+855)",
                          }),
                          Object(h.jsx)("option", {
                            value: "237",
                            label: "Cameroon (+237)",
                            children: "Cameroon (+237)",
                          }),
                          Object(h.jsx)("option", {
                            value: "1",
                            label: "Canada (+1)",
                            children: "Canada (+1)",
                          }),
                          Object(h.jsx)("option", {
                            value: "238",
                            label: "Cape Verde (+238)",
                            children: "Cape Verde (+238)",
                          }),
                          Object(h.jsx)("option", {
                            value: "345",
                            label: "Cayman Islands (+345)",
                            children: "Cayman Islands (+345)",
                          }),
                          Object(h.jsx)("option", {
                            value: "236",
                            label: "Central African Republic (+236)",
                            children: "Central African Republic (+236)",
                          }),
                          Object(h.jsx)("option", {
                            value: "235",
                            label: "Chad (+235)",
                            children: "Chad (+235)",
                          }),
                          Object(h.jsx)("option", {
                            value: "56",
                            label: "Chile (+56)",
                            children: "Chile (+56)",
                          }),
                          Object(h.jsx)("option", {
                            value: "86",
                            label: "China (+86)",
                            children: "China (+86)",
                          }),
                          Object(h.jsx)("option", {
                            value: "61",
                            label: "Christmas Island (+61)",
                            children: "Christmas Island (+61)",
                          }),
                          Object(h.jsx)("option", {
                            value: "61",
                            label: "Cocos-Keeling Islands (+61)",
                            children: "Cocos-Keeling Islands (+61)",
                          }),
                          Object(h.jsx)("option", {
                            value: "57",
                            label: "Colombia (+57)",
                            children: "Colombia (+57)",
                          }),
                          Object(h.jsx)("option", {
                            value: "269",
                            label: "Comoros (+269)",
                            children: "Comoros (+269)",
                          }),
                          Object(h.jsx)("option", {
                            value: "242",
                            label: "Congo (+242)",
                            children: "Congo (+242)",
                          }),
                          Object(h.jsx)("option", {
                            value: "243",
                            label: "Congo, Dem. Rep. of (Zaire) (+243)",
                            children: "Congo, Dem. Rep. of (Zaire) (+243)",
                          }),
                          Object(h.jsx)("option", {
                            value: "682",
                            label: "Cook Islands (+682)",
                            children: "Cook Islands (+682)",
                          }),
                          Object(h.jsx)("option", {
                            value: "506",
                            label: "Costa Rica (+506)",
                            children: "Costa Rica (+506)",
                          }),
                          Object(h.jsx)("option", {
                            value: "225",
                            label: "Ivory Coast (+225)",
                            children: "Ivory Coast (+225)",
                          }),
                          Object(h.jsx)("option", {
                            value: "385",
                            label: "Croatia (+385)",
                            children: "Croatia (+385)",
                          }),
                          Object(h.jsx)("option", {
                            value: "53",
                            label: "Cuba (+53)",
                            children: "Cuba (+53)",
                          }),
                          Object(h.jsx)("option", {
                            value: "599",
                            label: "Curacao (+599)",
                            children: "Curacao (+599)",
                          }),
                          Object(h.jsx)("option", {
                            value: "537",
                            label: "Cyprus (+537)",
                            children: "Cyprus (+537)",
                          }),
                          Object(h.jsx)("option", {
                            value: "420",
                            label: "Czech Republic (+420)",
                            children: "Czech Republic (+420)",
                          }),
                          Object(h.jsx)("option", {
                            value: "45",
                            label: "Denmark (+45)",
                            children: "Denmark (+45)",
                          }),
                          Object(h.jsx)("option", {
                            value: "246",
                            label: "Diego Garcia (+246)",
                            children: "Diego Garcia (+246)",
                          }),
                          Object(h.jsx)("option", {
                            value: "253",
                            label: "Djibouti (+253)",
                            children: "Djibouti (+253)",
                          }),
                          Object(h.jsx)("option", {
                            value: "1767",
                            label: "Dominica (+1 767)",
                            children: "Dominica (+1 767)",
                          }),
                          Object(h.jsx)("option", {
                            value: "1809",
                            label: "Dominican Republic (+1 809)",
                            children: "Dominican Republic (+1 809)",
                          }),
                          Object(h.jsx)("option", {
                            value: "1829",
                            label: "Dominican Republic (+1 829)",
                            children: "Dominican Republic (+1 829)",
                          }),
                          Object(h.jsx)("option", {
                            value: "1849",
                            label: "Dominican Republic (+1 849)",
                            children: "Dominican Republic (+1 849)",
                          }),
                          Object(h.jsx)("option", {
                            value: "670",
                            label: "East Timor (+670)",
                            children: "East Timor (+670)",
                          }),
                          Object(h.jsx)("option", {
                            value: "56",
                            label: "Easter Island (+56)",
                            children: "Easter Island (+56)",
                          }),
                          Object(h.jsx)("option", {
                            value: "593",
                            label: "Ecuador (+593)",
                            children: "Ecuador (+593)",
                          }),
                          Object(h.jsx)("option", {
                            value: "20",
                            label: "Egypt (+20)",
                            children: "Egypt (+20)",
                          }),
                          Object(h.jsx)("option", {
                            value: "503",
                            label: "El Salvador (+503)",
                            children: "El Salvador (+503)",
                          }),
                          Object(h.jsx)("option", {
                            value: "240",
                            label: "Equatorial Guinea (+240)",
                            children: "Equatorial Guinea (+240)",
                          }),
                          Object(h.jsx)("option", {
                            value: "291",
                            label: "Eritrea (+291)",
                            children: "Eritrea (+291)",
                          }),
                          Object(h.jsx)("option", {
                            value: "372",
                            label: "Estonia (+372)",
                            children: "Estonia (+372)",
                          }),
                          Object(h.jsx)("option", {
                            value: "251",
                            label: "Ethiopia (+251)",
                            children: "Ethiopia (+251)",
                          }),
                          Object(h.jsx)("option", {
                            value: "500",
                            label: "Falkland Islands (+500)",
                            children: "Falkland Islands (+500)",
                          }),
                          Object(h.jsx)("option", {
                            value: "298",
                            label: "Faroe Islands (+298)",
                            children: "Faroe Islands (+298)",
                          }),
                          Object(h.jsx)("option", {
                            value: "679",
                            label: "Fiji (+679)",
                            children: "Fiji (+679)",
                          }),
                          Object(h.jsx)("option", {
                            value: "358",
                            label: "Finland (+358)",
                            children: "Finland (+358)",
                          }),
                          Object(h.jsx)("option", {
                            value: "33",
                            label: "France (+33)",
                            children: "France (+33)",
                          }),
                          Object(h.jsx)("option", {
                            value: "596",
                            label: "French Antilles (+596)",
                            children: "French Antilles (+596)",
                          }),
                          Object(h.jsx)("option", {
                            value: "594",
                            label: "French Guiana (+594)",
                            children: "French Guiana (+594)",
                          }),
                          Object(h.jsx)("option", {
                            value: "689",
                            label: "French Polynesia (+689)",
                            children: "French Polynesia (+689)",
                          }),
                          Object(h.jsx)("option", {
                            value: "241",
                            label: "Gabon (+241)",
                            children: "Gabon (+241)",
                          }),
                          Object(h.jsx)("option", {
                            value: "220",
                            label: "Gambia (+220)",
                            children: "Gambia (+220)",
                          }),
                          Object(h.jsx)("option", {
                            value: "995",
                            label: "Georgia (+995)",
                            children: "Georgia (+995)",
                          }),
                          Object(h.jsx)("option", {
                            value: "49",
                            label: "Germany (+49)",
                            children: "Germany (+49)",
                          }),
                          Object(h.jsx)("option", {
                            value: "233",
                            label: "Ghana (+233)",
                            children: "Ghana (+233)",
                          }),
                          Object(h.jsx)("option", {
                            value: "350",
                            label: "Gibraltar (+350)",
                            children: "Gibraltar (+350)",
                          }),
                          Object(h.jsx)("option", {
                            value: "30",
                            label: "Greece (+30)",
                            children: "Greece (+30)",
                          }),
                          Object(h.jsx)("option", {
                            value: "299",
                            label: "Greenland (+299)",
                            children: "Greenland (+299)",
                          }),
                          Object(h.jsx)("option", {
                            value: "1473",
                            label: "Grenada (+1 473)",
                            children: "Grenada (+1 473)",
                          }),
                          Object(h.jsx)("option", {
                            value: "590",
                            label: "Guadeloupe (+590)",
                            children: "Guadeloupe (+590)",
                          }),
                          Object(h.jsx)("option", {
                            value: "1671",
                            label: "Guam (+1 671)",
                            children: "Guam (+1 671)",
                          }),
                          Object(h.jsx)("option", {
                            value: "502",
                            label: "Guatemala (+502)",
                            children: "Guatemala (+502)",
                          }),
                          Object(h.jsx)("option", {
                            value: "224",
                            label: "Guinea (+224)",
                            children: "Guinea (+224)",
                          }),
                          Object(h.jsx)("option", {
                            value: "245",
                            label: "Guinea-Bissau (+245)",
                            children: "Guinea-Bissau (+245)",
                          }),
                          Object(h.jsx)("option", {
                            value: "595",
                            label: "Guyana (+595)",
                            children: "Guyana (+595)",
                          }),
                          Object(h.jsx)("option", {
                            value: "509",
                            label: "Haiti (+509)",
                            children: "Haiti (+509)",
                          }),
                          Object(h.jsx)("option", {
                            value: "504",
                            label: "Honduras (+504)",
                            children: "Honduras (+504)",
                          }),
                          Object(h.jsx)("option", {
                            value: "852",
                            label: "Hong Kong SAR China (+852)",
                            children: "Hong Kong SAR China (+852)",
                          }),
                          Object(h.jsx)("option", {
                            value: "248",
                            label: "Seychelles (+248)",
                            children: "Seychelles (+248)",
                          }),
                          Object(h.jsx)("option", {
                            value: "354",
                            label: "Iceland (+354)",
                            children: "Iceland (+354)",
                          }),
                          Object(h.jsx)("option", {
                            value: "91",
                            label: "India (+91)",
                            children: "India (+91)",
                          }),
                          Object(h.jsx)("option", {
                            value: "62",
                            label: "Indonesia (+62)",
                            children: "Indonesia (+62)",
                          }),
                          Object(h.jsx)("option", {
                            value: "98",
                            label: "Iran (+98)",
                            children: "Iran (+98)",
                          }),
                          Object(h.jsx)("option", {
                            value: "964",
                            label: "Iraq (+964)",
                            children: "Iraq (+964)",
                          }),
                          Object(h.jsx)("option", {
                            value: "353",
                            label: "Ireland (+353)",
                            children: "Ireland (+353)",
                          }),
                          Object(h.jsx)("option", {
                            value: "972",
                            label: "Israel (+972)",
                            children: "Israel (+972)",
                          }),
                          Object(h.jsx)("option", {
                            value: "39",
                            label: "Italy (+39)",
                            children: "Italy (+39)",
                          }),
                          Object(h.jsx)("option", {
                            value: "1876",
                            label: "Jamaica (+1 876)",
                            children: "Jamaica (+1 876)",
                          }),
                          Object(h.jsx)("option", {
                            value: "81",
                            label: "Japan (+81)",
                            children: "Japan (+81)",
                          }),
                          Object(h.jsx)("option", {
                            value: "962",
                            label: "Jordan (+962)",
                            children: "Jordan (+962)",
                          }),
                          Object(h.jsx)("option", {
                            value: "77",
                            label: "Kazakhstan (+7 7)",
                            children: "Kazakhstan (+7 7)",
                          }),
                          Object(h.jsx)("option", {
                            value: "254",
                            label: "Kenya (+254)",
                            children: "Kenya (+254)",
                          }),
                          Object(h.jsx)("option", {
                            value: "686",
                            label: "Kiribati (+686)",
                            children: "Kiribati (+686)",
                          }),
                          Object(h.jsx)("option", {
                            value: "850",
                            label: "North Korea (+850)",
                            children: "North Korea (+850)",
                          }),
                          Object(h.jsx)("option", {
                            value: "82",
                            label: "South Korea (+82)",
                            children: "South Korea (+82)",
                          }),
                          Object(h.jsx)("option", {
                            value: "965",
                            label: "Kuwait (+965)",
                            children: "Kuwait (+965)",
                          }),
                          Object(h.jsx)("option", {
                            value: "996",
                            label: "Kyrgyzstan (+996)",
                            children: "Kyrgyzstan (+996)",
                          }),
                          Object(h.jsx)("option", {
                            value: "856",
                            label: "Laos (+856)",
                            children: "Laos (+856)",
                          }),
                          Object(h.jsx)("option", {
                            value: "371",
                            label: "Latvia (+371)",
                            children: "Latvia (+371)",
                          }),
                          Object(h.jsx)("option", {
                            value: "961",
                            label: "Lebanon (+961)",
                            children: "Lebanon (+961)",
                          }),
                          Object(h.jsx)("option", {
                            value: "266",
                            label: "Lesotho (+266)",
                            children: "Lesotho (+266)",
                          }),
                          Object(h.jsx)("option", {
                            value: "231",
                            label: "Liberia (+231)",
                            children: "Liberia (+231)",
                          }),
                          Object(h.jsx)("option", {
                            value: "218",
                            label: "Libya (+218)",
                            children: "Libya (+218)",
                          }),
                          Object(h.jsx)("option", {
                            value: "423",
                            label: "Liechtenstein (+423)",
                            children: "Liechtenstein (+423)",
                          }),
                          Object(h.jsx)("option", {
                            value: "370",
                            label: "Lithuania (+370)",
                            children: "Lithuania (+370)",
                          }),
                          Object(h.jsx)("option", {
                            value: "352",
                            label: "Luxembourg (+352)",
                            children: "Luxembourg (+352)",
                          }),
                          Object(h.jsx)("option", {
                            value: "853",
                            label: "Macau SAR China (+853)",
                            children: "Macau SAR China (+853)",
                          }),
                          Object(h.jsx)("option", {
                            value: "389",
                            label: "Macedonia (+389)",
                            children: "Macedonia (+389)",
                          }),
                          Object(h.jsx)("option", {
                            value: "261",
                            label: "Madagascar (+261)",
                            children: "Madagascar (+261)",
                          }),
                          Object(h.jsx)("option", {
                            value: "265",
                            label: "Malawi (+265)",
                            children: "Malawi (+265)",
                          }),
                          Object(h.jsx)("option", {
                            value: "60",
                            label: "Malaysia (+60)",
                            children: "Malaysia (+60)",
                          }),
                          Object(h.jsx)("option", {
                            value: "960",
                            label: "Maldives (+960)",
                            children: "Maldives (+960)",
                          }),
                          Object(h.jsx)("option", {
                            value: "223",
                            label: "Mali (+223)",
                            children: "Mali (+223)",
                          }),
                          Object(h.jsx)("option", {
                            value: "356",
                            label: "Malta (+356)",
                            children: "Malta (+356)",
                          }),
                          Object(h.jsx)("option", {
                            value: "692",
                            label: "Marshall Islands (+692)",
                            children: "Marshall Islands (+692)",
                          }),
                          Object(h.jsx)("option", {
                            value: "596",
                            label: "Martinique (+596)",
                            children: "Martinique (+596)",
                          }),
                          Object(h.jsx)("option", {
                            value: "222",
                            label: "Mauritania (+222)",
                            children: "Mauritania (+222)",
                          }),
                          Object(h.jsx)("option", {
                            value: "230",
                            label: "Mauritius (+230)",
                            children: "Mauritius (+230)",
                          }),
                          Object(h.jsx)("option", {
                            value: "262",
                            label: "Mayotte (+262)",
                            children: "Mayotte (+262)",
                          }),
                          Object(h.jsx)("option", {
                            value: "52",
                            label: "Mexico (+52)",
                            children: "Mexico (+52)",
                          }),
                          Object(h.jsx)("option", {
                            value: "691",
                            label: "Micronesia (+691)",
                            children: "Micronesia (+691)",
                          }),
                          Object(h.jsx)("option", {
                            value: "1808",
                            label: "Midway Island (+1 808)",
                            children: "Midway Island (+1 808)",
                          }),
                          Object(h.jsx)("option", {
                            value: "691",
                            label: "Micronesia (+691)",
                            children: "Micronesia (+691)",
                          }),
                          Object(h.jsx)("option", {
                            value: "373",
                            label: "Moldova (+373)",
                            children: "Moldova (+373)",
                          }),
                          Object(h.jsx)("option", {
                            value: "377",
                            label: "Monaco (+377)",
                            children: "Monaco (+377)",
                          }),
                          Object(h.jsx)("option", {
                            value: "976",
                            label: "Mongolia (+976)",
                            children: "Mongolia (+976)",
                          }),
                          Object(h.jsx)("option", {
                            value: "382",
                            label: "Montenegro (+382)",
                            children: "Montenegro (+382)",
                          }),
                          Object(h.jsx)("option", {
                            value: "1664",
                            label: "Montserrat (+1664)",
                            children: "Montserrat (+1664)",
                          }),
                          Object(h.jsx)("option", {
                            value: "212",
                            label: "Morocco (+212)",
                            children: "Morocco (+212)",
                          }),
                          Object(h.jsx)("option", {
                            value: "95",
                            label: "Myanmar (+95)",
                            children: "Myanmar (+95)",
                          }),
                          Object(h.jsx)("option", {
                            value: "264",
                            label: "Namibia (+264)",
                            children: "Namibia (+264)",
                          }),
                          Object(h.jsx)("option", {
                            value: "674",
                            label: "Nauru (+674)",
                            children: "Nauru (+674)",
                          }),
                          Object(h.jsx)("option", {
                            value: "977",
                            label: "Nepal (+977)",
                            children: "Nepal (+977)",
                          }),
                          Object(h.jsx)("option", {
                            value: "31",
                            label: "Netherlands (+31)",
                            children: "Netherlands (+31)",
                          }),
                          Object(h.jsx)("option", {
                            value: "599",
                            label: "Netherlands Antilles (+599)",
                            children: "Netherlands Antilles (+599)",
                          }),
                          Object(h.jsx)("option", {
                            value: "1869",
                            label: "Nevis (+1 869)",
                            children: "Nevis (+1 869)",
                          }),
                          Object(h.jsx)("option", {
                            value: "687",
                            label: "New Caledonia (+687)",
                            children: "New Caledonia (+687)",
                          }),
                          Object(h.jsx)("option", {
                            value: "64",
                            label: "New Zealand (64)",
                            children: "New Zealand (64)",
                          }),
                          Object(h.jsx)("option", {
                            value: "505",
                            label: "Nicaragua (+505)",
                            children: "Nicaragua (+505)",
                          }),
                          Object(h.jsx)("option", {
                            value: "227",
                            label: "Niger (+227)",
                            children: "Niger (+227)",
                          }),
                          Object(h.jsx)("option", {
                            value: "234",
                            label: "Nigeria (+234)",
                            children: "Nigeria (+234)",
                          }),
                          Object(h.jsx)("option", {
                            value: "683",
                            label: "Niue (+683)",
                            children: "Niue (+683)",
                          }),
                          Object(h.jsx)("option", {
                            value: "672",
                            label: "Norfolk Island (+672)",
                            children: "Norfolk Island (+672)",
                          }),
                          Object(h.jsx)("option", {
                            value: "1670",
                            label: "Northern Mariana Islands (+1 670)",
                            children: "Northern Mariana Islands (+1 670)",
                          }),
                          Object(h.jsx)("option", {
                            value: "47",
                            label: "Norway (+47)",
                            children: "Norway (+47)",
                          }),
                          Object(h.jsx)("option", {
                            value: "968",
                            label: "Oman (+968)",
                            children: "Oman (+968)",
                          }),
                          Object(h.jsx)("option", {
                            value: "92",
                            label: "Pakistan (+92)",
                            children: "Pakistan (+92)",
                          }),
                          Object(h.jsx)("option", {
                            value: "680",
                            label: "Palau (+680)",
                            children: "Palau (+680)",
                          }),
                          Object(h.jsx)("option", {
                            value: "970",
                            label: "Palestinian Territory (+970)",
                            children: "Palestinian Territory (+970)",
                          }),
                          Object(h.jsx)("option", {
                            value: "507",
                            label: "Panama (+507)",
                            children: "Panama (+507)",
                          }),
                          Object(h.jsx)("option", {
                            value: "675",
                            label: "Papua New Guinea (+675)",
                            children: "Papua New Guinea (+675)",
                          }),
                          Object(h.jsx)("option", {
                            value: "595",
                            label: "Paraguay (+595)",
                            children: "Paraguay (+595)",
                          }),
                          Object(h.jsx)("option", {
                            value: "51",
                            label: "Peru (+51)",
                            children: "Peru (+51)",
                          }),
                          Object(h.jsx)("option", {
                            value: "63",
                            label: "Philippines (+63)",
                            children: "Philippines (+63)",
                          }),
                          Object(h.jsx)("option", {
                            value: "48",
                            label: "Poland (+48)",
                            children: "Poland (+48)",
                          }),
                          Object(h.jsx)("option", {
                            value: "351",
                            label: "Portugal (+351)",
                            children: "Portugal (+351)",
                          }),
                          Object(h.jsx)("option", {
                            value: "1787",
                            label: "Puerto Rico (+1 787)",
                            children: "Puerto Rico (+1 787)",
                          }),
                          Object(h.jsx)("option", {
                            value: "1939",
                            label: "Puerto Rico (+1 939)",
                            children: "Puerto Rico (+1 939)",
                          }),
                          Object(h.jsx)("option", {
                            value: "974",
                            label: "Qatar (+974)",
                            children: "Qatar (+974)",
                          }),
                          Object(h.jsx)("option", {
                            value: "262",
                            label: "Reunion (+262)",
                            children: "Reunion (+262)",
                          }),
                          Object(h.jsx)("option", {
                            value: "40",
                            label: "Romania (+40)",
                            children: "Romania (+40)",
                          }),
                          Object(h.jsx)("option", {
                            value: "7",
                            label: "Russia (+7)",
                            children: "Russia (+7)",
                          }),
                          Object(h.jsx)("option", {
                            value: "250",
                            label: "Rwanda (+250)",
                            children: "Rwanda (+250)",
                          }),
                          Object(h.jsx)("option", {
                            value: "685",
                            label: "Samoa (+685)",
                            children: "Samoa (+685)",
                          }),
                          Object(h.jsx)("option", {
                            value: "378",
                            label: "San Marino (+378)",
                            children: "San Marino (+378)",
                          }),
                          Object(h.jsx)("option", {
                            value: "966",
                            label: "Saudi Arabia (+966)",
                            children: "Saudi Arabia (+966)",
                          }),
                          Object(h.jsx)("option", {
                            value: "221",
                            label: "Senegal (+221)",
                            children: "Senegal (+221)",
                          }),
                          Object(h.jsx)("option", {
                            value: "381",
                            label: "Serbia (+381)",
                            children: "Serbia (+381)",
                          }),
                          Object(h.jsx)("option", {
                            value: "232",
                            label: "Sierra Leone (+232)",
                            children: "Sierra Leone (+232)",
                          }),
                          Object(h.jsx)("option", {
                            value: "65",
                            label: "Singapore (+65)",
                            children: "Singapore (+65)",
                          }),
                          Object(h.jsx)("option", {
                            value: "421",
                            label: "Slovakia (+421)",
                            children: "Slovakia (+421)",
                          }),
                          Object(h.jsx)("option", {
                            value: "386",
                            label: "Slovenia (+386)",
                            children: "Slovenia (+386)",
                          }),
                          Object(h.jsx)("option", {
                            value: "677",
                            label: "Solomon Islands (+677)",
                            children: "Solomon Islands (+677)",
                          }),
                          Object(h.jsx)("option", {
                            value: "27",
                            label: "South Africa (+27)",
                            children: "South Africa (+27)",
                          }),
                          Object(h.jsx)("option", {
                            value: "500",
                            label:
                              "South Georgia and the South Sandwich Islands (+500)",
                            children:
                              "South Georgia and the South Sandwich Islands (+500)",
                          }),
                          Object(h.jsx)("option", {
                            value: "34",
                            label: "Spain (+34)",
                            children: "Spain (+34)",
                          }),
                          Object(h.jsx)("option", {
                            value: "94",
                            label: "Sri Lanka (+94)",
                            children: "Sri Lanka (+94)",
                          }),
                          Object(h.jsx)("option", {
                            value: "249",
                            label: "Sudan (+249)",
                            children: "Sudan (+249)",
                          }),
                          Object(h.jsx)("option", {
                            value: "597",
                            label: "Suriname (+597)",
                            children: "Suriname (+597)",
                          }),
                          Object(h.jsx)("option", {
                            value: "268",
                            label: "Swaziland (+268)",
                            children: "Swaziland (+268)",
                          }),
                          Object(h.jsx)("option", {
                            value: "46",
                            label: "Sweden (+46)",
                            children: "Sweden (+46)",
                          }),
                          Object(h.jsx)("option", {
                            value: "41",
                            label: "Switzerland (+41)",
                            children: "Switzerland (+41)",
                          }),
                          Object(h.jsx)("option", {
                            value: "963",
                            label: "Syria (+963)",
                            children: "Syria (+963)",
                          }),
                          Object(h.jsx)("option", {
                            value: "886",
                            label: "Taiwan (+886)",
                            children: "Taiwan (+886)",
                          }),
                          Object(h.jsx)("option", {
                            value: "992",
                            label: "Tajikistan (+992)",
                            children: "Tajikistan (+992)",
                          }),
                          Object(h.jsx)("option", {
                            value: "255",
                            label: "Tanzania (+255)",
                            children: "Tanzania (+255)",
                          }),
                          Object(h.jsx)("option", {
                            value: "66",
                            label: "Thailand (+66)",
                            children: "Thailand (+66)",
                          }),
                          Object(h.jsx)("option", {
                            value: "670",
                            label: "Timor Leste (+670)",
                            children: "Timor Leste (+670)",
                          }),
                          Object(h.jsx)("option", {
                            value: "228",
                            label: "Togo (+228)",
                            children: "Togo (+228)",
                          }),
                          Object(h.jsx)("option", {
                            value: "690",
                            label: "Tokelau (+690)",
                            children: "Tokelau (+690)",
                          }),
                          Object(h.jsx)("option", {
                            value: "676",
                            label: "Tonga (+676)",
                            children: "Tonga (+676)",
                          }),
                          Object(h.jsx)("option", {
                            value: "1868",
                            label: "Trinidad and Tobago (+1 868)",
                            children: "Trinidad and Tobago (+1 868)",
                          }),
                          Object(h.jsx)("option", {
                            value: "216",
                            label: "Tunisia (+216)",
                            children: "Tunisia (+216)",
                          }),
                          Object(h.jsx)("option", {
                            value: "90",
                            label: "Turkey (+90)",
                            children: "Turkey (+90)",
                          }),
                          Object(h.jsx)("option", {
                            value: "993",
                            label: "Turkmenistan (+993)",
                            children: "Turkmenistan (+993)",
                          }),
                          Object(h.jsx)("option", {
                            value: "1649",
                            label: "Turks and Caicos Islands (+1 649)",
                            children: "Turks and Caicos Islands (+1 649)",
                          }),
                          Object(h.jsx)("option", {
                            value: "688",
                            label: "Tuvalu (+688)",
                            children: "Tuvalu (+688)",
                          }),
                          Object(h.jsx)("option", {
                            value: "256",
                            label: "Uganda (+256)",
                            children: "Uganda (+256)",
                          }),
                          Object(h.jsx)("option", {
                            value: "380",
                            label: "Ukraine (+380)",
                            children: "Ukraine (+380)",
                          }),
                          Object(h.jsx)("option", {
                            value: "971",
                            label: "United Arab Emirates (+971)",
                            children: "United Arab Emirates (+971)",
                          }),
                          Object(h.jsx)("option", {
                            value: "44",
                            label: "United Kingdom (+44)",
                            children: "United Kingdom (+44)",
                          }),
                          Object(h.jsx)("option", {
                            value: "1",
                            label: "United States (+1)",
                            children: "United States (+1)",
                          }),
                          Object(h.jsx)("option", {
                            value: "598",
                            label: "Uruguay (+598)",
                            children: "Uruguay (+598)",
                          }),
                          Object(h.jsx)("option", {
                            value: "1340",
                            label: "U.S. Virgin Islands (+1 340)",
                            children: "U.S. Virgin Islands (+1 340)",
                          }),
                          Object(h.jsx)("option", {
                            value: "998",
                            label: "Uzbekistan (+998)",
                            children: "Uzbekistan (+998)",
                          }),
                          Object(h.jsx)("option", {
                            value: "678",
                            label: "Vanuatu (+678)",
                            children: "Vanuatu (+678)",
                          }),
                          Object(h.jsx)("option", {
                            value: "58",
                            label: "Venezuela (+58)",
                            children: "Venezuela (+58)",
                          }),
                          Object(h.jsx)("option", {
                            value: "84",
                            label: "Vietnam (+84)",
                            children: "Vietnam (+84)",
                          }),
                          Object(h.jsx)("option", {
                            value: "1808",
                            label: "Wake Island (+1 808)",
                            children: "Wake Island (+1 808)",
                          }),
                          Object(h.jsx)("option", {
                            value: "681",
                            label: "Wallis and Futuna (+681)",
                            children: "Wallis and Futuna (+681)",
                          }),
                          Object(h.jsx)("option", {
                            value: "967",
                            label: "Yemen (+967)",
                            children: "Yemen (+967)",
                          }),
                          Object(h.jsx)("option", {
                            value: "260",
                            label: "Zambia (+260)",
                            children: "Zambia (+260)",
                          }),
                          Object(h.jsx)("option", {
                            value: "255",
                            label: "Zanzibar (+255)",
                            children: "Zanzibar (+255)",
                          }),
                          Object(h.jsx)("option", {
                            value: "263",
                            label: "Zimbabwe (+263)",
                            children: "Zimbabwe (+263)",
                          }),
                        ],
                      },
                    ),
                  ),
                  i.countrycode &&
                    Object(h.jsx)("span", {
                      children: "This field is required",
                    }),
                  Object(h.jsx)("label", {
                    className: !0 !== a.darkMode ? "text-dark" : "",
                    htmlFor: "phone",
                    children: "Phone number",
                  }),
                  Object(h.jsx)(
                    "input",
                    Object(x.a)({}, t("phone", { required: !0 })),
                  ),
                  i.phone &&
                    Object(h.jsx)("span", {
                      children: "This field is required",
                    }),
                  Object(h.jsx)("input", {
                    className: "btn-primary",
                    type: "submit",
                    value: "submit",
                  }),
                ],
              }),
            ],
          });
        }),
        y = Object(b.a)(function (e) {
          var a = e.userStore,
            l = Object(O.a)(),
            t = l.register,
            n = l.handleSubmit,
            i = l.formState.errors;
          return Object(h.jsxs)("div", {
            children: [
              Object(h.jsx)("h4", { className: "mt-3", children: "Wifi" }),
              Object(h.jsxs)("form", {
                onSubmit: n(function (e) {
                  return a.setQrData(
                    "WIFI:T:"
                      .concat(e.networktype, ";S:")
                      .concat(e.networkname, ";P:")
                      .concat(e.password, ";;\n"),
                  );
                }),
                children: [
                  Object(h.jsx)("label", {
                    className: !0 !== a.darkMode ? "text-dark" : "",
                    htmlFor: "networkname",
                    children: "Network name",
                  }),
                  Object(h.jsx)(
                    "input",
                    Object(x.a)({}, t("networkname", { required: !0 })),
                  ),
                  i.networkname &&
                    Object(h.jsx)("span", {
                      children: "This field is required",
                    }),
                  Object(h.jsx)("label", {
                    className: !0 !== a.darkMode ? "text-dark" : "",
                    htmlFor: "networktype",
                    children: "Network type",
                  }),
                  Object(h.jsxs)(
                    "select",
                    Object(x.a)(
                      Object(x.a)(
                        {
                          class: "form-select custom-select",
                          name: "networktype",
                        },
                        t("networktype"),
                      ),
                      {},
                      {
                        children: [
                          Object(h.jsx)("option", {
                            value: "WEP",
                            children: "WEP",
                          }),
                          Object(h.jsx)("option", {
                            value: "WPA",
                            children: "WPA/WPA2",
                          }),
                          Object(h.jsx)("option", {
                            value: "",
                            children: "No encryption",
                          }),
                        ],
                      },
                    ),
                  ),
                  Object(h.jsx)("label", {
                    className: !0 !== a.darkMode ? "text-dark" : "",
                    htmlFor: "password",
                    children: "Password",
                  }),
                  Object(h.jsx)("input", Object(x.a)({}, t("password"))),
                  Object(h.jsx)("input", {
                    className: "btn-primary",
                    type: "submit",
                    value: "submit",
                  }),
                ],
              }),
            ],
          });
        }),
        S = Object(b.a)(function (e) {
          var a = e.userStore,
            l = Object(O.a)(),
            t = l.register,
            n = l.handleSubmit,
            i = l.formState.errors;
          return Object(h.jsxs)("div", {
            children: [
              Object(h.jsx)("h4", { className: "mt-3", children: "PayPal" }),
              Object(h.jsxs)("form", {
                onSubmit: n(function (e) {
                  return a.setQrData(
                    "https://www.paypal.com/cgi-bin/webscr?cmd="
                      .concat(e.pp_type, "&business=")
                      .concat(e.email, "&item_name=")
                      .concat(e.item_name, "&amount=")
                      .concat(e.item_price, "&currency_code=")
                      .concat(e.currency, "&shipping=")
                      .concat(e.shipping, "&tax_rate=")
                      .concat(
                        e.tax_rate,
                        "&button_subtype=services&bn=PP-BuyNowBF%3Abtn_buynow_LG.gif%3ANonHostedGuest&lc=US&no_note=0",
                      ),
                  );
                }),
                children: [
                  Object(h.jsx)("label", {
                    className: !0 !== a.darkMode ? "text-dark" : "",
                    htmlFor: "pp_type",
                    children: "Payment type",
                  }),
                  Object(h.jsxs)(
                    "select",
                    Object(x.a)(
                      Object(x.a)(
                        {
                          class: "form-select custom-select",
                          name: "pp_type",
                          id: "pp_type",
                        },
                        t("pp_type"),
                      ),
                      {},
                      {
                        children: [
                          Object(h.jsx)("option", {
                            value: "_xclick",
                            children: "Buy now",
                          }),
                          Object(h.jsx)("option", {
                            value: "_cart",
                            children: "Add to cart",
                          }),
                          Object(h.jsx)("option", {
                            value: "_donations",
                            children: "Donations",
                          }),
                        ],
                      },
                    ),
                  ),
                  Object(h.jsx)("label", {
                    className: !0 !== a.darkMode ? "text-dark" : "",
                    htmlFor: "email",
                    children: "E-mail",
                  }),
                  Object(h.jsx)(
                    "input",
                    Object(x.a)({}, t("email", { required: !0 })),
                  ),
                  i.email &&
                    Object(h.jsx)("span", {
                      children: "This field is required",
                    }),
                  Object(h.jsx)("label", {
                    className: !0 !== a.darkMode ? "text-dark" : "",
                    htmlFor: "item_name",
                    children: "Item name",
                  }),
                  Object(h.jsx)(
                    "input",
                    Object(x.a)({}, t("item_name", { required: !0 })),
                  ),
                  i.item_name &&
                    Object(h.jsx)("span", {
                      children: "This field is required",
                    }),
                  Object(h.jsx)("label", {
                    className: !0 !== a.darkMode ? "text-dark" : "",
                    htmlFor: "item_id",
                    children: "Item id",
                  }),
                  Object(h.jsx)("input", Object(x.a)({}, t("item_id"))),
                  Object(h.jsx)("label", {
                    className: !0 !== a.darkMode ? "text-dark" : "",
                    htmlFor: "item_price",
                    children: "Price",
                  }),
                  Object(h.jsx)("input", Object(x.a)({}, t("item_price"))),
                  Object(h.jsx)("label", {
                    className: !0 !== a.darkMode ? "text-dark" : "",
                    htmlFor: "currency",
                    children: "Currency",
                  }),
                  Object(h.jsxs)(
                    "select",
                    Object(x.a)(
                      Object(x.a)(
                        {
                          class: "form-select custom-select setvalue",
                          name: "pp_currency",
                          id: "setcurrency",
                          "data-target": "#getcurrency",
                        },
                        t("currency"),
                      ),
                      {},
                      {
                        children: [
                          Object(h.jsx)("option", {
                            value: "USD",
                            children: "United States dollar",
                          }),
                          Object(h.jsx)("option", {
                            value: "EUR",
                            children: "Euro",
                          }),
                          Object(h.jsx)("option", {
                            value: "AUD",
                            children: "Australian dollar",
                          }),
                          Object(h.jsx)("option", {
                            value: "BRL",
                            children: "Brazilian real",
                          }),
                          Object(h.jsx)("option", {
                            value: "CAD",
                            children: "Canadian dollar",
                          }),
                          Object(h.jsx)("option", {
                            value: "CNY",
                            children: "Chinese Renmenbi",
                          }),
                          Object(h.jsx)("option", {
                            value: "CZK",
                            children: "Czech koruna",
                          }),
                          Object(h.jsx)("option", {
                            value: "DKK",
                            children: "Danish krone",
                          }),
                          Object(h.jsx)("option", {
                            value: "HKD",
                            children: "Hong Kong dollar",
                          }),
                          Object(h.jsx)("option", {
                            value: "HUF",
                            children: "Hungarian forint",
                          }),
                          Object(h.jsx)("option", {
                            value: "INR",
                            children: "Indian rupee",
                          }),
                          Object(h.jsx)("option", {
                            value: "ILS",
                            children: "Israeli new shekel",
                          }),
                          Object(h.jsx)("option", {
                            value: "JPY",
                            children: "Japanese yen",
                          }),
                          Object(h.jsx)("option", {
                            value: "MYR",
                            children: "Malaysian ringgit",
                          }),
                          Object(h.jsx)("option", {
                            value: "MXN",
                            children: "Mexican peso",
                          }),
                          Object(h.jsx)("option", {
                            value: "TWD",
                            children: "New Taiwan dollar",
                          }),
                          Object(h.jsx)("option", {
                            value: "NZD",
                            children: "New Zealand dollar",
                          }),
                          Object(h.jsx)("option", {
                            value: "NOK",
                            children: "Norwegian krone",
                          }),
                          Object(h.jsx)("option", {
                            value: "PHP",
                            children: "Philippine peso",
                          }),
                          Object(h.jsx)("option", {
                            value: "PLN",
                            children: "Polish z\u0142oty",
                          }),
                          Object(h.jsx)("option", {
                            value: "GBP",
                            children: "Pound sterling",
                          }),
                          Object(h.jsx)("option", {
                            value: "RUB",
                            children: "Russian ruble",
                          }),
                          Object(h.jsx)("option", {
                            value: "SGD",
                            children: "Singapore dollar",
                          }),
                          Object(h.jsx)("option", {
                            value: "SEK",
                            children: "Swedish krona",
                          }),
                          Object(h.jsx)("option", {
                            value: "CHF",
                            children: "Swiss franc",
                          }),
                          Object(h.jsx)("option", {
                            value: "THB",
                            children: "Thai baht",
                          }),
                        ],
                      },
                    ),
                  ),
                  Object(h.jsx)("label", {
                    className: !0 !== a.darkMode ? "text-dark" : "",
                    htmlFor: "shipping",
                    children: "Shipping",
                  }),
                  Object(h.jsx)("input", Object(x.a)({}, t("shipping"))),
                  Object(h.jsx)("label", {
                    className: !0 !== a.darkMode ? "text-dark" : "",
                    htmlFor: "tax_rate",
                    children: "Tax rate",
                  }),
                  Object(h.jsx)("input", Object(x.a)({}, t("tax_rate"))),
                  Object(h.jsx)("input", {
                    className: "btn-primary",
                    type: "submit",
                    value: "submit",
                  }),
                ],
              }),
            ],
          });
        }),
        N = Object(b.a)(function (e) {
          var a = e.userStore,
            l = Object(O.a)(),
            t = l.register,
            n = l.handleSubmit,
            i = l.formState.errors;
          return Object(h.jsxs)("div", {
            children: [
              Object(h.jsx)("h4", { className: "mt-3", children: "Bitcoin" }),
              Object(h.jsxs)("form", {
                onSubmit: n(function (e) {
                  return a.setQrData(
                    "bitcoin:"
                      .concat(e.account)
                      .concat(e.amount ? "?amount=" + e.amount : "")
                      .concat(e.item_name ? "&label=" + e.item_name : "")
                      .concat(e.message ? "&message=" + e.message : ""),
                  );
                }),
                children: [
                  Object(h.jsx)("label", {
                    className: !0 !== a.darkMode ? "text-dark" : "",
                    htmlFor: "account",
                    children: "Account",
                  }),
                  Object(h.jsx)(
                    "input",
                    Object(x.a)({}, t("account", { required: !0 })),
                  ),
                  i.account &&
                    Object(h.jsx)("span", {
                      children: "This field is required",
                    }),
                  Object(h.jsx)("label", {
                    className: !0 !== a.darkMode ? "text-dark" : "",
                    htmlFor: "amount",
                    children: "Amount",
                  }),
                  Object(h.jsx)("input", Object(x.a)({}, t("amount"))),
                  Object(h.jsx)("label", {
                    className: !0 !== a.darkMode ? "text-dark" : "",
                    htmlFor: "password",
                    children: "Item Name",
                  }),
                  Object(h.jsx)("input", Object(x.a)({}, t("item_name"))),
                  Object(h.jsx)("label", {
                    className: !0 !== a.darkMode ? "text-dark" : "",
                    htmlFor: "password",
                    children: "Message",
                  }),
                  Object(h.jsx)("input", Object(x.a)({}, t("message"))),
                  Object(h.jsx)("input", {
                    className: "btn-primary",
                    type: "submit",
                    value: "submit",
                  }),
                ],
              }),
            ],
          });
        }),
        f = Object(b.a)(function (e) {
          var a = e.userStore,
            l = Object(O.a)(),
            t = l.register,
            n = l.handleSubmit,
            i = l.formState.errors;
          return Object(h.jsxs)("div", {
            children: [
              Object(h.jsx)("h4", { className: "mt-3", children: "Ethereum" }),
              Object(h.jsxs)("form", {
                onSubmit: n(function (e) {
                  return a.setQrData("ethereum:".concat(e.account));
                }),
                children: [
                  Object(h.jsx)("label", {
                    className: !0 !== a.darkMode ? "text-dark" : "",
                    htmlFor: "account",
                    children: "Account",
                  }),
                  Object(h.jsx)(
                    "input",
                    Object(x.a)({}, t("account", { required: !0 })),
                  ),
                  i.account &&
                    Object(h.jsx)("span", {
                      children: "This field is required",
                    }),
                  Object(h.jsx)("input", {
                    className: "btn-primary",
                    type: "submit",
                    value: "submit",
                  }),
                ],
              }),
            ],
          });
        }),
        M = Object(b.a)(function (e) {
          var a = e.userStore,
            l = Object(O.a)(),
            t = l.register,
            n = l.handleSubmit,
            i = l.formState.errors;
          return Object(h.jsxs)("div", {
            children: [
              Object(h.jsx)("h4", { className: "mt-3", children: "Monero" }),
              Object(h.jsxs)("form", {
                onSubmit: n(function (e) {
                  return a.setQrData(
                    "monero:"
                      .concat(e.address)
                      .concat(e.tx_amount ? "?tx_amount=" + e.tx_amount : "")
                      .concat(
                        e.tx_payment_id
                          ? "&tx_payment_id=" + e.tx_payment_id
                          : "",
                      )
                      .concat(
                        e.tx_description
                          ? "&tx_description=" + e.tx_description
                          : "",
                      )
                      .concat(
                        e.recipient_name
                          ? "&recipient_name=" + e.recipient_name
                          : "",
                      ),
                  );
                }),
                children: [
                  Object(h.jsx)("label", {
                    className: !0 !== a.darkMode ? "text-dark" : "",
                    htmlFor: "account",
                    children: "Address",
                  }),
                  Object(h.jsx)(
                    "input",
                    Object(x.a)({}, t("address", { required: !0 })),
                  ),
                  i.address &&
                    Object(h.jsx)("span", {
                      children: "This field is required",
                    }),
                  Object(h.jsx)("label", {
                    className: !0 !== a.darkMode ? "text-dark" : "",
                    htmlFor: "amount",
                    children: "Amount",
                  }),
                  Object(h.jsx)("input", Object(x.a)({}, t("tx_amount"))),
                  Object(h.jsx)("label", {
                    className: !0 !== a.darkMode ? "text-dark" : "",
                    htmlFor: "password",
                    children: "Payment ID",
                  }),
                  Object(h.jsx)("input", Object(x.a)({}, t("tx_payment_id"))),
                  Object(h.jsx)("label", {
                    className: !0 !== a.darkMode ? "text-dark" : "",
                    htmlFor: "password",
                    children: "Description",
                  }),
                  Object(h.jsx)("input", Object(x.a)({}, t("tx_description"))),
                  Object(h.jsx)("label", {
                    className: !0 !== a.darkMode ? "text-dark" : "",
                    htmlFor: "password",
                    children: "Recepient Name",
                  }),
                  Object(h.jsx)("input", Object(x.a)({}, t("recipient_name"))),
                  Object(h.jsx)("input", {
                    className: "btn-primary",
                    type: "submit",
                    value: "submit",
                  }),
                ],
              }),
            ],
          });
        }),
        w =
          (l(39),
          Object(b.a)(function (e) {
            var a = e.userStore;
            return (
              Object(t.useEffect)(
                function () {
                  try {
                    var e = JSON.parse(
                      localStorage.getItem("qr_generator-darkmode"),
                    );
                    (!1 !== e && !0 !== e) || a.setDarkMode(e);
                  } catch (l) {
                    console.log("error" + l);
                  }
                },
                [a],
              ),
              Object(h.jsx)("div", {
                children: Object(h.jsxs)("nav", {
                  className:
                    !0 !== a.darkMode
                      ? "navbar  navbar-expand-lg row navbar-light bg-light"
                      : "navbar navbar-expand-lg row navbar-dark bg-secondary",
                  children: [
                    Object(h.jsx)("a", {
                      className: "navbar-brand",
                      href: "/#",
                      children: "mln - QR Generator",
                    }),
                    Object(h.jsx)("div", {
                      className: "",
                      id: "navbarNav",
                      children: Object(h.jsx)("ul", {
                        className: "navbar-nav",
                        children: Object(h.jsx)("li", {
                          className: "nav-item active",
                          children: Object(h.jsx)("button", {
                            type: "button",
                            className: "btn toggle-switch btn-primary",
                            onClick: function () {
                              return (
                                (e = !a.darkMode),
                                a.setDarkMode(e),
                                void localStorage.setItem(
                                  "qr_generator-darkmode",
                                  JSON.stringify(e),
                                )
                              );
                              var e;
                            },
                            children: "Toggle Dark Mode",
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              })
            );
          })),
        C = l(8),
        I = Object(b.a)(function (e) {
          e.userStore;
          return Object(h.jsx)("div", {
            className: "col-12",
            children: Object(h.jsxs)("ul", {
              className: "nav nav-pills nav-fill",
              role: "tablist",
              children: [
                Object(h.jsx)("li", {
                  className: "nav-item",
                  children: Object(h.jsx)(C.a, {
                    className: "btn btn-outline-primary m-2",
                    to: "link",
                    children: "Link",
                  }),
                }),
                Object(h.jsx)("li", {
                  className: "nav-item",
                  children: Object(h.jsx)(C.a, {
                    className: "btn btn-outline-primary m-2",
                    to: "text",
                    children: "Text",
                  }),
                }),
                Object(h.jsx)("li", {
                  className: "nav-item",
                  children: Object(h.jsx)(C.a, {
                    className: "btn btn-outline-primary m-2",
                    to: "email",
                    children: "E-mail",
                  }),
                }),
                Object(h.jsx)("li", {
                  className: "nav-item",
                  children: Object(h.jsx)(C.a, {
                    className: "btn btn-outline-primary m-2",
                    to: "phone",
                    children: "Phone",
                  }),
                }),
                Object(h.jsx)("li", {
                  className: "nav-item",
                  children: Object(h.jsx)(C.a, {
                    className: "btn btn-outline-primary m-2",
                    to: "wifi",
                    children: "WI-FI",
                  }),
                }),
                Object(h.jsx)("li", {
                  className: "nav-item",
                  children: Object(h.jsx)(C.a, {
                    className: "btn btn-outline-primary m-2",
                    to: "paypal",
                    children: "PayPal",
                  }),
                }),
                Object(h.jsx)("li", {
                  className: "nav-item",
                  children: Object(h.jsx)(C.a, {
                    className: "btn btn-outline-primary m-2",
                    to: "btc",
                    children: "Bitcoin",
                  }),
                }),
                Object(h.jsx)("li", {
                  className: "nav-item",
                  children: Object(h.jsx)(C.a, {
                    className: "btn btn-outline-primary m-2",
                    to: "eth",
                    children: "Ethereum",
                  }),
                }),
                Object(h.jsx)("li", {
                  className: "nav-item",
                  children: Object(h.jsx)(C.a, {
                    className: "btn btn-outline-primary m-2",
                    to: "xmr",
                    children: "Monero",
                  }),
                }),
              ],
            }),
          });
        }),
        A = Object(b.a)(function (e) {
          var a = e.userStore;
          return Object(h.jsxs)("div", {
            className:
              !0 !== a.darkMode
                ? "App container-fluid bg-white fill-height"
                : "App container-fluid bg-dark text-light fill-height",
            children: [
              Object(h.jsx)(w, { userStore: a }),
              Object(h.jsx)(I, { userStore: a }),
              Object(h.jsxs)(C.b, {
                children: [
                  Object(h.jsx)(m, { userStore: a, path: "/link" }),
                  Object(h.jsx)(v, { userStore: a, path: "/text" }),
                  Object(h.jsx)(g, { userStore: a, path: "/email" }),
                  Object(h.jsx)(k, { userStore: a, path: "/phone" }),
                  Object(h.jsx)(y, { userStore: a, path: "/wifi" }),
                  Object(h.jsx)(S, { userStore: a, path: "/paypal" }),
                  Object(h.jsx)(N, { userStore: a, path: "/btc" }),
                  Object(h.jsx)(f, { userStore: a, path: "/eth" }),
                  Object(h.jsx)(M, { userStore: a, path: "/xmr" }),
                  Object(h.jsx)(m, { userStore: a, path: "/" }),
                ],
              }),
              Object(h.jsx)(p, { userStore: a }),
            ],
          });
        }),
        T = function (e) {
          e &&
            e instanceof Function &&
            l
              .e(3)
              .then(l.bind(null, 44))
              .then(function (a) {
                var l = a.getCLS,
                  t = a.getFID,
                  n = a.getFCP,
                  i = a.getLCP,
                  c = a.getTTFB;
                l(e), t(e), n(e), i(e), c(e);
              });
        },
        B = l(10),
        F = l(11),
        P = l(6),
        _ = new ((function () {
          function e() {
            Object(B.a)(this, e),
              (this.qrData = ""),
              (this.darkMode = !0),
              Object(P.d)(this);
          }
          return (
            Object(F.a)(e, [
              {
                key: "setQrData",
                value: function (e) {
                  this.qrData = e;
                },
              },
              {
                key: "setTextMessage",
                value: function (e) {
                  this.textMessage = e;
                },
              },
              {
                key: "setDarkMode",
                value: function (e) {
                  this.darkMode = e;
                },
              },
            ]),
            e
          );
        })())();
      c.a.render(
        Object(h.jsx)(n.a.StrictMode, {
          children: Object(h.jsx)(A, { userStore: _ }),
        }),
        document.getElementById("root"),
      ),
        T();
    },
  },
  [[43, 1, 2]],
]);

