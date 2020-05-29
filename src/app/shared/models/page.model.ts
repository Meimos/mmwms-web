import { _HttpClient } from '@delon/theme';

export interface Pagination {
  page?: number;
  size?: number;
  total?: number;
  sort: string[];
}

export interface PageConfig {
  config?: Pagination;
  loading?: boolean;
  q: object;
}

export const pagination: Pagination = {
  page: 0,
  size: 10,
  total: 10,
  sort: ['id', 'asc'],
};
