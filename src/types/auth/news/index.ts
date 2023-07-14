export interface Root {
  Notices: News[];
  nextToken: any;
}

export interface News {
  photo: string;
  publicationAt: string;
  category: string[];
  title: string;
  body: string;
  tenantId: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  isFavorite?: boolean;
  isSave?: boolean;
}
