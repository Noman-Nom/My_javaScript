const insert = document.querySelector('.insert')

window.addEventListener('keydown',(e)=>{
    insert.innerHTML= `<table class = "table" 
    bgcolor="pink"
      border="5px"
      align="center"
      cellpadding="10px"
      cellspacing="10"
      margin="center center">
    <tr bgcolor="skyblue">
      <th>Key</th>
      <th>KeyCode</th>
      <th>Code</th>
    </tr>
    <tr bgcolor="yellow">
      <td>${e.key === ' '?"space":e.key}</td>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
    
  </table>`
})