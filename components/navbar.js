function navbar() {
  return `<div id="navbar1">
    <a href=""><img id="logo"
            src="https://www.kindmeal.my/images/logo-kindmeal.png" alt=""></a>
    <div>
        <a href=""><img class="eachlink" src="https://www.kindmeal.my/images/follow_blog_grey.png" alt=""></a>
        <a href=""><img class="eachlink" src="https://www.kindmeal.my/images/follow_facebook_grey.png"
                alt=""></a>
        <a href=""><img class="eachlink" src="https://www.kindmeal.my/images/follow_twitter_grey.png"
                alt=""></a>
    </div>
    <div id="loginsignup">
    <label for="show"><a href="login.html" id="kau_login">Login</a></label>
        <button id="facebook"><a href="">Facebook</a></button>
        <button id="email"><a href="">Email</a></button>
        <label for="show"><a href="main.html" id="kau_signup">Sign up</a></label>
    </div>
</div>`;
}
function navbar1() {
  return `<div id="navbar2">
  <p><a href="index.html">Home</a></p>
  <p><a href="meal deals.html">Meal Deals</a></p>
  <p><a href="">KindMoments</a></p>
  <p><a href="">Hot Picks</a></p>
  <p><a href="recipe.html">Recipies</a></p>
  <p><a href="directory.html">Directory</a></p>
  <p><a href="articles.html">Articles</a></p>
  <p><a href="general_page.html">Help</a></p>
</div>`;
}

export { navbar, navbar1 };
