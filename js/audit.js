async function allProjectDone(token) {
  let query = `
{
  user{
    progresses(where:{_and:[{event:{path:{_eq:"/dakar/div-01"}}},{group: {path: {_neq: "/dakar/div-01"}}}]}, order_by: {createdAt:asc}){
      path
      object{
        name
      }
    }
  }
  
}`;

  return fetch('https://learn.zone01dakar.sn/api/graphql-engine/v1/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify({ query }),
  })
    .then(response => response.json())
    .then(data => {
      const names = [...new Set(data.data.user[0].progresses.map(progress => progress.object.name))];
      return names;
    })
    .catch(error => {
      console.error('Error:', error);
    });
}


async function servePassAudit(name, token, talentName) {
  var query = `
 {
 audit( where:{_and:[{grade:{_gte:1}},{auditorLogin:{_neq:"${talentName}"}},{group:{object:{name:{_eq:"${name}"}}}}]}) {
     grade
    }
 }
     `
  return fetch('https://learn.zone01dakar.sn/api/graphql-engine/v1/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify({ query }),
  })
    .then(response => response.json())
    .then(data => {
      return sumGrades(data.data.audit);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

async function serveFailAudit(name, token, talentName) {
  var query = `
 {
 audit( where:{_and:[{grade:{_lt:1}},{auditorLogin:{_neq:"${talentName}"}},{group:{object:{name:{_eq:"${name}"}}}}]}) {
     grade
    }
 }
     `
  return fetch('https://learn.zone01dakar.sn/api/graphql-engine/v1/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify({ query }),
  })
    .then(response => response.json())
    .then(data => {
      return sumGrades(data.data.audit);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}


function sumGrades(auditData) {
  let total = 0;
  auditData.forEach(item => {
    total += item.grade;
  });
  return total;
}



export async function Getdata(token, talentName) {
  let index = 0
  const result = await allProjectDone(token);
  for (let i = 0; i < result.length; i++) {
    let container = document.getElementsByClassName('ratio-container')[0]
    let pass = await servePassAudit(result[i], token, talentName);
    let fail = await serveFailAudit(result[i], token, talentName);
    let ratio = (pass / (pass + fail)) * 100
    if (!isNaN(ratio)) {
      serveDiv(container, result[i], Math.round(ratio), index)
      index++
    }
  }
}


function serveDiv(Containerdiv, name, percentage, i) {
  let div = document.createElement('div')
  div.classList.add('ratio-graph-section')
  let divhtml = `
<div class="ratio-graph-place ratio-graph-number">
    ${i}
</div>
<div class="ratio-graph-place ratio-graph-project">
    ${name}
</div>
<div class="ratio-graph-place ratio-graph">
    <div class="the-ratio-graph">
      <svg style="position: absolute;left:0; width:${percentage}%; height: 100%; background-color: rgb(252, 184, 89); border-radius: 8px;"></svg>
    </div>
</div>
<div class="ratio-graph-place ratio-graph-percentage">
    <div class="percent">
        ${percentage}%
    </div>
</div>`
  div.innerHTML = divhtml
  Containerdiv.append(div)
}
