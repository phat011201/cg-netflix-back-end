// videosController.ts

// import modules
import { Request, Response } from "express";

// import videos model
import Videos from "../models/videoModels";

// import videos data
import videosData from "../data/videosData";

// define videos controller
const videosController = {
  getAllVideos: (req: Request, res: Response) => {
    res.status(200).json(videosData);
  },
  getVideoById: (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const video = videosData.find((video: any) => video.id === id);
    res.status(200).json(video);
  },
  addVideo: (req: Request, res: Response) => {
    const { id, title, description, videoUrl, thumbnailUrl, genre, duration } =
      new Videos(
        req.body.id,
        req.body.title,
        req.body.description,
        req.body.videoUrl,
        req.body.thumbnailUrl,
        req.body.genre,
        req.body.duration
      );
    const newVideo: any = {
      id,
      title,
      description,
      videoUrl,
      thumbnailUrl,
      genre,
      duration,
    };
    videosData.push(newVideo);
    res.status(201).json(newVideo);
  },
  updateVideo: (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const video = videosData.find((video: any) => video.id === id);
    if (video) {
      video.title = req.body.title;
      video.description = req.body.description;
      video.videoUrl = req.body.videoUrl;
      video.thumbnailUrl = req.body.thumbnailUrl;
      video.genre = req.body.genre;
      video.duration = req.body.duration;
      res.status(200).json(video);
    } else {
      res.status(404).json({ message: "Video not found!" });
    }
  },
  deleteVideo: (req: Request, res: Response) => {
    const id = Number(req.params.id);
    const video = videosData.find((video: any) => video.id === id);
    if (video) {
      const index = videosData.indexOf(video);
      videosData.splice(index, 1);
      res.status(200).json({ message: "Video deleted!" });
    } else {
      res.status(404).json({ message: "Video not found!" });
    }
  },
};

export default videosController;