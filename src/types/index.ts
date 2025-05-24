export interface Superfood {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  bodyParts: BodyPart[];
  image: string;
  nutrients: string[];
}

export type BodyPart = 
  | 'brain'
  | 'heart'
  | 'skin'
  | 'gut'
  | 'liver'
  | 'immune'
  | 'bones'
  | 'eyes'
  | 'muscles';

export interface Category {
  id: BodyPart;
  name: string;
  description: string;
  image: string;
  icon: string;
}
