var path = require('path')
, gutil = require('gulp-util')
, through = require('through2')
, chalk = require('chalk');

module.exports = function (head, tail) {
    head = head || '';
    tail = tail || '';

    return through.obj(function (file, enc, cb) {
        if (file.isStream()) {
            this.emit('error', new gutil.PluginError('gulp-debug', 'Streaming not supported'));
            return cb();
        }
        gutil.log(head, chalk.blue(file.path), tail);

        this.push(file);
        cb();
    }, function (cb) {
        cb();
    });
};

