let navbar = ()=>{
    return ` <div class="logo">
    <img src="https://www.kindmeal.my/images/logo-kindmeal.png" alt="logo">
</div>
<div class="social-icon">
    <a href="https://www.kindmeal.my/widget.htm">
         <img src="https://www.kindmeal.my/images/follow_blog_grey.png" alt="">
    </a>
    <a href="https://www.facebook.com/KindMeal.my">
        <img src="https://www.kindmeal.my/images/follow_facebook_grey.png" alt="">
    </a>
    <a href="https://twitter.com/KindMeal">
        <img src="https://www.kindmeal.my/images/follow_twitter_grey.png" alt="">
    </a>
</div>

<label>Login</label>
<button class="btn" id="btn-blue">Facebook</button>
<button class="btn" id="btn-gray">Email</button> 
<div class="vl"></div>
<div class="signup">Sign Up</div>`
}

let menubar = ()=>{
    return ` <div class="pages">
    <p>Home</p>
    <p>Meal Deals</p>
    <p>KindMoments</p>
    <p>Hot Picks</p>
    <p>Recipes</p>
    <p>Directory</p>
    <p>Articles</p>
    <p>Help</p>
</div>`
}

export {navbar,menubar}