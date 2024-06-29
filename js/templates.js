export const loginForm = `
    <div class="div-form-container">
    <div class="noclose">
        <form class="form_container">
                <span class="close-button">
                    <img src=".././images/quitcross.svg" alt="">
                </span>
                <div class="title_container">
                    <p class="title">Login to your Account</p>
                    <span class="subtitle">Want to see your details please connect first.</span>
                    <div class="badPassword" style="color:red;display:none;">User does not exist or password incorrect</div>
                </div>
                <br>
                <div class="input_container">
                    <label class="input_label" for="email_field">Email</label>
                    <svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"
                        class="icon">
                        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="#141B34"
                            d="M7 8.5L9.94202 10.2394C11.6572 11.2535 12.3428 11.2535 14.058 10.2394L17 8.5"></path>
                        <path stroke-linejoin="round" stroke-width="1.5" stroke="#141B34"
                            d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z">
                        </path>
                    </svg>
                    <input placeholder="name@mail.com" title="Inpit title" name="input-name" type="text" class="input_field"
                        id="email_field">
                </div>
                <div class="input_container">
                    <label class="input_label" for="password_field">Password</label>
                    <svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"
                        class="password icon">
                        <path stroke-linecap="round" stroke-width="1.5" stroke="#141B34"
                            d="M18 11.0041C17.4166 9.91704 16.273 9.15775 14.9519 9.0993C13.477 9.03404 11.9788 9 10.329 9C8.67911 9 7.18091 9.03404 5.70604 9.0993C3.95328 9.17685 2.51295 10.4881 2.27882 12.1618C2.12602 13.2541 2 14.3734 2 15.5134C2 16.6534 2.12602 17.7727 2.27882 18.865C2.51295 20.5387 3.95328 21.8499 5.70604 21.9275C6.42013 21.9591 7.26041 21.9834 8 22">
                        </path>
                        <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="#141B34"
                            d="M6 9V6.5C6 4.01472 8.01472 2 10.5 2C12.9853 2 15 4.01472 15 6.5V9"></path>
                        <path fill="#141B34"
                            d="M21.2046 15.1045L20.6242 15.6956V15.6956L21.2046 15.1045ZM21.4196 16.4767C21.7461 16.7972 22.2706 16.7924 22.5911 16.466C22.9116 16.1395 22.9068 15.615 22.5804 15.2945L21.4196 16.4767ZM18.0228 15.1045L17.4424 14.5134V14.5134L18.0228 15.1045ZM18.2379 18.0387C18.5643 18.3593 19.0888 18.3545 19.4094 18.028C19.7299 17.7016 19.7251 17.1771 19.3987 16.8565L18.2379 18.0387ZM14.2603 20.7619C13.7039 21.3082 12.7957 21.3082 12.2394 20.7619L11.0786 21.9441C12.2794 23.1232 14.2202 23.1232 15.4211 21.9441L14.2603 20.7619ZM12.2394 20.7619C11.6914 20.2239 11.6914 19.358 12.2394 18.82L11.0786 17.6378C9.86927 18.8252 9.86927 20.7567 11.0786 21.9441L12.2394 20.7619ZM12.2394 18.82C12.7957 18.2737 13.7039 18.2737 14.2603 18.82L15.4211 17.6378C14.2202 16.4587 12.2794 16.4587 11.0786 17.6378L12.2394 18.82ZM14.2603 18.82C14.8082 19.358 14.8082 20.2239 14.2603 20.7619L15.4211 21.9441C16.6304 20.7567 16.6304 18.8252 15.4211 17.6378L14.2603 18.82ZM20.6242 15.6956L21.4196 16.4767L22.5804 15.2945L21.785 14.5134L20.6242 15.6956ZM15.4211 18.82L17.8078 16.4767L16.647 15.2944L14.2603 17.6377L15.4211 18.82ZM17.8078 16.4767L18.6032 15.6956L17.4424 14.5134L16.647 15.2945L17.8078 16.4767ZM16.647 16.4767L18.2379 18.0387L19.3987 16.8565L17.8078 15.2945L16.647 16.4767ZM21.785 14.5134C21.4266 14.1616 21.0998 13.8383 20.7993 13.6131C20.4791 13.3732 20.096 13.1716 19.6137 13.1716V14.8284C19.6145 14.8284 19.619 14.8273 19.6395 14.8357C19.6663 14.8466 19.7183 14.8735 19.806 14.9391C19.9969 15.0822 20.2326 15.3112 20.6242 15.6956L21.785 14.5134ZM18.6032 15.6956C18.9948 15.3112 19.2305 15.0822 19.4215 14.9391C19.5091 14.8735 19.5611 14.8466 19.5879 14.8357C19.6084 14.8273 19.6129 14.8284 19.6137 14.8284V13.1716C19.1314 13.1716 18.7483 13.3732 18.4281 13.6131C18.1276 13.8383 17.8008 14.1616 17.4424 14.5134L18.6032 15.6956Z">
                        </path>
                    </svg>
                    <input placeholder="Password" title="Inpit title" name="input-name" type="password" class="input_field"
                        id="password_field">
                </div>
                <button title="Sign In" type="submit" class="sign-in_btn">
                    <span>Sign In</span>
                </button>
                </form>
                </div>
    </div>`

