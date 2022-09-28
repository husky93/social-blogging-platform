import type {
  Query,
  QueryDocumentSnapshot,
  DocumentData,
} from 'firebase/firestore';

export interface InfiniteLoadingObject {
  posts: Array<DocumentData>;
  hasMore: boolean;
  loading: boolean;
  lastVisible: QueryDocumentSnapshot<DocumentData> | null;
  loadItems: (q: Query<DocumentData>) => Promise<void>;
}

export interface FetchUserObject {
  userData: DocumentData | undefined;
  setUserData: React.Dispatch<React.SetStateAction<DocumentData | undefined>>;
  loading: boolean;
}
