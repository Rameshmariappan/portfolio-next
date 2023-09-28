export interface Root {
  ID: number;
  site_ID: number;
  author: Author;
  date: string;
  modified: string;
  title: string;
  URL: string;
  short_URL: string;
  content: string;
  excerpt: string;
  slug: string;
  guid: string;
  status: string;
  sticky: boolean;
  password: string;
  parent: boolean;
  type: string;
  discussion: Discussion;
  likes_enabled: boolean;
  sharing_enabled: boolean;
  like_count: number;
  i_like: boolean;
  is_reblogged: boolean;
  is_following: boolean;
  global_ID: string;
  featured_image: string;
  post_thumbnail: PostThumbnail;
  format: string;
  geo: boolean;
  menu_order: number;
  page_template: string;
  publicize_URLs: any[];
  terms: Terms;
  tags: Tags;
  categories: Categories;
  attachments: Attachments;
  attachment_count: number;
  metadata: Metadaum[];
  meta: Meta22;
  capabilities: Capabilities;
  other_URLs: OtherUrls;
}

export interface Author {
  ID: number;
  login: string;
  email: boolean;
  name: string;
  first_name: string;
  last_name: string;
  nice_name: string;
  URL: string;
  avatar_URL: string;
  profile_URL: string;
  site_ID: number;
}

export interface Discussion {
  comments_open: boolean;
  comment_status: string;
  pings_open: boolean;
  ping_status: string;
  comment_count: number;
}

export interface PostThumbnail {
  ID: number;
  URL: string;
  guid: string;
  mime_type: string;
  width: number;
  height: number;
}

export interface Terms {
  category: Category;
  post_tag: PostTag;
  post_format: PostFormat;
  mentions: Mentions;
}

export interface Category {
  VGLUG: Vglug;
  VillupuramGLUG: VillupuramGlug;
}

export interface Vglug {
  ID: number;
  name: string;
  slug: string;
  description: string;
  post_count: number;
  parent: number;
  meta: Meta;
}

export interface Meta {
  links: Links;
}

export interface Links {
  self: string;
  help: string;
  site: string;
}

export interface VillupuramGlug {
  ID: number;
  name: string;
  slug: string;
  description: string;
  post_count: number;
  parent: number;
  meta: Meta2;
}

export interface Meta2 {
  links: Links2;
}

export interface Links2 {
  self: string;
  help: string;
  site: string;
}

export interface PostTag {
  "#FOSS": Foss;
  "#FreeAndroidClass": FreeAndroidClass;
  "#Opensource": Opensource;
  "#VGLUG": Vglug2;
  "#VillupuramGLUG": VillupuramGlug2;
}

export interface Foss {
  ID: number;
  name: string;
  slug: string;
  description: string;
  post_count: number;
  meta: Meta3;
}

export interface Meta3 {
  links: Links3;
}

export interface Links3 {
  self: string;
  help: string;
  site: string;
}

export interface FreeAndroidClass {
  ID: number;
  name: string;
  slug: string;
  description: string;
  post_count: number;
  meta: Meta4;
}

export interface Meta4 {
  links: Links4;
}

export interface Links4 {
  self: string;
  help: string;
  site: string;
}

export interface Opensource {
  ID: number;
  name: string;
  slug: string;
  description: string;
  post_count: number;
  meta: Meta5;
}

export interface Meta5 {
  links: Links5;
}

export interface Links5 {
  self: string;
  help: string;
  site: string;
}

export interface Vglug2 {
  ID: number;
  name: string;
  slug: string;
  description: string;
  post_count: number;
  meta: Meta6;
}

export interface Meta6 {
  links: Links6;
}

export interface Links6 {
  self: string;
  help: string;
  site: string;
}

export interface VillupuramGlug2 {
  ID: number;
  name: string;
  slug: string;
  description: string;
  post_count: number;
  meta: Meta7;
}

export interface Meta7 {
  links: Links7;
}

export interface Links7 {
  self: string;
  help: string;
  site: string;
}

export interface PostFormat {}

export interface Mentions {}

export interface Tags {
  "#FOSS": Foss2;
  "#FreeAndroidClass": FreeAndroidClass2;
  "#Opensource": Opensource2;
  "#VGLUG": Vglug3;
  "#VillupuramGLUG": VillupuramGlug3;
}

export interface Foss2 {
  ID: number;
  name: string;
  slug: string;
  description: string;
  post_count: number;
  meta: Meta8;
}