export const landingPage = `
    <div class="main-container">
        <div class="header-container">
            <div class="headerinter">
                <div class="logo">
                    <img src=".././images/profile-logo.svg" alt="">
                </div>
                <a href="https://fr.wikipedia.org/wiki/GraphQL" target="_blank">Learn more about GraphQl</a>
            </div>
        </div>
        <div class="body-container">
            <div class="first-title">
                Your learning stats
            </div>
            <div class="second-title">Review your last data metrics</div>
            <div class="details-button">View your details</div>
        </div>
        <div class="header-stat">
            <div class="project-exp">
                <div class="grid grid-up">
                    <span style="font-size: 16px;color: rgba(255, 255, 255, 0.5);margin: 1% 0 0 1%;">Project
                        completed</span>
                    <span style="font-size: 28px;font-weight: 500;margin: 0 0 0 1%;">XX</span>
                    <span style="font-size: 16px; font-weight: 400;margin: 0 0 1% 1%;color:green;">+5</span>
                </div>
                <div class=" grid grid-up">
                    <span style="font-size: 16px;color: rgba(255, 255, 255, 0.5);margin: 1% 0 0 1%;">Total XP Acquired
                    </span>
                    <span style="font-size: 28px;font-weight: 500;margin: 0px 0px 0px 10px;">XXX kb</span>
                    <span style="font-size: 16px; font-weight: 400;margin: 0px 0px 10px 10px;color:green;">+76.5 kb</span>
                </div>
            </div>
            <div class="grid spent-hours">
                <span style="font-size: 16px;color: rgba(255, 255, 255, 0.5);margin: 10px 0px 0px 10px;">Time Spent
                    Learning</span>
                <span id="realHours" style="font-size: 28px;font-weight: 500;margin: 0px 0px 0px 10px;">XX hours</span>
                <div class="hours">
                    <span id="hours" style="font-size: 16px; font-weight: 400;margin: 0px 0px 10px 10px;color:green;">+1 hours</span>
                    <span id="increment" style="position: absolute; opacity: 0">+0 hours</span>
                </div>
            </div>
        </div>
        <div class="connect-button">
            <div class="button-circle">
                <img src=".././images/right.svg" alt="">
            </div>
            <div class="button-text">
                <div class="the-text">Click here to connect</div>
                <div class="underlined"></div>
            </div>
        </div>
    </div>`

const charge = `
    <div class="profile-container-charge">
        <div class="profile-header-container">
            <div class="profile-logo charge charge-logo">

            </div>
            <div class="profile-part">
                <div class="the-pic charge charge-pic">

                </div>
                <div class="the-name">
                    <div class="name-place charge charge-name">

                    </div>
                    <div class="zeroUnTalent charge charge-function">
                    </div>
                </div>
            </div>
        </div>
        <div class="charge-xp">
            <div class="spinner"></div>
        </div>
    </div>
`

export function serveUserPage(user, xp, projectlength) {
    let userpage = `
    <div class="profile-container">
        <div class="profile-header-container">
            <div class="profile-logo">
                <img src="images/profile-logo.svg" alt="">
            </div>
            <div class="profile-part down">
                <div class="the-pic">
                    <img src="images/profile-pic.svg" alt="">
                </div>
                <div class="the-name">
                    <div class="name-place">
                        Hi, ${user.firstName} ${user.lastName}
                    </div>
                    <div class="zeroUnTalent">
                        01Talent
                    </div>
                </div>
            </div>
        </div>
        <div class="profile-body">
            <div class="left-profileside">
                <div class="left-upper-part">
                    <div class="info-title">
                        Some basic info
                    </div>
                    <div class="card-container">
                        <div style="background-color: #E5ECF6;" class="card first-card">
                            <div class="infoLabel">
                                Total XP
                            </div>
                            <div class="infovalue">
                                ${xp}
                            </div>
                        </div>
                        <div style="background-color: #E3F5FF;" class="card second-card">
                            <div class="infoLabel">
                                Audit Ratio
                            </div>
                            <div class="infovalue">
                                ${Math.round(user.auditRatio * 10) / 10}
                            </div>
                        </div>
                        <div style="background-color: #E3F5FF;" class="card third-card">
                            <div class="infoLabel">
                                Level
                            </div>
                            <div  class="infovalue">
                                ${user.events[0].level}
                            </div>
                        </div>
                        <div style="background-color:#E5ECF6 ;" class="card fourth-card">
                            <div class="infoLabel">
                                Project Done
                            </div>
                            <div class="infovalue">
                                ${projectlength}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="left-bottom-part">
                    <div class="unregistered disconnect-button">
                        <div class="unregistered connect-button-quit">
                            <div class="unregistered button-circle-quit">
                                <img src="/images/quitcross.svg" alt="">
                            </div>
                            <div class="unregistered button-text-quit">
                                <div class="unregistered the-text-quit">Disconnect</div>
                                <div class="unregistered underlined-quit"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right-profileside">
                <div class="xp-earned-per-project">
                    <div class="xp-title">
                        <div style="margin-top: 12px;">Xp earned per project</div>
                    </div>
                    <div class="xp-graph">
                        <div class="xp-earned">

                        </div>
                        <div class="xp-svg-place">
                            <div class="xp-bar">

                            </div>
                        </div>
                    </div>
                </div>
                <div class="project-pass-and-fail-ratio">
                    <div class="ratiotitle" style="margin-top: 12px;">
                        Project Pass and Fail ratio
                    </div>
                    <div class="ratio-section">
                        <div class="ratio-place ratio-number">
                            #
                        </div>
                        <div class="ratio-place ratio-project">
                            Project
                        </div>
                        <div class="ratio-place ratio-passandfail">
                            Pass/Fail
                        </div>
                        <div class="ratio-place ratio-percentage">
                            Pass(%)
                        </div>
                    </div>
                    <div class="ratio-container">

                    </div>
                </div>
            </div>
        </div>
    </div>`
    const body = document.body
    body.innerHTML = charge

    setTimeout(()=>{
        body.innerHTML = userpage
    },1990)

    setTimeout(() => {
        let profile=document.getElementsByClassName('profile-container')[0]
        profile.style=`
            width: 100%;
            height: 100vh;
            height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1%;
        `
    }, 2000)

}