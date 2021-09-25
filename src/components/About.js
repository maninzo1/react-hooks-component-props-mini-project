

function About({about, image='https://via.placeholder.com/215'}) {
    return (
    <aside>
    <img src={image} alt= "blog logo"/>
    <p>About = {about}</p>
    </aside>
    );
}

export default About;
