

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
    //returning note
    return note;
}

//function to delete notes from saved notes: information found here - https://medium.com/@nnamani.ezinne/simple-note-taking-app-using-node-js-and-ejs-4899321a3342
function noteDelete(notesArray, id) {
    let deleteID = parseInt(id);
    notesArray.splice(deleteID, 1);

    //This loop resets the indexes for notes remaining
    for (let i = deleteID; i < notesArray.length; i++) {
        notesArray[i].id = i.toString();
    }

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({
            notes:notesArray
        }, null, 2)
    )
}

module.exports = {
    noteCreateNew,
    noteDelete
};