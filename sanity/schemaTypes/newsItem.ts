import { defineField, defineType } from "sanity";

export const newsItem = defineType({
  name: "newsItem",
  title: "お知らせ",
  type: "document",
  fields: [
    defineField({
      name: "date",
      title: "日付",
      type: "date",
      description: "表示用の日付（サイトでは YYYY/M/D 形式になります）",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "title",
      title: "タイトル",
      type: "string",
      validation: (rule) => rule.required()
    }),
    defineField({
      name: "href",
      title: "リンク（任意）",
      type: "string",
      description: "例: /downloads や https://example.com。空ならクリック不可の行になります。"
    })
  ],
  orderings: [
    {
      title: "日付（新しい順）",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }]
    }
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "date"
    }
  }
});
