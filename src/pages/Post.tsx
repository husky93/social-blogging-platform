import React, { Suspense } from 'react';
import Loading from './Loading';
import { useParams } from 'react-router-dom';
import {
  useAppSelector,
  useAppDispatch,
  useCheckIfLoggedIn,
  useFetchPost,
} from '../app/hooks';
import { serialize } from '../editor/serialize';
import type { RootState } from '../app/store';
import type { Node } from 'slate';
import type { LazyExoticComponent } from 'react';

const Header: LazyExoticComponent<any> = React.lazy(
  () => import('../components/Header')
);
const Container: LazyExoticComponent<any> = React.lazy(
  () => import('../components/Container')
);
const UserUI: LazyExoticComponent<any> = React.lazy(
  () => import('../components/UserUI')
);
const LoginUI: LazyExoticComponent<any> = React.lazy(
  () => import('../components/LoginUI')
);
const PostUI: LazyExoticComponent<any> = React.lazy(
  () => import('../components/PostUI')
);
const Card: LazyExoticComponent<any> = React.lazy(
  () => import('../components/Card')
);
const Alert: LazyExoticComponent<any> = React.lazy(
  () => import('../components/Alert')
);
const CommentList: LazyExoticComponent<any> = React.lazy(
  () => import('../components/CommentList')
);
const Author: LazyExoticComponent<any> = React.lazy(
  () => import('../components/Author')
);
const Footer: LazyExoticComponent<any> = React.lazy(
  () => import('../components/Footer')
);

interface PostProps {}

const Post: React.FC<PostProps> = ({}) => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const user: RootState['user'] = useAppSelector((state) => state.user);
  const alert: RootState['alert'] = useAppSelector((state) => state.alert);
  const loading = useCheckIfLoggedIn(dispatch);
  const post = useFetchPost(params.id);

  const renderComments = () => {
    if (!user.data && post?.comments.length === 0) return;
    return (
      <Card customClasses="py-8 px-4 sm:p-12 mt-6">
        <CommentList post={post} postID={params.id} />
      </Card>
    );
  };

  return post === null ? (
    <Loading />
  ) : (
    <Suspense fallback={<Loading />}>
      <main className="min-h-screen flex flex-col">
        <Header>{user.data ? <UserUI /> : <LoginUI />}</Header>
        {post === undefined ? (
          <Container customClasses="flex-1 flex items-center">
            <h1 className="text-center my-8 text-5xl font-extrabold block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-500 to-slate-800">
              Error 404! Post not found
            </h1>
          </Container>
        ) : (
          ''
        )}
        {post && (
          <Container customClasses="my-14 flex-1">
            {alert.data.isShown && (
              <div className="my-4">
                <Alert title={alert.data.title} variant={alert.data.variant}>
                  {alert.data.text}
                </Alert>
              </div>
            )}
            <div className="flex">
              <PostUI
                postID={params.id}
                likes={post.likes}
                bookmarks={post.bookmarks}
              />
              <div className="w-full">
                <Card customClasses="p-8 sm:p-12">
                  <Author
                    avatarUrl={post.author.photoUrl}
                    displayName={post.author.displayName}
                    timestamp={post.timestamp}
                  />
                  <h1 className="my-8 text-5xl font-extrabold block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-500 to-slate-800">
                    {post.title}
                  </h1>
                  {post.content.map((item: Node) => serialize(item))}
                </Card>
                {renderComments()}
              </div>
            </div>
          </Container>
        )}
        <Footer />
      </main>
    </Suspense>
  );
};

export default Post;
