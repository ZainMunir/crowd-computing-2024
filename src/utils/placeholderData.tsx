import placeholderImage from '../resources/placeholder_poster.jpg';

export type StoryData = {
  title: string;
  genre: string;
  description: string;
  image: string;
  tags: string[];
  chapters: ChapterData[];
};

export type ChapterData = {
  title: string;
  views: number;
  stars: number;
  numComments: number;
  paragraphs?: ParagraphData[];
};

export type ParagraphData = {
  text: string;
  comments: CommentData[];
};

export type CommentData = {
  user: string;
  date: string;
  text: string;
  likes: number;
  replies: CommentData[];
};

const placeholderData: StoryData = {
  title: 'Title',
  genre: 'Genre',
  description:
    'Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac porta metus, nec pretium ipsum. Suspendisse lacus neque, dapibus ac efficitur eget, molestie blandit augue. Proin at dolor ac odio vulputate rhoncus. Sed at ante convallis, consectetur justo quis, tempus nibh. Proin justo nisl, mattis sit amet suscipit vitae, rhoncus ac mauris. Quisque accumsan nunc eu dictum varius. Mauris egestas tincidunt ex, non volutpat sapien porta ut. In hac habitasse platea dictumst. Nullam vitae dignissim dui. Nam sit amet commodo dolor, sit amet condimentum justo.',
  image: placeholderImage,
  tags: ['Tag1', 'Tag2', 'Tag3'],
  chapters: [
    {
      title: 'Author\'s Note',
      views: 19000443,
      stars: 53493,
      numComments: 999,
    },
  ],
};

export default placeholderData;
