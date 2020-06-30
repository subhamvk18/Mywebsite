let card = [{
        text: "Ecommerce Website Using Django,React,Bootstrap4,Java Script and Ajax",
        href: "Images/pro1.png",
        link: "https://github.com/subhamvk18/ecommerce.git",
    },
    {
        text: "Articales Hub Website Using Django,Java Script,Bootstrap4",
        href: "Images/pro2.png",
        link: "https://github.com/subhamvk18/ecommerce.git",
    },
];

let imageurl = card[0].href;


$(".proimg").attr("src", imageurl);
$(".proh").text(card[0].text)
$(".prolink").attr('href', card[0].link)

function rightslide() {
    let src = $(".proimg").attr("src");
    let j = 0;

    for (let i = 0; i < card.length; i++) {


        if (card[i].href == src) {
            j = i + 1;
            break;
        }
    }
    if (j == card.length) {
        j = 0;
    }

    imageurl = card[j].href;


    $(".proimg").attr("src", imageurl);
    $(".proh").text(card[j].text)
    $(".prolink").attr('href', card[j].link)
}

function leftslide() {
    let src = $(".proimg").attr("src");

    let j = 0;

    for (let i = 0; i < card.length; i++) {


        if (card[0].href == src) {
            j = i - 1;
            break;
        }
    }
    if (j == -1) {
        j = card.length - 1;
    }
    imageurl = card[j].href;


    $(".proimg").attr("src", imageurl);
    $(".proh").text(card[j].text)
    $(".prolink").attr('href', card[j].link)
}
