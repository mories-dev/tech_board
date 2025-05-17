# 📚 TechBoard – 技術記事共有＆リアルタイムコメント掲示板

## 🔰 概要

TechBoard は、エンジニアが技術記事を投稿・共有し、他のユーザーがコメントできるシンプルな掲示板型アプリケーションです。Next.js (App Router)、React Server Components (RSC)、Prisma ORM を用いてフルスタックで構築します。

---

## 🎯 目的

- Next.js App Router と React Server Components の実践
- ORM（Prisma）によるサーバーサイドDBアクセスの習得
- Server Actions・動的ルーティング・キャッシュ制御などの理解

---

## 🧩 機能一覧

### 1. トップページ（記事一覧）
- 全記事を新着順で一覧表示
- 各記事はタイトルと抜粋を表示
- Server ComponentでDBから取得

### 2. 記事詳細ページ `/articles/[slug]`
- タイトル・本文（Markdown形式）・投稿日時・投稿者を表示
- コメント一覧を表示（リアルタイム更新）
- コメント投稿フォーム（Client Component）

### 3. 記事投稿・編集ページ（ログイン必須）
- 新規投稿フォーム（タイトル・本文）
- 編集時は初期値をフォームに表示
- Server Actionsで保存処理を実装

### 4. コメント機能
- 各記事に対してコメントを投稿可能
- コメントはリアルタイムで反映
- ログインユーザーのみ投稿可能

### 5. お気に入り機能（★ボタン）
- 各記事をお気に入りに追加/解除
- useOptimistic で楽観的UIを実装

### 6. 認証（NextAuth.jsなど）
- Googleアカウント等でログイン
- ログイン状態の保持、認可制御

---

## 🗃️ データモデル（仮）

### User
- id
- name
- email
- image

### Article
- id
- title
- slug
- content (Markdown)
- createdAt
- authorId → User

### Comment
- id
- content
- createdAt
- articleId → Article
- authorId → User

### Favorite
- id
- userId → User
- articleId → Article

---

## ⚙️ 技術スタック

| 項目 | 技術 |
|------|------|
| フレームワーク | Next.js (App Router) |
| DB & ORM | PostgreSQL + Prisma |
| 認証 | NextAuth.js |
| スタイリング | Tailwind CSS |
| Markdown対応 | remark / react-markdown |
| 状態管理 | useState / useOptimistic |
| バリデーション | Zod（必要に応じて） |

---

## 🚀 拡張案（任意）

- 記事タグ・カテゴリ機能
- コメントのリアクション（👍など）
- MDX対応記事
- APIルート（例: `/api/highlight`）でサーバー処理を実装
- 投稿者別ページ `/users/[id]`

---

## 🧪 開発環境

- docker-compose によるDB/アプリ同時起動
- `.env` にDB接続情報を管理

