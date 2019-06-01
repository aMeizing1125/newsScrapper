`<div class="article">
  <div class="imgArea">
    <div class="articleTitle">
      ${thisArticle.title}
    </div>
    <img class="articleImg" src=${thisArticle.img}>
  </div>
  <div class="commentsArea">
    <a class="articleLink" href=${thisArticle.link} target="_blank">Read Full Story</a>
    <button class="addComment" articleid=${thisArticle._id}>Add Comment</button>
    <div articleid=${thisArticle._id} class="commentDiv" style="display: none;">
      <form articleid=${thisArticle._id}>
        <input class="commentInput">
        <button class="submitComment">Submit</button>
      </form>
    </div>
  </div>
</div>`


// var article = $('<div>').addClass('article');
// var imgArea = $('<div>').addClass('imgArea');
// var commentsArea = $('<div>').addClass('commentsArea');
// var actualComments = $('<div>').addClass('actualComments').text(thisArticle.)
// var title = $('<div>')
//   .addClass('articleTitle')
//   .text(thisArticle.title);
// var img = $('<img>')
//   .addClass('articleImg')
//   .attr("src", thisArticle.img);
// var link = $('<a>')
//   .addClass('articleLink')
//   .text("Read Full Story")
//   .attr("href", thisArticle.link)
//   .attr("target", "_blank"); 
// var button = $('<button>')
//   .addClass('addComment')
//   .attr("articleID", thisArticle._id)
//   .text("Add Comment");

// // Comment Div
// var commentDiv = $('<div>')
//   .attr("articleID", thisArticle._id)
//   .addClass("commentDiv");
// var commentForm = $('<form>')
//   .attr("articleID", thisArticle._id);
// var commentInput = $('<input>')
//   .addClass('commentInput');
// var submitButton = $('<button>')
//   .addClass("submitComment")
//   .text("Submit");