const fs = require('fs');
const ls = fs.readdir('./', 'utf8', (err, files) => {
    console.log(files);
    if (err) {
        console.log(err);
        throw err;
    } else {
        process.stdout.write(files.join('\n'));
        process.stdout.write("\nprompt > ");
    }
});

module.exports = ls;
