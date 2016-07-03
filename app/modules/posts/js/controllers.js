'use strict'

angular.module('spBlogger.posts.controllers',[])
	.controller('PostController', ['$scope', 'postService', 
		function($scope, postService){
			$scope.getAllPosts = function(){
				return postService.getAll();
			};
			$scope.posts = $scope.getAllPosts();
		}])
	.controller('PostDetailsController', ['$stateParams', '$state', '$scope', 'postService', 
		function($stateParams, $state, $scope, postService){
			$scope.getPostById = function(id){
				return postService.getPostById(id);
			};
			$scope.closePost = function(){
				$state.go('allPosts');
			};
			//console.log(postService.getPostById($stateParams.id));
			$scope.singlePost = $scope.getPostById($stateParams.id);
		}])