export interface Meta8 {
  links: Links8;
}

export interface Links8 {
  self: string;
  help: string;
  site: string;
}

export interface FreeAndroidClass2 {
  ID: number;
  name: string;
  slug: string;
  description: string;
  post_count: number;
  meta: Meta9;
}

export interface Meta9 {
  links: Links9;
}

export interface Links9 {
  self: string;
  help: string;
  site: string;
}

export interface Opensource2 {
  ID: number;
  name: string;
  slug: string;
  description: string;
  post_count: number;
  meta: Meta10;
}

export interface Meta10 {
  links: Links10;
}

export interface Links10 {
  self: string;
  help: string;
  site: string;
}

export interface Vglug3 {
  ID: number;
  name: string;
  slug: string;
  description: string;
  post_count: number;
  meta: Meta11;
}

export interface Meta11 {
  links: Links11;
}

export interface Links11 {
  self: string;
  help: string;
  site: string;
}

export interface VillupuramGlug3 {
  ID: number;
  name: string;
  slug: string;
  description: string;
  post_count: number;
  meta: Meta12;
}

export interface Meta12 {
  links: Links12;
}

export interface Links12 {
  self: string;
  help: string;
  site: string;
}

export interface Categories {
  VGLUG: Vglug4;
  VillupuramGLUG: VillupuramGlug4;
}

export interface Vglug4 {
  ID: number;
  name: string;
  slug: string;
  description: string;
  post_count: number;
  parent: number;
  meta: Meta13;
}

export interface Meta13 {
  links: Links13;
}

export interface Links13 {
  self: string;
  help: string;
  site: string;
}

export interface VillupuramGlug4 {
  ID: number;
  name: string;
  slug: string;
  description: string;
  post_count: number;
  parent: number;
  meta: Meta14;
}

export interface Meta14 {
  links: Links14;
}

export interface Links14 {
  self: string;
  help: string;
  site: string;
}

export interface Attachments {
  "267": N267;
  "268": N268;
  "269": N269;
  "270": N270;
  "271": N271;
  "272": N272;
  "275": N275;
}

export interface N267 {
  ID: number;
  URL: string;
  guid: string;
  date: string;
  post_ID: number;
  author_ID: number;
  file: string;
  mime_type: string;
  extension: string;
  title: string;
  caption: string;
  description: string;
  alt: string;
  thumbnails: Thumbnails;
  height: number;
  width: number;
  exif: Exif;
  meta: Meta15;
}

export interface Thumbnails {
  thumbnail: string;
  medium: string;
  large: string;
  "newspack-article-block-landscape-large": string;
  "newspack-article-block-portrait-large": string;
  "newspack-article-block-square-large": string;
  "newspack-article-block-landscape-medium": string;
  "newspack-article-block-portrait-medium": string;
  "newspack-article-block-square-medium": string;
  "newspack-article-block-landscape-small": string;
  "newspack-article-block-portrait-small": string;
  "newspack-article-block-square-small": string;
  "newspack-article-block-landscape-tiny": string;
  "newspack-article-block-portrait-tiny": string;
  "newspack-article-block-square-tiny": string;
  "newspack-article-block-uncropped": string;
}

export interface Exif {
  aperture: string;
  credit: string;
  camera: string;
  caption: string;
  created_timestamp: string;
  copyright: string;
  focal_length: string;
  iso: string;
  shutter_speed: string;
  title: string;
  orientation: string;
  keywords: any[];
}

export interface Meta15 {
  links: Links15;
}

export interface Links15 {
  self: string;
  help: string;
  site: string;
  parent: string;
}

export interface N268 {
  ID: number;
  URL: string;
  guid: string;
  date: string;
  post_ID: number;
  author_ID: number;
  file: string;
  mime_type: string;
  extension: string;
  title: string;
  caption: string;
  description: string;
  alt: string;
  thumbnails: Thumbnails2;
  height: number;
  width: number;
  exif: Exif2;
  meta: Meta16;
}

