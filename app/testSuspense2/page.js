import { Suspense } from 'react';

const sleep = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

async function PostFeed() {
  await sleep(2000);
  return <h1>Hello PostFeed 2秒</h1>;
}

async function Weather() {
  await sleep(8000);
  return <h1>Hello Weather 8秒</h1>;
}

async function Recommend() {
  await sleep(5000);
  return <h1>Hello Recommend 5秒</h1>;
}

export default function Page() {
  return (
    <section style={{ padding: '20px' }}>
      <Suspense fallback={<p>Loading PostFeed Component</p>}>
        <PostFeed />
        <Suspense fallback={<p>Loading Weather Component</p>}>
          <Weather />
          <Suspense fallback={<p>Loading Recommend Component</p>}>
            <Recommend />
          </Suspense>
        </Suspense>
      </Suspense>
    </section>
  );
}
