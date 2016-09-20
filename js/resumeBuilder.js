var bio = {
    "name": "Akshay Dahiya",
    "role": "Developer",
    "contacts": {
        "mobile": "+919896968888",
        "email": "xa@typingeek.com",
        "github": "https://github.com/xadahiya",
        "location": "India"
    },
    "welcomeMessage": "Nice to Meet ya!",
    "skills": ["Python", "Web Developement", "UX Research", "Android"],
    "biopic": "http://typingeek.com/static/userProfile/2016-02-03-094949.jpg",
};

var education = {
    "schools": [{
        "name": "Deen Bandhu Choturam Institute of Science and Technology",
        "location": "Murthal 131027, Haryana, India ",
        "degree": "Bachelor of technology (In progress)",
        "majors": ['Electronics and Communication Engineering'],
        "dates": "2014-2018",
        "url": "http://dcrustm.ac.in"
    }, ],
    onlineCourses: [{
        "title": "6.00.1x: Introduction to Programming using python",
        "school": "Massachusetts Institute of Technology",
        "dates": "Jan 7, 2016 - March 11, 2015",
        "url": "https://courses.edx.org/courses/MITx/6.00.1x_5/1T2015/info"
    }, {
        "title": "6.00.2x: Introduction to Computational Thinking and Data Science (6.00.2x)",
        "school": "Massachusetts Institute of Technology",
        "dates": "March 22, 2015 - May 06, 2015",
        "url": "https://courses.edx.org/courses/course-v1:MITx+6.00.2x_3+1T2015/info"
    }, {
        "title": "LFS101x: Introduction to Linux",
        "school": "The Linux Foundation",
        "dates": "January 2015",
        "url": "https://courses.edx.org/courses/course-v1:LinuxFoundationX+LFS101x.2+1T2015/info"
    }, {
        "title": "Tech Entrepreneur Nanodegree",
        "school": "Udacity",
        "dates": "March 2016 - April 2016",
        "url": "http://www.udacity.com/tech-entrepreneur/"
    }, {
        "title": "Android Developer Nanodegree (In progress)",
        "school": "Udacity",
        "dates": "Started Aug 2016",
        "url": "https://www.udacity.com/course/android-developer-nanodegree-by-google--nd801"
    }, {
        "title": "Frontend Developer Nanodegree (In progress)",
        "school": "Udacity",
        "dates": "Started Spet 2016",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
    }],
};

var work = {
    "jobs": [{
        "employer": "Typingeek.com",
        "title": "Founder and CEO",
        "location": "Sonipat, India",
        "dates": "in progress",
        "description": "Typingeek is a online platform that makes learning typing more efficient and fun using social interactivity, realtime analysis and much more cool features."
    }],
};

var projects = {
    "projects": [{
        "title": "Typingeek",
        "dates": "Aug 15, 2015 (In progress)",
        "description": "A cool typing webapp using django",
        "images": ["http://typingeek.com/static/assets/home/img/feature-1.png",
            "http://typingeek.com/static/assets/home/img/feature-2.png",
            "http://typingeek.com/static/assets/home/img/feature-3.png",
            "http://typingeek.com/static/assets/home/img/feature-4.png"
        ]
    }, {
        "title": "Popular Movies App",
        "dates": "20 Aug, 2016 - 22 Aug, 2016",
        "description": "Android app to fetch Popular Movies data from openmoviedb.org",
        "images": ["https://cdn-images-1.medium.com/max/2000/1*ozltvalsh1GIV7mU1bDhIQ.png", ]
    }, {
        "title": "Sunshine App",
        "dates": "10 Aug, 2016 - 5 Sept, 2016",
        "description": "Sunshine is a weather app that shows weekly weather forecast for a given location. ",
        "images": ["https://lh3.googleusercontent.com/qH6D5C6AITJ4LRA0dlDyo1230YGblwj9vswipwQumS6UiGs61DO8IbMAjs54Hnr9CJeN=h900",
            "https://lh3.googleusercontent.com/H3n5Q8m-Bx3UT_TtnxUv9fBaC8TeEFWxJ19CapSyz8kHbtS6o7OoW8RAMo6BMW4Hw0g=h900"
        ]
    }],

};