export interface Thumbnails2 {
  thumbnail: string;
  medium: string;
  large: string;
  "newspack-article-block-landscape-large": string;
  "newspack-article-block-portrait-large": string;
  "newspack-article-block-square-large": string;
  "newspack-article-block-landscape-medium": string;
  "newspack-article-block-portrait-medium": string;
  "newspack-article-block-square-medium": string;
  "newspack-article-block-landscape-small": string;
  "newspack-article-block-portrait-small": string;
  "newspack-article-block-square-small": string;
  "newspack-article-block-landscape-tiny": string;
  "newspack-article-block-portrait-tiny": string;
  "newspack-article-block-square-tiny": string;
  "newspack-article-block-uncropped": string;
}

export interface Exif2 {
  aperture: string;
  credit: string;
  camera: string;
  caption: string;
  created_timestamp: string;
  copyright: string;
  focal_length: string;
  iso: string;
  shutter_speed: string;
  title: string;
  orientation: string;
  keywords: any[];
}

export interface Meta16 {
  links: Links16;
}

export interface Links16 {
  self: string;
  help: string;
  site: string;
  parent: string;
}

export interface N269 {
  ID: number;
  URL: string;
  guid: string;
  date: string;
  post_ID: number;
  author_ID: number;
  file: string;
  mime_type: string;
  extension: string;
  title: string;
  caption: string;
  description: string;
  alt: string;
  thumbnails: Thumbnails3;
  height: number;
  width: number;
  exif: Exif3;
  meta: Meta17;
}

export interface Thumbnails3 {
  thumbnail: string;
  medium: string;
  large: string;
  "newspack-article-block-landscape-large": string;
  "newspack-article-block-portrait-large": string;
  "newspack-article-block-square-large": string;
  "newspack-article-block-landscape-medium": string;
  "newspack-article-block-portrait-medium": string;
  "newspack-article-block-square-medium": string;
  "newspack-article-block-landscape-small": string;
  "newspack-article-block-portrait-small": string;
  "newspack-article-block-square-small": string;
  "newspack-article-block-landscape-tiny": string;
  "newspack-article-block-portrait-tiny": string;
  "newspack-article-block-square-tiny": string;
  "newspack-article-block-uncropped": string;
}

export interface Exif3 {
  aperture: string;
  credit: string;
  camera: string;
  caption: string;
  created_timestamp: string;
  copyright: string;
  focal_length: string;
  iso: string;
  shutter_speed: string;
  title: string;
  orientation: string;
  keywords: any[];
}

export interface Meta17 {
  links: Links17;
}

export interface Links17 {
  self: string;
  help: string;
  site: string;
  parent: string;
}

export interface N270 {
  ID: number;
  URL: string;
  guid: string;
  date: string;
  post_ID: number;
  author_ID: number;
  file: string;
  mime_type: string;
  extension: string;
  title: string;
  caption: string;
  description: string;
  alt: string;
  thumbnails: Thumbnails4;
  height: number;
  width: number;
  exif: Exif4;
  meta: Meta18;
}

export interface Thumbnails4 {
  thumbnail: string;
  medium: string;
  large: string;
  "newspack-article-block-landscape-large": string;
  "newspack-article-block-portrait-large": string;
  "newspack-article-block-square-large": string;
  "newspack-article-block-landscape-medium": string;
  "newspack-article-block-portrait-medium": string;
  "newspack-article-block-square-medium": string;
  "newspack-article-block-landscape-small": string;
  "newspack-article-block-portrait-small": string;
  "newspack-article-block-square-small": string;
  "newspack-article-block-landscape-tiny": string;
  "newspack-article-block-portrait-tiny": string;
  "newspack-article-block-square-tiny": string;
  "newspack-article-block-uncropped": string;
}

export interface Exif4 {
  aperture: string;
  credit: string;
  camera: string;
  caption: string;
  created_timestamp: string;
  copyright: string;
  focal_length: string;
  iso: string;
  shutter_speed: string;
  title: string;
  orientation: string;
  keywords: any[];
}

export interface Meta18 {
  links: Links18;
}

export interface Links18 {
  self: string;
  help: string;
  site: string;
  parent: string;
}

export interface N271 {
  ID: number;
  URL: string;
  guid: string;
  date: string;
  post_ID: number;
  author_ID: number;
  file: string;
  mime_type: string;
  extension: string;
  title: string;
  caption: string;
  description: string;
  alt: string;
  thumbnails: Thumbnails5;
  height: number;
  width: number;
  exif: Exif5;
  meta: Meta19;
}

