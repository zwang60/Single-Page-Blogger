'use strict';

/* jasmine specs for controllers go here */

// describe('controllers', function(){
//   beforeEach(module('myApp.controllers'));


//   it('should initialize controller with salary=10000, percentage=10 & calculated result=1000', inject(function($rootScope,$controller) {
// 	  var scope=$rootScope.$new();
// 	  $controller('FinanceController',{$scope:scope});
// 	  expect(scope.salary).toBe(10000);
// 	  expect(scope.percentage).toBe(10);
// 	  expect(scope.result()).toBe(1000);
//   }));
// });

describe('PostController Test\n', function(){
	beforeEach(module('spBlogger.posts.controllers'));
	beforeEach(module('spBlogger.posts.services'));

	it('Should initialize controller with 4 posts',
		inject(function($rootScope, $controller, postService){
			var $scope = $rootScope.$new();
			$controller('PostController', {$scope: $scope, postService: postService});
			expect($scope.posts.length).toBe(4);
	}));
});

describe('PostDetailsController Test\n', function(){
	beforeEach(module('spBlogger.posts.controllers'));
	beforeEach(module('ui.router'));
	beforeEach(module('spBlogger.posts.services'));

	it('Should initialize controller with 1 post',
		inject(function($state, $stateParams, $rootScope, $controller, postService){
			var $scope = $rootScope.$new();
			$stateParams.id = 2;
			$controller('PostDetailsController', {$scope: $scope, $stateParams: $stateParams, $state: $state, postService: postService});
			expect($scope.singlePost).not.toBe(undefined);
	}));
});

/* on port 9876/debug.html, it says:

SUCCESS PostController Test
 Should initialize controller with 4 posts
debug.html:28 SUCCESS PostDetailsController Test
 Should initialize controller with 1 post

 */