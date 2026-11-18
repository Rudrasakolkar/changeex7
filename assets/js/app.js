const cl=console.log;

const Animals=document.getElementById('Animals');

function onFilter(eve){
    let val=eve.target.value;
    let allDivs=[...document.querySelectorAll('.all')]
    allDivs.forEach(d=>{
        d.classList.add('d-none');
    })

    let selectedDiv=[...document.getElementsByClassName(val)]
      selectedDiv.forEach(d=>{
        d.classList.remove('d-none');
      })
}


Animals.addEventListener("change",onFilter)