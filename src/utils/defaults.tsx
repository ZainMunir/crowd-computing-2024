import { EnabledElements, Styling } from './CloneContext';

export const defaultEnabledElements: EnabledElements = {
  headerNavLogo: true,
  headerNavBrowse: true,
  headerNavCommunity: true,
  headerNavSearch: true,
  headerNavWrite: true,
  headerNavPremium: true,
  headerNavLogin: true,
  headerNavSignup: true,
  headerStoryChapterPicker: true,
  headerStoryAdd: true,
  headerStoryVote: true,
  headerProgressBar: true,
  bodyStoryDetails: true,
  bodyChapterHeader: true,
  bodyChapterStats: true,
  bodySidebar: true,
  bodyChapterContent: true,
  bodyChapterNavigation: true,
  bodyChapterInteractions: true,
  bodyInlineComments: true,
  bodyCommentSection: true,
  bodyRelatedStories: true,
  footer: true,
};

export const defaultStyling: Styling = {
  text_small: {
    var: '--text-small',
    value: '0.813rem',
  },
  text_medium: {
    var: '--text-medium',
    value: '16px',
  },
  text_large: {
    var: '--text-large',
    value: '1.5rem',
  },
  text_xlarge: {
    var: '--text-xlarge',
    value: '1.75rem',
  },
  text_2xlarge: {
    var: '--text-2xlarge',
    value: '2rem',
  },
  text_normalbold: {
    var: '--text-normalbold',
    value: '400',
  },
  text_semibold: {
    var: '--text-semibold',
    value: '600',
  },
  text_bold: {
    var: '--text-bold',
    value: '700',
  },
  text_middle: {
    var: '--text-middle',
    value: '#6f6f6f',
  },
  text_light: {
    var: '--text-light',
    value: '#ffffff',
  },
  text_dark: {
    var: '--text-dark',
    value: '#222222',
  },
  bg_light: {
    var: '--bg-light',
    value: '#ffffff',
  },
  bg_gray_1: {
    var: '--bg-gray-1',
    value: '#f6f6f6',
  },
  bg_gray_2: {
    var: '--bg-gray-2',
    value: '#eeeeee',
  },
  bg_gray_3: {
    var: '--bg-gray-3',
    value: '#6f6f6f',
  },
  bg_dark: {
    var: '--bg-dark',
    value: '#121212',
  },
  border_light: {
    var: '--border-light',
    value: '#eeeeee',
  },
  border_dark: {
    var: '--border-dark',
    value: '#121212',
  },
  description_line_height: {
    var: '--description-line-height',
    value: '1.5rem',
  },
  paragraph_line_height: {
    var: '--paragraph-line-height',
    value: '30px',
  },
  comment_line_height: {
    var: '--comment-line-height',
    value: '1.25rem',
  },
  text_lightning_red: {
    var: '--text-lightning-red',
    value: '#e81249',
  },
  bg_button_purple: {
    var: '--bg-button-purple',
    value: '#21164c',
  },
  bg_orange: {
    var: '--bg-orange',
    value: '#ff6122',
  },
  text_orange: {
    var: '--text-orange',
    value: '#ff6122',
  },
  border_orange: {
    var: '--border-orange',
    value: '#ff6122',
  },
  bg_facebook_blue: {
    var: '--bg-facebook-blue',
    value: '#3b5998',
  },
  text_facebook_blue: {
    var: '--text-facebook-blue',
    value: '#3b5998',
  },
  bg_twitter_blue: {
    var: '--bg-twitter-blue',
    value: '#55acee',
  },
  bg_pinterest_red: {
    var: '--bg-pinterest-red',
    value: '#bd081c',
  },
  bg_tumblr_blue: {
    var: '--bg-tumblr-blue',
    value: '#35465d',
  },
  bg_progress_teal: {
    var: '--bg-progress-teal',
    value: '#00b2b2',
  },
  text_follow_teal: {
    var: '--text-follow-teal',
    value: '#14b8a6',
  },
  text_completed_teal: {
    var: '--text-completed-teal',
    value: '#00b2b2',
  },
  text_menu_hover: {
    var: '--text-menu-hover',
    value: '#007f80',
  },
  text_completed_red: {
    var: '--text-completed-red',
    value: '#a93e19',
  },
  bg_post_button_inactive: {
    var: '--bg-post-button-inactive',
    value: '#d7caff',
  },
  bg_post_button_active: {
    var: '--bg-post-button-active',
    value: '#3b19a9',
  },
  text_reply_purple: {
    var: '--text-reply-purple',
    value: '#3b19a9',
  },
  border_text_area_active: {
    var: '--border-text-area-active',
    value: '#5c10ff',
  },
  content_width: {
    var: '--content-width',
    value: '625px',
  },
  text_font_family: {
    var: '--text-font-family',
    value: 'Arial',
  },
  letter_spacing: {
    var: '--letter-spacing',
    value: '0px',
  },

  custom_inverted: {
    var: '--custom-inverted',
    value: '0%',
  },

  custom_grayscale: {
    var: '--custom-grayscale',
    value: '0%',
  },

  custom_sepia: {
    var: '--custom-sepia',
    value: '0%',
  },
};
