export interface Photo {
  title: string;
  url: string;
  id: number;
}

// export async function generateStaticParams(): Promise<
//   { title: string; pic: string }[]
// > {

//   const posts: Photo[] = await (
//     await fetch(`https://jsonplaceholder.typicode.com/photos`)
//   ).json();

//   return posts.map((post) => ({
//     title: post.title,
//     pic: post.url,
//     id: post.id,
//   }));
// }
