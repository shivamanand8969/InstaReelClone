// alert("hellow");
// bittu_bak_bak_new_cartoon._____________funny_jokes(360p)
// Cute🎂🎂(720p)
// Easy_☺️
// NIT_Trichy%E2%9D%A3%EF%B8%8F___No_1_Nit_college__in_India(240p)
// sindoor_ceremony_❤️_#bride_#bridalmakeup_#wedding_#sindoor_#shorts(360p)
// Story_Of_Husband_Vs_wife_funny_%23comedy(360p)
// TUM_TUM_DANCE_VIDEO_#shorts(360p)

























let videolist=[
    {
        "vd":"video1.mp4",
        "name":"bharti",
        "text":"bittu_bak_bak_most_funny"
    },
    {
        "vd":"video2.mp4",
        "name":"sham",
        "text":"Cute🎂🎂(720p)"
    },
    {
        "vd":"video3.mp4",
        "name":"Shivam_edit",
        "text":"Easy_☺️",
    },
    {
        "vd":"video4.mp4",
        "name":"Radhika_IIT",
        "text":"NIT_Trichy%E2"
    },
    {
        "vd":"video5.mp4",
        "name":"_creator..",
        "text":"sindoor_ceremony_❤️<br>_#bride_"
    },
    {
        "vd":"video6.mp4",
        "name":"editor_raj..",
        "text":"Story_Of_Husband_V"
    },
    {
        "vd":"video7.mp4",
        "name":"DANCE_world",
        "text":"TUM_TUM_DANCE<br>_VIDEO_#shorts"
    },
    
]
    


let auto=document.getElementById("play");
let text=document.getElementById('about');
let name=document.getElementById("name");
let like=document.getElementById("img1");
let t=0;
let x=0;
function red(){
    like.src="dil.jpg";
    console.log("hellow")
}
function playvideo(){
    auto.src=videolist[x].vd;
    name.textContent=videolist[x].name;
    text.textContent=videolist[x].text;
    if(t==0){
        auto.play();
        t=1;
    }
    else{
        auto.pause();
        t=0;
    }
}
function down(){
     if(x<videolist.length){
        x++;
        t=0;
        playvideo();
        like.src="nonecolor.jfif";
     }
     else{
        x=0;
        t=0;
        playvideo();
        like.src="nonecolor.jfif";

     }
}
function up(){
    if(x==0){
        t=0;
        x=videolist.length;
        playvideo();
        like.src="nonecolor.jfif";
    }
    else{
        t=0;
       x--;
       playvideo();
       like.src="nonecolor.jfif";

    }
}