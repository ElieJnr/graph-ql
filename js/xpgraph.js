export function fetchXp(token) {
    const query = `
        {
            xp_view{
                path
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
            const xpData = data.data.xp_view;
            let maxAmount = 0;
            let maxPath = '';

            xpData.forEach(xp => {
                if (xp.amount > maxAmount) {
                    maxAmount = xp.amount;
                    maxPath = xp.path;
                }
            });

            let xpEarned = document.getElementsByClassName('xp-earned')[0];
            xpEarned.innerHTML = `
                <div>${convertSize(maxAmount)}</div>
                <div>${convertSize(maxAmount / 2)}</div>
                <div>${convertSize(maxAmount / 3)}</div> 
                <div>${convertSize(maxAmount / 4)}</div>
                <div>${0}</div>
            `
            let xpBar = document.getElementsByClassName('xp-bar')[0]
            xpData.forEach(xp => {
                let split = xp.path.split('/');
                if (split.length === 4 && xp.path.includes('div-01')) {
                    let projectName = xp.path.split('/').pop();
                    let div = document.createElement('div')
                    div.classList.add('xp-bar-container')
                    div.classList.add('testun')
                    div.id=projectName
                    div.innerHTML = xpBarHtml(projectName)
                    let xpBarSvg = document.createElement('div')
                    xpBarSvg.classList.add('xp-bar-svg')
                    xpBarSvg.classList.add('testun')
                    xpBarSvg.id=projectName


                    div.prepend(xpBarSvg)
                    createSvg(xpBarSvg, ((xp.amount / maxAmount) * 100), projectName)
                    xpBar.append(div)
                }
            });
        })
        .catch(error => {
            console.error(error);
        });
}


function xpBarHtml(name) {
    return `
    <div id="${name}" class="testun xp-project-name">
        ${name}
    </div>
    `
}


export function convertSize(size) {
    const units = ['B', 'Kb', 'Mb', 'Gb', 'Tb'];
    let unitIndex = 0;

    while (size >= 1000 && unitIndex < units.length - 1) {
        size /= 1000;
        unitIndex++;
    }

    return `${size.toFixed(0)} ${units[unitIndex]}`;
}

function createSvg(div, percentage,name) {
    let svgNS = "http://www.w3.org/2000/svg";
    let svg = document.createElementNS(svgNS, "svg");
    svg.classList.add('svg-info-xp')
    svg.classList.add('testun')
    svg.style.width = "100%";
    svg.style.height = `${percentage}%`;
    svg.style.borderRadius = "12px";
    svg.style.background = "linear-gradient(to bottom, var(--rosedeg), rgba(241, 130, 191, 1))";
    svg.style.position = 'absolute'
    svg.style.bottom = '0'
    svg.id=name

    div.appendChild(svg);
}

function checkPath(path) {
    const count = (path.match(/\//g) || []).length;
    return count === 6;
}

