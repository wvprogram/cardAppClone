let data = {
    fullName: "Jennifer Smith",
    position: "UI/UX Designer",
    socials: [
        {
            id: "fb",
            service: "Facebook",
            url: "https://www.facebook.com/",
            icon: "fab fa-facebook-f"
        },
        {
            id: "ig",
            service: "Instagram",
            url: "https://www.instagram.com/",
            icon: "fab fa-instagram"
        },
        {
            id: "db",
            service: "Dribbble",
            url: "https://dribbble.com/",
            icon: "fab fa-dribbble"
        },
        {
            id: "gl",
            service: "Google",
            url: "https://www.google.com/",
            icon: "fab fa-dribbble"
        }
    ]
}
let cardApp = (data) => {
    let body = document.getElementsByTagName("body")[0];
    let root = document.createElement("div");
    let style = document.createElement("style");
    let card = document.createElement("section");

    let html = `
        <div class="card__wrapper">
            <img src="https://randomuser.me/api/portraits/women/33.jpg" class="card__user-img">
            <div class="card__info">
                <span class="card__name">${data.fullName}</span>
                <span class="card__title">${data.position}</span>
            </div>
            <div class="card__socials">
                
            </div>
        </div>
    `;

    let cssStyles = `
        .card {
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            backdrop-filter: blur(50px);
        }

        .card__wrapper {
            padding: 20px 20px 3rem 20px;
            max-width: 300px;
            width: 100%;
            background: white;
            box-shadow: 0px 0px 62px 0px rgba(0,0,0,0.22);
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .card__user-img {
            border: 2px solid #2c5eff;
            height: 70px;
            width: 70px;
            margin: 2rem 0 1.5rem;
            border-radius: 50%;
            object-fit: cover;
            object-position: center;
        }

        .card__info {
            margin-bottom: 2rem;
        }

        .card__name {
            text-align: center;
            display: block;
            font-weight: 600;
            font-size: 1.2rem;
            margin-bottom: 0.5rem;
        }

        .card__title {
            display: block;
            font-size: 0.7rem;
            margin-bottom: 2rem;
            text-align: center;
        }

        .card__icon {
            width: 200px;
            padding: 10px;
            border-radius: 3px;
            border: 1px solid #000;
            margin-bottom: 0.4rem;
            overflow: hidden;
            display: flex;
            align-items: center;
            transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
            cursor: pointer;
        }

        .card__icon-box {
            width: 25px;
            display: inline-block;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .card__icon-title {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
        }

        .card__icon--fb {
            color: #2c5eff;
            border: 1px solid #2c5eff;
        }

        .card__icon--fb:hover {
            background: #2c5eff;
            color: white;
        }

        .card__icon--ig {
            color: #773fe7;
            border: 1px solid #773fe7;
        }

        .card__icon--ig:hover {
            background: #773fe7;
            color: white;
        }

        .card__icon--db {
            color: #f962b1;
            border: 1px solid #f962b1;
        }

        .card__icon--db:hover {
            background: #f962b1;
            color: white;
        }

        .card__icon--gl {
            color: #0F9D58;
            border: 1px solid #0F9D58;
        }

        .card__icon--gl:hover {
            background: #0F9D58;
            color: white;
        }
    `;

    body.prepend(root);

    root.classList.add("root");
    root.prepend(card);
    root.style.cssText = `
    background: url('https://wallpaperaccess.com/full/636909.jpg');
    background-size: cover;
    background-position: center;
    `;
    root.prepend(style);

    card.classList.add("card");

    style.innerHTML = cssStyles;
    card.innerHTML = html;

    let cardSocials = card.getElementsByClassName("card__socials")[0];

    data.socials.forEach((item, index) => {
        let tempNode = document.createElement("a");
        tempNode.classList.add("card__icon", `card__icon--${item.id}`);
        tempNode.href = `${item.url}`;
        tempNode.target = "_blank";
        tempNode.innerHTML = `
        <span class="card__icon-box">
            <i class="${item.icon}"></i>
        </span>
        <span class="card__icon-title">
            ${item.service}
        </span>
        `;
        cardSocials.append(tempNode);
    })
}

cardApp(data);