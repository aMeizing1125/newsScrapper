// console.log("script link");


$.getJSON("/api/all", function (data) {
  console.log(data);
  renderData(data);
})

function renderData(articles) {
  // console.log(articles)
  articles.forEach(function (thisArticle) {
    var article = $('<div>').addClass('article');
    var imgArea = $('<div>').addClass('imgArea');
    var commentsArea = $('<div>').addClass('commentsArea');
    var title = $('<div>')
      .addClass('articleTitle')
      .text(thisArticle.title);
    var img = $('<img>')
      .addClass('articleImg')
      .attr("src", thisArticle.img);
    var link = $('<a>')
      .addClass('articleLink')
      .text("Read Full Story")
      .attr("href", thisArticle.link);
    // .attr("_target"); //if you want it to open external instead of within the page. 
    var button = $('<button>')
      .addClass('addComment')
      .attr("articleID", thisArticle._id)
      .text("Comment");

    // Comment Div
    var commentDiv = $('<div>')
      .attr("articleID", thisArticle._id)
      .addClass("commentDiv");
    var commentForm = $('<form>')
      .attr("articleID", thisArticle._id);
    var commentInput = $('<input>')
      .addClass('commentInput');
    var submitButton = $('<button>')
      .addClass("submitComment")
      .text("Submit");

    commentForm.append(commentInput, submitButton);
    commentDiv.append(commentForm);
    commentDiv.hide();
    imgArea.append(title, img);
    commentsArea.append(link, button, commentDiv);
    article.append(imgArea,  commentsArea);    
    $('.articleArea').append(article);
  })
  renderForm();
}

function renderForm() {
  $('.addComment').on("click", function () {
    // console.log("button is a go")
    //create a text enter area
    //show() that to the articleArea
    var thisCommentDiv = $(this).siblings(".commentDiv");
    thisCommentDiv.show();
    addComment();
  })

}

function addComment() {
  $('.submitComment').on("click", function (event) {
    event.preventDefault();
    // comment text
    var submission = $(this).siblings(".commentInput").val().trim();
    var thisArticle = $(this).parent().attr("articleID");
    console.log(submission, thisArticle);
    //$.post //sends to the backend
    //update 
    //establish a relationship between the article and comments one article to many comments

  })
}