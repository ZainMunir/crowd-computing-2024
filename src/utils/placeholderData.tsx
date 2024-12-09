import placeholderPoster from '../resources/placeholder_poster.jpg';
import placeholderPerson from '../resources/placeholder_person.jpg';

export type StoryData = {
  title: string;
  genre: string;
  description: string;
  image: string;
  tags: string[];
  author: UserData;
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
  num_comments: number;
};

export type CommentData = {
  user: UserData;
  date: Date;
  text: string;
  likes: number;
  replies: CommentData[];
};

export type UserData = {
  username: string;
  profilePic: string;
};

const placeholderData: StoryData = {
  title: 'Title',
  genre: 'Genre',
  description:
    'Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac porta metus, nec pretium ipsum. Suspendisse lacus neque, dapibus ac efficitur eget, molestie blandit augue. Proin at dolor ac odio vulputate rhoncus. Sed at ante convallis, consectetur justo quis, tempus nibh. Proin justo nisl, mattis sit amet suscipit vitae, rhoncus ac mauris. Quisque accumsan nunc eu dictum varius. Mauris egestas tincidunt ex, non volutpat sapien porta ut. In hac habitasse platea dictumst. Nullam vitae dignissim dui. Nam sit amet commodo dolor, sit amet condimentum justo.',
  image: placeholderPoster,
  tags: ['Tag1', 'Tag2', 'Tag3'],
  author: {
    username: 'Username',
    profilePic: placeholderPerson,
  },
  chapters: [
    {
      title: "Author's Note",
      views: 19000443,
      stars: 53493,
      numComments: 999,
      paragraphs: [
        {
          text: 'Donec et enim at nisi porttitor dapibus ac ut neque. Morbi consectetur elit sit amet augue mattis rhoncus. Vivamus vel vestibulum magna, vitae pellentesque leo. Sed molestie sagittis pretium. Etiam commodo sapien vel neque dapibus, at viverra dolor tincidunt. Suspendisse faucibus vehicula ex et hendrerit. Pellentesque aliquam mattis pretium. Nam condimentum velit nunc, porttitor aliquam orci sagittis ornare.',
          comments: [
            {
              user: {
                username: 'Username',
                profilePic: placeholderPerson,
              },
              date: new Date(Date.now()),
              text: 'Comment text',
              likes: 999,
              replies: [],
            },
          ],
          num_comments: 1000,
        },
        {
          text: 'Donec et enim at nisi porttitor dapibus ac ut neque. Morbi consectetur elit sit amet augue mattis rhoncus. Vivamus vel vestibulum magna, vitae pellentesque leo. Sed molestie sagittis pretium. Etiam commodo sapien vel neque dapibus, at viverra dolor tincidunt. Suspendisse faucibus vehicula ex et hendrerit. Pellentesque aliquam mattis pretium. Nam condimentum velit nunc, porttitor aliquam orci sagittis ornare.',
          comments: [
            {
              user: {
                username: 'Username',
                profilePic: placeholderPerson,
              },
              date: new Date(Date.now()),
              text: 'Comment text',
              likes: 999,
              replies: [],
            },
          ],
          num_comments: 0,
        },
      ],
    },
    {
      title: "2",
      views: 19000443,
      stars: 53493,
      numComments: 999,
      paragraphs: [
        {
          text: 'Donec et enim at nisi porttitor dapibus ac ut neque. Morbi consectetur elit sit amet augue mattis rhoncus. Vivamus vel vestibulum magna, vitae pellentesque leo. Sed molestie sagittis pretium. Etiam commodo sapien vel neque dapibus, at viverra dolor tincidunt. Suspendisse faucibus vehicula ex et hendrerit. Pellentesque aliquam mattis pretium. Nam condimentum velit nunc, porttitor aliquam orci sagittis ornare.',
          comments: [
            {
              user: {
                username: 'Username',
                profilePic: placeholderPerson,
              },
              date: new Date(Date.now()),
              text: 'Comment text',
              likes: 999,
              replies: [],
            },
          ],
          num_comments: 1000,
        },
        {
          text: 'Donec et enim at nisi porttitor dapibus ac ut neque. Morbi consectetur elit sit amet augue mattis rhoncus. Vivamus vel vestibulum magna, vitae pellentesque leo. Sed molestie sagittis pretium. Etiam commodo sapien vel neque dapibus, at viverra dolor tincidunt. Suspendisse faucibus vehicula ex et hendrerit. Pellentesque aliquam mattis pretium. Nam condimentum velit nunc, porttitor aliquam orci sagittis ornare.',
          comments: [
            {
              user: {
                username: 'Username',
                profilePic: placeholderPerson,
              },
              date: new Date(Date.now()),
              text: 'Comment text',
              likes: 999,
              replies: [],
            },
          ],
          num_comments: 0,
        },
      ],
    },
  ],
};

export default placeholderData;
