/*
This is empty on purpose! Your code to build the resume will go here.
 */

var name ="Jina Lee"
$("#header").append(HTMLheaderName.replace("%data%", name))

var role = "Data Scientist"
$("#header").append(HTMLheaderRole.replace("%data%", role))

$("#main").append(internationalizeButton)

var work={};
work.jobs = [{
    "employer":"LG Electronics"
    ,"title": "Customer Service Data Analyst"
    ,"location": "Phyeongtaek, Republic of Korea"
    , "dates": "Jul 2010 - Jul 2014"
    , "description": "Analyzed and monitored structured or unstructured customer service records to detect quality issues and to come up with insights for reducing service costs of about 100 audio and video products that are shipped around the world; used Microsoft Excel (vlookup, pivot tables etc.). Reported monthly product quality status dashboard and detailed data to staff across the organization. Enlisted in the High Potential Pool from 2014 which includes only top 10% major talents."
    },
    {
        "employer":"Carnegie Mellon University"
        ,"title": "Research Assistante"
        ,"location": "Pittsburgh, PA"
        , "dates": "Jun - Aug 2015"
        , "description": "Designed user experience evaluation of a persuasive mobile application prototype for congestive heart failure patients of Veterans Association Hospital with diverse stakeholders such as physicians, nurses, social workers, case managers. Analyzed data from the evaluation and drew insights for the next version of the application."
    }
    ]




var job_func = function(job){
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
    $(".work-entry:last").append(formattedEmployer);

    var formattedTitle =  HTMLworkTitle.replace("%data%", job.title);
    $(".work-entry:last").append(formattedTitle);

    var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
    $(".work-entry:last").append(formattedWorkDates);

    var formattedLocation =  HTMLworkLocation.replace("%data%", job.location);
    $(".work-entry:last").append(formattedLocation);

    var formattedDescription =  HTMLworkDescription.replace("%data%", job.description);
    $(".work-entry:last").append(formattedDescription);
}

work.display = function(){
 work.jobs.forEach(job_func);
 }

work.display();

var projects = {"projects":[]}

projects.projects.push({
    "title": "Intro to Machine Learning: Identify Fraud from Enron Email"
    , "dates":"Mar 2016"
    , "description":"Built and optimized supervised machine learning model that identifies Enron employees who were more likely to have committed fraud using public Enron financial and email data."
    , "link":"https://github.com/jinalee2531/MachineLearning_Identify-POI-of-Enron-Fraud"
    , "skills": ["Python", "scikit-learn", "machine learning"]
    , "images":[]
})

projects.projects.push({
    "title": "Applied Data Science: Sentiment Analysis on Movie Reviews and Revenue Prediction"
    , "dates":"May 2015"
    , "description":"Built a supervised model classifying sentiment on the movie with IMDB movie reviews. Performed natural language processing, built classification models and scraped dataset from IMDB web."
    , "link":"https://github.com/jinalee2531/MachineLearning_Identify-POI-of-Enron-Fraud"
    , "skills": ["python", "scikit-learn", "pandas", "NLTK"]
    , "images":[]
})


var prj_func = function(project) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates =HTMLprojectDates.replace("%data%", project.dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedDescription);

        if (project.images.length >0){
            project.images.forEach(function(img){
                var formattedImage = HTMLprojectImage.replace("%data%", img);
                $(".project-entry:last").append(formattedImage);
                })
            }
        }

projects.display = function(){
    projects.projects.forEach(prj_func)
}

projects.display()
