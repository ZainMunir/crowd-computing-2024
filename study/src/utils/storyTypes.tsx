export type StoryData = {
  title: string;
  genre: string;
  description: string;
  image: string;
  tags: string[];
  author: UserData;
  chapters: ChapterData[];
  status: 'Completed' | 'Ongoing';
  isMature: boolean;
};

export type ChapterData = {
  title: string;
  views: number;
  stars: number;
  paragraphs: ParagraphData[];
};

export type ParagraphData = {
  text: string;
  comments?: CommentData[];
};

export type CommentData = {
  user: UserData;
  date: Date;
  text: string;
  likes: number;
  replies?: CommentData[]; // Not implemented
};

export type UserData = {
  username: string;
  profilePic: string;
};
