import "./Elobby.css";
import elobbyScreenshot from "../../../../../img/elobbyScreenshot.png";
import MERN from "../../../../../img/MERN-logo.png";

export default function Elobby() {
  return (
    <div className="container">
      <div className="row pt-5 mx-auto">
        <div className="col-md-6 col-s-12 mx-auto">
          <h1 className="titleElobby">Elobby</h1>
          <p className="descriptionElobby">
            Bootcamp final group project; Web leisure agenda that allows you to
            create a list / critique / tierlist of the leisure elements you
            select and save them in your agenda.
          </p>
          <div className="image-mern stackElobby">
            <h4 className="">Stack used</h4>
            <img className="image-mern" src={MERN} />
          </div>
          <div>
            <h5 className="urlElobby">
              You can take a look at this url:
              <a className="urlElobby" href="https://elobby.herokuapp.com/">
                <b> click here to see web page,</b>
              </a>
            </h5>
            <h5 className="urlElobby">
              or the code in my github repository:
              <a
                className="urlElobby"
                href="https://github.com/lynx-agenda/Agenda-Elobby"
              >
                <b> click here to see frontend git repositories </b>
              </a>
              <a
                className="urlElobby"
                href="https://github.com/lynx-agenda/Agenda-Elobby-backend"
              >
                <b>and click here to see backend git repositories </b>
              </a>
            </h5>
          </div>
        </div>
        <div className="col-md-12 col-s-12 mx-auto elobbyScreenshotStyle">
          <img className="elobbyScreenshotStyle" src={elobbyScreenshot} />
        </div>
      </div>
    </div>
  );
}
