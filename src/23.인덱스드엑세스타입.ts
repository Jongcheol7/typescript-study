/**
 * 인덱스드 엑세스 타입
 */
interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
}
function printAuthorInfo(author: Post["author"]) {
  console.log(`${author.name}-${author.id}`);
}
const post: Post = {
  title: "제목이요",
  content: "내용이요",
  author: {
    id: 1,
    name: "이종철",
  },
};
printAuthorInfo(post.author);

/**
 * 배열과 함께 사용해보자자
 */
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
}[];
const postList: PostList[number] = {
  title: "제목이요",
  content: "내용이요",
  author: {
    id: 1,
    name: "이종철",
  },
};
function printAuthorInfo2(author: PostList[number]["author"]) {
  console.log(`${author.name}-${author.id}`);
}

/**
 * 튜플과 함께 사용해보자
 */
type Tup = [number, string, boolean];
type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];
