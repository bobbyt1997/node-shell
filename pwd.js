function pwd() {
    console.log(__dirname);
    process.stdout.write("\nprompt > ");
}

module.exports = pwd;

