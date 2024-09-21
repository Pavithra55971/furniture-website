nav .content .links{
    margin-left; 80;
    display: flex;
}

nav .content .links {
    list-style;none;
    line-height; 70;
}

content .links  ,
content .link {
    color: black;
    font-size; 30;
    padding: 9, 17;
    font-weight; bold;
    border-radius;5;
    transition:  0.3s ease;

}
content .links{
    display: none;
}
content .links  a:hover,
content .links li label:hover{
   
}
header .search-icon,
header .menu-icon{
    
    font-size; 20;
    line-height; 70;
    width: 70;
    text-align;center;
    cursor: pointer;
}
header .menu-icon{
    display: none;
}
 #show-search;checked .search-icon {
    content:"\f00d";
}
header .search-box{
    position: absolute;
    height: 100%
    max-width; calc(100% - 100);
    width: 100%
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease;
}
.header #show-search:checked ~ .search-box{
    opacity: 1;
    pointer-events: auto;
}
.search-box input{
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    font-size: 17px;
    color: black;
    background: white;
    padding: 0 100px 0 15px;
}
.search-box input::placeholder{
    color: black;
}
.search-box .go-icon{
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    line-height: 60px;
    width: 70px;
    background: transparent;
    border: none;
    outline: none;
    color: #388b6f;
    font-size: 17px;
    cursor: pointer;
}
.header input[type="checkbox"]{
    display: none;
}
@media screen and (max-width:1250px){
    .header nav{
        max-width: 100%;
        padding: 0px 20px;
    }
    nav.content .links{
        margin-left: 30px;
    }
    .content .links a{
        padding: 8px 13px;
    }
    .header .search-box{
        max-width: calc(100%-100px);
    }
    .header .search-box input{
        padding: 0px 100px 0px 15px;
    }
}
@media screen and (max-width:900px){
    .header .menu.icon{
        display: block;
    }
    .header #show.menu:checked ~ .menu-icon i::before{
        content: "\f00d";
    }
    nav .content .links{
        display: block;
        position: fixed;
        background: white;
        height: 100%;
        width: 100%;
        top: 70px;
        left: -100%;
        margin-left: 0;
        max-width: 350px;
        overflow: auto;
        padding-bottom: 100px;
        transition: all 0.3s ease;
    }
    nav #show-menu:checked ~ .content .links{
        left: 0;
    }
    .content .links li{
        margin: 15px 20px;
    }
    .content .links li a,
    .content .links li label{
        line-height: 40px;
        font-size: 20px;
        display: block;
        padding: 8px 18px;
        cursor: pointer;
    }
    .content .links li a.desktop-link{
        display: none;
    }
}








.home{
    width: 100%;
    height: 100vh;
    background-image:  url(image\ copy.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
}
.home .main-text{
    text-align: center;
    padding: 150px 10% 10px;
}
.main-text h1{
    font-size: 60px;
    color: #fff;
    text-shadow: 0px 0px 1px black;
}
.home .main-text p{
    color: white;
    margin-top: 3px;
}
#btn{
    width: 200px;
    height: 36px;
    font-weight: bold;
    background: white;
    color: #388b6f;
    letter-spacing: 1px;
    border: 2px solid #388b6f;
    border-radius: 5px;
    margin-top: 10px;
    transition: 0.5s;
    cursor: pointer;
}
#btn:hover{
    background-color: #388b6f;
    color: white;
}








.offers{
    padding: 10px 8% 20px;
    background: #f3f3f3;
}
.offer-content{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, auto));
    align-items: center;
    gap: 0.90rem;
    margin-top: 30px;
}
.offer-content .row{
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    cursor: pointer;
}
.offer-content .row i{
    font-size: 50px;
    color: #388b6f;
}
.offer-content .row h3{
    margin-left: 5px;
}
.offer-content .row p{
    margin-left: 5px;
}
@media (max-width:920px){
    .offer-content{
        grid-template-columns: 1fr;
    }
}









.about{
    padding: 150px 8% 120px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 1.5rem;
}
.about-img img{
    max-width: 540px;
    height: 300px;
    border-radius: 10px;
    box-shadow: 0px 2px 8px 0px;
}
.about-text h3{
    color: #388b6f;
    font-size: 50px;
    line-height: 1;
}
.about-text p{
    color: black;
    letter-spacing: 1px;
    margin-bottom: 4rem;
    margin-top: 10px;
}
#about-btn{
    width: 150px;
    height: 35px;
    background: white;
    border: 2px solid #388b6f;
    color: #388b6f;
    font-weight: bold;
    border-radius: 5px;
    transition: 0.5rem;
    cursor: pointer;
}
#about-btn:hover{
    background: #388b6f;
    color: white;
}
@media(max-width:920px){
    .about{
        grid-template-columns: 1fr;
    }
    .about-img{
        text-align: center;
        order: 2;
    }
    .about-img img{
        width: 100%;
        height: auto;
        max-width: 100px;
    }
}







