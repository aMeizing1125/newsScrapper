// console.log("script link");

function displayAll() {
  $.getJSON("/api/all", function (data) {
    // console.log(data);
    renderData(data);
  })
}
 
displayAll();

function renderData(articles) {
  // console.log(articles)
  $('.articleArea').empty();
  var html = "";
  articles.forEach(function (thisArticle) {
    html += `<div class="article">
    <div class="imgArea">
      <div class="articleTitle">
        ${thisArticle.title}
      </div>
      <img class="articleImg" src=${thisArticle.img}>
    </div>
    <div class="commentsArea">
      <a class="articleLink myButton" href=${thisArticle.link} target="_blank">Read Full Story</a>`

    thisArticle.comments.forEach((comment) => {
      html += `<div class="thisComment">${comment.body}</div>`
    })

    html += `<button class="addComment" articleid=${thisArticle._id}>Add Comment</button>
      <div articleid=${thisArticle._id} class="commentDiv" style="display: none;">
        <form articleid=${thisArticle._id}>
          <input class="commentInput">
          <button class="submitComment">Submit</button>
        </form>
      </div>
    </div>
  </div>`
  })
  $('.articleArea').append(html)
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
    $.post(`/api/comments/${thisArticle}`, { body: submission })
      .then(
        function (data) {
          // console.log(data);
          displayAll()
        }
      )
    //update 
    //establish a relationship between the article and comments one article to many comments
    //update comments model to include id and string
  })
}
