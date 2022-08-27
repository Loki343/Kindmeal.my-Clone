function navbar(){
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
        <p id="login"><a href="">Login</a></p>
        <button id="facebook"><a href="">Facebook</a></button>
        <button id="email"><a href="">Email</a></button>
        <p id="signup"><a href="">Sign Up</a></p>
    </div>
</div>`;
}
function navbar1(){
    return `<div id="navbar2">
    <a href="index.html"><p>Home</p></a>
    <a href="meal deals.html"><p>Meal Deals</p></a>
    <a href=""><p>KindMoments</p></a>
    <a href=""><p>Hot Picks</p></a>
    <a href=""><p>Recipies</p></a>
    <a href=""><p>Directory</p></a>
    <a href="articles.html"><p>Articles</p></a>
    <a href=""><p>Help</p></a>
</div>`;
}

export {navbar,navbar1}