const mongoose = require('mongoose');

const plotSchema = new mongoose.Schema({
    title: String,
    description: String,
    mainCharacter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Character'
    },
    timeline: String,    
    setting: String      
});

module.exports = mongoose.model('Plot', plotSchema);
