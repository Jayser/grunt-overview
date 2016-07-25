var path = require('path');
var root = path.resolve(__dirname, '../');
module.exports = {
    paths: {
        root: root,
        app: path.resolve(root, 'app'),
        builds: path.resolve(root, 'builds'),
        baseSass: path.resolve(root, 'assets/sass'),
        baseStyles: path.resolve(root, 'assets/css')
    },
    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>; Licensed <%= pkg.license %> */\n'
};