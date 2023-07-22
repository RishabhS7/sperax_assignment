import demeterpng from "../assets/demeter.png";
import downArrow from "../assets/downarrow.svg.svg";
function Header() {
  return (
    <div className="landing-page-divheadercontainer">
      <div className="landing-page-divwfull">
        <div className="landing-page-divflex">
          <img
            src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/e6687aef-0f2d-4a21-803c-9a47980d22cf/040f7be3-e014-43e8-a2ae-68313108bb3a?org_if_sml=11450"
            alt="Linkisperaxlogo0a13bd5dsvg1270"
            className="landing-page-linkisperaxlogo0a13bd5dsvg"
          />
          <div className="landing-page-list">
            <div className="landing-page-item">
              <span className="landing-page-text">
                <span>Home</span>
              </span>
            </div>
            <div className="landing-page-item-link">
              <span className="landing-page-text02">
                <span>Demeter</span>
              </span>
              <div className="landing-page-img">
                <img
                  src={demeterpng}
                  alt="Frame1282"
                  className="landing-page-frame"
                />
              </div>
            </div>
            <span className="landing-page-text04">
              <span>Gauge</span>
            </span>
            <span className="landing-page-text06">
              <span>Stake</span>
            </span>
            <span className="landing-page-text08">
              <span>Buyback</span>
            </span>
            <span className="landing-page-text10">
              <span>Swap</span>
            </span>
            <div className="landing-page-divflex01">
              <span className="landing-page-text12">
                <span>More</span>
              </span>
              <div className="landing-page-diviicon24">
                <img
                  src={downArrow}
                  alt="iarrowdown0fceb5cdsvg1291"
                  className="landing-page-iarrowdown0fceb5cdsvg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="landing-page-divoperations">
          <button className="landing-page-button">
            <span className="landing-page-text14">
              <span>Buy SPA &amp; USDs</span>
            </span>
          </button>
          <div className="landing-page-divbalancebox">
            <div className="landing-page-img01">
              <img
                src="/frame1298-ssto.svg"
                alt="Frame1298"
                className="landing-page-frame01"
              />
            </div>
            <span className="landing-page-text16">0</span>
            <div className="landing-page-img02">
              <img
                src="/frame1305-mnqoh.svg"
                alt="Frame1305"
                className="landing-page-frame02"
              />
            </div>
          </div>
          <div className="landing-page-divtextcenter">
            <span className="landing-page-text17">
              <span>Connect wallet</span>
            </span>
          </div>
          <div className="landing-page-diviicon241">
            <img
              src="/imorecc8d8ec7svg1310-s84mb.svg"
              alt="imorecc8d8ec7svg1310"
              className="landing-page-imorecc8d8ec7svg"
            />
          </div>
          <div className="landing-page-lightbutton">
            <div className="landing-page-outline-general-sun"></div>
          </div>
          <button className="landing-page-lightbutton1">
            <img
              src="/outlinegeneralsuni131-ya6k.svg"
              alt="OutlineGeneralSunI131"
              className="landing-page-outline-general-sun1"
            />
          </button>
        </div>
        <div className="landing-page-lightbutton2">
          <img
            src="/outlinegeneralsun1318-w2x.svg"
            alt="OutlineGeneralSun1318"
            className="landing-page-outline-general-sun2"
          />
        </div>
      </div>
    </div>
  );
}
export default Header;
