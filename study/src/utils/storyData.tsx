import countOfMonteCristoCover from '../resources/count-of-monte-cristo-cover.jpg';
import alexandreDumasPhoto from '../resources/alexandre-dumas-picture.jpg';
import placeholderPoster from '../resources/placeholder_poster.jpg';
import placeholderPerson from '../resources/placeholder_person.jpg';
import kingsMusketeersCover from '../resources/kings-musketeers-cover.jpg';
import { StoryData } from './storyTypes';
import { loremIpsum, username, fullname, Avatar } from 'react-lorem-ipsum';

const textStrings = loremIpsum({ p: 15, random: true });
const commentStrings = loremIpsum({
  p: 15,
  random: true,
  avgSentencesPerParagraph: 1,
});

let commentIndex = 0;

function randomCommentString() {
  const comment = commentStrings[commentIndex];
  commentIndex = (commentIndex + 1) % commentStrings.length;
  return comment;
}

function randomDate() {
  const start = new Date(2023, 0, 1);
  const end = new Date(2024, 11, 31);
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  );
}

function randomLikes() {
  return Math.floor(Math.random() * 2000);
}

function randomComment() {
  return {
    user: {
      username: username(),
      profilePic: placeholderPerson,
    },
    date: randomDate(),
    text: randomCommentString(),
    likes: randomLikes(),
  };
}

export const placeholderData: StoryData = {
  title: 'Story Title',
  genre: 'Genre',
  description: textStrings[0],
  image: placeholderPoster,
  tags: textStrings[1].split(' '),
  author: {
    username: username(),
    profilePic: placeholderPerson,
  },
  chapters: [
    {
      title: 'Chapter 1',
      views: 19000443,
      stars: 53493,
      paragraphs: [
        {
          text: textStrings[2],
          comments: [randomComment()],
        },
        {
          text: textStrings[3],
          comments: [randomComment(), randomComment()],
        },

        {
          text: textStrings[4],
          comments: [],
        },
      ],
    },
    {
      title: 'Chapter 2',
      views: 19000443,
      stars: 53493,
      paragraphs: [
        {
          text: textStrings[5],
          comments: [
            randomComment(),
            randomComment(),
            randomComment(),
            randomComment(),
            randomComment(),
            randomComment(),
            randomComment(),
            randomComment(),
            randomComment(),
            randomComment(),
            randomComment(),
            randomComment(),
          ],
        },
        {
          text: textStrings[6],
          comments: [],
        },
        {
          text: textStrings[7],
          comments: [],
        },
      ],
    },
    {
      title: 'Chapter 3',
      views: 19000443,
      stars: 53493,
      paragraphs: [
        {
          text: textStrings[8],
          comments: [],
        },
        {
          text: textStrings[9],
          comments: [],
        },
        {
          text: textStrings[10],
          comments: [],
        },
      ],
    },
  ],
  status: 'Ongoing',
  isMature: true,
};

