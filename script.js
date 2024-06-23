document.addEventListener("DOMContentLoaded", function() {
    if(document.readyState === "complete" || document.readyState === "interactive") {
        var tl = gsap.timeline()
        function MainPageAnim() {
            
            tl.from(".left-nav svg", {
                scale: 0,
                opacity: 0,
                duration: 1.2,
                delay: .5
            },'a')

            tl.from(".right-nav-A-tags", {
                y: 15,
                opacity: 0,
                duration: 1,
                delay: .5,
                stagger: .15
            }, 'a')

            document.querySelectorAll(".right-nav-A-tags")
            .forEach(function(e) {
                e.addEventListener("mouseenter", function() {
                    gsap.to(e.childNodes[0], {
                        y: -20,
                        duration: .3
                    })
                    gsap.to(e.childNodes[1], {
                        marginTop: "-20px",
                        duration: .3
                    })
                })
                e.addEventListener("mouseleave", function() {
                    gsap.to(e.childNodes[0], {
                        y: 0,
                        duration: .3
                    })
                    gsap.to(e.childNodes[1], {
                        marginTop: "0",
                        duration: .3
                    })
                })
            })



            var clutter = ""
            document.querySelector(".Hero-text-anim1")
            .textContent.split("")
            .forEach(function(e) {
                if(e === "") clutter += `<span>&nbsp;</span>`
                clutter += `<span>${e}</span>`
            })
            document.querySelector(".Hero-text-anim1").innerHTML = clutter

            gsap.set(".Hero-text-anim1 span", {opacity: 0, y: 10})
            gsap.to(".Hero-text-anim1 span", {
                opacity: 1,
                y: 0,
                stagger: .1,
                duration: .6,
                ease: "power4"
            })


            var clutter1 = ""
            document.querySelector(".Hero-text-anim2")
            .textContent.split("")
            .forEach(function(e) {
                if(e === "") clutter1 += `<span>&nbsp;</span>`
                clutter1 += `<span>${e}</span>`
            })
            document.querySelector(".Hero-text-anim2").innerHTML = clutter1

            gsap.set(".Hero-text-anim2 span", {opacity: 0, y: 10})
            gsap.to(".Hero-text-anim2 span", {
                opacity: 1,
                y: 0,
                stagger: .08,
                duration: .6,
                ease: "power4",
                delay: 1.5
            })
        }

        function NavbarAnim() {
            var nav = document.querySelector(".nav")


            gsap.to(nav, {
                y: -20,
                duration: 1,
                delay: 1,
                opacity: 0,
                scrollTrigger: {
                    trigger: nav,
                    scroller: "body",
                    start: "top -2%",
                    end: "top 10%",
                    scrub: 1.2,
                    ease: "power4"
                }
            })
        }

        function CursorFollower() {
            var Follower = document.querySelector(".cursor-follower")
            var mainPage = document.querySelector(".main")

            mainPage.addEventListener("mouseenter", function() {
                gsap.to(Follower, {
                    scale: 1,
                    opacity: 1,
                    duration: .8
                })
            })

            mainPage.addEventListener("mouseleave", function() {
                gsap.to(Follower, {
                    scale: 0,
                    opacity: 0,
                    duration: .8
                })
            })

            mainPage.addEventListener("mousemove", function(dets) {
                gsap.to(Follower, {
                    x: dets.clientX -12,
                    y: dets.clientY + 10,
                    duration: .3      
                })
            })

        }

        function ImageDivDoWhatFollow() {
            var ImgDiv = document.querySelectorAll(".do-what-img-absolute")
            var DoWhatDiv = document.querySelectorAll(".do-what-div1")

            DoWhatDiv.forEach(function(DWD) {
                ImgDiv.forEach(function(IMGD) {
                    DWD.addEventListener("mouseenter", function() {
                        if(DWD.id === IMGD.id) {
                            gsap.to(IMGD, {
                                scale: 1,
                                opacity: 1,
                                duration: .5        
                            })

                            gsap.to(DWD, {
                                borderTop: "2px solid #111",
                                duration: .5
                            })
                        }
                    })

                    DWD.addEventListener("mouseleave", function() {
                            gsap.to(IMGD, {
                                scale: 0,
                                opacity: 0,
                                duration: .5        
                            })

                            gsap.to(DWD, {
                                borderTop: "2px solid #dadada",
                                duration: .5
                            })
                    })

                    DWD.addEventListener("mousemove", function(dets) {
                        if(DWD.id === IMGD.id) {
                            gsap.to(IMGD, {
                                x:  gsap.utils.mapRange(0, window.innerWidth, -400, 300, dets.clientX),
                                
                            })
                        }
                    })
                })
            })

        }

        function ProductSectionAnim() {
            var ProductImgDiv = document.querySelectorAll(".img-div")
            var ProductName = document.querySelectorAll(".product-name")
            ProductName.forEach(function(PN) {
                PN.addEventListener("mouseenter", function(e) {
                    ProductImgDiv.forEach(function(PI) {
                        gsap.to(PI, {
                            scale: 0,
                            opacity: 0,
                            duration: .15
                        })

                        if(PN.id === PI.id) {
                            gsap.to(PI, {
                                scale: 1,
                                opacity: 1,
                                duration: .3
                            })
                            gsap.to(PN.childNodes[1], {
                                width: "100%",
                                duration: .3
                            })
                        } else {

                        }
                    })
                })

                PN.addEventListener("mouseleave", function() {
                    ProductImgDiv.forEach(function(e) {
                        gsap.to(PN.childNodes[1], {
                            width: "0%",
                            duration: .3
                        })
                    })
                })
            })


                gsap.from(ProductName, {
                    y: 20,
                    opacity: 0,
                    duration: 1,
                    stagger: .2,
                    scrollTrigger: {
                        trigger: ".product-section-right",
                        scroller: "body",
                        // markers: true,
                        start: "top 50%"
                    }
                })

        }

        function DoWhatYouCantPageAnim() {
            var DoWhatText = document.querySelector(".do-what-text h1")
            var H1BorderBtm = document.querySelector(".border-do-what-text")
            var LearnMoreP = document.querySelectorAll(".learn-more p")
            var LearnMoreBorder = document.querySelectorAll(".learn-more span")

            DoWhatText.addEventListener("mouseenter", function() {
                gsap.to(DoWhatText, {
                    color: "#333",
                    duration: .3
                })

                gsap.to(H1BorderBtm, {
                    width: "34.5%",
                    duration: .3
                })
            })

            DoWhatText.addEventListener("mouseleave", function() {
                gsap.to(DoWhatText, {
                    color: "#000",
                    duration: .3
                })

                gsap.to(H1BorderBtm, {
                    width: "0%",
                    duration: .3
                })
            })


            LearnMoreP.forEach(function(LMP) {
                LearnMoreBorder.forEach(function(LMB) {
                    LMP.addEventListener("mouseenter", function() {
                        if(LMP.id === LMB.id) {
                            gsap.to(LMP, {
                                color: "#333",
                                duration: .3
                            })
                    
                            gsap.to(LMB, {
                                width: "66%",
                                duration: .3
                            })

                        }
                    })
                    LMP.addEventListener("mouseleave", function() {
                        gsap.to(LMP, {
                            color: "#000",
                            duration: .3
                        })
                
                        gsap.to(LMB, {
                            width: "0%",
                            duration: .3
                        })
                    })
                })

            })

        } 


        function FeaturesSectionAnim() {
            var feature1div = document.querySelector(".feature-img1")
            var FeatureImg = document.querySelector(".feature-img1 img")
            var FeelTheCrisp = document.querySelector(".Feel-the-crisp")
            // console.log(FeatureImg.childNodes[1]);
            console.log("Reached");
            gsap.to(feature1div, {
                x: 0,
                duration: 1.5,
                scrollTrigger: {
                    scroller: "body",
                    trigger: ".wrapper",
                    pin: true,
                    markers: true,
                    start: "top top",
                    end: "bottom 65%",
                }
            })
            console.log("Done");

            feature1div.addEventListener("mouseenter", function() {
                gsap.to(FeelTheCrisp, {
                    opacity: 1,
                    scale: 1,
                    duration: .8
                })
                gsap.to(".feel-the-crisp-child-div", {
                    x: "-77%",
                    duration: 4.2,
                    repeat: -1,
                    ease: "none"
                })
            })
            feature1div.addEventListener("mouseleave", function() {
                gsap.to(FeelTheCrisp, {
                    opacity: 0,
                    scale: 0,
                    duration: .8
                })

                gsap.to(".feel-the-crisp-child-div", {
                    x: "0%",
                })
            })

            feature1div.addEventListener("mousemove", function(dets) {
                // console.log(dets);
                gsap.to(FeelTheCrisp, {
                    x: dets.clientX - 120,
                    y: dets.clientY + 20,
                    duration: .1
                })
            })

        }

        function ToogleMenuBar() {
            var SubstituteNavBar = document.querySelector(".nav-substitute")
            var Itag = document.querySelector(".ri-menu-line")

            Itag.addEventListener("click", function(e) {
                if(Itag.classList.contains('ri-menu-line')) {
                    e.preventDefault()
                    Itag.classList.remove('ri-menu-line')
                    Itag.classList.add('ri-close-line')
                    gsap.to(SubstituteNavBar, {
                        height: "40vh",
                        paddingTop: "50px",
                        duration: 1
                    })
                } else {
                        e.preventDefault()
                        Itag.classList.remove('ri-close-line')
                        Itag.classList.add('ri-menu-line')
                        gsap.to(SubstituteNavBar, {
                            height: "0",
                            paddingTop: "0",
                            duration: 1
                        })
                    }
            })

        }

        function handleMobileView() {
            var ProductImgDiv = document.querySelectorAll(".img-div")
            var ProductName = document.querySelectorAll(".product-name")

            if (window.innerWidth < 2000) {

                ProductName.forEach(function(PN) {
                    PN.addEventListener("click", function() {
                        ProductImgDiv.forEach(function(PI) {
                            if(PN.id === PI.id) {
                                gsap.to(PI, {
                                    scale: 1,
                                    opacity: 1,
                                    duration: .3
                                })
                                gsap.to(PN.childNodes[1], {
                                    width: "100%",
                                    duration: .3
                                })
                            }

                        })
                    })
                })

            } else {
            }
        }
        window.addEventListener('resize', handleMobileView);

        function DOMContentLoaded() {
            var ProductName = document.querySelectorAll(".product-name")
            
            ProductName.forEach(function(PN) {
                if(PN.id === "0") {
                    PN.click()
                } else {
        
                }
            })
        }


        function OnScrollFade() {
            var HeroText = document.querySelectorAll(".Opacity-Script")

            var ProductSection = document.querySelector(".Product-section")
            var DoWhatYouCant = document.querySelector(".do-what-you-cant-section")
            
            gsap.to(HeroText, {
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: HeroText,
                    scrub: 1,
                    scroller: "body",
                    // markers: true,
                    start: "top 0%",
                    end: "top -25%"
                }
            })
        }


        function AfterLoadAnimation() {
            var Loading = document.querySelector(".loading")
            var MainPage = document.querySelector(".main")
            var ProductSection = document.querySelector(".Product-section")
            var DoWhatYouCant = document.querySelector(".do-what-you-cant-section")
            var FeaturesSection = document.querySelector(".features-section")

            setTimeout(function() {
                gsap.to("body", {
                    height: "730vh",
                    duration: 0,
                    ease: "none"
                })
                gsap.to(".main", {
                    display: "flex",
                    duration: .2
                })


                gsap.to(ProductSection, {
                    display: "flex",
                    duration: .2
                })

                gsap.to(DoWhatYouCant, {
                    display: "flex",
                    duration: .2
                })
                gsap.to(FeaturesSection, {
                    display: "flex",
                    duration: .2
                })
            }, 5300);
            
            setTimeout(function() {
                gsap.to(Loading, {
                    opacity: 0,
                    scale: 0,
                    duration: .3
                })
            }, 5000)
        }

        setTimeout(function() {
            MainPageAnim()
            CursorFollower()
            NavbarAnim()
        }, 5300)

        ProductSectionAnim()
        DoWhatYouCantPageAnim()
        ImageDivDoWhatFollow()
        FeaturesSectionAnim()
        ToogleMenuBar()
        handleMobileView();
        DOMContentLoaded()
        OnScrollFade()
        AfterLoadAnimation()
    } else {
        var loading = document.querySelector(".loading")
        var Sams = document.querySelector(".Sams")

        gsap.from(loading, {
            opacity: 0,
            scale: 0,
            duration: .5,
        })

        
    }
})

