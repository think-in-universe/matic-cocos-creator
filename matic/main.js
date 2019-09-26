'use strict';

const fse = require('fs-extra');
const Path = require("path");
const { shell } = require('electron')

module.exports = {
    messages: {
        'install': function() {
            const getProjectPath = function() {
                if (Editor.Project && Editor.Project.path) {
                    return Editor.Project.path;
                }
                return Editor.projectInfo.path
            }
            const srcFolder = Path.join(__dirname, 'plugin');
            const destFolder = Path.join(getProjectPath(), 'assets');
            fse.copySync(srcFolder, destFolder);
            Editor.log('Matic plugin has been installed to assets');
        },
        "help": function() {
            shell.openExternal('https://github.com/think-in-universe/matic-cocos-creator/blob/master/README.md');
        }
    },
};

