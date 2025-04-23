export interface UnsplashImage {
  id: string;
  alt_description: string | null;
  urls: {
    small: string;
    regular: string;
  };
  user: {
    name: string;
  };
  likes: number;
}

export interface UnsplashResponse {
  total: number;
  total_pages: number;
  results: UnsplashImage[];
}
