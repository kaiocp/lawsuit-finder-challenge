import mongoose from "mongoose";

const lawsuitSchema = new mongoose.Schema({
    cnj_number: { type: String },
    plaintiff: { type: String },
    defendant: { type: String },
    date: { type: Date },
    occurrences: [{
        date: Date,
        description: String
    }]
}, {
    versionKey: false
});

const lawsuit = mongoose.model('lawsuit', lawsuitSchema);

export default lawsuit;