.product{
    padding: 10px 10% 120px;
}
.main-txt{
    text-align: center;
}
.main-txt h5{
    font-size: 100px;
    text-transform: uppercase;
    font-weight: 600;
    color: #388b6f;
    text-shadow: 0px 1px 1px black;
}
.card-content{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, auto));
    align-items: center;
    gap: 0.90rem;
    margin-top: 30px;
}
.card-content .row{
    background: #f3f3f3;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
    cursor: pointer;
}
.row img{
    width: 100%;
    display: block;
}
.card-body{
    padding: 10px;
}
.card-body h3{
    margin-top: 10px;
    font-size: 30px;
    font-weight: 550;
    color: #388b6f;
    text-shadow: 0px 1px 1px black;
}
.card-body p{
    font-weight: 500;
    margin-top: 5px;
    letter-spacing: 1px;
}
.card-body h5{
    margin-top: 5px;
    font-size: 18px;
}
.card-body button{
    width: 130px;
    height: 30px;
    font-weight: 550;
    margin-top: 5px;
    background: transparent;
    color: #388b6f;
    border-radius: 5px;
    border: 2px solid #388b6f;
    transition: 0.5s;
    cursor: pointer;
}
.card-body button:hover{
    background: #388b6f;
    color: white;
}
@media (max-width:920px){
    .card-content{
        grid-template-columns: 1fr;
    }
}






.banner{
    width: 100%;
    height: 60vh;
    background-image: url(images\ \(2\).jpg);
    background-repeat: no-repeat;
    background-size: cover;
}
.banner-content{
    text-align: center;
    padding: 150px 10% 10px;
}
.banner-content h5{
    color: white;
    font-size: 18px;
    letter-spacing: 2px;
    font-weight: 500;
    text-shadow: 0px 1px 1px black;
}
.banner-content h3{
    color: #f3f3f3;
    font-size: 38px;
    letter-spacing: 2px;
    font-weight: bold;
    text-shadow: 0px 1px 1px black;
}
.banner-content p{
    color: white;
    font-size: 16px;
    margin-top: 5px;
    letter-spacing: 2px;
    font-weight: 500;
    text-shadow: 0px 1px 1px black;
}
.banner-content button a{
    text-decoration: none;
    color: white;
    font-weight: bold;
}
.banner-content button{
    width: 160px;
    height: 36px;
    margin-top: 10px;
    background: transparent;
    border: 2px solid white;
    transition: 0.5s;
    cursor: pointer;
}
.banner-content button:hover{
    background: #388b6f;
    border: none;
}
.gallary{
    padding: 0px 8% 120px;
}
.gallary h3{
    text-align: center;
    font-size: 36px;
    text-transform: uppercase;
    font-weight: 600;
    color: #388b6f;
    text-shadow: 0px 1px 1px black;
}
.gallary-img{
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
}
.gallary-img img{
    max-width: 530px;
    height: auto;
    width: 100%;
    border-radius: 10px;
    box-shadow: rgba(99, 99, 99, 0.2)0px 8px 0px;
    transition: 0.5s;
    cursor: pointer;
}
.gallary-img img:hover{
    transform: translateY(-10px);
}
@media(max-width:920px){
    .gallary-img{
        grid-template-columns: 1fr;
    }.gallary-img img{
        width: 100%;
        height: auto;
        max-width: 100%;
    }
}








.contact{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    gap: 2.5rem;
    padding: 100px 8% 120px;
    background: #f3f3f3;
}
.contact-text{
    margin-bottom: 10px;
}
.contact-text h2{
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 10px;
}
.content-text h2 span{
    color: #388b6f;
}
.content-text p{
    font-weight: bold;
}
.list{
    margin-top: 16px;
}
.list li{
    margin-bottom: 12px;
}
.list li a{
    display: block;
    color: #388b6f;
    font-weight: bold;
    font-size: 15px;
    transition: 0.3s ease;
}
.contact-form form{
    position: relative;
}
.contact-form form input,
form textarea{
    width: 100%;
    padding: 10px;
    background: white;
    color: black;
    border: none;
    outline: none;
    font-size: 15px;
    border-radius: 5px;
    margin-bottom: 10px;
}
.contact-form textarea{
    resize: none;
    height: 160px;
}
.contact-form .submit{
    display: inline-block;
    font-size: 15px;
    background: #388b6f;
    color: white;
    width: 160px;
    transition: 0.5s ease;
    cursor: pointer;
}
.contact-form .submit:hover{
    width: 175px;
}
@media (max-width:920px){
    .contact{
        grid-template-columns: 1fr;
        max-width: 100%;
    }
}
.review{
    padding: 10px 10% 120px;
    background: white;
}
.review-content{
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(250px, auto));
    align-items: center;
    gap: 2.5rem;
    margin-top: 5rem;
}
.box{
    background: #f3f3f3;
    padding: 35px 45px;
    height: 50vh;
    border-radius: 8px;
    transition: 0.5s ease;
    text-align: center;
}
.img img{
    width: 100px;
    border-radius: 100px;
}
.review .star i{
    color: rgba(225, 159, 21);
    margin-top: 10px;
}
@media (max-width:920px){
    .review-content{
        grid-template-columns: 1fr;
    }
}







#footer{
    width: 100%;
    background: #f3f3f3;
}
.footer-content{
    text-align: center;
    padding-top: 5%;
}
.footer-content .logo img{
    width: 200px;
}
.fotter-content p{
    font-weight: 550;
    letter-spacing: 1px;
}
.social-links i{
    margin-top: 20px;
    padding: 10px;
    border-radius: 5px;
    font-size: 20px;
    background: black;
    color: white;
    margin-left: 10px;
    margin-bottom: 10px;
    transition: 0.5s ease;
    cursor: pointer;
}
.social-links i:hover{
    background: #388b6f;
}
.footer-bottom-content{
    text-align: center;
    margin-top: 10px;
}
.footer-bottom-content p{
    font-size: 17px;
    font-weight: 550;
}
.footer-bottom-content p a{
    color: #388b6f;
    font-weight: 600;
}







   



    
     