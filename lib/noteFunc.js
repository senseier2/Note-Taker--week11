//importing fs to make changes to the file system
const fs = require('fs');

//importing path 
const path = require('path');

//function to create notes and write them to the file
function noteCreateNew(content, notesArray) {
    const note = content;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({
            notes: notesArray
        }, null, 2)
    )
    return note;
}

module.exports = {
    noteCreateNew
};