// app/page.tsx
"use client"
import React from "react"
import Link from 'next/link';
import { compareDesc, format, parseISO } from 'date-fns';
import { allPosts, Post } from 'contentlayer/generated';
import { useTranslations } from 'next-intl';
import LocaleSwitcher from '@/components/LocaleSwitcher';

function PostCard(post: Post) {
  return (
    <Link href={post.url}>
      <div className="w-[300px] bg-white rounded-xl p-5">
        <h2 className="mb-1 text-xl cursor-pointer">{post.title}</h2>
        <time dateTime={post.date} className="mb-2 block text-xs text-gray-600">
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
        <div
          className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0 text-gray-700"
          dangerouslySetInnerHTML={{ __html: post.body.html }}
        />
      </div>
    </Link>
  );
}

export default function Home() {
  // how to use i18n
  const t = useTranslations();

  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <main className="flex h-screen flex-col items-center justify-center p-24 bg-gray-900">
      <div className="relative flex flex-col gap-4 place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] text-white">
        <h1 className="text-3xl font-bold text-white font-open">
          NextJs 13 Boilerplate
        </h1>
        <LocaleSwitcher />
      </div>
      <div className="mx-auto max-w-xl py-8">
        <h1 className="mb-8 text-center text-2xl text-white">{t('title')}</h1>
        {posts.map((post: any, idx: number) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </main>
  );
}
