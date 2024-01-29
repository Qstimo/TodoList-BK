import mongoose from "mongoose";

const TasksSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    tasks: Array,
    date: {
        type: String,
        required: true,
    },
    deadline: String,
    overdue: Boolean,

}, {
    timestamps: true
})

export default mongoose.model('Tasks', TasksSchema)