import { Schema, model, models } from "mongoose";

export interface IImage extends Document {
  title: string;
  transformationType: string;
  publicId: string;
  secureUrl: string; // URL as string, assuming no specific URL type in TypeScript
  width?: number;
  height?: number;
  config?: object; // Object represented as a Record in TypeScript
  transformationUrl?: string;
  aspectRatio?: string;
  color?: string;
  prompt?: string;
  author: {
    _id: string;
    firstName: string;
    lastName: string;
  }; // Assuming author ID as a string
  createdAt?: Date; // Optional with default, so it's not required when creating
  updatedAt?: Date; // Optional with default, so it's not required when creating
}

const ImageSchema = new Schema({
  title: { type: String, required: true },
  transformationType: { type: String, required: true },
  publicId: { type: String, required: true },
  secureUrl: { type: URL, required: true },
  width: { type: Number },
  height: { type: Number },
  config: { type: Object },
  transformationUrl: { type: URL },
  aspectRatio: { type: String },
  color: { type: String },
  prompt: { type: String },
  author: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Image = models?.Image || model("Image", ImageSchema);

export default Image;
