
var data = [
    {
      "id": 1,
      "company": "Photosnap",
      "logo": "/images/photosnap.svg",
      "new": true,
      "featured": true,
      "position": "Senior Frontend Developer",
      "role": "Frontend",
      "level": "Senior",
      "postedAt": "1d ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["HTML", "CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 2,
      "company": "Manage",
      "logo": "/images/manage.svg",
      "new": true,
      "featured": true,
      "position": "Fullstack Developer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "1d ago",
      "contract": "Part Time",
      "location": "Remote",
      "languages": ["Python"],
      "tools": ["React"]
    },
    {
      "id": 3,
      "company": "Account",
      "logo": "/images/account.svg",
      "new": true,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2d ago",
      "contract": "Part Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    },
    {
      "id": 4,
      "company": "MyHome",
      "logo": "/images/myhome.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "5d ago",
      "contract": "Contract",
      "location": "USA Only",
      "languages": ["CSS", "JavaScript"],
      "tools": []
    },
    {
      "id": 5,
      "company": "Loop Studios",
      "logo": "/images/loop-studios.svg",
      "new": false,
      "featured": false,
      "position": "Software Engineer",
      "role": "FullStack",
      "level": "Midweight",
      "postedAt": "1w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["Ruby", "Sass"]
    },
    {
      "id": 6,
      "company": "FaceIt",
      "logo": "/images/faceit.svg",
      "new": false,
      "featured": false,
      "position": "Junior Backend Developer",
      "role": "Backend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "UK Only",
      "languages": ["Ruby"],
      "tools": ["RoR"]
    },
    {
      "id": 7,
      "company": "Shortly",
      "logo": "/images/shortly.svg",
      "new": false,
      "featured": false,
      "position": "Junior Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["HTML", "JavaScript"],
      "tools": ["Sass"]
    },
    {
      "id": 8,
      "company": "Insure",
      "logo": "/images/insure.svg",
      "new": false,
      "featured": false,
      "position": "Junior Frontend Developer",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "2w ago",
      "contract": "Full Time",
      "location": "USA Only",
      "languages": ["JavaScript"],
      "tools": ["Vue", "Sass"]
    },
    {
      "id": 9,
      "company": "Eyecam Co.",
      "logo": "/images/eyecam-co.svg",
      "new": false,
      "featured": false,
      "position": "Full Stack Engineer",
      "role": "Fullstack",
      "level": "Midweight",
      "postedAt": "3w ago",
      "contract": "Full Time",
      "location": "Worldwide",
      "languages": ["JavaScript", "Python"],
      "tools": ["Django"]
    },
    {
      "id": 10,
      "company": "The Air Filter Company",
      "logo": "/images/the-air-filter-company.svg",
      "new": false,
      "featured": false,
      "position": "Front-end Dev",
      "role": "Frontend",
      "level": "Junior",
      "postedAt": "1mo ago",
      "contract": "Part Time",
      "location": "Worldwide",
      "languages": ["JavaScript"],
      "tools": ["React", "Sass"]
    }
  ]



var mainContent = document.getElementsByClassName('main-content')[0];
var elSelect = document.getElementsByClassName('selected')[0];
var selectedJob = []; 


function showContent(data){
    x = data.map(function(dataItem){
        msg = dataItem.languages.map(function(i){
            return `<button class='btn'>${i}</button>`;
        })

        tools = dataItem.tools.map(function(i){
            return `<button class='btn'>${i}</button>`;
        })
        msg = msg.join('');
        tools = tools.join('');
         return`<div class="job-listing" data-id=${dataItem.id}>
                    <div>
                        <div class="img-container">
                            <img src=${dataItem.logo} alt="">
                        </div>
                        
                    </div>
                    <div>
                        <p class='job-initial'>${dataItem.company}<span class=${dataItem.new?'show':'hidden'}>New</span><span class=${dataItem.featured?'show':'hidden'}>Featured</span></p>
                        <p class='job-title'>${dataItem.position}</p>
                        <p class=job-availability><span>${dataItem.postedAt}</span><span>${dataItem.contract}</span><span>${dataItem.location}</span></p>
                    </div>
                    <div>
                        <button class='btn'>${dataItem.role}</button>
                        <button class='btn'>${dataItem.level}</button>`+msg+tools+
                    `</div>
                </div>`
    })
    return x;
}

function selected(selectedJob){
  var content = [];
  data.forEach(function(dataItem){
    dataset = dataItem.languages.concat(dataItem.tools.concat(dataItem.role));
    dataset.push(dataItem.level);
    count = 1;
    selectedJob.forEach(function(item){
      if(!dataset.includes(item)){
        count = 0;
      }
      
    })
  if(count == 1){
    content.push(dataItem);
  }
  
    
  })
  mainContent.innerHTML = showContent(content).join('');
  
}

function updateSelected(selectedJob){
  elSelect.firstElementChild.innerHTML ='';
  elSelect.lastElementChild.innerHTML ='';
  if(selectedJob.length == 0){
    elSelect.classList.add('hidden');
  }
  
  else{
    elSelect.classList.remove('hidden');
    elSelect.lastElementChild.innerHTML ='Clear';
    selectedJob.forEach(function(item){

    elSelect.firstElementChild.innerHTML +=`<span>${item}</span><i class='remove'>X</i>`;
  })

  }
  
}

window.addEventListener('load',function(){
  document.getElementsByClassName('selected')[0].classList.add('hidden');
  mainContent.innerHTML = showContent(data).join('');
})





mainContent.addEventListener('click',function(e){
  
  if(e.target.classList.contains('btn')){
    if(!selectedJob.includes(e.target.textContent)){
      selectedJob.push(e.target.textContent);
      updateSelected(selectedJob);
      selected(selectedJob);
    }
  }
  
  
})

elSelect.lastElementChild.addEventListener('click',function(){
  selectedJob = [];
  updateSelected(selectedJob);
  selected(selectedJob);

})

elSelect.addEventListener('click',function(e){
    if(e.target.classList.contains('remove')){
      selectedJob.pop(e.target.previousElementSibling.textContent);
      updateSelected(selectedJob);
      selected(selectedJob);
    }
  })  


    