export const CountOfMonteCristo: StoryData = {
  title: 'The Count of Monte-Cristo',
  genre: 'Fiction',
  description:
    "Falsely accused of treason, Edmond Dantès is imprisoned in the bleak Chateau d'If. After a hair-raising escape, he launches an elaborate plot to extract a bitter revenge against those who betrayed him.",
  image: countOfMonteCristoCover,
  tags: [
    'Revenge',
    'Classic Literature',
    'Betrayal',
    'Adventure',
    'Redemption',
  ],
  author: {
    username: 'Alexandre Dumas',
    profilePic: alexandreDumasPhoto,
  },
  chapters: [
    {
      title: 'Chapter 8',
      views: 19000443,
      stars: 53493,
      paragraphs: [
        {
          text: 'On the bed, at full length and faintly illuminated by the pale light that entered the room through the barred window, lay a young man, whose hair was already turning gray. It was Edmond Dantès. His eyes glared with an expression of despair and his lips moved unconsciously, as if speaking to the vision of his enemies, those who had betrayed and sold him. He tried to recall each detail of his downfall: Danglars’ cunning plot to accuse him, Fernand’s betrayal out of jealousy, and even Villefort’s hypocrisy in sentencing him to a fate they all knew was undeserved.',
          comments: [
            {
              user: {
                username: 'literaryLover22',
                profilePic: placeholderPerson,
              },
              date: new Date(1731237006 * 1000),
              text: 'The way Dantès relives his betrayal is so heart-wrenching. You can feel his pain through the words.',
              likes: 187,
              replies: [],
            },
            {
              user: {
                username: 'classicLitFan',
                profilePic: placeholderPerson,
              },
              date: new Date(1731237006 * 1000),
              text: 'Danglars, Fernand, and Villefort are just the worst! How do you even recover from betrayals like that?',
              likes: 239,
              replies: [],
            },
            {
              user: {
                username: 'darkroomDreamer',
                profilePic: placeholderPerson,
              },
              date: new Date(1731237006 * 1000),
              text: 'This part always gives me goosebumps. The imagery of the cold, damp cell is haunting.',
              likes: 142,
              replies: [],
            },
            {
              user: {
                username: 'readerReflection',
                profilePic: placeholderPerson,
              },
              date: new Date(1731237006 * 1000),
              text: 'The line “hope, once a bright ember, dimmed each day” is such a powerful way to show the passage of despair.',
              likes: 173,
              replies: [],
            },
          ],
        },
        {
          text: '‘How could they?’ he whispered hoarsely to the empty room. But there was no answer, only the echo of his own voice rebounding off the cold, damp stone walls.',
          comments: [],
        },

        {
          text: 'Time stretched endlessly. Days blurred into weeks, and weeks into months, the only measure of their passing the dim light growing and fading beyond the small, iron-barred window. Hope, once a bright ember, dimmed each day, as Dantès realized that no one would come to his aid.',
          comments: [
            {
              user: {
                username: 'lonely_in_cells',
                profilePic: placeholderPerson,
              },
              date: new Date(1731237006 * 1000),
              text: 'Imagine staring at that tiny barred window every day, knowing no one is coming. The despair is overwhelming.',
              likes: 156,
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

export const KingsMusketeers: StoryData = {
  title: "The King's Musketeers and the Cardinal's Guards",
  genre: 'Fiction',
  description:
    "Falsely accused of treason, Edmond Dantès is imprisoned in the bleak Chateau d'If. After a hair-raising escape, he launches an elaborate plot to extract a bitter revenge against those who betrayed him.",
  image: kingsMusketeersCover,
  tags: [
    'Adventure',
    'Historical Fiction',
    'Honor and Loyalty',
    'Intrigue',
    'Sword Fighting',
  ],
  author: {
    username: 'Alexandre Dumas',
    profilePic: alexandreDumasPhoto,
  },
  chapters: [
    {
      title: 'Chapter 5',
      views: 19000443,
      stars: 53493,
      paragraphs: [
        {
          text: '‘On guard!’ cried Athos, drawing his sword.',
          comments: [
            {
              user: {
                username: 'fencing_fanatic',
                profilePic: placeholderPerson,
              },
              date: new Date(1731237006 * 1000),
              text: 'Athos never hesitates! That’s the kind of confidence we all need in life.',
              likes: 154,
              replies: [],
            },
            {
              user: {
                username: 'duelist_dreams',
                profilePic: placeholderPerson,
              },
              date: new Date(1731237006 * 1000),
              text: 'Nothing beats the thrill of a good sword fight. Athos always delivers!',
              likes: 189,
              replies: [],
            },
          ],
        },
        {
          text: '‘And we, gentlemen?’ said Porthos and Aramis.',
          comments: [
            {
              user: {
                username: 'all_for_one',
                profilePic: placeholderPerson,
              },
              date: new Date(1731237006 * 1000),
              text: 'The perfect duo energy here. You can almost hear the swagger in their voices.',
              likes: 175,
              replies: [],
            },
          ],
        },
        {
          text: '‘We will meet later,’ d’Artagnan replied, glancing at each of them in turn.',
          comments: [],
        },
        {
          text: "But at the very moment their swords crossed, the sudden appearance of the cardinal's guards shattered their concentration.",
          comments: [
            {
              user: {
                username: 'swordfighting_expert',
                profilePic: placeholderPerson,
              },
              date: new Date(1731237006 * 1000),
              text: 'Just when you think the duel is heating up, the cardinal’s guards ruin everything. Classic plot twist!',
              likes: 210,
              replies: [],
            },
          ],
        },
        {
          text: '‘Halt!’ shouted the leader of the guards. ‘Gentlemen, you are under arrest for dueling, by order of His Eminence the Cardinal.’',
          comments: [
            {
              user: {
                username: 'law_and_order_fan',
                profilePic: placeholderPerson,
              },
              date: new Date(1731237006 * 1000),
              text: 'The leader’s command is so authoritative! You can feel the tension building up with each word.',
              likes: 189,
              replies: [],
            },
            {
              user: {
                username: 'musketeer_justice',
                profilePic: placeholderPerson,
              },
              date: new Date(1731237006 * 1000),
              text: 'Arrested for dueling?! It’s always the cardinal’s guards that ruin the fun.',
              likes: 162,
              replies: [],
            },
          ],
        },
        {
          text: 'For a moment, the four men froze, their weapons still poised for combat. Then, with a quick glance exchanged between them, a silent decision was made.',
          comments: [],
        },
        {
          text: '‘Shall we?’ Athos said with a small, defiant smile.',
          comments: [],
        },
        {
          text: '‘Together,’ Porthos replied, raising his sword.',
          comments: [],
        },
        {
          text: '‘One for all,’ said Aramis, with a nod to d’Artagnan.',
          comments: [],
        },
        {
          text: 'And just like that, the duel shifted: no longer rivals, the four men now stood united against the guards. Their blades flashed in unison, deflecting the attacks of their would-be captors, as a bond forged in steel and defiance began to take root.',
          comments: [
            {
              user: {
                username: 'heroic_moments',
                profilePic: placeholderPerson,
              },
              date: new Date(1731237006 * 1000),
              text: 'This is when the real camaraderie shines through! The way they go from rivals to brothers-in-arms is so powerful.',
              likes: 234,
              replies: [],
            },
            {
              user: {
                username: 'steel_bond',
                profilePic: placeholderPerson,
              },
              date: new Date(1731237006 * 1000),
              text: 'Such a great moment! Their swords flashing together feels like the ultimate symbol of unity and defiance.',
              likes: 201,
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
