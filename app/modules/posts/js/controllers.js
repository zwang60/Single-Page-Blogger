'use strict'

angular.module('spBlogger.posts.controllers',[])
	.controller('PostController', ['$scope', 'Post', 
			$scope.posts = Post.query(); //Obtain all the posts
		])
	.controller('PostDetailsController', ['$stateParams', '$state', '$scope', 'Post', 
		function($stateParams, $state, $scope, Post){
			$scope.closePost = function(){
				$state.go('allPosts');
			};
			//console.log(postService.getPostById($stateParams.id));
			$scope.singlePost = Post.get({id: $stateParams.id}); //Obtain a single post
		}])