'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

// describe('my app', function() {

//   browser.get('test.html');

//   function setInput(val) {
//     // set the value of the element and force validation.
//     var script = "var inputs = document.querySelectorAll('input'); " +
//       "angular.forEach(inputs,function(ipt){ipt.value = '" + val + "';});"
//     browser.executeScript(script);
//   }

//   it('should calculate result as 1000', function() {
//     setInput('');

//     element(by.model('salary')).sendKeys(10000);

//     element(by.model('percentage')).sendKeys(10);

//     var result = element(by.binding('{{result()}}'));

//     expect(result.getText()).toEqual('1000');
//   });
// });

describe('The Single Page Blogger E2E Test', function(){
  browser.get('/app/index.html#/posts'); 

  protractor = protractor.getInstance();

  it('Should have 4 posts', function(){
    var posts = element.all(by.repeater('post in posts'));
    expect(posts.count()).toBe(4);
  });

  it('Should redirect to #/posts/1/simple-title1', function(){
    var posts = element.all(by.repeater('post in posts'));
    posts.first().then(function(postElem){
      postElem.findElement(by.tagName('a')).then(function(a){
        a.click(); //click the title link of 1st post
        expect(protractor.getCurrentUrl()).toMatch('http://localhost:8000/app/index.html#/posts/1/simple-title1');
      });
    })
  });
});