'use strict'

angular.module('spBlogger',['ui.router','spBlogger.posts','spBlogger.controllers','spBlogger.directives','spBlogger.filters','spBlogger.services', 'spBlogger.admin']);

angular.module('spBlogger').value('version','V1.0');