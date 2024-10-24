const userData=[
    {
        name:"Ashwin K",
        city:"Anaimalai",
        des:"Front-end developer",
        skill:["UI / UX","Html","Css","Javascript","React","Node","Figma","Wixstudio"],
        online:true,
        profile:"images/3543.jpg"
    },
    {
        name:"Akash K",
        city:"Kaniyur",
        des:"Back-end developer",
        skill:["Python", "C", "Django", "Rest API","Leadership"],
        online:true,
        profile:"images/3543.jpg"
    },
    {
        name:"Muaralidharan",
        city:"Pollachi",
        des:"Cyber Security",
        skill:["Hacking","Firewall","Security","Tester"],
        online:true,
        profile:"images/3543.jpg"
    },
    {
        name:"Muaralidharan",
        city:"Pollachi",
        des:"Cyber Security",
        skill:["Hacking","Firewall","Security","Tester"],
        online:true,
        profile:"images/3543.jpg"
    }
]

function User(props) {
    return (
        <div className="card-container">
            <span className={props.online?"pro online" : "pro offline"}>{props.online?"ONLINE":"OFFLINE"}</span> 
            <img src={props.profile} className="img" alt="user" />   
            <h3>{props.name}</h3>
            <h3>{props.city}</h3>
            <p>{props.des}</p>
            <div className="button">
                <button className="primary">Message</button>
                <button className="primary outline">Following</button>
            </div>
            <div className="skills">
                <h6 >Skills</h6>
                <ul>
                    {props.skill.map((skill, index)=>(
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}


export const UserCard = () => {
  return (

        // <User name="Ashwin K" city="Anaimalai" des="Front-end developer" skill={["UI / UX","Html","Css","Javascript","React","Node","Figma","Wixstudio"]} online={true} profile="images/3543.jpg" />

        <>
        {
            userData.map((user, index)=>(
                <User 
                key={index}
                name={user.name}
                city={user.city}
                des={user.des}
                online={user.online}
                profile={user.profile}
                skill={user.skill}
                
                />
            ))
        }
        </>
    
  )
}
