import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
  {
    mediaUrl: String,
    description: String,
    name: String,
    price: String,
  },
  {
    timestamps: true,
  }
);

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export default Topic;
