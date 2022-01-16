import React, { Component } from "react";
import Slider from "react-slick";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background:"green" }}
      onClick={onClick}
    />
  );
}

export default class CenterMode extends Component {
    render() {
        const settings = {
            dots: false,
            className: "center",
            centerMode: true,
            infinite: true,
			centerPadding: "30px",
            speed: 500,
            // autoplay: true,
            autoplaySpeed : 3000,
            slidesToShow: 3, // 한 번에 보여줄 수
            // slidesToScroll: 1, // next 누르면 넘겨질 수
            // nextArrow: <SampleNextArrow />,
            // prevArrow: <SamplePrevArrow />
        };
        return (
        <div>
            <h2>Center Mode</h2>
            <Slider {...settings}>
                <div className="banner-slide">
                    <a href="javascript:void(0)"><img src="./img/slide1.jpg" alt="해, 커리어" /></a>
                    <div className="textBox">
                        <h2>해, 커리어 EP 02 공개</h2>
                        <h3>최종 발표를 위한 마지막 관문 2라운드의 승자는?</h3>
                        <hr className="borderB" />
                        <a href="javascript:void(0)">바로가기
                            <span className="Button_Button__endIcon__MpDfc"><span className="SvgIcon_SvgIcon__root__8vwon"><svg className="SvgIcon_SvgIcon__root__svg__DKYBi" fill="#36f" viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z" /></svg></span></span>
                        </a>
                    </div>
                </div>
                <div className="banner-slide">
                    <a href="javascript:void(0)"><img src="./img/slide2.jpg" alt="개발자 성장 비결 공개!" /></a>
                    <div className="textBox">
                        <h2>개발자 성장 비결 공개!</h2>
                        <h3>글 쓰는 개발자들의 이야기</h3>
                        <hr className="borderB" />
                        <a href="javascript:void(0)">바로가기
                            <span className="Button_Button__endIcon__MpDfc"><span className="SvgIcon_SvgIcon__root__8vwon"><svg className="SvgIcon_SvgIcon__root__svg__DKYBi" fill="#36f" viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z" /></svg></span></span>
                        </a>
                    </div>
                </div>
                <div className="banner-slide">
                    <a href="javascript:void(0)"><img src="./img/slide3.jpg" alt="리크루터 커리어 가이드" /></a>
                    <div className="textBox">
                        <h2>아는만큼 보인다!</h2>
                        <h3>노동법 '채용' 시리즈</h3>
                        <hr className="borderB" />
                        <a href="javascript:void(0)">바로가기
                            <span className="Button_Button__endIcon__MpDfc"><span className="SvgIcon_SvgIcon__root__8vwon"><svg className="SvgIcon_SvgIcon__root__svg__DKYBi" fill="#36f" viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z" /></svg></span></span>
                        </a>
                    </div>
                </div>
                <div className="banner-slide">
                    <a href="javascript:void(0)"><img src="./img/slide4.jpg" alt="리크루터 커리어 가이드" /></a>
                    <div className="textBox">
                        <h2>리크루터 커리어 가이드</h2>
                        <h3>싼마이 리크루터가 되지 않기 위해</h3>
                        <hr className="borderB" />
                        <a href="javascript:void(0)">바로가기
                            <span className="Button_Button__endIcon__MpDfc"><span className="SvgIcon_SvgIcon__root__8vwon"><svg className="SvgIcon_SvgIcon__root__svg__DKYBi" fill="#36f" viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z" /></svg></span></span>
                        </a>
                    </div>
                </div>
                <div className="banner-slide">
                    <a href="javascript:void(0)"><img src="./img/slide5.jpg" alt="요즘 MD가 일하는 방법" /></a>
                    <div className="textBox">
                        <h2>요즘 MD가 일하는 방법</h2>
                        <h3>실무자가 공개하는 MD 커리어의 모든 것!</h3>
                        <hr className="borderB" />
                        <a href="javascript:void(0)">바로가기
                            <span className="Button_Button__endIcon__MpDfc"><span className="SvgIcon_SvgIcon__root__8vwon"><svg className="SvgIcon_SvgIcon__root__svg__DKYBi" fill="#36f" viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z" /></svg></span></span>
                        </a>
                    </div>
                </div>
                <div className="banner-slide">
                    <a href="javascript:void(0)"><img src="./img/slide6.jpg" alt="스타벅스 굿즈 좋아하세요?" /></a>
                    <div className="textBox">
                        <h2>스타벅스 굿즈 좋아하세요?</h2>
                        <h3>사랑받는 디자인의 비밀</h3>
                        <hr className="borderB" />
                        <a href="javascript:void(0)">바로가기
                            <span className="Button_Button__endIcon__MpDfc"><span className="SvgIcon_SvgIcon__root__8vwon"><svg className="SvgIcon_SvgIcon__root__svg__DKYBi" fill="#36f" viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z" /></svg></span></span>
                        </a>
                    </div>
                </div>
                <div className="banner-slide">
                    <a href="javascript:void(0)"><img src="./img/slide7.jpg" alt="Git? GitHub?" /></a>
                    <div className="textBox">
                        <h2>Git? GitHub?</h2>
                        <h3>협업 필수 도구 마스터하기</h3>
                        <hr className="borderB" />
                        <a href="javascript:void(0)">바로가기
                            <span className="Button_Button__endIcon__MpDfc"><span className="SvgIcon_SvgIcon__root__8vwon"><svg className="SvgIcon_SvgIcon__root__svg__DKYBi" fill="#36f" viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z" /></svg></span></span>
                        </a>
                    </div>
                </div>
                <div className="banner-slide">
                    <a href="javascript:void(0)"><img src="./img/slide8.jpg" alt="나도 개발자 되고 싶다" /></a>
                    <div className="textBox">
                        <h2>나도 개발자 되고 싶다</h2>
                        <h3>프론트엔드 무료 교육과정 참여하기</h3>
                        <hr className="borderB" />
                        <a href="javascript:void(0)">바로가기
                            <span className="Button_Button__endIcon__MpDfc"><span className="SvgIcon_SvgIcon__root__8vwon"><svg className="SvgIcon_SvgIcon__root__svg__DKYBi" fill="#36f" viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z" /></svg></span></span>
                        </a>
                    </div>
                </div>
                <div className="banner-slide">
                    <a href="javascript:void(0)"><img src="./img/slide9.jpg" alt="요즘 MD가 일하는 방법" /></a>
                    <div className="textBox">
                        <h2>요즘 MD가 일하는 방법</h2>
                        <h3>실무자가 공개하는 MD 커리어의 모든 것!</h3>
                        <hr className="borderB" />
                        <a href="javascript:void(0)">바로가기
                            <span className="Button_Button__endIcon__MpDfc"><span className="SvgIcon_SvgIcon__root__8vwon"><svg className="SvgIcon_SvgIcon__root__svg__DKYBi" fill="#36f" viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z" /></svg></span></span>
                        </a>
                    </div>
                </div>
                <div className="banner-slide">
                    <a href="javascript:void(0)"><img src="./img/slide10.jpg" alt="믿을 것은 데이터 뿐!" /></a>
                    <div className="textBox">
                        <h2>믿을 것은 데이터 뿐!</h2>
                        <h3>요즘 데이터팀은 어떻게 일할까?</h3>
                        <hr className="borderB" />
                        <a href="javascript:void(0)">바로가기
                            <span className="Button_Button__endIcon__MpDfc"><span className="SvgIcon_SvgIcon__root__8vwon"><svg className="SvgIcon_SvgIcon__root__svg__DKYBi" fill="#36f" viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z" /></svg></span></span>
                        </a>
                    </div>
                </div>
                <div className="banner-slide">
                    <a href="javascript:void(0)"><img src="./img/slide11.jpg" alt="마케터를 위한 데이터" /></a>
                    <div className="textBox">
                        <h2>마케터를 위한 데이터</h2>
                        <h3>잘 나가는 마케터는 무엇이 다를까!?</h3>
                        <hr className="borderB" />
                        <a href="javascript:void(0)">바로가기
                            <span className="Button_Button__endIcon__MpDfc"><span className="SvgIcon_SvgIcon__root__8vwon"><svg className="SvgIcon_SvgIcon__root__svg__DKYBi" fill="#36f" viewBox="0 0 18 18"><path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z" /></svg></span></span>
                        </a>
                    </div>
                </div>
            </Slider>
        </div>
        );
    }
}