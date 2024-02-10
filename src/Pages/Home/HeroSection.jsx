export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title"></p>
          <h1 className="hero--section--title">
            <h1 className="skills-section--heading">Hey, I'm Ryan!</h1>
          </h1>
          <p className="hero--section-info">
            A full-stack web developer stuck in a creative kid's body.
            <br /> Also, takes nice photos in front of plants.
          </p>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
