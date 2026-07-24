# お知らせの編集方法

編集ファイル:

- `src/content/news.ts`

書き方:

```ts
{
  date: "2026/7/24",
  title: "お知らせのタイトル",
  href: "/classes"
}
```

メモ:

- `date` は表示日です
- `title` はお知らせ本文です
- `href` を入れるとクリックできます
- `href` が不要ならその行は消して大丈夫です
