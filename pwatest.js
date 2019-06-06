function getData(){
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(res=>{
    return res.json();
  }).then(json=>{
    let html = '';
    for(i=0;i<json.length;i++){
      html+=json[i].name+'</br>';
    }
    let div = document.getElementById("users");
    div.innerHTML = html;
  })
}
