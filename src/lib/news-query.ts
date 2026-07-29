export const newsQuery = `*[_type == "newsItem"] | order(date desc) {
  _id,
  date,
  title,
  href
}`;
