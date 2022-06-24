import { useState } from 'react';

import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatar_url: 'https://github.com/gbdsantos.png',
      name: 'Guilherme Bezerra',
      role: 'Software Engineer'
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoal 👋' },
      { type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻' },
      { type: 'link', content: 'devonlane.design' },
      { type: 'paragraph', content: 'Acesse e deixe seu feedback 👉' }
    ],
    publishedAt: new Date('2022-06-09 00:04:30')
  },

  {
    id: 2,
    author: {
      avatar_url: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'Educator at @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoal 👋' },
      { type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻' },
      { type: 'link', content: 'devonlane.design' },
      { type: 'paragraph', content: 'Acesse e deixe seu feedback 👉' }
    ],
    publishedAt: new Date('2022-06-10 20:10:42')
  }
];

function App() {
  console.log(posts);

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => {
              return (
                <Post
                  author={post.author}
                  content={post.content}
                  key={post.id}
                  publishedAt={post.publishedAt}
                />
              )
            })

          }
        </main>
      </div>
    </div>
  )
}

export default App
