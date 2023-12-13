// videos.ts

export default class Videos {
  id: Number;
  title: String;
  description: string;
  videoUrl: String;
  thumbnailUrl: string;
  genre: string;
  duration: string;

  constructor(id: string, title: string, description: string, videoUrl: string, thumbnailUrl: string, genre: string, duration: string){ 
    this.id = Number(id);
    this.title = title;
    this.description = description;
    this.videoUrl = videoUrl;
    this.thumbnailUrl = thumbnailUrl;
    this.genre = genre;
    this.duration = duration;
  }

}