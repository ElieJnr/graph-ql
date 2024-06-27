import { convertSize } from "./xpgraph.js";

export function displayName(token) {
    document.addEventListener('mouseover', function (event) {
        if (event.target.classList.contains('xp-bar-container')) {
            let exist = document.getElementsByClassName('info-xp-graph-card')[0]
            if (!exist) {

                const query = `
                {
                    xp_view(where:{path: {_eq:"/dakar/div-01/${event.target.id}"}}){
                        amount
                    }
                }
                `;

                fetch('https://learn.zone01dakar.sn/api/graphql-engine/v1/graphql', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token
                    },
                    body: JSON.stringify({ query }),
                })
                    .then(response => response.json())
                    .then(data => {
                        let div = event.target
                        let newdiv = CreateDiv(div.id, convertSize(data.data.xp_view[0].amount))
                        div.append(newdiv)
                        event.target.addEventListener('mouseleave', function () {
                            newdiv.remove()
                        })
                        setTimeout(()=>{
                            if (newdiv) {
                                newdiv.remove()
                            }
                        },1000)
                    })
                    .catch(error => {
                        console.error(error);
                    });

            } else {
                event.target.addEventListener('mouseleave', function () {
                    exist.remove()
                })
            }

        }
    });
}

function CreateDiv(text, amount) {
    let disp = `
    <div style="background-color: #E5ECF6;width:120px;height:70px;border:solid #E5ECF6;border-radius:12px;color:black;font-family:'Inter',sans-serif;display:flex;flex-direction:column;justify-content:space-around;padding:8px;" class="info-xp-graph-card">
        <div class="infoLabel">
            ${text}
        </div>
        <div class="infovalue">
            ${amount}
        </div>
    </div>
    `
    let newdiv = document.createElement('div')
    newdiv.style.zIndex = '9999'
    newdiv.style.position = 'absolute'
    newdiv.style.top = '0'
    newdiv.style.right = '0'
    newdiv.innerHTML = disp
    return newdiv
}