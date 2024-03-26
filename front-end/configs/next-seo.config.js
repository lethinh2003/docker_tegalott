const NextSeoConfig = {
  title: null,
  titleTemplate: "%s | Xổ số Tegalott",
  defaultTitle: "Xổ số Tegalott",
  description: "Tegalott - Hệ thống chơi xổ số trực tuyến",
  additionalMetaTags: [
    {
      property: "keywords",
      content: "megalott, TEGALOTT, xo so, xoso, keno, keno 1p, keno 3p, keno 5p, keno online",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1, maximum-scale=1",
    },
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      href: "/assets/images/logo.png",
    },
  ],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: process.env.NEXTAUTH_URL,
    siteName: "Xổ số Tegalott",
    description: "Xổ số Tegalott",
    images: [
      {
        url: "https://i.imgur.com/JbAkY41.png",
        width: 1200,
        height: 628,
      },
    ],
  },
  facebook: {
    appId: process.env.FACEBOOK_APPID,
  },
  twitter: {
    handle: "@ThinhLe2013478",
    site: "@ThinhLe2013478",
    cardType: "summary_large_image",
  },
};
export default NextSeoConfig;
