import type { components, paths } from './schema';

type Schemas = components['schemas'];
type Complete<T> = { [K in keyof T]-?: Exclude<T[K], undefined> };

export type { components, paths };

export type AuthUser = Schemas['AuthUser'];
export type AuthResponse = Schemas['AuthResponse'];
export type LoginInput = Schemas['LoginInput'];
export type Overview = Schemas['Overview'];

export type ProjectMediaInput = Complete<NonNullable<Schemas['ProjectInput']['media']>[number]>;
export type ProjectSectionInput = Complete<
  NonNullable<Schemas['ProjectInput']['sections']>[number]
>;
export type ProjectInput = Complete<Omit<Schemas['ProjectInput'], 'media' | 'sections'>> & {
  media: ProjectMediaInput[];
  sections: ProjectSectionInput[];
};
export type ProjectRow = Schemas['AdminProjectRow'];
export type ProjectDetail = Schemas['AdminProject'];

export type PostMediaInput = Complete<NonNullable<Schemas['PostInput']['media']>[number]>;
export type PostInput = Complete<Omit<Schemas['PostInput'], 'media'>> & { media: PostMediaInput[] };
export type PostRow = Schemas['AdminPostRow'];
export type PostDetail = Schemas['AdminPost'];

export type ProfileInput = Complete<Schemas['ProfileInput']>;
export type Message = Schemas['Message'];
export type UploadedMedia = Schemas['UploadedMedia'];

export type PublishStatus = ProjectRow['status'];
export type PostStatus = PostRow['status'];
export type PostCategory = PostRow['category'];
export type Device = ProjectMediaInput['device'];
export type ProjectSectionKind = ProjectSectionInput['kind'];
export type Availability = ProfileInput['availability'];
export type TechLayer = Schemas['TechnologyRow']['layer'];
export type TalkKind = Schemas['TalkRow']['kind'];
export type ExperienceKind = Schemas['ExperienceRow']['kind'];
export type MessageStatus = Message['status'];

export type Row = Record<string, unknown> & { id: string };
