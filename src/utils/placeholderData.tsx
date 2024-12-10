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
  status: 'Completed' | 'Ongoing';
  isMature: boolean;
};

export type ChapterData = {
  title: string;
  views: number;
  stars: number;
  paragraphs?: ParagraphData[];
};

export type ParagraphData = {
  text: string;
  comments: CommentData[];
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
  tags: ['Tag1', 'Tag2', 'Tag3', 'Tag4', 'Tag5', 'Tag6', 'Tag7', 'Tag8', 'Tag9', 'Tag10'],
  author: {
    username: 'Username',
    profilePic: placeholderPerson,
  },
  chapters: [
    {
      title: "Author's Note",
      views: 19000443,
      stars: 53493,
      paragraphs: [
        {
          text: 'Donec et enim at nisi porttitor dapibus ac ut neque. Morbi consectetur elit sit amet augue mattis rhoncus. Vivamus vel vestibulum magna, vitae pellentesque leo. Sed molestie sagittis pretium. Etiam commodo sapien vel neque dapibus, at viverra dolor tincidunt. Suspendisse faucibus vehicula ex et hendrerit. Pellentesque aliquam mattis pretium. Nam condimentum velit nunc, porttitor aliquam orci sagittis ornare.',
          comments: [
            {
              user: {
                username: 'Username',
                profilePic: placeholderPerson,
              },
              date: new Date(1731237006 * 1000),
              text: 'Comment text',
              likes: 999,
              replies: [],
            },
            {
              user: {
                username: 'Username',
                profilePic: placeholderPerson,
              },
              date: new Date(1731237006 * 1000),
              text: 'Comment text',
              likes: 999,
              replies: [],
            },
            {
              user: {
                username: 'Username',
                profilePic: placeholderPerson,
              },
              date: new Date(1731237006 * 1000),
              text: 'Comment text',
              likes: 999,
              replies: [],
            },
            {
              user: {
                username: 'Username',
                profilePic: placeholderPerson,
              },
              date: new Date(1731237006 * 1000),
              text: 'Comment text',
              likes: 999,
              replies: [],
            },
            {
              user: {
                username: 'Username',
                profilePic: placeholderPerson,
              },
              date: new Date(1731237006 * 1000),
              text: 'Comment text',
              likes: 999,
              replies: [],
            },
            {
              user: {
                username: 'Username',
                profilePic: placeholderPerson,
              },
              date: new Date(1731237006 * 1000),
              text: 'Comment text',
              likes: 999,
              replies: [],
            },
            {
              user: {
                username: 'Username',
                profilePic: placeholderPerson,
              },
              date: new Date(1731237006 * 1000),
              text: 'Comment text',
              likes: 999,
              replies: [],
            },
            {
              user: {
                username: 'Username',
                profilePic: placeholderPerson,
              },
              date: new Date(1731237006 * 1000),
              text: 'Comment text',
              likes: 999,
              replies: [],
            },
            {
              user: {
                username: 'Username',
                profilePic: placeholderPerson,
              },
              date: new Date(1731237006 * 1000),
              text: 'Comment text',
              likes: 999,
              replies: [],
            },
            {
              user: {
                username: 'Username',
                profilePic: placeholderPerson,
              },
              date: new Date(1731237006 * 1000),
              text: 'Comment text',
              likes: 999,
              replies: [],
            },
            {
              user: {
                username: 'Username',
                profilePic: placeholderPerson,
              },
              date: new Date(1731237006 * 1000),
              text: 'Comment text',
              likes: 999,
              replies: [],
            },
            {
              user: {
                username: 'Username',
                profilePic: placeholderPerson,
              },
              date: new Date(1731237006 * 1000),
              text: 'Comment text',
              likes: 999,
              replies: [],
            },
            {
              user: {
                username: 'Username',
                profilePic: placeholderPerson,
              },
              date: new Date(1731237006 * 1000),
              text: 'Comment text',
              likes: 999,
              replies: [],
            },
            {
              user: {
                username: 'Username',
                profilePic: placeholderPerson,
              },
              date: new Date(1731237006 * 1000),
              text: 'Comment text',
              likes: 999,
              replies: [],
            },
            {
              user: {
                username: 'Username',
                profilePic: placeholderPerson,
              },
              date: new Date(1731237006 * 1000),
              text: 'Comment text',
              likes: 999,
              replies: [],
            },
            {
              user: {
                username: 'Username',
                profilePic: placeholderPerson,
              },
              date: new Date(1731237006 * 1000),
              text: 'Comment text',
              likes: 999,
              replies: [],
            },
            {
              user: {
                username: 'Username',
                profilePic: placeholderPerson,
              },
              date: new Date(1731237006 * 1000),
              text: 'Comment text',
              likes: 999,
              replies: [],
            },
          ],
        },
        {
          text: 'Donec et enim at nisi porttitor dapibus ac ut neque. Morbi consectetur elit sit amet augue mattis rhoncus. Vivamus vel vestibulum magna, vitae pellentesque leo. Sed molestie sagittis pretium. Etiam commodo sapien vel neque dapibus, at viverra dolor tincidunt. Suspendisse faucibus vehicula ex et hendrerit. Pellentesque aliquam mattis pretium. Nam condimentum velit nunc, porttitor aliquam orci sagittis ornare.',
          comments: [
            {
              user: {
                username: 'Username',
                profilePic: placeholderPerson,
              },
              date: new Date(1733832642 * 1000),
              text: 'Comment text',
              likes: 1000,
              replies: [],
            },
          ],
        },

        {
          text: 'Donec et enim at nisi porttitor dapibus ac ut neque. Morbi consectetur elit sit amet augue mattis rhoncus. Vivamus vel vestibulum magna, vitae pellentesque leo. Sed molestie sagittis pretium. Etiam commodo sapien vel neque dapibus, at viverra dolor tincidunt. Suspendisse faucibus vehicula ex et hendrerit. Pellentesque aliquam mattis pretium. Nam condimentum velit nunc, porttitor aliquam orci sagittis ornare.',
          comments: [
            {
              user: {
                username: 'Username',
                profilePic: placeholderPerson,
              },
              date: new Date(1696932606 * 1000),
              text: 'Comment text',
              likes: 999,
              replies: [],
            },
          ],
        },
      ],
    },
    {
      title: '2',
      views: 19000443,
      stars: 53493,
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
        },
      ],
    },
  ],
  status: 'Ongoing',
  isMature: true,
};

export default placeholderData;