//for bio section
bio.display = function() {

    var myHeaderName = HTMLheaderName.replace("%data%", bio.name);
    var myHeaderRole = HTMLheaderRole.replace("%data%", bio.role);

    var myMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var myEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var myGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var myLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    var myContacts = [myMobile, myEmail, myGithub, myLocation];

    function addContacts(item) {
        $("#topContacts, #footerContacts").append(item);
    }
    myContacts.forEach(addContacts);

    var myBioPic = HTMLbioPic.replace("%data%", bio.biopic);
    var myWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    var mySkills = [];

    function buildSkills(item) {
        var mySkill = HTMLskills.replace("%data%", item);
        mySkills.push(mySkill);
    }
    bio.skills.forEach(buildSkills);

    $("#header").prepend(myHeaderRole);
    $("#header").prepend(myHeaderName);

    $("#header").append(myBioPic);
    $("#header").append(myWelcomeMsg);
    $("#header").append(HTMLskillsStart);

    function addSkills(item) {
        $("#skills").append(item);
    }
    mySkills.forEach(addSkills);
};



//bio display()
bio.display();

//for work section
work.display = function() {
   
    var myWorkEmployer, myWorkTitle, myWorkDates, myWorkLocation, myWorkDescription;

    function addWork(item) {
        myWorkEmployer = HTMLworkEmployer.replace("%data%", item.employer);
        myWorkTitle = HTMLworkTitle.replace("%data%", item.title);
        myWorkDates = HTMLworkDates.replace("%data%", item.dates);
        myWorkLocation = HTMLworkLocation.replace("%data%", item.location);
        myWorkDescription = HTMLworkDescription.replace("%data%", item.description);

    //append data to experience section
        $("#workExperience:last").append(myWorkEmployer, myWorkTitle, myWorkDates, myWorkLocation, myWorkDescription);
    }

    if (work.jobs.length > 0) {
        $("#workExperience:last").append(HTMLworkStart);
        work.jobs.forEach(addWork);
    }
};

work.display();




//for projects
projects.display = function() {
    var myprojectTitle, myProjectDates, myProjectDescription, myProjectImages;

    function addProject(item) {
        myprojectTitle = HTMLprojectTitle.replace("%data%", item.title);
        myProjectDates = HTMLprojectDates.replace("%data%", item.dates);
        myProjectDescription = HTMLprojectDescription.replace("%data%", item.description);
        myProjectImages = [];
        // console.log(item.images);

    function appendImages(item1) {
        var imgsrc = HTMLprojectImage.replace("%data%", item1);
        myProjectImages.push(imgsrc);
    }
    item.images.forEach(appendImages);
    
    //append data to projects section
    $(".project-entry:last").append(myprojectTitle, myProjectDates, myProjectDescription);

    function addProjectImages(item) {
        $(".project-entry:last").append(item);
    }
    myProjectImages.forEach(addProjectImages);
    }

    if (projects.projects.length > 0) {
        $("#projects").append(HTMLprojectStart);
        projects.projects.forEach(addProject);
    }
};

projects.display();


//for education section
education.display = function() {

    //schools
    var mySchoolName, mySchoolDegree, mySchoolDates, mySchoolLocation, mySchoolMajor, mySchoolMajors;

    function addSchool(item) {
        mySchoolName = HTMLschoolName.replace("%data%", item.name);
        mySchoolDegree = HTMLschoolDegree.replace("%data%", item.degree);
        mySchoolDates = HTMLschoolDates.replace("%data%", item.dates);
        mySchoolLocation = HTMLschoolLocation.replace("%data%", item.location);
        mySchoolMajors = [];
        item.majors.forEach(addMajors)

        function addMajors(item){
            mySchoolMajor = HTMLschoolMajor.replace("%data%", item);
            mySchoolMajors.push(mySchoolMajor);
        }

        //append data to education-entry section


        $(".education-entry:last").append(mySchoolName, mySchoolDegree, mySchoolDates, mySchoolLocation);

        mySchoolMajors.forEach(appendMajors);
        function appendMajors(){
            $(".education-entry:last").append(mySchoolMajor);
        }
    }

    if (education.schools.length > 0) {
    $("#education").append(HTMLschoolStart);
    education.schools.forEach(addSchool);
    }
    //online education
    var myOnlineTitle, myOnlineSchool, myOnlineDates, myOnlineUrl;

     if (education.schools.length > 0) {
        $("#education").append(HTMLonlineClasses);
        $("#education").append(HTMLschoolStart);
        
        education.onlineCourses.forEach(addOnlineClass);
    }
    
    function addOnlineClass(item) {
        myOnlineTitle = HTMLschoolName.replace("%data%", item.title);
        myOnlineSchool = HTMLschoolDegree.replace("%data%", item.school);
        myOnlineDates = HTMLschoolDates.replace("%data%", item.dates);
        myOnlineUrl = HTMLschoolLocation.replace("%data%", item.url);

        //append data to education-entry section
        $(".education-entry:last").append(myOnlineTitle, myOnlineSchool, myOnlineDates, myOnlineUrl);
    }

};

education.display();
//for google maps
$("#mapDiv").append(googleMap);
