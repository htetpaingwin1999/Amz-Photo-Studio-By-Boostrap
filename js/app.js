// // UI
// // Start Navbar
// const navbuttons = document.querySelector('.navbuttons');
// // console.log(navbuttons);
// navbuttons.addEventListener('click', () => navbuttons.classList.toggle('changes'));

// // for Navbar
// const navbar = document.querySelector('.navbar');

// window.addEventListener('scroll',()=>{
//     const getScrolly = window.screenY;
//     //console.log(getScrolly);

//     if(getScrolly >= 200){
//         navbar.classList.add('navmenus');
//     }
//     else{
//         navbar.classList.remove('navmenus');
//     }
// })

// //End Navbar
// //Start Gallery Section

// const gallerylists = document.querySelectorAll('.gallerylists');
// const filternews = document.querySelectorAll('.filters.new');
// const filterfrees = document.querySelectorAll('.filters.free');
// const filterpros = document.querySelectorAll('.filters.pro');

// console.log(gallerylists);
// gallerylists.forEach((gallerylist)=>{
//     // console.log(gallerylist);
//     gallerylist.addEventListener('click',(e)=>{
//         let datafilter = gallerylist.getAttribute('data-filter');
//         // console.log(datafilter);
//         removeactiveitem();
//         e.target.classList.add('activeitems');
//         if(datafilter === "all"){
//             filternews.forEach(filternew=>{
//                 filternew.style.display = "inline-block";
//             })
//             filterfrees.forEach(filterfree=>{
//                 filterfree.style.display = "inline-block";
//             })
//             filterpros.forEach(filterpro=>{
//                 filterpro.style.display = "inline-block";
//             })            
//         }else if(datafilter === "new"){
//             // console.log("new");
//             filternews.forEach(filternew=>{
//                 filternew.style.display = "inline-block";
//             })
//             filterfrees.forEach(filterfree=>{
//                 filterfree.style.display = "none";
//             })
//             filterpros.forEach(filterpro=>{
//                 filterpro.style.display = "none";
//             })
//         }
//         else if(datafilter === "free"){
//             filternews.forEach(filternew=>{
//                 filternew.style.display = "none";
//             })
//             filterfrees.forEach(filterfree=>{
//                 filterfree.style.display = "inline-block";
//             })
//             filterpros.forEach(filterpro=>{
//                 filterpro.style.display = "none";
//             })
//         }else{
//             filternews.forEach(filternew=>{
//                 filternew.style.display = "none";
//             })
//             filterfrees.forEach(filterfree=>{
//                 filterfree.style.display = "none";
//             })
//             filterpros.forEach(filterpro=>{
//                 filterpro.style.display = "inline-block";
//             })
//         }
//     })
// });

// //remove current active item
// function removeactiveitem(){
//     gallerylists.forEach(gallerylist=>{
//         gallerylist.classList.remove('activeitems');
//     })
// }

// //End Gallery Section

// // Start Footer Section
// const showyear = document.getElementById('showyear');
// const getfullyear = new Date().getFullYear();
// showyear.textContent = getfullyear;
// // End Footer Section