export interface Thumbnails5 {
  thumbnail: string;
  medium: string;
  large: string;
  "newspack-article-block-landscape-large": string;
  "newspack-article-block-portrait-large": string;
  "newspack-article-block-square-large": string;
  "newspack-article-block-landscape-medium": string;
  "newspack-article-block-portrait-medium": string;
  "newspack-article-block-square-medium": string;
  "newspack-article-block-landscape-small": string;
  "newspack-article-block-portrait-small": string;
  "newspack-article-block-square-small": string;
  "newspack-article-block-landscape-tiny": string;
  "newspack-article-block-portrait-tiny": string;
  "newspack-article-block-square-tiny": string;
  "newspack-article-block-uncropped": string;
}

export interface Exif5 {
  aperture: string;
  credit: string;
  camera: string;
  caption: string;
  created_timestamp: string;
  copyright: string;
  focal_length: string;
  iso: string;
  shutter_speed: string;
  title: string;
  orientation: string;
  keywords: any[];
}

export interface Meta19 {
  links: Links19;
}

export interface Links19 {
  self: string;
  help: string;
  site: string;
  parent: string;
}

export interface N272 {
  ID: number;
  URL: string;
  guid: string;
  date: string;
  post_ID: number;
  author_ID: number;
  file: string;
  mime_type: string;
  extension: string;
  title: string;
  caption: string;
  description: string;
  alt: string;
  thumbnails: Thumbnails6;
  height: number;
  width: number;
  exif: Exif6;
  meta: Meta20;
}

export interface Thumbnails6 {
  thumbnail: string;
  medium: string;
  large: string;
  "newspack-article-block-landscape-large": string;
  "newspack-article-block-portrait-large": string;
  "newspack-article-block-square-large": string;
  "newspack-article-block-landscape-medium": string;
  "newspack-article-block-portrait-medium": string;
  "newspack-article-block-square-medium": string;
  "newspack-article-block-landscape-small": string;
  "newspack-article-block-portrait-small": string;
  "newspack-article-block-square-small": string;
  "newspack-article-block-landscape-tiny": string;
  "newspack-article-block-portrait-tiny": string;
  "newspack-article-block-square-tiny": string;
  "newspack-article-block-uncropped": string;
}

export interface Exif6 {
  aperture: string;
  credit: string;
  camera: string;
  caption: string;
  created_timestamp: string;
  copyright: string;
  focal_length: string;
  iso: string;
  shutter_speed: string;
  title: string;
  orientation: string;
  keywords: any[];
}

export interface Meta20 {
  links: Links20;
}

export interface Links20 {
  self: string;
  help: string;
  site: string;
  parent: string;
}

export interface N275 {
  ID: number;
  URL: string;
  guid: string;
  date: string;
  post_ID: number;
  author_ID: number;
  file: string;
  mime_type: string;
  extension: string;
  title: string;
  caption: string;
  description: string;
  alt: string;
  thumbnails: Thumbnails7;
  height: number;
  width: number;
  exif: Exif7;
  meta: Meta21;
}

export interface Thumbnails7 {
  thumbnail: string;
  medium: string;
  large: string;
  "newspack-article-block-landscape-large": string;
  "newspack-article-block-portrait-large": string;
  "newspack-article-block-square-large": string;
  "newspack-article-block-landscape-medium": string;
  "newspack-article-block-portrait-medium": string;
  "newspack-article-block-square-medium": string;
  "newspack-article-block-landscape-small": string;
  "newspack-article-block-portrait-small": string;
  "newspack-article-block-square-small": string;
  "newspack-article-block-landscape-tiny": string;
  "newspack-article-block-portrait-tiny": string;
  "newspack-article-block-square-tiny": string;
  "newspack-article-block-uncropped": string;
}

export interface Exif7 {
  aperture: string;
  credit: string;
  camera: string;
  caption: string;
  created_timestamp: string;
  copyright: string;
  focal_length: string;
  iso: string;
  shutter_speed: string;
  title: string;
  orientation: string;
  keywords: any[];
}

export interface Meta21 {
  links: Links21;
}

export interface Links21 {
  self: string;
  help: string;
  site: string;
  parent: string;
}

export interface Metadaum {
  id: string;
  key: string;
  value: string;
}

export interface Meta22 {
  links: Links22;
}

export interface Links22 {
  self: string;
  help: string;
  site: string;
  replies: string;
  likes: string;
}

export interface Capabilities {
  publish_post: boolean;
  delete_post: boolean;
  edit_post: boolean;
}

export interface OtherUrls {}
